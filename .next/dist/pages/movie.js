'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\react\\react.js');

var _react2 = _interopRequireDefault(_react);

var _link = require('C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

require('isomorphic-fetch');

var _hls = require('hls.js');

var _hls2 = _interopRequireDefault(_hls);

var _head = require('C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

var _container = require('../components/container');

var _container2 = _interopRequireDefault(_container);

var _tool = require('../lib/tool');

var _tool2 = _interopRequireDefault(_tool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    (0, _createClass3.default)(_class, [{
        key: 'componentWillMount',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                var uid, token, res, res2, data, info, video, hls, m3u8Url;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                uid = localStorage.getItem("userid");
                                token = localStorage.getItem("token");

                                // 直接从 url 进入组件

                                if (uid == null || token == null) {
                                    (0, _tool2.default)();
                                    uid = localStorage.getItem("userid");
                                    token = localStorage.getItem("token");
                                }

                                _context.next = 5;
                                return fetch('https://loliapi.com/play/' + this.props.id + '?uid=' + uid + '&token=' + token);

                            case 5:
                                res = _context.sent;
                                _context.next = 8;
                                return fetch('https://loliapi.com/info/' + this.props.id);

                            case 8:
                                res2 = _context.sent;
                                _context.next = 11;
                                return res.json();

                            case 11:
                                data = _context.sent;
                                _context.next = 14;
                                return res2.json();

                            case 14:
                                info = _context.sent;

                                if (!(data.Result == 0)) {
                                    _context.next = 25;
                                    break;
                                }

                                // 认证已过期, 需要重新认证
                                (0, _tool2.default)();
                                uid = localStorage.getItem("userid");
                                token = localStorage.getItem("token");

                                // 重新认证后发请求
                                _context.next = 21;
                                return fetch('https://loliapi.com/play/' + this.props.id + '?uid=' + uid + '&token=' + token);

                            case 21:
                                res = _context.sent;
                                _context.next = 24;
                                return res.json();

                            case 24:
                                data = _context.sent;

                            case 25:

                                this.setState({ url: data.Message });
                                this.setState({ info: info.Message });

                                if (_hls2.default.isSupported()) {
                                    video = document.querySelector('.test');
                                    hls = new _hls2.default();
                                    // var m3u8Url = decodeURIComponent("https://loliapi.com/cors/" + this.state.url);

                                    m3u8Url = this.state.url;

                                    hls.loadSource(m3u8Url);
                                    hls.attachMedia(video);
                                    hls.on(_hls2.default.Events.MANIFEST_PARSED, function () {
                                        video.play();
                                    });
                                }

                            case 28:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentWillMount() {
                return _ref.apply(this, arguments);
            }

            return componentWillMount;
        }()
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_ref3) {
                var id = _ref3.query.id;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                return _context2.abrupt('return', { id: id });

                            case 1:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

        _this.state = { url: "", info: {} };
        return _this;
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'movie', 'data-jsx': 3448864484
            }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', {
                'data-jsx': 3448864484
            }, this.state.info.Name), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 3448864484
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/global.css', 'data-jsx': 3448864484
            })), _react2.default.createElement(_header2.default, null), _react2.default.createElement('div', { className: 'mask', 'data-jsx': 3448864484
            }, _react2.default.createElement(_container2.default, { flex: true }, _react2.default.createElement('video', { className: 'test', 'data-jsx': 3448864484
            }))), _react2.default.createElement(_style2.default, {
                styleId: 3448864484,
                css: '.test[data-jsx="3448864484"] {display: block;height: 100%;margin: 0 auto;}.mask[data-jsx="3448864484"] {background: #000;}@media screen and (min-height: 630px) and (min-width: 1294px) {.mask[data-jsx="3448864484"] {height: 480px;}}@media screen and (min-height: 870px) and (min-width: 1320px) {.mask[data-jsx="3448864484"] {height: 720px;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxtb3ZpZS5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RTRCLEFBQ0QsOEJBQ1ksZUFDRixhQUNFLGVBQ2xCLENBQ00sOEJBQ2MsaUJBQ3BCLENBQzhELCtEQUNwRCw4QkFDVyxjQUNqQixDQUNKLENBQzhELCtEQUNwRCw4QkFDVyxjQUNqQixDQUNKIiwiZmlsZSI6InBhZ2VzXFxtb3ZpZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BYmFpanVuL0RvY3VtZW50cy9HaXRIdWIvbG9saSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXHJcbmltcG9ydCBIbHMgZnJvbSAnaGxzLmpzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXHJcbmltcG9ydCB2ZXJpZnkgZnJvbSAnLi4vbGliL3Rvb2wnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHF1ZXJ5OiB7IGlkIH0gfSkge1xyXG4gICAgICAgIHJldHVybiB7aWQ6IGlkfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICBsZXQgdWlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyaWRcIik7XHJcbiAgICAgICAgbGV0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuXHJcbiAgICAgICAgLy8g55u05o6l5LuOIHVybCDov5vlhaXnu4Tku7ZcclxuICAgICAgICBpZiAodWlkID09IG51bGwgfHwgdG9rZW4gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2ZXJpZnkoKTtcclxuICAgICAgICAgICAgdWlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyaWRcIik7XHJcbiAgICAgICAgICAgIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9sb2xpYXBpLmNvbS9wbGF5LyR7dGhpcy5wcm9wcy5pZH0/dWlkPSR7dWlkfSZ0b2tlbj0ke3Rva2VufWApO1xyXG4gICAgICAgIGxldCByZXMyID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vbG9saWFwaS5jb20vaW5mby8ke3RoaXMucHJvcHMuaWR9YCk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIGxldCBpbmZvID0gYXdhaXQgcmVzMi5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLlJlc3VsdCA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIOiupOivgeW3sui/h+acnywg6ZyA6KaB6YeN5paw6K6k6K+BXHJcbiAgICAgICAgICAgIHZlcmlmeSgpO1xyXG4gICAgICAgICAgICB1aWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJpZFwiKTtcclxuICAgICAgICAgICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8g6YeN5paw6K6k6K+B5ZCO5Y+R6K+35rGCXHJcbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2xvbGlhcGkuY29tL3BsYXkvJHt0aGlzLnByb3BzLmlkfT91aWQ9JHt1aWR9JnRva2VuPSR7dG9rZW59YCk7XHJcbiAgICAgICAgICAgIGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXJsOiBkYXRhLk1lc3NhZ2V9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpbmZvOiBpbmZvLk1lc3NhZ2V9KTtcclxuXHJcbiAgICAgICAgaWYoSGxzLmlzU3VwcG9ydGVkKCkpIHtcclxuICAgICAgICAgICAgdmFyIHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlc3QnKTtcclxuICAgICAgICAgICAgdmFyIGhscyA9IG5ldyBIbHMoKTtcclxuICAgICAgICAgICAgLy8gdmFyIG0zdThVcmwgPSBkZWNvZGVVUklDb21wb25lbnQoXCJodHRwczovL2xvbGlhcGkuY29tL2NvcnMvXCIgKyB0aGlzLnN0YXRlLnVybCk7XHJcbiAgICAgICAgICAgIHZhciBtM3U4VXJsID0gdGhpcy5zdGF0ZS51cmw7XHJcbiAgICAgICAgICAgIGhscy5sb2FkU291cmNlKG0zdThVcmwpO1xyXG4gICAgICAgICAgICBobHMuYXR0YWNoTWVkaWEodmlkZW8pO1xyXG4gICAgICAgICAgICBobHMub24oSGxzLkV2ZW50cy5NQU5JRkVTVF9QQVJTRUQsZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7dXJsOiBcIlwiLCBpbmZvOiB7fX07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWVcIj5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT57dGhpcy5zdGF0ZS5pbmZvLk5hbWV9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvZ2xvYmFsLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hc2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsZXg9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dmlkZW8gY2xhc3NOYW1lPVwidGVzdFwiPjwvdmlkZW8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDYzMHB4KSBhbmQgKG1pbi13aWR0aDogMTI5NHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDg3MHB4KSBhbmQgKG1pbi13aWR0aDogMTMyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=pages\\movie.js?entry */'
            }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;