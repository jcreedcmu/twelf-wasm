export enum Status {
  OK = 0,
  ABORT = 1,
}

export type TwelfError = {
  range: { line1: number, col1: number, line2: number, col2: number },
  text: string,
}

export type WithId<T> = { id: number, body: T };

export type TwelfExecRequest = {
  input: string,
}

export type TwelfExecResponse = {
  status: Status,
  output: string[],
  errors: TwelfError[],
}

export type TwelfReadyResponse = {};

export type TwelfResponse =
  | { t: 'ready', id: number, response: TwelfReadyResponse }
  | { t: 'execResponse', id: number, response: TwelfExecResponse }
  ;
