import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup'
import { markdown } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { markdownLanguage } from '@codemirror/lang-markdown'
import testDoc from './doc-example'
import { solarizedDark } from '../packages/solarized-dark'

const elCM = document.querySelector('#codemirror')

let editor = new EditorView({
  state: EditorState.create({
    doc: testDoc,
    extensions: [
      basicSetup,
      markdown({
        base: markdownLanguage,
        codeLanguages: languages,
        addKeymap: true,
        extensions: []
      }),
      solarizedDark
    ]
  }),
  parent: elCM
})

export default editor
