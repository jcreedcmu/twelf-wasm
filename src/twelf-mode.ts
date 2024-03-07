import { Extension } from "@codemirror/state"
import { defaultHighlightStyle, HighlightStyle, continuedIndent, indentNodeProp, foldNodeProp, foldInside, LRLanguage, LanguageSupport } from "@codemirror/language"
import { parser } from './twelf-parser';
import { styleTags, tags as t } from "@lezer/highlight";

export const twelfHighlightStyle = HighlightStyle.define([
  ...defaultHighlightStyle.specs,
  { tag: t.variableName, color: "#0a0" },
  { tag: t.atom, color: "#000" },
  { tag: t.comment, color: "#777", fontStyle: "italic" }
])

export const twelfLanguage = LRLanguage.define({
  name: "twelf",
  parser: parser.configure({
    props: [
      styleTags({
        Identifier: t.atom,
        FVar: t.variableName,
        LineComment: t.comment,
        Pragma: t.keyword,
        Type: t.keyword,
      })
    ]
  }),
  languageData: {
    closeBrackets: { brackets: ["[", "{", '"'] },
    indentOnInput: /^\s*[\}\]]$/,
    commentTokens: { line: '% ' },
  }
})

export function twelf() {
  return new LanguageSupport(twelfLanguage);
}
