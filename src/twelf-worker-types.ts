export enum TwelfStatus {
  OK = 0,
  ABORT = 1,
}

export type TwelfExecStatus =
  | { t: 'twelfStatus', status: TwelfStatus }
  | { t: 'timeout' }

export type TwelfError = {
  range: { line1: number, col1: number, line2: number, col2: number },
  text: string,
}

export type WithId<T> = { id: number, body: T };

export type TwelfExecRequest = {
  input: string,
}

export type TwelfSideEffectData = {
  output: string[],
  errors: TwelfError[],
};

export type TwelfExecResponse = {
  status: TwelfExecStatus,
} & TwelfSideEffectData;

export type TwelfReadyResponse = {};

export type TwelfResponse =
  | { t: 'ready', id: number, response: TwelfReadyResponse }
  | { t: 'execResponse', id: number, response: TwelfExecResponse }
  ;
