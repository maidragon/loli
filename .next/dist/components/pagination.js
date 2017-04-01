'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\react\\react.js');

var _react2 = _interopRequireDefault(_react);

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

        _this.lastPage = _this.lastPage.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(_class, [{
        key: 'lastPage',
        value: function lastPage() {
            var lastPage = +this.props.page - 1;

            if (lastPage > 0) {
                window.location.href = '/p/' + lastPage;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'pagination', 'data-jsx': 1202975639
            }, _react2.default.createElement('a', { className: 'last-page', onClick: this.lastPage, 'data-jsx': 1202975639
            }, '\u4E0A\u4E00\u9875'), _react2.default.createElement('a', { className: 'next-page', href: '/p/' + (+this.props.page + 1), 'data-jsx': 1202975639
            }, '\u4E0B\u4E00\u9875'), _react2.default.createElement(_style2.default, {
                styleId: 1202975639,
                css: '.pagination[data-jsx="1202975639"] {padding: 30px 0;width: 100%;display:-webkit-flex; display:flex;justify-content: space-between;}.last-page[data-jsx="1202975639"] {color: #fff;-webkit-transition: opacity .1s linear;-webkit-transition: opacity .1s linear;-moz-transition: opacity .1s linear;-ms-transition: opacity .1s linear;transition: opacity .1s linear;}.last-page[data-jsx="1202975639"]:hover {opacity: .7;}.next-page[data-jsx="1202975639"] {color: #fff;-webkit-transition: opacity .1s linear;-webkit-transition: opacity .1s linear;-moz-transition: opacity .1s linear;-ms-transition: opacity .1s linear;transition: opacity .1s linear;}.next-page[data-jsx="1202975639"]:hover {opacity: .7;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHBhZ2luYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUI0QixBQUNLLG9DQUNPLGdCQUNKLFlBQ0UsbUNBQ2lCLCtCQUNsQyxDQUNXLG1DQUNJLFlBQzJCLHVDQUNSLDZJQUNsQyxDQUNpQix5Q0FDRixZQUNmLENBQ1csbUNBQ0ksWUFDMkIsdUNBQ1IsNklBQ2xDLENBQ2lCLHlDQUNGLFlBQ2YiLCJmaWxlIjoiY29tcG9uZW50c1xccGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BYmFpanVuL0RvY3VtZW50cy9HaXRIdWIvbG9saSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5sYXN0UGFnZSA9IHRoaXMubGFzdFBhZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBsYXN0UGFnZSgpIHtcclxuICAgICAgICB2YXIgbGFzdFBhZ2UgPSArdGhpcy5wcm9wcy5wYWdlIC0gMTtcclxuXHJcbiAgICAgICAgaWYgKGxhc3RQYWdlID4gMCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcC8nICsgbGFzdFBhZ2U7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhc3QtcGFnZVwiIG9uQ2xpY2s9e3RoaXMubGFzdFBhZ2V9PuS4iuS4gOmhtTwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5leHQtcGFnZVwiIGhyZWY9eycvcC8nICsgKCt0aGlzLnByb3BzLnBhZ2UgKyAxKX0+5LiL5LiA6aG1PC9hPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5sYXN0LXBhZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4xcyBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzIGxpbmVhcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxhc3QtcGFnZTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubmV4dC1wYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMXMgbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcyBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5uZXh0LXBhZ2U6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=components\\pagination.js */'
            }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;