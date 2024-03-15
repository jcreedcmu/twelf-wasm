import { mkTwelfService } from "./twelf-service";
import { TwelfStatus, TwelfExecRequest, TwelfExecResponse, TwelfResponse, WithId } from "./twelf-worker-types";

async function go() {
  const service = await mkTwelfService('./twelf.wasm');

  function post(r: TwelfResponse): void {
    self.postMessage(r);
  }

  self.onmessage = async event => {
    const { body, id } = event.data as WithId<TwelfExecRequest>;
    post({ t: 'execResponse', id, response: await service.exec(body.input) });
  };

  post({ t: 'ready', id: -1, response: {} });
}

go();
