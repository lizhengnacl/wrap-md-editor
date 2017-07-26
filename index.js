/**
 * * Created by lizheng11
 * Date: 2017/7/26
 */
'use strict';

// 手动引入所有需要的静态资源
require('./bower_components/editor.md/css/editormd.css');
var editormd = require('./bower_components/editor.md/editormd');

// jQuery可能其他地方已经引入，这么做，可以合并打包
require('jquery');

// codemirror
require('./bower_components/editor.md/lib/codemirror/codemirror.min.js');
require('./bower_components/editor.md/lib/codemirror/modes.min.js');
require('./bower_components/editor.md/lib/codemirror/addons.min.js');

// katex
require('./lib/katex.min.js');

require('require-all')({
    dirname: __dirname + './bower_components/editor.md/lib',
    // 过滤得到文件
    filter: /(.+)\.js$/,
});

module.exports = {
    editormd: editormd
};