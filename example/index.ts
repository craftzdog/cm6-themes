import { EditorView, basicSetup } from 'codemirror'
import { markdown } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { markdownLanguage } from '@codemirror/lang-markdown'
import { Compartment } from '@codemirror/state'
import testDoc from './doc-example'
import themes from './themes'
import { cursors } from './cursors'

const elCM = document.querySelector('#codemirror')

const themeConfig = new Compartment()
const cursorConfig = new Compartment()

let editor = new EditorView({
  doc: testDoc,
  extensions: [
    basicSetup,
    markdown({
      base: markdownLanguage,
      codeLanguages: languages,
      addKeymap: true,
      extensions: []
    }),
    themeConfig.of([themes[0]]),
    cursorConfig.of([cursors[0]])
  ],
  parent: (elCM as HTMLElement)
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

const cursorList = document.querySelector('#cursor-list');
if(cursorList) {
  for(let i = 0; i < cursors.length; i++) {
    const cursorItem = document.createElement('option') as HTMLOptionElement;
    cursorItem.setAttribute('value', i.toString());
    cursorItem.textContent = cursors[i].cursor;
    cursorList.appendChild(cursorItem);
  }

  cursorList.addEventListener('change', (e) => {
    if(e.currentTarget instanceof HTMLSelectElement) {
      const i = Number(e.currentTarget.value);

      editor.dispatch({
        effects: cursorConfig.reconfigure(cursors[i])
      });
    }
  });
}

export default editor
