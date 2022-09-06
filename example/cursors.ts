import { EditorView } from '@codemirror/view'
import { Extension } from '@codemirror/state'

//cursor colour
const base01 = '#DDDDDD';
const cursor = base01;

//default cursor 
const defaultCursor = EditorView.theme({
    '.cm-cursor, .cm-dropCursor': { borderLeftColor: cursor }
});

//block cursor
const blockCursor = EditorView.theme({
    '.cm-cursor, .cm-dropCursor': { borderLeftColor: cursor, borderLeft: "0px solid", borderRight: "0.6em solid", opacity: "0.7" }
});

//default cursor extension
const defaultCursorMod: Extension = [
    defaultCursor, 
];
  
//block cursor extension
const blockCursorMod: Extension = [
    blockCursor,
];

//export cursors
export const cursors = [
    {
        extension: defaultCursorMod,
        cursor: 'Default Cursor'
    },
    {
        extension: blockCursorMod,
        cursor: 'Block Cursor'
    }
];

