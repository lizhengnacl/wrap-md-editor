### React Component Based on [Editor.md](https://github.com/pandao/editor.md)

#### The html template should includes the following tags.

css
```
<link rel="stylesheet" href="https://s0.meituan.net/xm/open-platform-static/editormd/css/editormd.css" />
```
js
```
<script src="//s0.meituan.net/xm/static/jquery/1.11.3/jquery.min.js"></script>

<!--show mode start-->
<!-- if you do not need the show mode, you can ignore these tags.-->
<script src="//s0.meituan.net/xm/open-platform-static/editormd/lib/marked.min.js"></script>
<script src="//s0.meituan.net/xm/open-platform-static/editormd/lib/prettify.min.js"></script>
<script src="//s0.meituan.net/xm/open-platform-static/editormd/lib/raphael.min.js"></script>
<script src="//s0.meituan.net/xm/open-platform-static/editormd/lib/underscore.min.js"></script>
<script src="//s0.meituan.net/xm/open-platform-static/editormd/lib/sequence-diagram.min.js"></script>
<script src="//s0.meituan.net/xm/open-platform-static/editormd/lib/flowchart.min.js"></script>
<script src="//s0.meituan.net/xm/open-platform-static/editormd/lib/jquery.flowchart.min.js"></script>
<!--show mode end-->

<script src="https://s0.meituan.net/xm/open-platform-static/editormd/editormd.js"></script>
```

### Install
```
npm install wrap-md-editor -S
```

#### Example

the edit mode
<img src="http://7ximbf.com1.z0.glb.clouddn.com/FpaB-GQqpGZe2FMgq7kYTd1kv0By" width="850px"/>
```
import React, {Component} from 'react';
import {render} from 'react-dom';
import Editor from 'wrap-md-editor';

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
the show mode
<img src="http://7ximbf.com1.z0.glb.clouddn.com/FqaUzavIAfRaoEH_JubArv6fCn3I" width="850px"/>
```
import React, {Component} from 'react';
import {render} from 'react-dom';
import Editor from 'wrap-md-editor';

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
#### Doc
Read the [document](https://pandao.github.io/editor.md/examples/full.html) for detail.