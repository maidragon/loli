"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require("C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\styled-jsx\\style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\react\\react.js");

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
                css: ".play-button[data-jsx=\"613489306\"] {display: inline-block;height: 16px;width: 16px;z-index: 999;overflow: hidden;position: relative;}.left[data-jsx=\"613489306\"] {height: 100%;float: left;background-color: white;width: 36%;-webkit-transition: all 0.25s ease;-moz-transition: all 0.25s ease;-ms-transition: all 0.25s ease;transition: all 0.25s ease;overflow: hidden;}.triangle-1[data-jsx=\"613489306\"] {-webkit-transform: translate(0, -100%);-moz-transform: translate(0, -100%);-ms-transform: translate(0, -100%);transform: translate(0, -100%);}.triangle-2[data-jsx=\"613489306\"] {-webkit-transform: translate(0, 100%);-moz-transform: translate(0, 100%);-ms-transform: translate(0, 100%);transform: translate(0, 100%);}.triangle-1[data-jsx=\"613489306\"],.triangle-2[data-jsx=\"613489306\"] {position: absolute;top: 0;right: 0;background-color: transparent;width: 0;height: 0;border-right: 16px solid #c0392b;border-top: 8px solid transparent;border-bottom: 8px solid transparent;-webkit-transition: transform 0.25s ease;-moz-transition: transform 0.25s ease;-ms-transition: transform 0.25s ease;transition: transform 0.25s ease;}.right[data-jsx=\"613489306\"] {height: 100%;float: right;width: 36%;background-color: white;-webkit-transition: all 0.25s ease;-moz-transition: all 0.25s ease;-ms-transition: all 0.25s ease;transition: all 0.25s ease;}.paused[data-jsx=\"613489306\"] .left[data-jsx=\"613489306\"] {width: 50%;}.paused[data-jsx=\"613489306\"] .right[data-jsx=\"613489306\"] {width: 50%;}.paused[data-jsx=\"613489306\"] .triangle-1[data-jsx=\"613489306\"] {-webkit-transform: translate(0, -50%);-moz-transform: translate(0, -50%);-ms-transform: translate(0, -50%);transform: translate(0, -50%);}.paused[data-jsx=\"613489306\"] .triangle-2[data-jsx=\"613489306\"] {-webkit-transform: translate(0, 50%);-moz-transform: translate(0, 50%);-ms-transform: translate(0, 50%);transform: translate(0, 50%);}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHBsYXllckJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QjRCLEFBQ00sb0NBQ1ksc0JBQ1QsYUFDRCxZQUNDLGFBQ0ksaUJBQ0UsbUJBQ3RCLENBRU0sNkJBQ1UsYUFDRCxZQUNZLHdCQUNiLFdBQ2dCLDZIQUNWLGlCQUNwQixDQUNZLG1DQUNzQiw2SUFDbEMsQ0FDWSxtQ0FDcUIseUlBQ2pDLENBR1kscUVBQ1UsbUJBQ1osT0FDRSxTQUNxQiw4QkFDckIsU0FDQyxVQUN1QixpQ0FDQyxrQ0FDRyxxQ0FDSixxSkFDcEMsQ0FDTyw4QkFDUyxhQUNBLGFBQ0YsV0FDYSx3QkFDRyw2SEFDOUIsQ0FDYywyREFDQSxXQUNkLENBQ2UsNERBQ0QsV0FDZCxDQUNvQixpRUFDYSx5SUFDakMsQ0FDb0IsaUVBQ1kscUlBQ2hDIiwiZmlsZSI6ImNvbXBvbmVudHNcXHBsYXllckJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BYmFpanVuL0RvY3VtZW50cy9HaXRIdWIvbG9saSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMudG9nZ2xlUGF1c2VkID0gdGhpcy50b2dnbGVQYXVzZWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwYXVzZWQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlUGF1c2VkKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3BhdXNlZDogIXRoaXMuc3RhdGUucGF1c2VkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBsYXktYnV0dG9uXCIgb25DbGljaz17dGhpcy50b2dnbGVQYXVzZWR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyaWFuZ2xlLTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpYW5nbGUtMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5wbGF5LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzYlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRyaWFuZ2xlLTEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50cmlhbmdsZS0yIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudHJpYW5nbGUtMSwgXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyaWFuZ2xlLTIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDE2cHggc29saWQgI2MwMzkyYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM2JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucGF1c2VkIC5sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnBhdXNlZCAucmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucGF1c2VkIC50cmlhbmdsZS0xIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wYXVzZWQgLnRyaWFuZ2xlLTIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=components\\playerButton.js */"
            }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;