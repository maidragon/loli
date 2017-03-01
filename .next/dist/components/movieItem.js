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

var _image = require('./image');

var _image2 = _interopRequireDefault(_image);

var _tag = require('./tag');

var _tag2 = _interopRequireDefault(_tag);

var _link = require('/Users/phbai/Documents/code/custom-server/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

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
            return _react2.default.createElement('div', { className: 'movie-item', 'data-jsx': 2103070636
            }, _react2.default.createElement('a', { href: '/m/' + this.props.movieInfo.MovieID, target: '_blank', 'data-jsx': 2103070636
            }, _react2.default.createElement(_image2.default, { src: this.props.movieInfo.CoverImg })), _react2.default.createElement('div', { className: 'description', 'data-jsx': 2103070636
            }, _react2.default.createElement(_tag2.default, { name: '\u7D20\u4EBA' }), _react2.default.createElement('a', { href: '/m/' + this.props.movieInfo.MovieID, target: '_blank', 'data-jsx': 2103070636
            }, _react2.default.createElement('p', { className: 'title', 'data-jsx': 2103070636
            }, this.props.movieInfo.Name))), _react2.default.createElement(_style2.default, {
                styleId: 2103070636,
                css: '.movie-item[data-jsx="2103070636"] {width: calc(50% - 4px);margin-top: 8px;margin-bottom: 8px;}.description[data-jsx="2103070636"] {background: #fff;text-align: center;}.description[data-jsx="2103070636"] .title[data-jsx="2103070636"] {display: inline-block;margin-top: 5px;margin-bottom: 5px;font-size: 1.5rem;height: 26px;line-height: 26px;overflow: hidden;text-overflow: ellipsis;text-align: center;font-weight: 400;cursor: pointer;vertical-align: middle;max-width: 400px;text-overflow: ellipsis;white-space: nowrap;}'
            }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;