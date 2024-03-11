import { Status, TwelfError, TwelfWorkerResponse } from "./twelf-worker-types";
import { WasiSnapshotPreview1, args_get, args_sizes_get, clock_time_get, environ_sizes_get, fd_write } from "./wasi";

type TwelfExports = {
  memory: WebAssembly.Memory;
  twelf_open(argc: number, argv: number): void;
  allocate(size: number): number;
  execute(): Status;
};

function debug(_x: string): void {
  // console.log(x);
}

async function getWasm(url: string): Promise<ArrayBuffer> {
  return (await fetch(url)).arrayBuffer();
}

export async function mkTwelfService(wasmLoc: string): Promise<TwelfService> {
  const twelfWasm = getWasm(wasmLoc);

  let mem: WebAssembly.Memory | undefined;
  const output: string[] = [];
  const argv: string[] = ['twelf'];
  const imports: { wasi_snapshot_preview1: WebAssembly.ModuleImports & WasiSnapshotPreview1 } = {
    wasi_snapshot_preview1: {
      args_get: (...args) => args_get(mem!, argv, ...args),
      args_sizes_get: (...args) => args_sizes_get(mem!, argv, ...args),
      clock_time_get: (...args) => clock_time_get(mem!, ...args),
      environ_sizes_get: (...args) => environ_sizes_get(mem!, ...args),
      environ_get: () => { debug('environ_get'); },
      proc_exit: () => { debug('proc_exit'); throw new Error("proc_exit called, probably shouldn't happen"); },
      fd_close: () => { debug('fd_close'); },
      fd_fdstat_get: () => { debug('fd_fdstat_get'); },
      fd_fdstat_set_flags: () => { debug('fd_fdstat_set_flags'); },
      fd_filestat_get: () => { debug('fd_filestat_get'); },
      fd_pread: () => { debug('fd_pread'); },
      fd_prestat_dir_name: () => { debug('fd_prestat_dir_name'); },
      fd_prestat_get: () => { debug('fd_prestat_get'); },
      fd_read: () => { debug('fd_read'); },
      fd_seek: () => { debug('fd_seek'); },
      fd_write: (...args) => { debug('fd_write'); return fd_write(mem!, output, ...args); },

      // Paths
      path_filestat_get: () => { debug('path_filestat_get'); },
      path_open: () => { debug('path_open'); },
    }
  };

  const source = await WebAssembly.instantiate(await twelfWasm, imports);
  const exports = (source.instance.exports as TwelfExports);
  // give import implementations the ability to refer to memory
  mem = exports.memory;
  exports.twelf_open(0, 0);

  return new TwelfService(source.instance, output);
}

export class TwelfService {

  constructor(public instance: WebAssembly.Instance, public output: string[]) { }

  async exec(input: string): Promise<TwelfWorkerResponse> {
    this.output.splice(0); // Erase output

    const exports = this.instance.exports as TwelfExports;
    const mem = exports.memory;

    let status = (() => {
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
        return exports.execute();
      }
      catch (e) {
        console.error(e);
        return Status.ABORT;
      }
    })();

    const errorRegex = new RegExp('string:(\\d+?).(\\d+?)-(\\d+?).(\\d+?) Error: \n(.*)', 'g');
    let m;
    const errors: TwelfError[] = [];
    while (m = errorRegex.exec(this.output.join(''))) {
      errors.push({
        range: {
          line1: parseInt(m[1]),
          col1: parseInt(m[2]),
          line2: parseInt(m[3]),
          col2: parseInt(m[4]),
        },
        text: m[5],
      });
    }
    return { status, output: [...this.output], errors: errors };
  }
}
