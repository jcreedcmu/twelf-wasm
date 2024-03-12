import { defaultHighlightStyle, HighlightStyle, StreamLanguage } from "@codemirror/language";
import { tags as t } from "@lezer/highlight";
import { mkStreamParser } from "./twelf-highlight/tokenizer-codemirror-adapter";
import { twelfTokenizer } from "./twelf-highlight/twelf-tokenizer";

export const twelfHighlightStyle = HighlightStyle.define([
  ...defaultHighlightStyle.specs,
  { tag: t.variableName, color: "#0a0" },
  { tag: t.atom, color: "#000" },
  { tag: t.comment, color: "#777", fontStyle: "italic" }
])

export const twelfLanguage = StreamLanguage.define(
  mkStreamParser(twelfTokenizer, {
    name: "twelf",
    languageData: {
      closeBrackets: { brackets: ["[", "{", '"'] },
      indentOnInput: /^\s*[\}\]]$/,
      commentTokens: { line: "% " },
    },
  })
);
