import { EditorView } from '@codemirror/view';
import { Extension } from '@codemirror/state';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';

import { toJSON } from 'css-convert-json';
import bootstrap from 'bootstrap/dist/css/bootstrap.css?raw';

/** Bootstrap theme */
const style = toJSON(bootstrap).children;

/** Root theme */
const root = style[':root'].attributes;
// console.log(root);

const blue = root['--bs-blue'];
const indigo = root['--bs-indigo'];
const purple = root['--bs-purple'];
const pink = root['--bs-pink'];
const red = root['--bs-red'];
const orange = root['--bs-orange'];
const yellow = root['--bs-yellow'];
const green = root['--bs-green']; // Brightened compared to original to increase contrast
const teal = root['--bs-teal'];
const cyan = root['--bs-cyan'];
const invalid = root['--bs-white'];
const dark = root['--bs-dark'];
// const light = root['--bs-light'];
const white = root['--bs-white'];
const black = root['--bs-black'];
const gray = [
  '--bs-white', // this line is dummy :P
  '--bs-gray-100',
  '--bs-gray-200',
  '--bs-gray-300',
  '--bs-gray-400',
  '--bs-gray-500',
  '--bs-gray-600',
  '--bs-gray-700',
  '--bs-gray-800',
  '--bs-gray-900',
];

// bootstrap
export const bootstrapTheme: Extension = EditorView.theme(
  {
    '&.cm-editor': {
      ...style['.form-control'].attributes,
      '&.cm-focused': {
        ...style['.form-control:focus'].attributes,
      },
    },
    '.cm-scroller': {
      fontFamily: root['--bs-font-monospace'],
      lineHeight: root['--bs-body-line-height'],
    },
    '.cm-content': { caretColor: black },
    '.cm-selectionBackground': {
      background: gray[3],
    },
    '.cm-focused .cm-selectionBackground': {
      background: dark,
    },
    '.cm-cursor, .cm-dropCursor': {
      borderLeft: '1.2px solid ' + gray[9],
    },
    '.cm-activeLine': {
      backgroundColor: gray[1],
    },
    '.cm-specialChar': {
      color: red,
    },
    '.cm-gutters': {
      backgroundColor: gray[1],
      color: gray[6],
      borderRight: '1px solid ' + gray[3],
    },
    '.cm-activeLineGutter': {
      backgroundColor: gray[2],
    },
    '.cm-panels': {
      backgroundColor: gray[1],
      color: black,
    },
    '.cm-panels-top': {
      borderBottom: '1px solid ' + gray[3],
    },
    '.cm-panels-bottom': {
      borderTop: '1px solid ' + gray[3],
    },
    '.cm-placeholder': {
      color: gray[6],
    },
    '.cm-button': {
      ...style['.btn'].attributes,
      ...style['.btn-outline-secondary'].attributes,
      backgroundImage: 'none',
      '&:hover': {
        ...style['.btn:hover'].attributes,
      },
    },
    '.cm-textfield': {
      ...style['.form-control'].attributes,
      '&.cm-focused': {
        ...style['.form-control:focus'].attributes,
      },
    },
    'input[type="checkbox"]': {
      ...style['.form-check-input'].attributes,
    },
  },
  { dark: false }
);

export const bootstrapThemeDark: Extension = EditorView.theme(
  {
    '&.cm-editor': {
      ...style['.form-control'].attributes,
      '&.cm-focused': {
        ...style['.form-control:focus'].attributes,
      },
    },
    '.cm-scroller': {
      fontFamily: root['--bs-font-monospace'],
      lineHeight: root['--bs-body-line-height'],
    },
    '.cm-content': { caretColor: white },
    '.cm-selectionBackground': {
      background: gray[9],
    },
    '.cm-focused .cm-selectionBackground': {
      background: root['--bs-light'],
    },
    '.cm-cursor, .cm-dropCursor': {
      borderLeft: '1.2px solid ' + gray[9],
    },
    '.cm-cursor': {
      borderLeftColor: gray[7],
    },
    '.cm-activeLine': {
      backgroundColor: gray[9],
    },
    '.cm-specialChar': { color: red },
    '.cm-gutters': {
      backgroundColor: gray[8],
      color: gray[4],
    },
    '.cm-activeLineGutter': {
      backgroundColor: gray[9],
    },
    '.cm-panels': {
      backgroundColor: gray[8],
      color: white,
    },
    '.cm-placeholder': {
      color: gray[6],
    },
    '.cm-button': {
      ...style['.btn'].attributes,
      ...style['.btn-secondary'].attributes,
      backgroundImage: 'none',
      '&:hover': {
        ...style['.btn:hover'].attributes,
      },
    },
    '.cm-textfield': {
      ...style['.form-control'].attributes,

      '&.cm-focused': {
        ...style['.form-control:focus'].attributes,
      },
    },
    'input[type="checkbox"]': {
      ...style['.form-check-input'].attributes,
    },
  },
  { dark: true }
);

// / The highlighting style for code in the One Dark theme.
export const bootstrapHighlightStyle = HighlightStyle.define([
  { tag: t.keyword, color: purple },
  {
    tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
    color: pink,
  },
  { tag: [t.function(t.variableName), t.labelName], color: blue },
  { tag: [t.color, t.constant(t.name), t.standard(t.name)], color: orange },
  { tag: [t.definition(t.name), t.separator], color: indigo },
  {
    tag: [
      t.typeName,
      t.className,
      t.number,
      t.changed,
      t.annotation,
      t.modifier,
      t.self,
      t.namespace,
    ],
    color: yellow,
  },
  {
    tag: [
      t.operator,
      t.operatorKeyword,
      t.url,
      t.escape,
      t.regexp,
      t.link,
      t.special(t.string),
    ],
    color: cyan,
  },
  { tag: [t.meta, t.comment], color: green },
  { tag: t.strong, fontWeight: 'bold' },
  { tag: t.emphasis, fontStyle: 'italic' },
  { tag: t.strikethrough, textDecoration: 'line-through' },
  { tag: t.link, color: green, textDecoration: 'underline' },
  { tag: t.heading, fontWeight: 'bold', color: pink },
  { tag: [t.atom, t.bool, t.special(t.variableName)], color: orange },
  { tag: [t.processingInstruction, t.string, t.inserted], color: teal },
  { tag: t.invalid, color: invalid },
]);

export const Bootstrap: Extension = [
  bootstrapTheme,
  syntaxHighlighting(bootstrapHighlightStyle),
];

export const BootstrapDark: Extension = [
  bootstrapThemeDark,
  syntaxHighlighting(bootstrapHighlightStyle),
];
