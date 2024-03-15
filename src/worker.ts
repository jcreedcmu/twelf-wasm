import { mkTwelfService } from "./twelf-service";
import { TwelfStatus, TwelfExecRequest, TwelfExecResponse, WorkerMessage, WithId } from "./twelf-worker-types";

async function go() {
  function post(r: WorkerMessage): void {
    self.postMessage(r);
  }

  const service = await mkTwelfService('./twelf.wasm', (fd, str) => {
    post({ t: 'output', fd, str });
  });

  self.onmessage = async event => {
    const { body, id } = event.data as WithId<TwelfExecRequest>;
    await service.unsafe(body.options.unsafe);
    post({ t: 'execResponse', id, response: await service.exec(body.input) });
  };

  post({ t: 'ready' });
}

go();
