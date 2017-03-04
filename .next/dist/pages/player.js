'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('/Users/phbai/Documents/code/loli3/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/phbai/Documents/code/loli3/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/phbai/Documents/code/loli3/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/phbai/Documents/code/loli3/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/phbai/Documents/code/loli3/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('/Users/phbai/Documents/code/loli3/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/phbai/Documents/code/loli3/node_modules/react/react.js');

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
                css: '.player[data-jsx="148949512"] {position: relative;width: 640px;height: 360px;}video[data-jsx="148949512"] {width: 100%;height: 100%;}.video-info[data-jsx="148949512"] {position: absolute;bottom: 6px;width: 80%;left: 50%;-webkit-transform: translateX(-50%);-moz-transform: translateX(-50%);-ms-transform: translateX(-50%);transform: translateX(-50%);}.video-info[data-jsx="148949512"] span[data-jsx="148949512"] {margin: 0 8px;font-size: 13px;color: #fff;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3BsYXllci5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RjRCLEFBQ0MsK0JBQ2MsbUJBQ04sYUFDQyxjQUNqQixDQUNNLDZCQUNTLFlBQ0MsYUFDaEIsQ0FDWSxtQ0FDVSxtQkFDUCxZQUNELFdBQ0QsVUFDa0IsaUlBQy9CLENBQ2lCLDhEQUNBLGNBQ0UsZ0JBQ0osWUFDZiIsImZpbGUiOiJwYWdlcy9wbGF5ZXIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoYmFpL0RvY3VtZW50cy9jb2RlL2xvbGkzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBsYXllckJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL3BsYXllckJ1dHRvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzUGxheWluZzogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGVzdCA9IHRoaXMudGVzdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZVBsYXkgPSB0aGlzLnRvZ2dsZVBsYXkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lID0gdGhpcy51cGRhdGVUaW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudGltZUZvcm1hdCA9IHRoaXMudGltZUZvcm1hdC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjdXJyZW50VGltZTogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlVGltZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFRpbWU6IGUudGFyZ2V0LmN1cnJlbnRUaW1lfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmN1cnJlbnRUaW1lKTtcbiAgICB9XG5cbiAgICB0ZXN0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImRlZmF1bHRcIik7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItdmlkZW8nKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2R1cmF0aW9uOiB2aWRlby5kdXJhdGlvbn0pO1xuICAgICAgICAvLyB0aGlzLmR1cmF0aW9uID0gdmlkZW8uZHVyYXRpb247XG4gICAgfVxuXG4gICAgdG9nZ2xlUGxheShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci12aWRlbycpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNQbGF5aW5nKSB7XG4gICAgICAgICAgICB2aWRlby5wYXVzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YXRlLmlzUGxheWluZyA9ICF0aGlzLnN0YXRlLmlzUGxheWluZztcbiAgICB9XG5cbiAgICB0aW1lRm9ybWF0KHZhbHVlKSB7XG4gICAgICAgIHZhciB0aW1lID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICB2YXIgbWludXRlID0gcGFyc2VJbnQodmFsdWUgLyA2MCk7XG4gICAgICAgIHZhciBob3VyID0gcGFyc2VJbnQodmFsdWUgLyAzNjAwKTtcbiAgICAgICAgdmFyIHNlY29uZCA9IHRpbWUgLSBob3VyICogMzYwMCAtIG1pbnV0ZSAqIDYwO1xuXG4gICAgICAgIHZhciB0aW1lU3RyID0gXCJcIjtcblxuICAgICAgICBpZiAoaG91ciA+IDApIHtcbiAgICAgICAgICAgIHRpbWVTdHIgPSBgJHtob3VyfTpgO1xuICAgICAgICB9IFxuXG4gICAgICAgIGlmIChtaW51dGUgPj0gMTApIHtcbiAgICAgICAgICAgIHRpbWVTdHIgKz0gYCR7bWludXRlfTpgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGltZVN0ciArPSBgMCR7bWludXRlfTpgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlY29uZCA+PSAxMCkge1xuICAgICAgICAgICAgdGltZVN0ciArPSBgJHtzZWNvbmR9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWVTdHIgKz0gYDAke3NlY29uZH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRpbWVTdHI7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVBsYXl9PlxuICAgICAgICAgICAgICAgIDx2aWRlbyBjbGFzc05hbWU9XCJwbGF5ZXItdmlkZW9cIiBvbkNvbnRleHRNZW51PXt0aGlzLnRlc3R9IG9uVGltZVVwZGF0ZT17dGhpcy51cGRhdGVUaW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwczovL3Jpc2hhYmhwLmdpdGh1Yi5pby9iaWRlby5qcy9uaWdodC5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XG4gICAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPFBsYXllckJ1dHRvbj48L1BsYXllckJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMudGltZUZvcm1hdCh0aGlzLnN0YXRlLmN1cnJlbnRUaW1lKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnRpbWVGb3JtYXQodGhpcy5zdGF0ZS5kdXJhdGlvbil9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5wbGF5ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2aWRlbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudmlkZW8taW5mbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvLWluZm8gc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iXX0= */\n/*@ sourceURL=pages/player.js?entry */'
            }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;