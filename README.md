### React Component Base on [Editor.md](https://github.com/pandao/editor.md)

#### The html template should includes the following tags.

```
<link rel="stylesheet" href="https://s0.meituan.net/xm/open-platform-static/editormd/css/editormd.css" />
<script src="//s0.meituan.net/xm/static/jquery/1.11.3/jquery.min.js"></script>
<script src="https://s0.meituan.net/xm/open-platform-static/editormd/editormd.js"></script>
```

### Install
```
npm install wrap-md-editor -S
```

#### Example
```
import React, {Component} from 'react';
import {render} from 'react-dom';
import Editor from 'wrap-md-editor';

render(
    <Editor config={
        {
            onload: (editor, func) => {
                let md = editor.getMarkdown();
                let html = editor.getHTML();
                debugger
            }
        }
    }/>,
    document.querySelector('#root')
);
```