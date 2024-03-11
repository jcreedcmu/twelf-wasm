import { syntaxHighlighting } from '@codemirror/language';
import { Diagnostic, lintGutter, setDiagnostics } from '@codemirror/lint';
import { EditorView, basicSetup } from "codemirror";
import { decode, encode } from "./encoding";
import { twelfHighlightStyle, twelf as twelfMode } from './twelf-mode';
import { TwelfAction, mkTwelfService } from './twelf-service';
import { Status } from './twelf-worker-types';
import { mkTwelfWorker } from './twelf-worker';

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

// Initialize editor component
function initEditor(): EditorView {
  const editor = new EditorView({
    extensions: [basicSetup,
      syntaxHighlighting(twelfHighlightStyle),
      twelfMode(),
      lintGutter(),
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

async function initTwelf(editor: EditorView) {

  function dispatch(action: TwelfAction): void {
    function posOfLineCol(line: number, col: number): number {
      const rv = Math.min(editor.state.doc.length,
        editor.state.doc.line(line).from + col - 1);
      return rv;
    }

    switch (action.t) {
      case 'setErrors': {

        const diagnostics: Diagnostic[] = [];
        // let seen: Record<number, boolean> = {};

        action.errors.forEach(error => {

          if (error.text.match(/\d+ errors? found/))
            return;
          const from = posOfLineCol(error.range.line1, error.range.col1);
          const to = posOfLineCol(error.range.line2, error.range.col2);

          diagnostics.push({
            from,
            to,
            message: error.text,
            severity: "error",
          }
          );


        });

        editor.dispatch(setDiagnostics(editor.state, diagnostics));

        break;
      }
    }
  }

  (document.getElementById('twelf-response') as HTMLTextAreaElement).value = '';
  const twelfService = await mkTwelfService('assets/twelf.wasm', dispatch);

  async function execAndShowStatus(text: string): Promise<void> {
    showStatus(await twelfService.exec(text));
  }

  const execCurrentBuffer = () => {
    execAndShowStatus(getText());
  };

  const saveAndExec = async () => {
    localStorage.setItem('savedElf', getText());
    const url = await setUrlFragmentToSharableLink();
    execCurrentBuffer();
  };

  if (window.location.hash) {
    setText(await decode(window.location.hash.substring(1)));
    execCurrentBuffer();
  }
  else {
    const savedElf = localStorage.getItem('savedElf');
    if (savedElf != undefined) {
      setText(savedElf);
      execCurrentBuffer();
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
      changes: { from: 0, to: editor.state.doc.length, insert: text },
      effects: [],
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

async function go() {
  const worker = mkTwelfWorker();
  const z = await worker.exec('hello world message');
  console.log('resp', z);
}


go();
