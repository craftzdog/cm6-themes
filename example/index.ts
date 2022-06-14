import { EditorView, basicSetup } from 'codemirror'
import { EditorState } from '@codemirror/state'
import { markdown } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { markdownLanguage } from '@codemirror/lang-markdown'
import { Compartment } from '@codemirror/state'
import testDoc from './doc-example'
import themes from './themes'

const elCM = document.querySelector('#codemirror')

const themeConfig = new Compartment()

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
      themeConfig.of([themes[0]])
    ]
  }),
  parent: elCM
})

const elList = document.querySelector('#theme-list')
if (elList) {
  for (let i = 0; i < themes.length; ++i) {
    const elItem = document.createElement('option')
    elItem.setAttribute('value', i.toString())
    elItem.textContent = themes[i].name
    elList.appendChild(elItem)
  }

  elList.addEventListener('change', e => {
    if (e.currentTarget instanceof HTMLSelectElement) {
      const i = Number(e.currentTarget.value)

      editor.dispatch({
        effects: themeConfig.reconfigure([themes[i]])
      })
    }
  })
}

export default editor
