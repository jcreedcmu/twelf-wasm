import { WASI } from "@runno/wasi";

async function go(twelfContent: string) {

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

  const wasm = await WebAssembly.instantiateStreaming(fetch("../assets/twelf.wasm"), {
    ...wasi.getImportObject(),
  });

  const result = wasi.start(wasm, {});
  (document.getElementById('twelf-response') as HTMLTextAreaElement).value =
    output.slice(3).filter(x => x != `[Closing file /single.elf]\n`).join('');
}

(document.getElementById('check-button') as HTMLButtonElement).onclick = () => {
  go((document.getElementById('primary-view') as HTMLTextAreaElement).value);
}
