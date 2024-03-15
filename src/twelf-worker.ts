import { TwelfExecRequest, TwelfExecResponse, TwelfResponse, WithId } from "./twelf-worker-types";

export async function mkTwelfWorker(): Promise<TwelfWorker> {
  const worker = new TwelfWorker();
  await worker.isReady();
  return worker;
}

export class TwelfWorker {
  requestIdCounter: number = 0;
  responseMap: Record<number, (result: TwelfResponse) => void>;
  worker: Worker;
  _readyPromise: Promise<void>;

  constructor() {
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

    return new Promise<TwelfExecResponse>((res, rej) => {
      console.log('setting timer');
      const t = setTimeout(() => {
        console.log('timer reached');
        this.worker.terminate();
        res({
          status: { t: 'timeout' },
          // XXX we're missing output and errors
          output: [],
          errors: [],
        });
      }, 2000);

      const makeRequest = async () => {
        const p = await prom;
        if (p.t != 'execResponse') {
          throw new Error(`expected execReponse but got ${p.t}`);
        }
        console.log('clearing timer');
        clearTimeout(t);
        res(p.response);
      };

      makeRequest();
    });
  }

  isReady(): Promise<void> {
    return this._readyPromise;
  }
}
