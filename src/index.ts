import { Ace } from "ace";
import { decode, encode } from "./encoding";
import { WasiSnapshotPreview1, args_get, args_sizes_get, clock_time_get, environ_sizes_get, fd_write } from "./wasi";

declare const ace: {
  edit(el: Element | string, options?: Partial<Ace.EditorOptions>): Ace.Editor;
  Range: {
    new(startRow: number, startColumn: number, endRow: number, endColumn: number): Ace.Range;
    fromPoints(start: Ace.Point, end: Ace.Point): Ace.Range;
    comparePoints(p1: Ace.Point, p2: Ace.Point): number;
  };
}

enum Status {
  OK = 0,
  ABORT = 1,
}

type TwelfExports = {
  memory: WebAssembly.Memory;
  twelf_open(argc: number, argv: number): void;
  allocate(size: number): number;
  execute(): Status;
};

function debug(_x: string): void {
  // console.log(x);
}

type TwelfError = {
  range: { line1: number, col1: number, line2: number, col2: number },
  text: string,
}

type TwelfAction =
  | { t: 'setErrors', errors: TwelfError[] };

type TwelfDispatch = (action: TwelfAction) => void;

async function mkTwelfService(wasmLoc: string, dispatch: TwelfDispatch): Promise<TwelfService> {
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

  return new TwelfService(source.instance, dispatch, output);
}

function showStatus(status: Status) {
  const serverStatus = (document.getElementById('server-status') as HTMLDivElement);

  switch (status) {
    case Status.OK: {
      serverStatus.className = 'server-status server-status-ok';
      serverStatus.innerText = 'Server OK';

      setTimeout(() => {
        serverStatus.classList.add('server-status-flash');
      }, 0);
    }
      break;
    case Status.ABORT: {
      serverStatus.className = 'server-status server-status-abort';
      serverStatus.innerText = 'Server ABORT';
    } break;
  }
}

class TwelfService {

  constructor(public instance: WebAssembly.Instance, public dispatch: TwelfDispatch, public output: string[]) { }

  async exec(input: string) {
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

    const outputText = this.output.join('');
    const errorRegex = new RegExp('string:(\\d+?).(\\d+?)-(\\d+?).(\\d+?) Error: \n(.*)', 'g');
    let m;
    const errors: TwelfError[] = [];
    while (m = errorRegex.exec(outputText)) {
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
    this.dispatch({ t: 'setErrors', errors });
    (document.getElementById('twelf-response') as HTMLTextAreaElement).value = outputText;

    showStatus(status);
  }
}

async function getWasm(url: string): Promise<ArrayBuffer> {
  return (await fetch(url)).arrayBuffer();
}

// Initialize ace editor component
function initEditor(): Ace.Editor {
  const editor = ace.edit('primary-view');
  (window as any).editor = editor;
  editor.renderer.setOption('showPrintMargin', false);
  editor.session.setMode('ace/mode/twelf');
  return editor;
}


function clearAnnotations(editor: Ace.Editor) {
  editor.getSession().clearAnnotations();
  const markers = editor.getSession().getMarkers();
  for (const m of Object.values(markers)) {
    editor.session.removeMarker(m.id);
  }
}

async function initTwelf(editor: Ace.Editor) {

  function dispatch(action: TwelfAction): void {
    switch (action.t) {
      case 'setErrors': {

        const annotations: Ace.Annotation[] = [];
        let seen: Record<number, boolean> = {};

        action.errors.forEach(error => {
          if (!seen[error.range.line1]) {
            annotations.push({
              row: error.range.line1 - 1,
              column: error.range.col1 - 1,
              text: error.text,
              type: "error"
            }
            );
            seen[error.range.line1] = true;
          }
        });

        editor.getSession().setAnnotations(annotations);

        // console.log(editor.getSession().addMarker(
        //   new ace.Range(action.range.line1 - 1, action.range.col1 - 1, action.range.line2 - 1, action.range.col2 - 1),
        //   'error',
        //   'text',
        //   false));
        break;
      }
    }
  }

  (document.getElementById('twelf-response') as HTMLTextAreaElement).value = '';
  const twelfService = await mkTwelfService('assets/twelf.wasm', dispatch);

  const exec = () => {
    clearAnnotations(editor);
    twelfService.exec(getText());
  };

  const onclick = () => {
    localStorage.setItem('savedElf', getText());
    exec();
  };

  if (window.location.hash) {
    setText(await decode(window.location.hash.substring(1)));
    // history.replaceState(null, 'unused', window.location.href.split('#')[0]);
    exec();
  }
  else {
    const savedElf = localStorage.getItem('savedElf');
    if (savedElf != undefined) {
      setText(savedElf);
      exec();
    }
  }

  // Hide loading indicator
  document.getElementById('loading-indicator')!.classList.add('hidden');

  function getText(): string {
    return editor.getValue();
  }

  function setText(text: string): void {
    editor.setValue(text, 1);
  }

  const checkButton = document.getElementById('check-button') as HTMLButtonElement;
  checkButton.onclick = onclick;

  const shareButton = document.getElementById('share-button') as HTMLButtonElement;
  shareButton.onclick = async () => {
    const url = window.location.href.split('#')[0] + '#' + await encode(getText());
    window.location.href = url;
    await navigator.clipboard.writeText(url);
    const indicator = (document.getElementById('copy-indicator') as HTMLDivElement);
    indicator.className = 'copy-notification-enabled';
    setTimeout(() => { indicator.className = 'copy-notification-disabled'; }, 2000);
  };
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key == 'Enter') {
      onclick();
    }
  });
  editor.focus();
}

initTwelf(initEditor());
