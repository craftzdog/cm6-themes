import { EditorView } from '@codemirror/view'
import { Extension } from '@codemirror/state'
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { tags as t } from '@lezer/highlight'

const base00 = '#002b36',
  base01 = '#073642',
  base02 = '#586e75',
  base03 = '#657b83',
  base04 = '#839496',
  base05 = '#93a1a1',
  base06 = '#eee8d5',
  base07 = '#fdf6e3',
  base_red = '#dc322f',
  base_orange = '#cb4b16',
  base_yellow = '#b58900',
  base_green = '#859900',
  base_cyan = '#2aa198',
  base_blue = '#268bd2',
  base_violet = '#6c71c4',
  base_magenta = '#d33682'

const invalid = '#d30102',
  stone = base04,
  darkBackground = '#00252f',
  highlightBackground = '#173541',
  background = base00,
  tooltipBackground = base01,
  selection = '#173541',
  cursor = base04

/// The editor theme styles for Solarized Dark.
export const solarizedDarkTheme = EditorView.theme(
  {
    '&': {
      color: base05,
      backgroundColor: background
    },

    '.cm-content': {
      caretColor: cursor
    },

    '.cm-cursor, .cm-dropCursor': { borderLeftColor: cursor },
    '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
      { backgroundColor: selection },

    '.cm-panels': { backgroundColor: darkBackground, color: base03 },
    '.cm-panels.cm-panels-top': { borderBottom: '2px solid black' },
    '.cm-panels.cm-panels-bottom': { borderTop: '2px solid black' },

    '.cm-searchMatch': {
      backgroundColor: '#72a1ff59',
      outline: '1px solid #457dff'
    },
    '.cm-searchMatch.cm-searchMatch-selected': {
      backgroundColor: '#6199ff2f'
    },

    '.cm-activeLine': { backgroundColor: highlightBackground },
    '.cm-selectionMatch': { backgroundColor: '#aafe661a' },

    '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
      outline: `1px solid ${base06}`
    },

    '.cm-gutters': {
      backgroundColor: darkBackground,
      color: stone,
      border: 'none'
    },

    '.cm-activeLineGutter': {
      backgroundColor: highlightBackground
    },

    '.cm-foldPlaceholder': {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#ddd'
    },

    '.cm-tooltip': {
      border: 'none',
      backgroundColor: tooltipBackground
    },
    '.cm-tooltip .cm-tooltip-arrow:before': {
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent'
    },
    '.cm-tooltip .cm-tooltip-arrow:after': {
      borderTopColor: tooltipBackground,
      borderBottomColor: tooltipBackground
    },
    '.cm-tooltip-autocomplete': {
      '& > ul > li[aria-selected]': {
        backgroundColor: highlightBackground,
        color: base03
      }
    }
  },
  { dark: true }
)

/// The highlighting style for code in the Solarized Dark theme.
export const solarizedDarkHighlightStyle = HighlightStyle.define([
  { tag: t.keyword, color: base_green },
  {
    tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
    color: base_cyan
  },
  { tag: [t.variableName], color: base05 },
  { tag: [t.function(t.variableName)], color: base_blue },
  { tag: [t.labelName], color: base_magenta },
  {
    tag: [t.color, t.constant(t.name), t.standard(t.name)],
    color: base_yellow
  },
  { tag: [t.definition(t.name), t.separator], color: base_cyan },
  { tag: [t.brace], color: base_magenta },
  {
    tag: [t.annotation],
    color: invalid
  },
  {
    tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
    color: base_magenta
  },
  {
    tag: [t.typeName, t.className],
    color: base_orange
  },
  {
    tag: [t.operator, t.operatorKeyword],
    color: base_violet
  },
  {
    tag: [t.tagName],
    color: base_blue
  },
  {
    tag: [t.squareBracket],
    color: base_red
  },
  {
    tag: [t.angleBracket],
    color: base02
  },
  {
    tag: [t.attributeName],
    color: base05
  },
  {
    tag: [t.regexp],
    color: invalid
  },
  {
    tag: [t.quote],
    color: base_green
  },
  { tag: [t.string], color: base_yellow },
  {
    tag: t.link,
    color: base_cyan,
    textDecoration: 'underline',
    textUnderlinePosition: 'under'
  },
  {
    tag: [t.url, t.escape, t.special(t.string)],
    color: base_yellow
  },
  { tag: [t.meta], color: base_red },
  { tag: [t.comment], color: base02, fontStyle: 'italic' },
  { tag: t.strong, fontWeight: 'bold', color: base06 },
  { tag: t.emphasis, fontStyle: 'italic', color: base_green },
  { tag: t.strikethrough, textDecoration: 'line-through' },
  { tag: t.heading, fontWeight: 'bold', color: base_yellow },
  { tag: t.heading1, fontWeight: 'bold', color: base07 },
  {
    tag: [t.heading2, t.heading3, t.heading4],
    fontWeight: 'bold',
    color: base06
  },
  {
    tag: [t.heading5, t.heading6],
    color: base06
  },
  { tag: [t.atom, t.bool, t.special(t.variableName)], color: base_magenta },
  {
    tag: [t.processingInstruction, t.inserted, t.contentSeparator],
    color: base_red
  },
  {
    tag: [t.contentSeparator],
    color: base_yellow
  },
  { tag: t.invalid, color: base02, borderBottom: `1px dotted ${base_red}` }
])

/// Extension to enable the Solarized Dark theme (both the editor theme and
/// the highlight style).
export const solarizedDark: Extension = [
  solarizedDarkTheme,
  syntaxHighlighting(solarizedDarkHighlightStyle)
]
