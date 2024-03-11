import { TwelfExecRequest, TwelfExecResponse, TwelfResponse, WithId } from "./twelf-worker-types";

export async function mkTwelfWorker(timeoutCallback: () => void): Promise<TwelfWorker> {
  const worker = new TwelfWorker(timeoutCallback);
  await worker.isReady();
  return worker;
}

export class TwelfWorker {
  requestIdCounter: number = 0;
  responseMap: Record<number, (result: TwelfResponse) => void>;
  worker: Worker;
  _readyPromise: Promise<void>;

  constructor(public timeoutCallback: () => void) {
    this.worker = new Worker('./assets/worker.js');
    this.worker.onmessage = (msg) => {
      const data: TwelfResponse = msg.data;
      this.responseMap[data.id](data);
    }
    this.responseMap = {};
    const readyPromise = new Promise<void>((res, rej) => {
      this.responseMap[-1] = msg => {
        res();
      }
    });
    this._readyPromise = readyPromise;
  }

  mkRequest(input: string): WithId<TwelfExecRequest> {
    return {
      id: this.requestIdCounter++,
      body: { input },
    };
  }

  async exec(input: string): Promise<TwelfExecResponse> {
    const req = this.mkRequest(input);
    const prom = new Promise<TwelfResponse>((res, rej) => {
      this.responseMap[req.id] = res;
    });
    this.worker.postMessage(req);

    const t = setTimeout(() => {
      this.worker.terminate();
      (this.timeoutCallback)();
    }, 2000);
    const p = await prom;
    clearTimeout(t);
    if (p.t != 'execResponse') {
      throw new Error(`expected execReponse but got ${p.t}`);
    }
    return p.response;
  }

  isReady(): Promise<void> {
    return this._readyPromise;
  }
}
