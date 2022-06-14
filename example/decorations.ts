import {
  EditorView,
  ViewPlugin,
  Decoration,
  DecorationSet,
  ViewUpdate
} from '@codemirror/view'
import { syntaxTree } from '@codemirror/language'

export const codeblockTheme = EditorView.baseTheme({
  '.cm-codeblock': { background: '#00000020' }
})

const codeblockHighlight = Decoration.line({ class: 'cm-codeblock' })

function codeblocks(view: EditorView) {
  let decos = []
  for (let { from, to } of view.visibleRanges) {
    syntaxTree(view.state).iterate({
      from,
      to,
      enter: node => {
        const lineFrom = view.state.doc.lineAt(node.from)
        const lineTo = view.state.doc.lineAt(node.to)
        if (node.type.name == 'FencedCode')
          for (let i = lineFrom.number; i <= lineTo.number; ++i) {
            const line = view.state.doc.line(i)
            decos.push(codeblockHighlight.range(line.from))
          }
      }
    })
  }
  return Decoration.set(decos)
}

export const codeblockPlugin = ViewPlugin.fromClass(
  class {
    decorations: DecorationSet

    constructor(view: EditorView) {
      this.decorations = codeblocks(view)
    }

    update(update: ViewUpdate) {
      if (update.docChanged || update.viewportChanged)
        this.decorations = codeblocks(update.view)
    }
  },
  {
    decorations: v => v.decorations
  }
)
