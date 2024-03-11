export enum Status {
  OK = 0,
  ABORT = 1,
}

export type TwelfError = {
  range: { line1: number, col1: number, line2: number, col2: number },
  text: string,
}

export type WithId<T> = { id: number, body: T };

export type TwelfWorkerRequest = {
  input: string,
}

export type TwelfWorkerResponse = {
  status: Status,
  output: string[],
  errors: TwelfError[],
}
