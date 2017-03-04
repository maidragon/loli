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

var _playerButton = require('../components/playerButton');

var _playerButton2 = _interopRequireDefault(_playerButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

        _this.state = {
            isPlaying: false
        };

        _this.test = _this.test.bind(_this);
        _this.togglePlay = _this.togglePlay.bind(_this);
        _this.updateTime = _this.updateTime.bind(_this);
        _this.timeFormat = _this.timeFormat.bind(_this);

        _this.state = {
            currentTime: 0,
            duration: 0
        };

        return _this;
    }

    (0, _createClass3.default)(_class, [{
        key: 'updateTime',
        value: function updateTime(e) {
            e.preventDefault();
            this.setState({ currentTime: e.target.currentTime });
            // console.log(e.target.currentTime);
        }
    }, {
        key: 'test',
        value: function test(e) {
            e.preventDefault();
            console.log("default");
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var video = document.querySelector('.player-video');

            this.setState({ duration: video.duration });
            // this.duration = video.duration;
        }
    }, {
        key: 'togglePlay',
        value: function togglePlay(e) {
            e.preventDefault();
            var video = document.querySelector('.player-video');

            if (this.state.isPlaying) {
                video.pause();
            } else {
                video.play();
            }

            this.state.isPlaying = !this.state.isPlaying;
        }
    }, {
        key: 'timeFormat',
        value: function timeFormat(value) {
            var time = parseInt(value);
            var minute = parseInt(value / 60);
            var hour = parseInt(value / 3600);
            var second = time - hour * 3600 - minute * 60;

            var timeStr = "";

            if (hour > 0) {
                timeStr = hour + ':';
            }

            if (minute >= 10) {
                timeStr += minute + ':';
            } else {
                timeStr += '0' + minute + ':';
            }

            if (second >= 10) {
                timeStr += '' + second;
            } else {
                timeStr += '0' + second;
            }

            return timeStr;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'player', onClick: this.togglePlay, 'data-jsx': 148949512
            }, _react2.default.createElement('video', { className: 'player-video', onContextMenu: this.test, onTimeUpdate: this.updateTime, 'data-jsx': 148949512
            }, _react2.default.createElement('source', { src: 'https://rishabhp.github.io/bideo.js/night.mp4', type: 'video/mp4', 'data-jsx': 148949512
            })), _react2.default.createElement('div', { className: 'video-info', 'data-jsx': 148949512
            }, _react2.default.createElement(_playerButton2.default, null), _react2.default.createElement('span', {
                'data-jsx': 148949512
            }, this.timeFormat(this.state.currentTime)), _react2.default.createElement('span', {
                'data-jsx': 148949512
            }, this.timeFormat(this.state.duration))), _react2.default.createElement(_style2.default, {
                styleId: 148949512,
                css: '.player[data-jsx="148949512"] {position: relative;width: 640px;height: 360px;}video[data-jsx="148949512"] {width: 100%;height: 100%;}.video-info[data-jsx="148949512"] {position: absolute;bottom: 6px;width: 80%;left: 50%;-webkit-transform: translateX(-50%);-moz-transform: translateX(-50%);-ms-transform: translateX(-50%);transform: translateX(-50%);}.video-info[data-jsx="148949512"] span[data-jsx="148949512"] {margin: 0 8px;font-size: 13px;color: #fff;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwbGF5ZXIuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEY0QixBQUNDLCtCQUNjLG1CQUNOLGFBQ0MsY0FDakIsQ0FDTSw2QkFDUyxZQUNDLGFBQ2hCLENBQ1ksbUNBQ1UsbUJBQ1AsWUFDRCxXQUNELFVBQ2tCLGlJQUMvQixDQUNpQiw4REFDQSxjQUNFLGdCQUNKLFlBQ2YiLCJmaWxlIjoicGFnZXNcXHBsYXllci5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BYmFpanVuL0RvY3VtZW50cy9HaXRIdWIvbG9saSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFBsYXllckJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL3BsYXllckJ1dHRvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNQbGF5aW5nOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50ZXN0ID0gdGhpcy50ZXN0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy50b2dnbGVQbGF5ID0gdGhpcy50b2dnbGVQbGF5LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lID0gdGhpcy51cGRhdGVUaW1lLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy50aW1lRm9ybWF0ID0gdGhpcy50aW1lRm9ybWF0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lOiAwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUaW1lKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFRpbWU6IGUudGFyZ2V0LmN1cnJlbnRUaW1lfSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuY3VycmVudFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRlc3QoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRlZmF1bHRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgbGV0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci12aWRlbycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2R1cmF0aW9uOiB2aWRlby5kdXJhdGlvbn0pO1xyXG4gICAgICAgIC8vIHRoaXMuZHVyYXRpb24gPSB2aWRlby5kdXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVQbGF5KGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci12aWRlbycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICB2aWRlby5wYXVzZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5pc1BsYXlpbmcgPSAhdGhpcy5zdGF0ZS5pc1BsYXlpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgdGltZUZvcm1hdCh2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0aW1lID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICAgIHZhciBtaW51dGUgPSBwYXJzZUludCh2YWx1ZSAvIDYwKTtcclxuICAgICAgICB2YXIgaG91ciA9IHBhcnNlSW50KHZhbHVlIC8gMzYwMCk7XHJcbiAgICAgICAgdmFyIHNlY29uZCA9IHRpbWUgLSBob3VyICogMzYwMCAtIG1pbnV0ZSAqIDYwO1xyXG5cclxuICAgICAgICB2YXIgdGltZVN0ciA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmIChob3VyID4gMCkge1xyXG4gICAgICAgICAgICB0aW1lU3RyID0gYCR7aG91cn06YDtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBpZiAobWludXRlID49IDEwKSB7XHJcbiAgICAgICAgICAgIHRpbWVTdHIgKz0gYCR7bWludXRlfTpgO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRpbWVTdHIgKz0gYDAke21pbnV0ZX06YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZWNvbmQgPj0gMTApIHtcclxuICAgICAgICAgICAgdGltZVN0ciArPSBgJHtzZWNvbmR9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aW1lU3RyICs9IGAwJHtzZWNvbmR9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aW1lU3RyO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllclwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlUGxheX0+XHJcbiAgICAgICAgICAgICAgICA8dmlkZW8gY2xhc3NOYW1lPVwicGxheWVyLXZpZGVvXCIgb25Db250ZXh0TWVudT17dGhpcy50ZXN0fSBvblRpbWVVcGRhdGU9e3RoaXMudXBkYXRlVGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwczovL3Jpc2hhYmhwLmdpdGh1Yi5pby9iaWRlby5qcy9uaWdodC5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcbiAgICAgICAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBsYXllckJ1dHRvbj48L1BsYXllckJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy50aW1lRm9ybWF0KHRoaXMuc3RhdGUuY3VycmVudFRpbWUpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy50aW1lRm9ybWF0KHRoaXMuc3RhdGUuZHVyYXRpb24pfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAucGxheWVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvLWluZm8gc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=pages\\player.js?entry */'
            }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;