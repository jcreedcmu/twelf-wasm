import { WASI } from "@runno/wasi";


class TwelfService {
  constructor(public twelfWasm: Promise<BufferSource>) { }

  async exec(twelfContent: string) {
    const stdin = "loadFile /single.elf\n";
    let stdinMark = 0;

    function readStdin(numBytes: number): string | null {
      const bytes = Math.min(numBytes, stdin.length - stdinMark);
      if (bytes == 0) return null;
      const rv = stdin.substr(stdinMark, bytes);
      stdinMark += bytes;
      return rv;
    }

    const output: string[] = [];

    const wasi = new WASI({
      args: ["twelf-server"],
      env: {},
      stdout: (out) => {
        output.push(out);
      },
      stderr: (err) => {
        output.push(err);
      },
      stdin: readStdin,
      fs: {
        "/single.elf": {
          path: "/single.elf",
          timestamps: {
            access: new Date(),
            change: new Date(),
            modification: new Date(),
          },
          mode: "string",
          content: `${twelfContent}\n`,
        },
      },
    });

    const wasmInstance = await WebAssembly.instantiate(await (this.twelfWasm), {
      ...wasi.getImportObject(),
    });

    const result = wasi.start(wasmInstance, {});
    (document.getElementById('twelf-response') as HTMLTextAreaElement).value =
      output.slice(3).filter(x => x != `[Closing file /single.elf]\n`).join('');
  }
}

async function init() {
  const twelfService = new TwelfService((await fetch("assets/twelf.wasm")).arrayBuffer());
  const button = document.getElementById('check-button') as HTMLButtonElement;
  button.onclick = () => {
    twelfService.exec((document.getElementById('primary-view') as HTMLTextAreaElement).value);
  }
  button.removeAttribute('disabled');
}

init();
