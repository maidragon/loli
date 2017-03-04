"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require("/Users/phbai/Documents/code/loli3/node_modules/babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("/Users/phbai/Documents/code/loli3/node_modules/babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("/Users/phbai/Documents/code/loli3/node_modules/babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("/Users/phbai/Documents/code/loli3/node_modules/babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("/Users/phbai/Documents/code/loli3/node_modules/babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("/Users/phbai/Documents/code/loli3/node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("/Users/phbai/Documents/code/loli3/node_modules/react/react.js");

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
                css: ".play-button[data-jsx=\"613489306\"] {display: inline-block;height: 16px;width: 16px;z-index: 999;overflow: hidden;position: relative;}.left[data-jsx=\"613489306\"] {height: 100%;float: left;background-color: white;width: 36%;-webkit-transition: all 0.25s ease;-moz-transition: all 0.25s ease;-ms-transition: all 0.25s ease;transition: all 0.25s ease;overflow: hidden;}.triangle-1[data-jsx=\"613489306\"] {-webkit-transform: translate(0, -100%);-moz-transform: translate(0, -100%);-ms-transform: translate(0, -100%);transform: translate(0, -100%);}.triangle-2[data-jsx=\"613489306\"] {-webkit-transform: translate(0, 100%);-moz-transform: translate(0, 100%);-ms-transform: translate(0, 100%);transform: translate(0, 100%);}.triangle-1[data-jsx=\"613489306\"],.triangle-2[data-jsx=\"613489306\"] {position: absolute;top: 0;right: 0;background-color: transparent;width: 0;height: 0;border-right: 16px solid #c0392b;border-top: 8px solid transparent;border-bottom: 8px solid transparent;-webkit-transition: transform 0.25s ease;-moz-transition: transform 0.25s ease;-ms-transition: transform 0.25s ease;transition: transform 0.25s ease;}.right[data-jsx=\"613489306\"] {height: 100%;float: right;width: 36%;background-color: white;-webkit-transition: all 0.25s ease;-moz-transition: all 0.25s ease;-ms-transition: all 0.25s ease;transition: all 0.25s ease;}.paused[data-jsx=\"613489306\"] .left[data-jsx=\"613489306\"] {width: 50%;}.paused[data-jsx=\"613489306\"] .right[data-jsx=\"613489306\"] {width: 50%;}.paused[data-jsx=\"613489306\"] .triangle-1[data-jsx=\"613489306\"] {-webkit-transform: translate(0, -50%);-moz-transform: translate(0, -50%);-ms-transform: translate(0, -50%);transform: translate(0, -50%);}.paused[data-jsx=\"613489306\"] .triangle-2[data-jsx=\"613489306\"] {-webkit-transform: translate(0, 50%);-moz-transform: translate(0, 50%);-ms-transform: translate(0, 50%);transform: translate(0, 50%);}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGxheWVyQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCNEIsQUFDTSxvQ0FDWSxzQkFDVCxhQUNELFlBQ0MsYUFDSSxpQkFDRSxtQkFDdEIsQ0FFTSw2QkFDVSxhQUNELFlBQ1ksd0JBQ2IsV0FDZ0IsNkhBQ1YsaUJBQ3BCLENBQ1ksbUNBQ3NCLDZJQUNsQyxDQUNZLG1DQUNxQix5SUFDakMsQ0FHWSxxRUFDVSxtQkFDWixPQUNFLFNBQ3FCLDhCQUNyQixTQUNDLFVBQ3VCLGlDQUNDLGtDQUNHLHFDQUNKLHFKQUNwQyxDQUNPLDhCQUNTLGFBQ0EsYUFDRixXQUNhLHdCQUNHLDZIQUM5QixDQUNjLDJEQUNBLFdBQ2QsQ0FDZSw0REFDRCxXQUNkLENBQ29CLGlFQUNhLHlJQUNqQyxDQUNvQixpRUFDWSxxSUFDaEMiLCJmaWxlIjoiY29tcG9uZW50cy9wbGF5ZXJCdXR0b24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoYmFpL0RvY3VtZW50cy9jb2RlL2xvbGkzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlUGF1c2VkID0gdGhpcy50b2dnbGVQYXVzZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhdXNlZDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlUGF1c2VkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXVzZWQ6ICF0aGlzLnN0YXRlLnBhdXNlZH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBsYXktYnV0dG9uXCIgb25DbGljaz17dGhpcy50b2dnbGVQYXVzZWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyaWFuZ2xlLTFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyaWFuZ2xlLTJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5wbGF5LWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubGVmdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM2JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudHJpYW5nbGUtMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnRyaWFuZ2xlLTIge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudHJpYW5nbGUtMSwgXG4gICAgICAgICAgICAgICAgICAgIC50cmlhbmdsZS0yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMTZweCBzb2xpZCAjYzAzOTJiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnJpZ2h0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNiU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wYXVzZWQgLmxlZnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucGF1c2VkIC5yaWdodCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wYXVzZWQgLnRyaWFuZ2xlLTEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBhdXNlZCAudHJpYW5nbGUtMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICApXG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=components/playerButton.js */"
            }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;