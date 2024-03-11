export enum Status {
  OK = 0,
  ABORT = 1,
}

export type WithId<T> = { id: number, body: T };

export type TwelfWorkerRequest = {
  input: string,
}

export type TwelfWorkerResponse = {
  status: Status,
  output: string[],
}
