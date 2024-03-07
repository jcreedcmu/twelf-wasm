import { Extension } from "@codemirror/state"
import { continuedIndent, indentNodeProp, foldNodeProp, foldInside, LRLanguage, LanguageSupport } from "@codemirror/language"
import { parser } from './twelf-parser';
import { styleTags, tags as t } from "@lezer/highlight";

export const twelfLanguage = LRLanguage.define({
  name: "twelf",
  parser: parser.configure({
    props: [
      styleTags({
        Identifier: t.variableName,
        FVar: t.keyword,
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
