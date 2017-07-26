/**
 * * Created by lizheng11
 * Date: 2017/7/26
 */
'use strict';

// 手动引入所有需要的静态资源
require('./bower_components/editor.md/css/editormd.css');
var editormd = require('./bower_components/editor.md/editormd');

// 可能其他地方已经引入，这么做，可以合并打包
require('jquery');
require('underscore');

// codemirror
require('./bower_components/editor.md/lib/codemirror/codemirror.min.js');
require('./bower_components/editor.md/lib/codemirror/modes.min.js');
require('./bower_components/editor.md/lib/codemirror/addons.min.js');

// lib
require('./bower_components/editor.md/lib/flowchart.min');
require('./bower_components/editor.md/lib/jquery.flowchart.min');
require('./bower_components/editor.md/lib/marked.min');
require('./bower_components/editor.md/lib/prettify.min');
require('./bower_components/editor.md/lib/raphael.min');
require('./bower_components/editor.md/lib/sequence-diagram.min');

// katex
require('./lib/katex.min.js');

module.exports = {
    editormd: editormd
};