import { TwelfExecRequest, TwelfExecResponse, WorkerMessage, WithId, TwelfSideEffectData, TwelfError, TwelfOptions } from "./twelf-worker-types";

export async function mkTwelfWorker(): Promise<TwelfWorker> {
  const worker = new TwelfWorker();
  await worker.isReady();
  return worker;
}

export class TwelfWorker {
  requestIdCounter: number = 0;
  responseMap: Record<number, (result: WorkerMessage) => void>;
  worker: Worker;
  _readyPromise: Promise<void>;
  output: string[] = [];

  constructor() {
    this.worker = new Worker('./assets/worker.js');
    this.worker.onmessage = (msg) => {
      const data: WorkerMessage = msg.data;
      switch (data.t) {
        case 'ready':
          this.responseMap[-1](data); break;
        case 'execResponse':
          this.responseMap[data.id](data); break;
        case 'output':
          this.output.push(data.str);
          break;
      }
    }
    this.responseMap = {};
    const readyPromise = new Promise<void>((res, rej) => {
      this.responseMap[-1] = msg => {
        res();
      }
    });
    this._readyPromise = readyPromise;
  }

  mkRequest(input: string, options: TwelfOptions): WithId<TwelfExecRequest> {
    return {
      id: this.requestIdCounter++,
      body: { input, options },
    };
  }

  getSideEffectData(): TwelfSideEffectData {
    const errorRegex = new RegExp('string:(\\d+?).(\\d+?)-(\\d+?).(\\d+?) Error: \n(.*)', 'g');
    let m;
    const errors: TwelfError[] = [];
    while (m = errorRegex.exec(this.output.join(''))) {
      errors.push({
        range: {
          line1: parseInt(m[1]),
          col1: parseInt(m[2]),
          line2: parseInt(m[3]),
          col2: parseInt(m[4]),
        },
        text: m[5],
      });
    }
    return {
      output: [...this.output],
      errors,
    }
  }

  async exec(input: string, options: TwelfOptions): Promise<TwelfExecResponse> {
    this.output.splice(0); // clear output

    const req = this.mkRequest(input, options);
    const prom = new Promise<WorkerMessage>((res, rej) => {
      this.responseMap[req.id] = res;
    });
    this.worker.postMessage(req);

    return new Promise<TwelfExecResponse>((res, rej) => {
      const t = setTimeout(() => {
        this.worker.terminate();
        res({
          status: { t: 'timeout' },
          ...this.getSideEffectData(),
        });
      }, 2000);

      const makeRequest = async () => {
        const p = await prom;
        if (p.t != 'execResponse') {
          throw new Error(`expected execReponse but got ${p.t}`);
        }
        clearTimeout(t);
        if (p.response.t != 'twelfStatus') {
          this.worker.terminate();
        }
        res({
          status: p.response,
          ...this.getSideEffectData(),
        });
      };

      makeRequest();
    });
  }

  isReady(): Promise<void> {
    return this._readyPromise;
  }
}
