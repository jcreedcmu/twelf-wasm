import { mkTwelfService } from "./twelf-service";
import { Status, TwelfWorkerRequest, TwelfWorkerResponse, WithId } from "./twelf-worker-types";

async function go() {
  const service = await mkTwelfService('./twelf.wasm');

  // XXX What happens if we get a message before twelf wasm is loaded?
  // Should send a "we're all initialized" message back to host.

  self.onmessage = async event => {
    const { body, id } = event.data as WithId<TwelfWorkerRequest>;
    const response: WithId<TwelfWorkerResponse> =
      { id, body: await service.exec(body.input) };
    self.postMessage(response);
  };

}

go();
