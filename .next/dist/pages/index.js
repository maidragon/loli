'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('/Users/phbai/Documents/code/custom-server/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/phbai/Documents/code/custom-server/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/phbai/Documents/code/custom-server/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/phbai/Documents/code/custom-server/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/phbai/Documents/code/custom-server/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('/Users/phbai/Documents/code/custom-server/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/phbai/Documents/code/custom-server/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _link = require('/Users/phbai/Documents/code/custom-server/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _content = require('../components/content');

var _content2 = _interopRequireDefault(_content);

var _head = require('/Users/phbai/Documents/code/custom-server/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                'data-jsx': 1345854300
            }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', {
                'data-jsx': 1345854300
            }, 'loli 3.0'), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 1345854300
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/global.css', 'data-jsx': 1345854300
            })), _react2.default.createElement(_header2.default, null), _react2.default.createElement(_content2.default, null), _react2.default.createElement(_style2.default, {
                styleId: 1345854300,
                css: 'body[data-jsx="1345854300"] {margin: 0;}'
            }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;