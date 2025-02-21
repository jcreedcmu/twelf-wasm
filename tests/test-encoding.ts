import { decode, encodeWithJson, encodeWithJsonz, encodeWithV1, encodeWithV2 } from "../src/encoding";


const exampleTwelf = `
a: type. c: a.
%% some comment text with some punctuation: # $ % ^ &
`;

describe('url encoding', () => {
  test('should roundtrip with v1', async () => {
    expect(await decode(encodeWithV1(exampleTwelf))).toEqual({ t: 'setTextAndExec', text: exampleTwelf });
  });

  test('should roundtrip with v2', async () => {
    expect(await decode(await encodeWithV2(exampleTwelf))).toEqual({ t: 'setTextAndExec', text: exampleTwelf });
  });

  test('should roundtrip with json', async () => {
    expect(await decode(encodeWithJson({ t: 'setTextAndExec', text: exampleTwelf }))).toEqual({ t: 'setTextAndExec', text: exampleTwelf });
  });

  test('should roundtrip with jsonz', async () => {
    expect(await decode(await encodeWithJsonz({ t: 'setTextAndExec', text: exampleTwelf }))).toEqual({ t: 'setTextAndExec', text: exampleTwelf });
  });

});
