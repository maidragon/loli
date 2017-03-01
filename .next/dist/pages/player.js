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
                css: '.player[data-jsx="148949512"] {position: relative;width: 640px;height: 360px;}video[data-jsx="148949512"] {width: 100%;height: 100%;}.video-info[data-jsx="148949512"] {position: absolute;bottom: 6px;width: 80%;left: 50%;-webkit-transform: translateX(-50%);-moz-transform: translateX(-50%);-ms-transform: translateX(-50%);transform: translateX(-50%);}.video-info[data-jsx="148949512"] span[data-jsx="148949512"] {margin: 0 8px;font-size: 13px;color: #fff;}'
            }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;