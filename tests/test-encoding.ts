import { decode, encodeWithV1, encodeWithV2 } from "../src/encoding";


const exampleTwelf = `
a: type. c: a.
%% some comment text with some punctuation: # $ % ^ &
`;

describe('url encoding', () => {
  test('should roundtrip with v1', async () => {
    expect(await decode(encodeWithV1(exampleTwelf))).toEqual({ t: 'setTextAndExec', text: exampleTwelf });
  });

  // I'd like to test v2 in nodejs, but I need to figure out a strategy
  // for polyfilling Blob and CompressionStream

  // test('should roundtrip with v2', async () => {
  //   expect(await decode(await encodeWithV2(exampleTwelf))).toEqual({ t: 'setTextAndExec', text: exampleTwelf});
  // });

});
