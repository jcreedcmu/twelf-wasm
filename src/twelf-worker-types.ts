export enum TwelfStatus {
  OK = 0,
  ABORT = 1,
}

export type TwelfOptions = {
  unsafe: boolean,
}

export type TwelfExecStatus =
  | { t: 'twelfStatus', status: TwelfStatus }
  | { t: 'timeout' }
  | { t: 'oom' }
  | { t: 'exit', message: string }

export type TwelfError = {
  range: { line1: number, col1: number, line2: number, col2: number },
  text: string,
}

export type WithId<T> = { id: number, body: T };

export type TwelfExecRequest = {
  input: string,
  options: TwelfOptions,
}

export type TwelfSideEffectData = {
  output: string[],
  errors: TwelfError[],
};

export type TwelfExecResponse = {
  status: TwelfExecStatus,
} & TwelfSideEffectData;

export type TwelfReadyResponse = {};

export type WorkerMessage =
  | { t: 'ready' }
  | { t: 'execResponse', id: number, response: TwelfExecStatus }
  | { t: 'output', fd: number, str: string }
  ;
