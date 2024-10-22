import { syntaxHighlighting } from '@codemirror/language';
import { Diagnostic, lintGutter, setDiagnostics } from '@codemirror/lint';
import { EditorView, basicSetup } from "codemirror";
import { FragmentAction, UrlAction, decode, encode } from "./encoding";
import { twelfHighlightStyle, twelfLanguage } from './twelf-mode';
import { TwelfStatus, TwelfError, TwelfExecStatus } from './twelf-worker-types';
import { TwelfWorker, mkTwelfWorker } from './twelf-worker';

function showStatus(status: TwelfExecStatus) {
  const serverStatus = (document.getElementById('server-status') as HTMLDivElement);

  switch (status.t) {
    case 'twelfStatus': {
      switch (status.status) {
        case TwelfStatus.OK: {
          serverStatus.className = 'server-status server-status-ok';
          serverStatus.innerText = 'Server OK';

          setTimeout(() => {
            serverStatus.classList.add('server-status-flash');
          }, 10);
        }
          break;
        case TwelfStatus.ABORT: {
          serverStatus.className = 'server-status server-status-abort';
          serverStatus.innerText = 'Server ABORT';
          setTimeout(() => {
            serverStatus.classList.add('bounce');
          }, 10);
        } break;
      }
    } break;
    case 'timeout': {
      serverStatus.className = 'server-status server-status-exit';
      serverStatus.innerText = 'Server TIMEOUT';
      setTimeout(() => {
        serverStatus.classList.add('bounce');
      }, 10);
    } break;
    case 'oom': {
      serverStatus.className = 'server-status server-status-abort';
      serverStatus.innerText = 'Server OOM';
      setTimeout(() => {
        serverStatus.classList.add('bounce');
      }, 10);
    } break;
    case 'exit': {
      serverStatus.className = 'server-status server-status-exit';
      serverStatus.innerText = 'Server EXIT';
      setTimeout(() => {
        serverStatus.classList.add('bounce');
      }, 10);
    } break;
  }
}


// Initialize editor component
function initEditor(): EditorView {
  const editor = new EditorView({
    extensions: [basicSetup,
      syntaxHighlighting(twelfHighlightStyle),
      twelfLanguage,
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

  async function resolveFragmentAction(action: FragmentAction): Promise<void> {
    switch (action.t) {
      case 'setTextAndExec': {
        setText(action.text);
        execCurrentBuffer();
      } break;
      case 'getUrl': {
        const urlAction = await (await fetch(action.url)).json() as UrlAction;
        resolveFragmentAction(urlAction);
      } break;
      default: {
        throw new Error(`Unknown FragmentAction: ${JSON.stringify(action)}`);
      }
    }
  }

  function showErrors(errors: TwelfError[]): void {
    function posOfLineCol(line: number, col: number): number {
      const rv = Math.min(editor.state.doc.length,
        editor.state.doc.line(line).from + col - 1);
      return rv;
    }


    const diagnostics: Diagnostic[] = [];
    // let seen: Record<number, boolean> = {};

    errors.forEach(error => {

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
  }

  const workerRef: { twelfWorker: TwelfWorker | undefined } = { twelfWorker: undefined };
  (document.getElementById('twelf-response') as HTMLTextAreaElement).value = '';
  workerRef.twelfWorker = await mkTwelfWorker();

  async function execAndShowStatus(text: string): Promise<void> {
    if (workerRef.twelfWorker == undefined) {
      throw new Error(`twelf worker not ready yet`);
    }

    document.getElementById('running-indicator')!.classList.remove('hidden');
    const result = await (workerRef.twelfWorker).exec(text, {
      unsafe: (document.getElementById('unsafe')! as HTMLInputElement).checked
    });
    document.getElementById('running-indicator')!.classList.add('hidden');

    if (result.status.t != 'twelfStatus') {
      workerRef.twelfWorker = undefined;
      console.log('twelf worker unhealthy, trying to restart twelf worker...');
      workerRef.twelfWorker = await mkTwelfWorker();
    }

    let status = result.status;
    if (result.output.join('').match(/Out of memory.  Unable to allocate heap/)) {
      status = { t: 'oom' };
    }
    showStatus(status);
    showErrors(result.errors);
    let outputText = result.output.join('');
    if (status.t == 'exit') {
      outputText = outputText + `### Twelf process exited: ${status.message}`;
    }
    if (status.t == 'timeout') {
      outputText = outputText + `### Twelf process timed out`;
    }
    (document.getElementById('twelf-response') as HTMLTextAreaElement).value = outputText;
  }

  const execCurrentBuffer = () => {
    execAndShowStatus(getText());
  };

  const saveAndExec = async () => {
    localStorage.setItem('savedElf', getText());
    const url = await setUrlFragmentToSharableLink();
    execCurrentBuffer();
  };

  // returns whether there was a hash at all
  async function resolveCurrentFragmentAction(): Promise<boolean> {
    if (window.location.hash) {
      await resolveFragmentAction(await decode(window.location.hash.substring(1)));
      return true;
    }
    return false;
  }

  window.addEventListener('hashchange', resolveCurrentFragmentAction);

  if (!(await resolveCurrentFragmentAction())) {
    // if no fragment, then look to local storage for initial state
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
