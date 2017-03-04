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

var _image = require('./image');

var _image2 = _interopRequireDefault(_image);

var _tag = require('./tag');

var _tag2 = _interopRequireDefault(_tag);

var _link = require('C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\node_modules\\next\\dist\\lib\\link.js');

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
                css: '.movie-item[data-jsx="2103070636"] {width: calc(50% - 4px);margin-top: 8px;margin-bottom: 8px;}.description[data-jsx="2103070636"] {background: #fff;text-align: center;}.description[data-jsx="2103070636"] .title[data-jsx="2103070636"] {display: inline-block;margin-top: 5px;margin-bottom: 5px;font-size: 1.5rem;height: 26px;line-height: 26px;overflow: hidden;text-overflow: ellipsis;text-align: center;font-weight: 400;cursor: pointer;vertical-align: middle;max-width: 400px;text-overflow: ellipsis;white-space: nowrap;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXG1vdmllSXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQjRCLEFBQ0ssb0NBQ2MsdUJBQ1AsZ0JBQ0csbUJBQ3RCLENBQ2EscUNBQ08saUJBQ0UsbUJBQ3RCLENBQ29CLG1FQUNLLHNCQUNOLGdCQUNHLG1CQUNELGtCQUNMLGFBQ0ssa0JBQ0QsaUJBQ08sd0JBQ0wsbUJBQ0YsaUJBQ0QsZ0JBQ08sdUJBQ04saUJBQ08sd0JBQ0osb0JBQ3ZCIiwiZmlsZSI6ImNvbXBvbmVudHNcXG1vdmllSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BYmFpanVuL0RvY3VtZW50cy9HaXRIdWIvbG9saSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJy4vaW1hZ2UnXHJcbmltcG9ydCBUYWcgZnJvbSAnLi90YWcnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXsnL20vJyArIHRoaXMucHJvcHMubW92aWVJbmZvLk1vdmllSUR9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RoaXMucHJvcHMubW92aWVJbmZvLkNvdmVySW1nfT48L0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFnIG5hbWU9XCLntKDkurpcIj48L1RhZz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Jy9tLycgKyB0aGlzLnByb3BzLm1vdmllSW5mby5Nb3ZpZUlEfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj57dGhpcy5wcm9wcy5tb3ZpZUluZm8uTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAubW92aWUtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDRweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbiAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=components\\movieItem.js */'
            }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;