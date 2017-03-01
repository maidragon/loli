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

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

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
            return _react2.default.createElement('div', { className: 'tag', 'data-jsx': 2206810223
            }, _react2.default.createElement('span', {
                'data-jsx': 2206810223
            }, this.props.name), _react2.default.createElement(_style2.default, {
                styleId: 2206810223,
                css: '.tag[data-jsx="2206810223"] {display: inline-block;background: #4886ff;line-height: 20px;height: 22px;padding: 0 8px;border-radius: 4px;border: 1px solid #e9e9e9;font-size: 12px;opacity: 1;margin-right: 8px;cursor: pointer;white-space: nowrap;vertical-align: middle;}.tag[data-jsx="2206810223"] span[data-jsx="2206810223"] {color: #fff;}'
            }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;