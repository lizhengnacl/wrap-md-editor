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

    var defaultConfig = {
        // 组件接入方，并不需要知道具体ID
        id: 'EditorID' + new Date().getTime(),
        width: "90%",
        height: 740,
        // 静态资源路径
        path: 'https://s0.meituan.net/xm/open-platform-static/editormd/lib/',
        // theme : "dark",
        // previewTheme : "dark",
        editorTheme: "pastel-on-dark",
        markdown: 'Hello **World**!',
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

    let Editor = function (_Component) {
        _inherits(Editor, _Component);

        function Editor() {
            _classCallCheck(this, Editor);

            return _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).apply(this, arguments));
        }

        _createClass(Editor, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var { config } = this.props;
                config = (0, _objectAssign2.default)({}, defaultConfig, config);

                var {
                    id, width, height, path, theme, previewTheme, editorTheme, markdown, codeFold, syncScrolling,
                    saveHTMLToTextarea, searchReplace, watch, htmlDecode, toolbar, previewCodeHighlight, emoji,
                    taskList, tocm, tex, flowChart, sequenceDiagram, dialogLockScreen, dialogShowMask, dialogDraggable,
                    dialogMaskOpacity, dialogMaskBgColor, imageUpload, imageFormats, imageUploadURL, onload
                } = config;

                // 静态资源地址修改
                if (path !== defaultConfig.path) {
                    console.warn('Editor warning: Static resource address has changed, if you know exactly what you\'re doing, ignore this warning');
                }

                var editor = editormd(id, {
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
                var { config } = this.props;
                config = (0, _objectAssign2.default)({}, defaultConfig, config);

                return _react2.default.createElement('div', { id: config.id });
            }
        }]);

        return Editor;
    }(_react.Component);

    Object.defineProperty(Editor, 'defaultProps', {
        enumerable: true,
        writable: true,
        value: {
            config: {}
        }
    });


    var defaultShowConfig = {
        id: 'EditorShowID' + new Date().getTime(),
        path: '//s0.meituan.net/xm/open-platform-static/editormd/lib/',
        gfm: true,
        toc: true,
        tocm: true,
        tocStartLevel: 1,
        tocTitle: '目录',
        tocDropdown: true,
        tocContainer: '',
        markdown: 'what can i do for you',
        markdownSourceCode: true,
        htmlDecode: true,
        autoLoadKaTeX: true,
        pageBreak: true,
        atLink: true,
        emailLink: true,
        tex: true,
        taskList: true,
        emoji: true,
        flowChart: true,
        sequenceDiagram: true,
        previewCodeHighlight: true
    };

    let EditorShow = function (_Component2) {
        _inherits(EditorShow, _Component2);

        function EditorShow() {
            _classCallCheck(this, EditorShow);

            return _possibleConstructorReturn(this, (EditorShow.__proto__ || Object.getPrototypeOf(EditorShow)).apply(this, arguments));
        }

        _createClass(EditorShow, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var { config } = this.props;
                config = (0, _objectAssign2.default)({}, defaultShowConfig, config);

                var {
                    id, gfm, toc, tocm, tocStartLevel, tocTitle, tocDropdown, tocContainer, markdown, markdownSourceCode,
                    htmlDecode, autoLoadKaTeX, pageBreak, atLink, emailLink, tex, taskList, emoji, flowChart,
                    sequenceDiagram, previewCodeHighlight, path
                } = config;

                this._init(path, function () {
                    editormd.markdownToHTML(id, {
                        gfm: gfm,
                        toc: toc,
                        tocm: tocm,
                        tocStartLevel: tocStartLevel,
                        tocTitle: tocTitle,
                        tocDropdown: tocDropdown,
                        tocContainer: tocContainer,
                        markdown: markdown,
                        markdownSourceCode: markdownSourceCode,
                        htmlDecode: htmlDecode,
                        autoLoadKaTeX: autoLoadKaTeX,
                        pageBreak: pageBreak,
                        atLink: atLink, // for @link
                        emailLink: emailLink, // for mail address auto link
                        tex: tex,
                        taskList: taskList, // Github Flavored Markdown task lists
                        emoji: emoji,
                        flowChart: flowChart,
                        sequenceDiagram: sequenceDiagram,
                        previewCodeHighlight: previewCodeHighlight
                    });
                });
            }
        }, {
            key: '_init',
            value: function _init(path, cb) {
                function createDom(str) {
                    return document.createElement(str);
                }

                var div = createDom('div');
                var id = 'EditorInitDom' + new Date().getTime();
                div.id = id;
                div.style.display = 'none';

                var textarea = createDom('textarea');
                div.appendChild(textarea);

                document.body.appendChild(div);
                // 加载静态资源，避免手动引入
                // Editor.md如果原生支持，就不用这样hack了
                editormd(id, {
                    path: path,
                    codeFold: true,
                    saveHTMLToTextarea: true, // 保存 HTML 到 Textarea
                    searchReplace: true,
                    htmlDecode: "style,script,iframe|on*", // 开启 HTML 标签解析，为了安全性，默认不开启
                    emoji: true,
                    taskList: true,
                    tocm: true, // Using [TOCM]
                    tex: true, // 开启科学公式TeX语言支持，默认关闭
                    flowChart: true, // 开启流程图支持，默认关闭
                    sequenceDiagram: true, // 开启时序/序列图支持，默认关闭,
                    imageUpload: true,
                    imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"]
                });

                // 检测静态资源是否加载完毕
                var timer = setInterval(function () {
                    try {
                        if (_ && Diagram && flowchart) {
                            clearInterval(timer);
                            document.body.removeChild(div);

                            cb();
                        }
                    } catch (e) {}
                }, 100);
            }
        }, {
            key: 'render',
            value: function render() {
                var { config } = this.props;
                config = (0, _objectAssign2.default)({}, defaultShowConfig, config);

                var { id } = config;
                return _react2.default.createElement('div', { id: id });
            }
        }]);

        return EditorShow;
    }(_react.Component);

    Object.defineProperty(EditorShow, 'defaultProps', {
        enumerable: true,
        writable: true,
        value: {
            config: {}
        }
    });


    Editor.EditorShow = EditorShow;
    exports.default = Editor;
});