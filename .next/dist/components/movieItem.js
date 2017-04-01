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

// <div className="description">
//     <Tag name="素人"></Tag>

//     <a href={'/m/' + this.props.movieInfo.MovieID} target="_blank">
//         <p className="title">{this.props.movieInfo.Name}</p>
//     </a>
// </div>

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
            }, _react2.default.createElement(_image2.default, { src: this.props.movieInfo.CoverImg })), _react2.default.createElement(_style2.default, {
                styleId: 2103070636,
                css: '.movie-item[data-jsx="2103070636"] {width: calc(50% - 4px);margin-top: 8px;margin-bottom: 8px;}.description[data-jsx="2103070636"] {background: #fff;text-align: center;}.description[data-jsx="2103070636"] .title[data-jsx="2103070636"] {display: inline-block;margin-top: 5px;margin-bottom: 5px;font-size: 1.5rem;height: 26px;line-height: 26px;overflow: hidden;text-overflow: ellipsis;text-align: center;font-weight: 400;cursor: pointer;vertical-align: middle;max-width: 400px;text-overflow: ellipsis;white-space: nowrap;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXG1vdmllSXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQjRCLEFBQ0ssb0NBQ2MsdUJBQ1AsZ0JBQ0csbUJBQ3RCLENBQ2EscUNBQ08saUJBQ0UsbUJBQ3RCLENBQ29CLG1FQUNLLHNCQUNOLGdCQUNHLG1CQUNELGtCQUNMLGFBQ0ssa0JBQ0QsaUJBQ08sd0JBQ0wsbUJBQ0YsaUJBQ0QsZ0JBQ08sdUJBQ04saUJBQ08sd0JBQ0osb0JBQ3ZCIiwiZmlsZSI6ImNvbXBvbmVudHNcXG1vdmllSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BYmFpanVuL0RvY3VtZW50cy9HaXRIdWIvbG9saSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJy4vaW1hZ2UnXHJcbmltcG9ydCBUYWcgZnJvbSAnLi90YWcnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbi8vIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuLy8gICAgIDxUYWcgbmFtZT1cIue0oOS6ulwiPjwvVGFnPlxyXG5cclxuLy8gICAgIDxhIGhyZWY9eycvbS8nICsgdGhpcy5wcm9wcy5tb3ZpZUluZm8uTW92aWVJRH0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbi8vICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj57dGhpcy5wcm9wcy5tb3ZpZUluZm8uTmFtZX08L3A+XHJcbi8vICAgICA8L2E+XHJcbi8vIDwvZGl2PlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17Jy9tLycgKyB0aGlzLnByb3BzLm1vdmllSW5mby5Nb3ZpZUlEfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt0aGlzLnByb3BzLm1vdmllSW5mby5Db3ZlckltZ30+PC9JbWFnZT5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1vdmllLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA0cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb24gLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=components\\movieItem.js */'
            }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;