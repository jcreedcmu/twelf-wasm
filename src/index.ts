import { EditorView, basicSetup } from "codemirror"
import { decode, encode } from "./encoding";
import { WasiSnapshotPreview1, args_get, args_sizes_get, clock_time_get, environ_sizes_get, fd_write } from "./wasi";

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
      }, 10);
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


// Initialize editor component
function initEditor(): EditorView {
  const editor = new EditorView({
    extensions: [basicSetup,
      // These css tweaks came from the "See this example" in
      // https://discuss.codemirror.net/t/fill-a-div-with-the-editor/5248/2
      // I'm not convinced the overflow auto is actually required, but
      // leaving it in anyway
      EditorView.theme({
        "&.cm-editor": { height: "100%" },
        ".cm-scroller": { overflow: "auto" }
      })],
    parent: document.getElementById('primary-view') as HTMLDivElement,
  });
  (window as any).editor = editor;
  return editor;
}


function clearAnnotations(editor: EditorView) {
  // editor.getSession().clearAnnotations();
  // const markers = editor.getSession().getMarkers();
  // for (const m of Object.values(markers)) {
  //   editor.session.removeMarker(m.id);
  // }
}

async function initTwelf(editor: EditorView) {

  function dispatch(action: TwelfAction): void {
    switch (action.t) {
      case 'setErrors': {

        // const annotations: Ace.Annotation[] = [];
        // let seen: Record<number, boolean> = {};

        // action.errors.forEach(error => {
        //   if (!seen[error.range.line1]) {
        //     annotations.push({
        //       row: error.range.line1 - 1,
        //       column: error.range.col1 - 1,
        //       text: error.text,
        //       type: "error"
        //     }
        //     );
        //     seen[error.range.line1] = true;
        //   }
        // });

        // editor.getSession().setAnnotations(annotations);

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

  const saveAndExec = async () => {
    localStorage.setItem('savedElf', getText());
    const url = await setUrlFragmentToSharableLink();
    exec();
  };

  if (window.location.hash) {
    setText(await decode(window.location.hash.substring(1)));
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

  async function setUrlFragmentToSharableLink(): Promise<string> {
    const url = window.location.href.split('#')[0] + '#' + await encode(getText());
    history.replaceState(null, 'unused', url);
    return url;
  }

  function getText(): string {
    return editor.state.doc.toString();
  }

  function setText(text: string): void {
    editor.dispatch({
      changes: { from: 0, to: editor.state.doc.length, insert: text }
    });
  }

  const checkButton = document.getElementById('check-button') as HTMLButtonElement;
  checkButton.onclick = saveAndExec;

  const shareButton = document.getElementById('share-button') as HTMLButtonElement;
  shareButton.onclick = async () => {
    const url = await setUrlFragmentToSharableLink();
    await navigator.clipboard.writeText(url);
    const indicator = (document.getElementById('copy-indicator') as HTMLDivElement);
    indicator.className = 'copy-notification-enabled';
    setTimeout(() => { indicator.className = 'copy-notification-disabled'; }, 2000);
  };
  editor.contentDOM.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key == 'Enter') {
      saveAndExec(); // async
      e.stopPropagation();
      e.preventDefault();
    }
  }, {
    // So that we can intercept the <C-enter> during capture phase,
    // before codemirror sees it and decides to insert an actual
    // newline.
    capture: true
  });
  editor.focus();
}

initTwelf(initEditor());
