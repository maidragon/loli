"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require("/Users/phbai/Documents/code/custom-server/node_modules/babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("/Users/phbai/Documents/code/custom-server/node_modules/babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("/Users/phbai/Documents/code/custom-server/node_modules/babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("/Users/phbai/Documents/code/custom-server/node_modules/babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("/Users/phbai/Documents/code/custom-server/node_modules/babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("/Users/phbai/Documents/code/custom-server/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("/Users/phbai/Documents/code/custom-server/node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));
    }

    (0, _createClass3.default)(_class, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", { className: "container", "data-jsx": 3948016107
            }, this.props.children, _react2.default.createElement(_style2.default, {
                styleId: 3948016107,
                css: ".container[data-jsx=\"3948016107\"] {width: 1050px;height: 100%;margin: 0 auto;}"
            }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;