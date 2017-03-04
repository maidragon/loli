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

var _image = require('./image');

var _image2 = _interopRequireDefault(_image);

var _tag = require('./tag');

var _tag2 = _interopRequireDefault(_tag);

var _link = require('/Users/phbai/Documents/code/loli3/node_modules/next/dist/lib/link.js');

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
                css: '.movie-item[data-jsx="2103070636"] {width: calc(50% - 4px);margin-top: 8px;margin-bottom: 8px;}.description[data-jsx="2103070636"] {background: #fff;text-align: center;}.description[data-jsx="2103070636"] .title[data-jsx="2103070636"] {display: inline-block;margin-top: 5px;margin-bottom: 5px;font-size: 1.5rem;height: 26px;line-height: 26px;overflow: hidden;text-overflow: ellipsis;text-align: center;font-weight: 400;cursor: pointer;vertical-align: middle;max-width: 400px;text-overflow: ellipsis;white-space: nowrap;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW92aWVJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCNEIsQUFDSyxvQ0FDYyx1QkFDUCxnQkFDRyxtQkFDdEIsQ0FDYSxxQ0FDTyxpQkFDRSxtQkFDdEIsQ0FDb0IsbUVBQ0ssc0JBQ04sZ0JBQ0csbUJBQ0Qsa0JBQ0wsYUFDSyxrQkFDRCxpQkFDTyx3QkFDTCxtQkFDRixpQkFDRCxnQkFDTyx1QkFDTixpQkFDTyx3QkFDSixvQkFDdkIiLCJmaWxlIjoiY29tcG9uZW50cy9tb3ZpZUl0ZW0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoYmFpL0RvY3VtZW50cy9jb2RlL2xvbGkzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJy4vaW1hZ2UnXG5pbXBvcnQgVGFnIGZyb20gJy4vdGFnJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtaXRlbVwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9eycvbS8nICsgdGhpcy5wcm9wcy5tb3ZpZUluZm8uTW92aWVJRH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RoaXMucHJvcHMubW92aWVJbmZvLkNvdmVySW1nfT48L0ltYWdlPlxuICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPFRhZyBuYW1lPVwi57Sg5Lq6XCI+PC9UYWc+XG5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Jy9tLycgKyB0aGlzLnByb3BzLm1vdmllSW5mby5Nb3ZpZUlEfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMubW92aWVJbmZvLk5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAubW92aWUtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA0cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbiAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=components/movieItem.js */'
            }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;