/**
 * * Created by lizheng11
 * Date: 2017/7/26
 * editormd 为 editor.md 挂载的全局变量 https://pandao.github.io/editor.md/examples/index.html
 *
 * 使用方法在html中挂在三个标签
 * <link rel="stylesheet" href="https://s0.meituan.net/xm/open-platform-static/editormd/css/editormd.css" />
 * <script src="//s0.meituan.net/xm/static/jquery/1.11.3/jquery.min.js"></script>
 * <script src="https://s0.meituan.net/xm/open-platform-static/editormd/editormd.js"></script>
 */

'use strict';
import React, {Component} from 'react';
import assign from 'object-assign';

let defaultValue = {
    id: 'op-editormd',
    width: "90%",
    height: 740,
    // 静态资源路径
    path: 'https://s0.meituan.net/xm/open-platform-static/editormd/lib/',
    // theme : "dark",
    // previewTheme : "dark",
    // editorTheme : "pastel-on-dark",
    markdown: // testEditor.getMarkdown().replace(/`/g, '\\`')
`## 因果循环
\`\`\`
console.log(123123)1
\`\`\`

# 123123`,
    codeFold: true,
    // syncScrolling : false,
    saveHTMLToTextarea: true,    // 保存 HTML 到 Textarea
    searchReplace: true,
    // watch : false,                // 关闭实时预览
    htmlDecode: "style,script,iframe|on*",            // 开启 HTML 标签解析，为了安全性，默认不开启
    // toolbar  : false,             //关闭工具栏
    // previewCodeHighlight : false, // 关闭预览 HTML 的代码块高亮，默认开启
    emoji: true,
    taskList: true,
    tocm: true,         // Using [TOCM]
    tex: true,                   // 开启科学公式TeX语言支持，默认关闭
    flowChart: true,             // 开启流程图支持，默认关闭
    sequenceDiagram: true,       // 开启时序/序列图支持，默认关闭,
    // dialogLockScreen : false,   // 设置弹出层对话框不锁屏，全局通用，默认为true
    // dialogShowMask : false,     // 设置弹出层对话框显示透明遮罩层，全局通用，默认为true
    // dialogDraggable : false,    // 设置弹出层对话框不可拖动，全局通用，默认为true
    // dialogMaskOpacity : 0.4,    // 设置透明遮罩层的透明度，全局通用，默认值为0.1
    // dialogMaskBgColor : "#000", // 设置透明遮罩层的背景颜色，全局通用，默认为#fff
    imageUpload: true,
    imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
    imageUploadURL: "./php/upload.php",
    onload: function(){}
};
export default class EditorMD extends Component {
    static defaultProps = {
        config: {}
    };

    componentDidMount(){
        let {config} = this.props;
        config = assign({}, defaultValue, config);

        let {
            id, width, height, path, theme, previewTheme, editorTheme, markdown, codeFold, syncScrolling,
            saveHTMLToTextarea, searchReplace, watch, htmlDecode, toolbar, previewCodeHighlight, emoji,
            taskList, tocm, tex, flowChart, sequenceDiagram, dialogLockScreen, dialogShowMask, dialogDraggable,
            dialogMaskOpacity, dialogMaskBgColor, imageUpload, imageFormats, imageUploadURL, onload
        } = config;

        let editor = editormd(id, {
            width: width,
            height: height,
            path: path,
            theme: theme,
            previewTheme: previewTheme,
            editorTheme: editorTheme,
            markdown: markdown,
            codeFold: codeFold,
            syncScrolling: syncScrolling,
            saveHTMLToTextarea: saveHTMLToTextarea,    // 保存 HTML 到 Textarea
            searchReplace: searchReplace,
            watch: watch,                // 关闭实时预览
            htmlDecode: htmlDecode,            // 开启 HTML 标签解析，为了安全性，默认不开启
            toolbar: toolbar,             //关闭工具栏
            previewCodeHighlight: previewCodeHighlight, // 关闭预览 HTML 的代码块高亮，默认开启
            emoji: emoji,
            taskList: taskList,
            tocm: tocm,         // Using [TOCM]
            tex: tex,                   // 开启科学公式TeX语言支持，默认关闭
            flowChart: flowChart,             // 开启流程图支持，默认关闭
            sequenceDiagram: sequenceDiagram,       // 开启时序/序列图支持，默认关闭,
            dialogLockScreen: dialogLockScreen,   // 设置弹出层对话框不锁屏，全局通用，默认为true
            dialogShowMask: dialogShowMask,     // 设置弹出层对话框显示透明遮罩层，全局通用，默认为true
            dialogDraggable: dialogDraggable,    // 设置弹出层对话框不可拖动，全局通用，默认为true
            dialogMaskOpacity: dialogMaskOpacity,    // 设置透明遮罩层的透明度，全局通用，默认值为0.1
            dialogMaskBgColor: dialogMaskBgColor, // 设置透明遮罩层的背景颜色，全局通用，默认为#fff
            imageUpload: imageUpload,
            imageFormats: imageFormats,
            imageUploadURL: imageUploadURL,
            onload: function(){
                onload(editor, this);
            }
        });
    }

    render(){
        let {config} = this.props;
        config = assign({}, defaultValue, config);

        return (<div id={config.id}></div>);
    }
}