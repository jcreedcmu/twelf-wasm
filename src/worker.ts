import { Status, TwelfWorkerRequest, TwelfWorkerResponse, WithId } from "./twelf-worker-types";

self.onmessage = (event) => {
  const data: WithId<TwelfWorkerRequest> = event.data;
  const response: WithId<TwelfWorkerResponse> =
    { id: data.id, body: processRequest(data.body) };
  self.postMessage(response);
};

function processRequest(req: TwelfWorkerRequest): TwelfWorkerResponse {
  return { status: Status.OK, output: [req.input], errors: [] };
}
