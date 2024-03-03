"use strict";

// src/encoding.ts
function bytesOfString(str) {
  return new TextEncoder().encode(str);
}
function stringOfBytes(bytes) {
  return new TextDecoder("utf8").decode(bytes);
}
function bytesOfBase64(base64) {
  const binString = atob(base64.str);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}
function base64OfBytes(bytes) {
  const binString = String.fromCodePoint(...bytes);
  return { t: "base64", str: btoa(binString) };
}
async function compressedOf(bytes) {
  return await bytesOfStream(streamOfBytes(bytes).pipeThrough(new CompressionStream("gzip")));
}
async function decompressedOf(bytes) {
  return await bytesOfStream(streamOfBytes(bytes).pipeThrough(new DecompressionStream("gzip")));
}
async function encode(text) {
  const x1 = bytesOfString(text);
  const encoded = encodeURIComponent(base64OfBytes(await compressedOf(bytesOfString(text))).str);
  return "v2/" + encoded;
}
async function decode(fragment) {
  const uridecoded = decodeURIComponent(fragment);
  if (uridecoded.match(/^v2\//)) {
    const stripPrefix = uridecoded.replace(/v2\//, "");
    return stringOfBytes(await decompressedOf(bytesOfBase64({ t: "base64", str: stripPrefix })));
  } else {
    return atob(uridecoded);
  }
}
function concatenateUint8Arrays(arrays) {
  if (arrays.length == 0)
    return new Uint8Array([]);
  const totalLength = arrays.map((arr) => arr.length).reduce((a, b) => a + b);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const arr of arrays) {
    result.set(arr, offset);
    offset += arr.length;
  }
  return result;
}
async function bytesOfStream(readableStream) {
  const reader = readableStream.getReader();
  let result = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done)
      break;
    result.push(value);
  }
  return concatenateUint8Arrays(result);
}
function streamOfBytes(bytes) {
  return new Blob([bytes]).stream();
}

// src/wasi.ts
var Result = {
  SUCCESS: 0
  // No error occurred. System call completed successfully.
};
function args_get(mem, args, argv_ptr, argv_buf_ptr) {
  const view = new DataView(mem.buffer);
  for (const argument of args) {
    view.setUint32(argv_ptr, argv_buf_ptr, true);
    argv_ptr += 4;
    const data = new TextEncoder().encode(`${argument}\0`);
    const buffer = new Uint8Array(
      mem.buffer,
      argv_buf_ptr,
      data.byteLength
    );
    buffer.set(data);
    argv_buf_ptr += data.byteLength;
  }
  return Result.SUCCESS;
}
function args_sizes_get(mem, args, argc_ptr, argv_buf_size_ptr) {
  const totalByteLength = args.reduce((acc, value) => {
    return acc + new TextEncoder().encode(`${value}\0`).byteLength;
  }, 0);
  const view = new DataView(mem.buffer);
  view.setUint32(argc_ptr, args.length, true);
  view.setUint32(argv_buf_size_ptr, totalByteLength, true);
  return Result.SUCCESS;
}
function readIOVectors(view, iovs_ptr, iovs_len) {
  let result = Array(iovs_len);
  for (let i = 0; i < iovs_len; i++) {
    const bufferPtr = view.getUint32(iovs_ptr, true);
    iovs_ptr += 4;
    const bufferLen = view.getUint32(iovs_ptr, true);
    iovs_ptr += 4;
    result[i] = new Uint8Array(view.buffer, bufferPtr, bufferLen);
  }
  return result;
}
function fd_write(mem, output, _fd, ciovs_ptr, ciovs_len, retptr0) {
  const view = new DataView(mem.buffer);
  const iovs = readIOVectors(view, ciovs_ptr, ciovs_len);
  const decoder = new TextDecoder();
  let bytesWritten = 0;
  let result = Result.SUCCESS;
  for (const iov of iovs) {
    if (iov.byteLength === 0) {
      continue;
    }
    output.push(decoder.decode(iov));
    bytesWritten += iov.byteLength;
  }
  view.setUint32(retptr0, bytesWritten, true);
  return result;
}
function clock_time_get(mem, _id, _, retptr0) {
  const view = new DataView(mem.buffer);
  view.setBigUint64(retptr0, BigInt(0), true);
  return Result.SUCCESS;
}
function environ_sizes_get(mem, env_ptr, env_buf_size_ptr) {
  const totalByteLength = 0;
  const view = new DataView(mem.buffer);
  view.setUint32(env_ptr, 0, true);
  view.setUint32(env_buf_size_ptr, totalByteLength, true);
  return Result.SUCCESS;
}

