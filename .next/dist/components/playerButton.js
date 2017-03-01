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

        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

        _this.togglePaused = _this.togglePaused.bind(_this);
        _this.state = {
            paused: true
        };
        return _this;
    }

    (0, _createClass3.default)(_class, [{
        key: "togglePaused",
        value: function togglePaused() {
            this.setState({ paused: !this.state.paused });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement("a", { className: "play-button", onClick: this.togglePaused, "data-jsx": 613489306
            }, _react2.default.createElement("div", { className: "left", "data-jsx": 613489306
            }), _react2.default.createElement("div", { className: "right", "data-jsx": 613489306
            }), _react2.default.createElement("div", { className: "triangle-1", "data-jsx": 613489306
            }), _react2.default.createElement("div", { className: "triangle-2", "data-jsx": 613489306
            }), _react2.default.createElement(_style2.default, {
                styleId: 613489306,
                css: ".play-button[data-jsx=\"613489306\"] {display: inline-block;height: 16px;width: 16px;z-index: 999;overflow: hidden;position: relative;}.left[data-jsx=\"613489306\"] {height: 100%;float: left;background-color: white;width: 36%;-webkit-transition: all 0.25s ease;-moz-transition: all 0.25s ease;-ms-transition: all 0.25s ease;transition: all 0.25s ease;overflow: hidden;}.triangle-1[data-jsx=\"613489306\"] {-webkit-transform: translate(0, -100%);-moz-transform: translate(0, -100%);-ms-transform: translate(0, -100%);transform: translate(0, -100%);}.triangle-2[data-jsx=\"613489306\"] {-webkit-transform: translate(0, 100%);-moz-transform: translate(0, 100%);-ms-transform: translate(0, 100%);transform: translate(0, 100%);}.triangle-1[data-jsx=\"613489306\"],.triangle-2[data-jsx=\"613489306\"] {position: absolute;top: 0;right: 0;background-color: transparent;width: 0;height: 0;border-right: 16px solid #c0392b;border-top: 8px solid transparent;border-bottom: 8px solid transparent;-webkit-transition: transform 0.25s ease;-moz-transition: transform 0.25s ease;-ms-transition: transform 0.25s ease;transition: transform 0.25s ease;}.right[data-jsx=\"613489306\"] {height: 100%;float: right;width: 36%;background-color: white;-webkit-transition: all 0.25s ease;-moz-transition: all 0.25s ease;-ms-transition: all 0.25s ease;transition: all 0.25s ease;}.paused[data-jsx=\"613489306\"] .left[data-jsx=\"613489306\"] {width: 50%;}.paused[data-jsx=\"613489306\"] .right[data-jsx=\"613489306\"] {width: 50%;}.paused[data-jsx=\"613489306\"] .triangle-1[data-jsx=\"613489306\"] {-webkit-transform: translate(0, -50%);-moz-transform: translate(0, -50%);-ms-transform: translate(0, -50%);transform: translate(0, -50%);}.paused[data-jsx=\"613489306\"] .triangle-2[data-jsx=\"613489306\"] {-webkit-transform: translate(0, 50%);-moz-transform: translate(0, 50%);-ms-transform: translate(0, 50%);transform: translate(0, 50%);}"
            }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;