import { StreamParser } from "@codemirror/language";
import {
  StreamParser as MiniStreamParser,
  StringStream,
} from "./tokenizer-types";
import { Tag } from "@lezer/highlight";

export function mkStreamParser<State, Tree>(
  parser: MiniStreamParser<State, Tree>,
  config: {
    name?: string;
    languageData?: any;
    tokenTable?: { [token: string]: Tag };
  } = {}
): StreamParser<{ contents: State }> {
  let state = { contents: parser.startState };
  return {
    name: config.name,
    startState() {
      return state;
    },
    token(stream, state) {
      const adapter: StringStream = {
        eat(pattern) {
          const result = stream.match(pattern);
          if (!result) return null;
          if (result === true) return pattern as string;
          return result[0];
        },
        peek(pattern) {
          const fragment = stream.string.slice(stream.pos);
          if (typeof pattern === "string") {
            return fragment.startsWith(pattern) ? pattern : null;
          }
          return fragment.match(pattern)?.[0] ?? null;
        },
        sol: () => stream.sol(),
        eol: () => stream.eol(),
        matchedLocation: () => ({
          start: { line: 1, column: 1 },
          end: { line: 1, column: 2 },
        }),
      };

      const response = parser.advance(adapter, state.contents);
      state.contents = response.state;
      return response.tag || null;
    },
    blankLine(state, indentUnit) {
      const adapter: StringStream = {
        eat: () => null,
        peek: () => null,
        sol: () => true,
        eol: () => true,
        matchedLocation: () => ({
          start: { line: 1, column: 1 },
          end: { line: 1, column: 2 },
        }),
      };

      const response = parser.advance(adapter, state.contents);
      state.contents = response.state;
    },
    copyState: ({ contents }) => ({ contents }),
    indent: () => null,
    languageData: {},
    tokenTable: config.tokenTable,
  };
}
