import { TwelfStatus, TwelfError, TwelfExecResponse, TwelfSideEffectData, TwelfExecStatus } from "./twelf-worker-types";
import { WasiSnapshotPreview1, args_get, args_sizes_get, clock_time_get, environ_sizes_get, fd_write } from "./wasi";

type TwelfExports = {
  twelf_open(argc: number, argv: number): void;
  allocate(size: number): number;
  execute(): TwelfStatus;
  unsafe(u: boolean): void;
};

type EnvImports = {
  memory: WebAssembly.Memory,
}

function debug(_x: string): void {
  // console.log(x);
}

async function getWasm(url: string): Promise<ArrayBuffer> {
  return (await fetch(url)).arrayBuffer();
}

class ProcExit extends Error { }

export async function mkTwelfService(wasmLoc: string, outputCallback: (fd: number, str: string) => void): Promise<TwelfService> {
  const twelfWasm = getWasm(wasmLoc);

  // We choose to build our own Memory object here instead of using
  // exports.memory, so that we don't need to rebuild the .wasm file
  // in the event we want to change, for example, `maximum`.
  const mem: WebAssembly.Memory = new WebAssembly.Memory({
    // these are both in units of 64k pages
    initial: 16,
    maximum: 1 << 11,
  });

  const argv: string[] = ['twelf'];
  const imports: {
    env: EnvImports,
    wasi_snapshot_preview1: WebAssembly.ModuleImports & WasiSnapshotPreview1
  } = {
    env: {
      memory: mem,
    },
    wasi_snapshot_preview1: {
      args_get: (...args) => args_get(mem, argv, ...args),
      args_sizes_get: (...args) => args_sizes_get(mem, argv, ...args),
      clock_time_get: (...args) => clock_time_get(mem, ...args),
      environ_sizes_get: (...args) => environ_sizes_get(mem, ...args),
      environ_get: () => { debug('environ_get'); },
      proc_exit: () => { debug('proc_exit'); throw new ProcExit(); },
      fd_close: () => { debug('fd_close'); },
      fd_fdstat_get: () => { debug('fd_fdstat_get'); },
      fd_fdstat_set_flags: () => { debug('fd_fdstat_set_flags'); },
      fd_filestat_get: () => { debug('fd_filestat_get'); },
      fd_pread: () => { debug('fd_pread'); },
      fd_prestat_dir_name: () => { debug('fd_prestat_dir_name'); },
      fd_prestat_get: () => { debug('fd_prestat_get'); },
      fd_read: () => { debug('fd_read'); },
      fd_seek: () => { debug('fd_seek'); },
      fd_write: (...args) => { debug('fd_write'); return fd_write(mem, outputCallback, ...args); },

      // Paths
      path_filestat_get: () => { debug('path_filestat_get'); },
      path_open: () => { debug('path_open'); },
    }
  };

  const source = await WebAssembly.instantiate(await twelfWasm, imports);
  const exports = (source.instance.exports as TwelfExports);
  exports.twelf_open(0, 0);

  return new TwelfService(source.instance, mem);
}

export class TwelfService {

  constructor(public instance: WebAssembly.Instance, public memory: WebAssembly.Memory) { }

  unsafe(u: boolean): void {
    const exports = this.instance.exports as TwelfExports;
    exports.unsafe(u);
  }

  async exec(input: string): Promise<TwelfExecStatus> {
    const exports = this.instance.exports as TwelfExports;
    const mem = this.memory;


    try {
      const data = new TextEncoder().encode(input);
      const length = data.length;
      const inputBuf = exports.allocate(length);
      const buffer = new Uint8Array(
        mem.buffer,
        inputBuf,
        length,
      );
      buffer.set(data);
      return { t: 'twelfStatus', status: exports.execute() };
    }
    catch (e: any) {
      if (e instanceof ProcExit) {
        console.log('twelf exit');
        return { t: 'exit', message: 'process exit' };
      }
      if (e instanceof Error) {
        console.log(`Exception raised during twelf exec: ${e.message}`);
        return { t: 'exit', message: e.message };
      }
      else {
        console.log(`Exception raised during twelf exec: ${e}`);
        return { t: 'exit', message: e.toString() };
      }

    }

  }
}
