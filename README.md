### React Component Based on [Editor.md](https://github.com/pandao/editor.md)

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
            id: 'op-editormd',
            width: "90%",
            height: 740,
            path: 'https://s0.meituan.net/xm/open-platform-static/editormd/lib/',
            // theme : "dark",
            // previewTheme : "dark",
            // editorTheme : "pastel-on-dark",
            markdown: // testEditor.getMarkdown().replace(/`/g, '\\`')
            `## Test
            \`\`\`
            console.log('what can i do for you')
            \`\`\`
            
            # 123123`,
            codeFold: true,
            // syncScrolling : false,
            saveHTMLToTextarea: true,    
            searchReplace: true,
            // watch : false,                
            htmlDecode: "style,script,iframe|on*",         
            // toolbar  : false,             
            // previewCodeHighlight : false, 
            emoji: true,
            taskList: true,
            tocm: true,         
            tex: true,                  
            flowChart: true,             
            sequenceDiagram: true,       
            // dialogLockScreen : false,   
            // dialogShowMask : false,     
            // dialogDraggable : false,    
            // dialogMaskOpacity : 0.4,    
            // dialogMaskBgColor : "#000", 
            imageUpload: true,
            imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
            imageUploadURL: "./php/upload.php",
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
#### Doc
Read the [document](https://pandao.github.io/editor.md/examples/full.html) for detail.