'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('/Users/phbai/Documents/code/loli3/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('/Users/phbai/Documents/code/loli3/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('/Users/phbai/Documents/code/loli3/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('/Users/phbai/Documents/code/loli3/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('/Users/phbai/Documents/code/loli3/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('/Users/phbai/Documents/code/loli3/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('/Users/phbai/Documents/code/loli3/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('/Users/phbai/Documents/code/loli3/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/phbai/Documents/code/loli3/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _link = require('/Users/phbai/Documents/code/loli3/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

require('isomorphic-fetch');

var _hls = require('hls.js');

var _hls2 = _interopRequireDefault(_hls);

var _head = require('/Users/phbai/Documents/code/loli3/node_modules/next/dist/lib/head.js');

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
                var uid, token, res, data, video, hls;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                uid = localStorage.getItem("userid");
                                token = localStorage.getItem("token");

                                // 直接从 url 进入组件

                                if (uid == null || token == null) {
                                    (0, _tool2.default)();
                                }

                                _context.next = 5;
                                return fetch('http://loli.vc/play/' + this.props.id + '?uid=' + uid + '&token=' + token);

                            case 5:
                                res = _context.sent;
                                _context.next = 8;
                                return res.json();

                            case 8:
                                data = _context.sent;

                                if (!(data.Result == 0)) {
                                    _context.next = 17;
                                    break;
                                }

                                // 认证已过期, 需要重新认证
                                (0, _tool2.default)();

                                // 重新认证后发请求
                                _context.next = 13;
                                return fetch('http://loli.vc/play/' + this.props.id + '?uid=' + uid + '&token=' + token);

                            case 13:
                                res = _context.sent;
                                _context.next = 16;
                                return res.json();

                            case 16:
                                data = _context.sent;

                            case 17:

                                this.setState({ url: data.Message });

                                if (_hls2.default.isSupported()) {
                                    video = document.querySelector('.test');
                                    hls = new _hls2.default();

                                    hls.loadSource(this.state.url);
                                    hls.attachMedia(video);
                                    hls.on(_hls2.default.Events.MANIFEST_PARSED, function () {
                                        video.play();
                                    });
                                }

                            case 19:
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
                                console.log(id);

                                return _context2.abrupt('return', { id: id });

                            case 2:
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

        _this.state = { url: "" };
        return _this;
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'movie', 'data-jsx': 3605792745
            }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', {
                'data-jsx': 3605792745
            }, 'loli 3.0'), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 3605792745
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/global.css', 'data-jsx': 3605792745
            })), _react2.default.createElement(_header2.default, null), _react2.default.createElement('div', { className: 'mask', 'data-jsx': 3605792745
            }, _react2.default.createElement(_container2.default, null, _react2.default.createElement('video', { className: 'test', 'data-jsx': 3605792745
            }))), _react2.default.createElement(_style2.default, {
                styleId: 3605792745,
                css: '.test[data-jsx="3605792745"] {display: block;height: 100%;margin: 0 auto;}.mask[data-jsx="3605792745"] {height: 480px;background: #000;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL21vdmllLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFNEIsQUFDRCw4QkFDWSxlQUNGLGFBQ0UsZUFDbEIsQ0FDTSw4QkFDVyxjQUNHLGlCQUNwQiIsImZpbGUiOiJwYWdlcy9tb3ZpZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhiYWkvRG9jdW1lbnRzL2NvZGUvbG9saTMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgSGxzIGZyb20gJ2hscy5qcydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHZlcmlmeSBmcm9tICcuLi9saWIvdG9vbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcXVlcnk6IHsgaWQgfSB9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcblxuICAgICAgICByZXR1cm4ge2lkOiBpZH1cbiAgICB9XG5cbiAgICBhc3luYyBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGxldCB1aWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJpZFwiKTtcbiAgICAgICAgbGV0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcblxuICAgICAgICAvLyDnm7TmjqXku44gdXJsIOi/m+WFpee7hOS7tlxuICAgICAgICBpZiAodWlkID09IG51bGwgfHwgdG9rZW4gPT0gbnVsbCkge1xuICAgICAgICAgICAgdmVyaWZ5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2xpLnZjL3BsYXkvJHt0aGlzLnByb3BzLmlkfT91aWQ9JHt1aWR9JnRva2VuPSR7dG9rZW59YCk7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgICBpZiAoZGF0YS5SZXN1bHQgPT0gMCkge1xuICAgICAgICAgICAgLy8g6K6k6K+B5bey6L+H5pyfLCDpnIDopoHph43mlrDorqTor4FcbiAgICAgICAgICAgIHZlcmlmeSgpO1xuXG4gICAgICAgICAgICAvLyDph43mlrDorqTor4HlkI7lj5Hor7fmsYJcbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9saS52Yy9wbGF5LyR7dGhpcy5wcm9wcy5pZH0/dWlkPSR7dWlkfSZ0b2tlbj0ke3Rva2VufWApO1xuICAgICAgICAgICAgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHt1cmw6IGRhdGEuTWVzc2FnZX0pO1xuXG4gICAgICAgIGlmKEhscy5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgICB2YXIgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVzdCcpO1xuICAgICAgICAgICAgdmFyIGhscyA9IG5ldyBIbHMoKTtcbiAgICAgICAgICAgIGhscy5sb2FkU291cmNlKHRoaXMuc3RhdGUudXJsKTtcbiAgICAgICAgICAgIGhscy5hdHRhY2hNZWRpYSh2aWRlbyk7XG4gICAgICAgICAgICBobHMub24oSGxzLkV2ZW50cy5NQU5JRkVTVF9QQVJTRUQsZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt1cmw6IFwiXCJ9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWVcIj5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPmxvbGkgMy4wPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9nbG9iYWwuY3NzXCIgLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPEhlYWRlci8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hc2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2aWRlbyBjbGFzc05hbWU9XCJ0ZXN0XCI+PC92aWRlbz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAudGVzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5tYXNrIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il19 */\n/*@ sourceURL=pages/movie.js?entry */'
            }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;