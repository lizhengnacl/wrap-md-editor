(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'object-assign'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('object-assign'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.objectAssign);
        global.index = mod.exports;
    }
})(this, function (exports, _react, _objectAssign) {
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

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _objectAssign2 = _interopRequireDefault(_objectAssign);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

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
        saveHTMLToTextarea: true, // 保存 HTML 到 Textarea
        searchReplace: true,
        // watch : false,                // 关闭实时预览
        htmlDecode: "style,script,iframe|on*", // 开启 HTML 标签解析，为了安全性，默认不开启
        // toolbar  : false,             //关闭工具栏
        // previewCodeHighlight : false, // 关闭预览 HTML 的代码块高亮，默认开启
        emoji: true,
        taskList: true,
        tocm: true, // Using [TOCM]
        tex: true, // 开启科学公式TeX语言支持，默认关闭
        flowChart: true, // 开启流程图支持，默认关闭
        sequenceDiagram: true, // 开启时序/序列图支持，默认关闭,
        // dialogLockScreen : false,   // 设置弹出层对话框不锁屏，全局通用，默认为true
        // dialogShowMask : false,     // 设置弹出层对话框显示透明遮罩层，全局通用，默认为true
        // dialogDraggable : false,    // 设置弹出层对话框不可拖动，全局通用，默认为true
        // dialogMaskOpacity : 0.4,    // 设置透明遮罩层的透明度，全局通用，默认值为0.1
        // dialogMaskBgColor : "#000", // 设置透明遮罩层的背景颜色，全局通用，默认为#fff
        imageUpload: true,
        imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
        imageUploadURL: "./php/upload.php",
        onload: function () {}
    };

    let EditorMD = function (_Component) {
        _inherits(EditorMD, _Component);

        function EditorMD() {
            _classCallCheck(this, EditorMD);

            return _possibleConstructorReturn(this, (EditorMD.__proto__ || Object.getPrototypeOf(EditorMD)).apply(this, arguments));
        }

        _createClass(EditorMD, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                let { config } = this.props;
                config = (0, _objectAssign2.default)({}, defaultValue, config);

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
                    saveHTMLToTextarea: saveHTMLToTextarea, // 保存 HTML 到 Textarea
                    searchReplace: searchReplace,
                    watch: watch, // 关闭实时预览
                    htmlDecode: htmlDecode, // 开启 HTML 标签解析，为了安全性，默认不开启
                    toolbar: toolbar, //关闭工具栏
                    previewCodeHighlight: previewCodeHighlight, // 关闭预览 HTML 的代码块高亮，默认开启
                    emoji: emoji,
                    taskList: taskList,
                    tocm: tocm, // Using [TOCM]
                    tex: tex, // 开启科学公式TeX语言支持，默认关闭
                    flowChart: flowChart, // 开启流程图支持，默认关闭
                    sequenceDiagram: sequenceDiagram, // 开启时序/序列图支持，默认关闭,
                    dialogLockScreen: dialogLockScreen, // 设置弹出层对话框不锁屏，全局通用，默认为true
                    dialogShowMask: dialogShowMask, // 设置弹出层对话框显示透明遮罩层，全局通用，默认为true
                    dialogDraggable: dialogDraggable, // 设置弹出层对话框不可拖动，全局通用，默认为true
                    dialogMaskOpacity: dialogMaskOpacity, // 设置透明遮罩层的透明度，全局通用，默认值为0.1
                    dialogMaskBgColor: dialogMaskBgColor, // 设置透明遮罩层的背景颜色，全局通用，默认为#fff
                    imageUpload: imageUpload,
                    imageFormats: imageFormats,
                    imageUploadURL: imageUploadURL,
                    onload: function () {
                        onload(editor, this);
                    }
                });
            }
        }, {
            key: 'render',
            value: function render() {
                let { config } = this.props;
                config = (0, _objectAssign2.default)({}, defaultValue, config);

                return _react2.default.createElement('div', { id: config.id });
            }
        }]);

        return EditorMD;
    }(_react.Component);

    Object.defineProperty(EditorMD, 'defaultProps', {
        enumerable: true,
        writable: true,
        value: {
            config: {}
        }
    });
    exports.default = EditorMD;
});