// src/index.ts
function debug(_x) {
}
async function mkTwelfService(wasmLoc, dispatch) {
  const twelfWasm = getWasm(wasmLoc);
  let mem;
  const output = [];
  const argv = ["twelf"];
  const imports = {
    wasi_snapshot_preview1: {
      args_get: (...args) => args_get(mem, argv, ...args),
      args_sizes_get: (...args) => args_sizes_get(mem, argv, ...args),
      clock_time_get: (...args) => clock_time_get(mem, ...args),
      environ_sizes_get: (...args) => environ_sizes_get(mem, ...args),
      environ_get: () => {
        debug("environ_get");
      },
      proc_exit: () => {
        debug("proc_exit");
        throw new Error("proc_exit called, probably shouldn't happen");
      },
      fd_close: () => {
        debug("fd_close");
      },
      fd_fdstat_get: () => {
        debug("fd_fdstat_get");
      },
      fd_fdstat_set_flags: () => {
        debug("fd_fdstat_set_flags");
      },
      fd_filestat_get: () => {
        debug("fd_filestat_get");
      },
      fd_pread: () => {
        debug("fd_pread");
      },
      fd_prestat_dir_name: () => {
        debug("fd_prestat_dir_name");
      },
      fd_prestat_get: () => {
        debug("fd_prestat_get");
      },
      fd_read: () => {
        debug("fd_read");
      },
      fd_seek: () => {
        debug("fd_seek");
      },
      fd_write: (...args) => {
        debug("fd_write");
        return fd_write(mem, output, ...args);
      },
      // Paths
      path_filestat_get: () => {
        debug("path_filestat_get");
      },
      path_open: () => {
        debug("path_open");
      }
    }
  };
  const source = await WebAssembly.instantiate(await twelfWasm, imports);
  const exports = source.instance.exports;
  mem = exports.memory;
  exports.twelf_open(0, 0);
  return new TwelfService(source.instance, dispatch, output);
}
function showStatus(status) {
  const serverStatus = document.getElementById("server-status");
  switch (status) {
    case 0 /* OK */:
      {
        serverStatus.className = "server-status server-status-ok";
        serverStatus.innerText = "Server OK";
        setTimeout(() => {
          console.log("wat");
          serverStatus.classList.add("server-status-flash");
        }, 10);
      }
      break;
    case 1 /* ABORT */:
      {
        serverStatus.className = "server-status server-status-abort";
        serverStatus.innerText = "Server ABORT";
      }
      break;
  }
}
var TwelfService = class {
  constructor(instance, dispatch, output) {
    this.instance = instance;
    this.dispatch = dispatch;
    this.output = output;
  }
  async exec(input) {
    this.output.splice(0);
    const exports = this.instance.exports;
    const mem = exports.memory;
    let status = (() => {
      try {
        const data = new TextEncoder().encode(input);
        const length = data.length;
        const inputBuf = exports.allocate(length);
        const buffer = new Uint8Array(
          mem.buffer,
          inputBuf,
          length
        );
        buffer.set(data);
        return exports.execute();
      } catch (e) {
        console.error(e);
        return 1 /* ABORT */;
      }
    })();
    const outputText = this.output.join("");
    const errorRegex = new RegExp("string:(\\d+?).(\\d+?)-(\\d+?).(\\d+?) Error: \n(.*)", "g");
    let m;
    const errors = [];
    while (m = errorRegex.exec(outputText)) {
      errors.push({
        range: {
          line1: parseInt(m[1]),
          col1: parseInt(m[2]),
          line2: parseInt(m[3]),
          col2: parseInt(m[4])
        },
        text: m[5]
      });
    }
    this.dispatch({ t: "setErrors", errors });
    document.getElementById("twelf-response").value = outputText;
    showStatus(status);
  }
};
async function getWasm(url) {
  return (await fetch(url)).arrayBuffer();
}
function initEditor() {
  const editor = ace.edit("primary-view");
  window.editor = editor;
  editor.renderer.setOption("showPrintMargin", false);
  editor.session.setMode("ace/mode/twelf");
  return editor;
}
function clearAnnotations(editor) {
  editor.getSession().clearAnnotations();
  const markers = editor.getSession().getMarkers();
  for (const m of Object.values(markers)) {
    editor.session.removeMarker(m.id);
  }
}
async function initTwelf(editor) {
  function dispatch(action) {
    switch (action.t) {
      case "setErrors": {
        const annotations = [];
        let seen = {};
        action.errors.forEach((error) => {
          if (!seen[error.range.line1]) {
            annotations.push(
              {
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
        break;
      }
    }
  }
  document.getElementById("twelf-response").value = "";
  const twelfService = await mkTwelfService("assets/twelf.wasm", dispatch);
  const exec = () => {
    clearAnnotations(editor);
    twelfService.exec(getText());
  };
  const saveAndExec = async () => {
    localStorage.setItem("savedElf", getText());
    const url = await setUrlFragmentToSharableLink();
    exec();
  };
  if (window.location.hash) {
    setText(await decode(window.location.hash.substring(1)));
    exec();
  } else {
    const savedElf = localStorage.getItem("savedElf");
    if (savedElf != void 0) {
      setText(savedElf);
      exec();
    }
  }
  document.getElementById("loading-indicator").classList.add("hidden");
  async function setUrlFragmentToSharableLink() {
    const url = window.location.href.split("#")[0] + "#" + await encode(getText());
    history.replaceState(null, "unused", url);
    return url;
  }
  function getText() {
    return editor.getValue();
  }
  function setText(text) {
    editor.setValue(text, 1);
  }
  const checkButton = document.getElementById("check-button");
  checkButton.onclick = saveAndExec;
  const shareButton = document.getElementById("share-button");
  shareButton.onclick = async () => {
    const url = await setUrlFragmentToSharableLink();
    await navigator.clipboard.writeText(url);
    const indicator = document.getElementById("copy-indicator");
    indicator.className = "copy-notification-enabled";
    setTimeout(() => {
      indicator.className = "copy-notification-disabled";
    }, 2e3);
  };
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key == "Enter") {
      saveAndExec();
    }
  });
  editor.focus();
}
initTwelf(initEditor());
//# sourceMappingURL=bundle.js.map
