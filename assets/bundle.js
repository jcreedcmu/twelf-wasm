"use strict";

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
async function mkTwelfService(wasmLoc) {
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
  return new TwelfService(source.instance, output);
}
var TwelfService = class {
  constructor(instance, output) {
    this.instance = instance;
    this.output = output;
  }
  async exec(input) {
    this.output.splice(0);
    const exports = this.instance.exports;
    const mem = exports.memory;
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
      exports.execute();
    } catch (e) {
      console.error(e);
    }
    document.getElementById("twelf-response").value = this.output.join("");
  }
};
async function getWasm(url) {
  return (await fetch(url)).arrayBuffer();
}
async function init() {
  document.getElementById("twelf-response").value = "";
  const twelfService = await mkTwelfService("assets/twelf.wasm");
  document.getElementById("loading-indicator").classList.add("hidden");
  const button = document.getElementById("check-button");
  function exec() {
    twelfService.exec(document.getElementById("primary-view").value);
  }
  button.onclick = exec;
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key == "Enter") {
      exec();
    }
  });
}
init();
//# sourceMappingURL=bundle.js.map
