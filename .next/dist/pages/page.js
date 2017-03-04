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

var _container = require('../components/container');

var _container2 = _interopRequireDefault(_container);

var _movieItem = require('../components/movieItem');

var _movieItem2 = _interopRequireDefault(_movieItem);

var _head = require('C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    (0, _createClass3.default)(_class, null, [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
                var page = _ref2.query.page;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log(page);

                                return _context.abrupt('return', { page: page });

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

        _this.state = { movies: [] };
        return _this;
    }

    (0, _createClass3.default)(_class, [{
        key: 'componentWillMount',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
                var page, res, json;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                page = this.props.page;
                                _context2.next = 3;
                                return fetch('http://loli.vc/category/-1?page=' + page);

                            case 3:
                                res = _context2.sent;
                                _context2.next = 6;
                                return res.json();

                            case 6:
                                json = _context2.sent;

                                this.setState({ movies: json.Message.Movies });

                            case 8:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function componentWillMount() {
                return _ref3.apply(this, arguments);
            }

            return componentWillMount;
        }()
    }, {
        key: 'render',
        value: function render() {
            // console.log(this.state.movies);
            var movieList = this.state.movies.map(function (movie) {
                return _react2.default.createElement(_movieItem2.default, { key: movie.MovieID, movieInfo: movie });
            });

            return _react2.default.createElement('div', { className: 'content', 'data-jsx': 3532982488
            }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', {
                'data-jsx': 3532982488
            }, 'loli 3.0'), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 3532982488
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/global.css', 'data-jsx': 3532982488
            })), _react2.default.createElement(_header2.default, null), _react2.default.createElement('div', { className: 'container', 'data-jsx': 3532982488
            }, movieList), _react2.default.createElement(_style2.default, {
                styleId: 3532982488,
                css: '.content[data-jsx="3532982488"] {background: #f5f5f5;width: 100%;min-height: 800px;}.container[data-jsx="3532982488"] {display:-webkit-flex; display:flex;justify-content: space-between;width: 1050px;height: 100%;margin: 0 auto;padding-top: 9px;padding-bottom: 9px;-webkit-flex-flow: row wrap;-moz-flex-flow: row wrap;flex-flow: row wrap;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwYWdlLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdENEIsQUFDRSxpQ0FDYyxvQkFDUixZQUNNLGtCQUNyQixDQUNXLG1DQUNNLG1DQUNpQiwrQkFDakIsY0FDRCxhQUNFLGVBQ0UsaUJBQ0csb0JBQ0EseUVBQ3ZCIiwiZmlsZSI6InBhZ2VzXFxwYWdlLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FiYWlqdW4vRG9jdW1lbnRzL0dpdEh1Yi9sb2xpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXHJcbmltcG9ydCBNb3ZpZUl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9tb3ZpZUl0ZW0nXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyBxdWVyeTogeyBwYWdlIH0gfSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xyXG5cclxuICAgICAgICByZXR1cm4ge3BhZ2U6IHBhZ2V9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge21vdmllczogW119XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLnByb3BzLnBhZ2U7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2xpLnZjL2NhdGVnb3J5Ly0xP3BhZ2U9JHtwYWdlfWApO1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vdmllczoganNvbi5NZXNzYWdlLk1vdmllc30pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm1vdmllcyk7XHJcbiAgICAgICAgY29uc3QgbW92aWVMaXN0ID0gdGhpcy5zdGF0ZS5tb3ZpZXMubWFwKChtb3ZpZSkgPT4gXHJcbiAgICAgICAgICAgIDxNb3ZpZUl0ZW0ga2V5PXttb3ZpZS5Nb3ZpZUlEfSBtb3ZpZUluZm89e21vdmllfT48L01vdmllSXRlbT5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+bG9saSAzLjA8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9nbG9iYWwuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bW92aWVMaXN0fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA4MDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=pages\\page.js?entry */'
            }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;