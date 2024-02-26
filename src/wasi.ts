export type WasiSnapshotPreview1 = {
  args_get?(argv_ptr: number, argv_buf_ptr: number): number;
  args_sizes_get?(argc_ptr: number, argv_buf_size_ptr: number): number;
  fd_write?(fd: number, ciovs_ptr: number, ciovs_len: number, retptr0: number): number;
  clock_time_get?(id: number, _: bigint, retptr0: number): number;
  environ_sizes_get?(env_ptr: number, env_buf_size_ptr: number): number;
};

const Result = {
  SUCCESS: 0, // No error occurred. System call completed successfully.
};

export function args_get(mem: WebAssembly.Memory, args: string[], argv_ptr: number, argv_buf_ptr: number): number {
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

export function args_sizes_get(mem: WebAssembly.Memory, args: string[], argc_ptr: number, argv_buf_size_ptr: number): number {
  const totalByteLength = args.reduce((acc, value) => {
    return acc + new TextEncoder().encode(`${value}\0`).byteLength;
  }, 0);

  const view = new DataView(mem.buffer);
  view.setUint32(argc_ptr, args.length, true);
  view.setUint32(argv_buf_size_ptr, totalByteLength, true);

  return Result.SUCCESS;
}

function readIOVectors(
  view: DataView,
  iovs_ptr: number,
  iovs_len: number
): Array<Uint8Array> {
  let result = Array<Uint8Array>(iovs_len);

  for (let i = 0; i < iovs_len; i++) {
    const bufferPtr = view.getUint32(iovs_ptr, true);
    iovs_ptr += 4;

    const bufferLen = view.getUint32(iovs_ptr, true);
    iovs_ptr += 4;

    result[i] = new Uint8Array(view.buffer, bufferPtr, bufferLen);
  }
  return result;
}

export function fd_write(mem: WebAssembly.Memory, output: string[], _fd: number, ciovs_ptr: number, ciovs_len: number, retptr0: number): number {
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

// Always returns 0
export function clock_time_get(mem: WebAssembly.Memory, _id: number, _: bigint, retptr0: number): number {
  const view = new DataView(mem.buffer);
  view.setBigUint64(retptr0, BigInt(0), true);
  return Result.SUCCESS;
}

export function environ_sizes_get(mem: WebAssembly.Memory, env_ptr: number, env_buf_size_ptr: number): number {
  const totalByteLength = 0;
  const view = new DataView(mem.buffer);
  view.setUint32(env_ptr, 0, true);
  view.setUint32(env_buf_size_ptr, totalByteLength, true);
  return Result.SUCCESS;
}
