Themes for CodeMirror 6
===========================

[ [**DEMO**](https://cm6-themes.netlify.app/) ]

Themes for [CodeMirror 6](https://codemirror.net/6/).

## How to use

```js
import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import {javascript} from "@codemirror/lang-javascript"
import { solarizedDark } from 'cm6-theme-solarized-dark'

let editor = new EditorView({
  state: EditorState.create({
    doc: 'Hello',
    extensions: [
      basicSetup,
      javascript(),
      solarizedDark
    ]
  }),
  parent: document.body
})
```

Read [the CodeMirror documentation](https://codemirror.net/6/examples/styling/) for more detail about themes.

