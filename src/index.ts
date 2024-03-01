import { WasiSnapshotPreview1, args_get, args_sizes_get, clock_time_get, environ_sizes_get, fd_write } from "./wasi";

type TwelfExports = {
  memory: WebAssembly.Memory;
  twelf_open(argc: number, argv: number): void;
  allocate(size: number): number;
  execute(): void;
};

function debug(_x: string): void {
  // console.log(x);
}

async function mkTwelfService(wasmLoc: string): Promise<TwelfService> {
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

class TwelfService {

  constructor(public instance: WebAssembly.Instance, public output: string[]) { }

  async exec(input: string) {
    this.output.splice(0); // Erase output

    const exports = this.instance.exports as TwelfExports;
    const mem = exports.memory;
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
      exports.execute();
    }
    catch (e) {
      console.error(e);
    }

    (document.getElementById('twelf-response') as HTMLTextAreaElement).value =
      this.output.join('');
  }
}

async function getWasm(url: string): Promise<ArrayBuffer> {
  return (await fetch(url)).arrayBuffer();
}

async function init() {
  if (window.location.hash) {
    setText(atob(window.location.hash.substring(1)));
  }

  (document.getElementById('twelf-response') as HTMLTextAreaElement).value = '';
  const twelfService = await mkTwelfService("assets/twelf.wasm");

  // Hide loading indicator
  document.getElementById('loading-indicator')!.classList.add('hidden');

  function getText(): string {
    return (document.getElementById('primary-view') as HTMLTextAreaElement).value;
  }

  function setText(text: string): void {
    (document.getElementById('primary-view') as HTMLTextAreaElement).value = text;
  }

  const checkButton = document.getElementById('check-button') as HTMLButtonElement;
  const exec = () => {
    twelfService.exec(getText());
  }
  checkButton.onclick = exec;

  const shareButton = document.getElementById('share-button') as HTMLButtonElement;
  shareButton.onclick = () => {
    window.location.href = window.location.href.split('#')[0] + '#' + btoa(getText());
  };
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key == 'Enter') {
      exec();
    }
  });
}

init();
