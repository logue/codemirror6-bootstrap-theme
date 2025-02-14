# Bootstrap Theme for CodeMirror6

[![jsdelivr CDN](https://data.jsdelivr.com/v1/package/npm/codemirror6-bootstrap-theme/badge)](https://www.jsdelivr.com/package/npm/codemirror6-bootstrap-theme)
[![NPM Downloads](https://img.shields.io/npm/dm/codemirror6-bootstrap-theme.svg?style=flat)](https://www.npmjs.com/package/codemirror6-bootstrap-theme)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/codemirror6-bootstrap-theme/file/README.md)
[![npm version](https://img.shields.io/npm/v/codemirror6-bootstrap-theme.svg)](https://www.npmjs.com/package/codemirror6-bootstrap-theme)
[![Open in Gitpod](https://shields.io/badge/Open%20in-Gitpod-green?logo=Gitpod)](https://gitpod.io/#https://github.com/logue/codemirror6-bootstrap-theme)
[![Open in Codeanywhere](https://img.shields.io/badge/Open%20in-Codeanywhere-blue?style=flat-square&logo=codeanywhere)](https://app.codeanywhere.com/#https://github.com/logue/codemirror6-bootstrap-theme)

[Bootstrap5](https://getbootstrap.com/) Theme for [CodeMirror6](https://codemirror.net/).

![image](https://user-images.githubusercontent.com/480173/174700631-d8379d46-ed33-4363-a8c4-e602ed8d9024.png)

## Usage

```js
import { basicSetup, EditorView } from 'codemirror';
import { Bootstrap } from 'codemirror6-bootstrap-theme';

new EditorView({
  doc: `色は匂へど　散りぬるを
我が世誰ぞ　常ならむ
有為の奥山　今日越えて
浅き夢見じ　酔ひもせず`,
  extensions: [basicSetup, Bootstrap],
  parent: document.getElementById('app'),
});
```

## API Reference

@BootstrapTheme

@BootstrapDarkTheme

## LICENSE

[MIT](LICENSE)
