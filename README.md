### React Based Wrapper for [Editor.md](https://github.com/pandao/editor.md)

#### Your HTML template should includes the following tags:

##### CSS
```
<link rel="stylesheet" href="../assets/css/editormd.css" />
```
##### JS
```
<script src="../assets/js/jquery.min.js"></script>
<script src="../assets/js/editormd.js"></script>
```

### Install
```
npm install react-editor-md
```

#### Examples

##### Edit Mode
<img src="http://7ximbf.com1.z0.glb.clouddn.com/FpaB-GQqpGZe2FMgq7kYTd1kv0By" width="850px"/>

```
import React, {Component} from 'react';
import {render} from 'react-dom';
import Editor from 'react-editor-md';

render(
    <Editor config={
        {
            markdown: // testEditor.getMarkdown().replace(/`/g, '\\`')
            `## Test
            \`\`\`
            console.log('what can i do for you')
            \`\`\`

            # 123123`,
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

##### Show Mode
<img src="http://7ximbf.com1.z0.glb.clouddn.com/FqaUzavIAfRaoEH_JubArv6fCn3I" width="850px"/>

```
import React, {Component} from 'react';
import {render} from 'react-dom';
import Editor from 'react-editor-md';

render(
    <Editor.EditorShow config={
        {
            markdown: // testEditor.getMarkdown().replace(/`/g, '\\`')
            `## Test
            \`\`\`
            console.log('what can i do for you')
            \`\`\`

            # 123123`
        }
    }/>,
    document.querySelector('#root')
);
```

#### More Information
Checkout the [Editor.md docs](https://pandao.github.io/editor.md/examples/full.html) for more information.
