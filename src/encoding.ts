type Base64 = { t: 'base64', str: string };

function bytesOfString(str: string): Uint8Array {
  return new TextEncoder().encode(str);
}

function stringOfBytes(bytes: Uint8Array): string {
  return new TextDecoder('utf8').decode(bytes);
}

function bytesOfBase64(base64: Base64): Uint8Array {
  const binString = atob(base64.str);
  return Uint8Array.from(binString as any, (m: any) => m.codePointAt(0));
}

function base64OfBytes(bytes: Uint8Array): Base64 {
  const binString = String.fromCodePoint(...bytes);
  return { t: 'base64', str: btoa(binString) };
}

async function compressedOf(bytes: Uint8Array): Promise<Uint8Array> {
  return await bytesOfStream(streamOfBytes(bytes).pipeThrough(new CompressionStream('gzip')));
}

async function decompressedOf(bytes: Uint8Array): Promise<Uint8Array> {
  return await bytesOfStream(streamOfBytes(bytes).pipeThrough(new DecompressionStream('gzip')));
}

export function encodeWithV1(text: string): string {
  return encodeURIComponent(btoa(text));
}

export async function encodeWithV2(text: string): Promise<string> {
  const encoded = encodeURIComponent(base64OfBytes(await compressedOf(bytesOfString(text))).str);
  return 'v2/' + encoded;
}

export function encodeWithJson(action: FragmentAction): string {
  const encoded = encodeURIComponent(base64OfBytes(bytesOfString(JSON.stringify(action))).str);
  return 'json/' + encoded;
}

export async function encodeWithJsonz(action: FragmentAction): Promise<string> {
  const encoded = encodeURIComponent(base64OfBytes(await compressedOf(bytesOfString(JSON.stringify(action)))).str);
  return 'jsonz/' + encoded;
}

export async function encode(text: string): Promise<string> {
  return encodeWithJsonz({ t: 'setTextAndExec', text });
}

export type UrlAction =
  | { t: 'setTextAndExec', text: string }

export type FragmentAction =
  | UrlAction
  // fetch url, expected to be json-encoded UrlAction,
  // and then we will do that.
  | { t: 'getUrl', url: string }
  ;

export async function decode(fragment: string): Promise<FragmentAction> {
  const uridecoded = decodeURIComponent(fragment);
  if (uridecoded.match(/^json\//)) {
    const stripPrefix = uridecoded.replace(/json\//, '');
    return JSON.parse(stringOfBytes(bytesOfBase64({ t: 'base64', str: stripPrefix }))) as FragmentAction;
  }
  else if (uridecoded.match(/^jsonz\//)) {
    const stripPrefix = uridecoded.replace(/jsonz\//, '');
    return JSON.parse(stringOfBytes(await decompressedOf(bytesOfBase64({ t: 'base64', str: stripPrefix }))));
  }
  else if (uridecoded.match(/^v2\//)) {
    const stripPrefix = uridecoded.replace(/v2\//, '');
    return {
      t: 'setTextAndExec',
      text: stringOfBytes(await decompressedOf(bytesOfBase64({ t: 'base64', str: stripPrefix })))
    };
  }
  else {
    // v1 encoding
    return { t: 'setTextAndExec', text: atob(uridecoded) };
  }
}

function concatenateUint8Arrays(arrays: Uint8Array[]) {
  if (arrays.length == 0)
    return new Uint8Array([]);
  const totalLength = arrays.map(arr => arr.length).reduce((a, b) => a + b);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const arr of arrays) {
    result.set(arr, offset);
    offset += arr.length;
  }
  return result;
}

async function bytesOfStream(readableStream: ReadableStream): Promise<Uint8Array> {
  const reader = readableStream.getReader();
  let result: Uint8Array[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    result.push(value);
  }
  return concatenateUint8Arrays(result);
}

function streamOfBytes(bytes: Uint8Array): ReadableStream {
  return new Blob([bytes]).stream();
}
