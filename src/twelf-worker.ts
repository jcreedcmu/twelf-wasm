import { TwelfWorkerRequest, TwelfWorkerResponse, WithId } from "./twelf-worker-types";

export function mkTwelfWorker(): TwelfWorker {
  return new TwelfWorker();
}

class TwelfWorker {
  requestIdCounter: number = 0;
  responseMap: Record<number, (result: TwelfWorkerResponse) => void> = {};
  worker: Worker;

  constructor() {
    this.worker = new Worker('./assets/worker.js');
    this.worker.onmessage = (msg) => {
      const data: WithId<TwelfWorkerResponse> = msg.data;
      this.responseMap[data.id](data.body);
    }
  }

  mkRequest(input: string): WithId<TwelfWorkerRequest> {
    return {
      id: this.requestIdCounter++,
      body: { input },
    };
  }

  exec(input: string): Promise<TwelfWorkerResponse> {
    const req = this.mkRequest(input);
    const prom = new Promise<TwelfWorkerResponse>((res, rej) => {
      this.responseMap[req.id] = res;
    });
    this.worker.postMessage(req);
    return prom;
  }
}
