webpackHotUpdate(4,{

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, __resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(23);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(22);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(11);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(27);

var _link2 = _interopRequireDefault(_link);

__webpack_require__(38);

var _hls = __webpack_require__(358);

var _hls2 = _interopRequireDefault(_hls);

var _head = __webpack_require__(68);

var _head2 = _interopRequireDefault(_head);

var _header = __webpack_require__(74);

var _header2 = _interopRequireDefault(_header);

var _container = __webpack_require__(14);

var _container2 = _interopRequireDefault(_container);

var _tool = __webpack_require__(171);

var _tool2 = _interopRequireDefault(_tool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    (0, _createClass3.default)(_class, [{
        key: 'componentWillMount',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                var uid, token, res, data, video, hls;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                uid = localStorage.getItem("userid");
                                token = localStorage.getItem("token");

                                // 直接从 url 进入组件

                                if (uid == null || token == null) {
                                    (0, _tool2.default)();
                                    uid = localStorage.getItem("userid");
                                    token = localStorage.getItem("token");
                                }

                                _context.next = 5;
                                return fetch('http://loli.vc/play/' + this.props.id + '?uid=' + uid + '&token=' + token);

                            case 5:
                                res = _context.sent;
                                _context.next = 8;
                                return res.json();

                            case 8:
                                data = _context.sent;

                                if (!(data.Result == 0)) {
                                    _context.next = 19;
                                    break;
                                }

                                // 认证已过期, 需要重新认证
                                (0, _tool2.default)();
                                uid = localStorage.getItem("userid");
                                token = localStorage.getItem("token");

                                // 重新认证后发请求
                                _context.next = 15;
                                return fetch('http://loli.vc/play/' + this.props.id + '?uid=' + uid + '&token=' + token);

                            case 15:
                                res = _context.sent;
                                _context.next = 18;
                                return res.json();

                            case 18:
                                data = _context.sent;

                            case 19:

                                this.setState({ url: data.Message });

                                if (_hls2.default.isSupported()) {
                                    video = document.querySelector('.test');
                                    hls = new _hls2.default();

                                    hls.loadSource(this.state.url);
                                    hls.attachMedia(video);
                                    hls.on(_hls2.default.Events.MANIFEST_PARSED, function () {
                                        video.play();
                                    });
                                }

                            case 21:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentWillMount() {
                return _ref.apply(this, arguments);
            }

            return componentWillMount;
        }()
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_ref3) {
                var id = _ref3.query.id;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                return _context2.abrupt('return', { id: id });

                            case 1:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

        _this.state = { url: "" };
        return _this;
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'movie', 'data-jsx': 3448864484
            }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', {
                'data-jsx': 3448864484
            }, 'loli 3.0'), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 3448864484
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/global.css', 'data-jsx': 3448864484
            })), _react2.default.createElement(_header2.default, null), _react2.default.createElement('div', { className: 'mask', 'data-jsx': 3448864484
            }, _react2.default.createElement(_container2.default, { flex: true }, _react2.default.createElement('video', { className: 'test', 'data-jsx': 3448864484
            }))), _react2.default.createElement(_style2.default, {
                styleId: 3448864484,
                css: '.test[data-jsx="3448864484"] {display: block;height: 100%;margin: 0 auto;}.mask[data-jsx="3448864484"] {background: #000;}@media screen and (min-height: 630px) and (min-width: 1294px) {.mask[data-jsx="3448864484"] {height: 480px;}}@media screen and (min-height: 870px) and (min-width: 1320px) {.mask[data-jsx="3448864484"] {height: 720px;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxtb3ZpZS5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RTRCLEFBQ0QsOEJBQ1ksZUFDRixhQUNFLGVBQ2xCLENBQ00sOEJBQ2MsaUJBQ3BCLENBQzhELCtEQUNwRCw4QkFDVyxjQUNqQixDQUNKLENBQzhELCtEQUNwRCw4QkFDVyxjQUNqQixDQUNKIiwiZmlsZSI6InBhZ2VzXFxtb3ZpZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BYmFpanVuL0RvY3VtZW50cy9HaXRIdWIvbG9saSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXHJcbmltcG9ydCBIbHMgZnJvbSAnaGxzLmpzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXHJcbmltcG9ydCB2ZXJpZnkgZnJvbSAnLi4vbGliL3Rvb2wnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHF1ZXJ5OiB7IGlkIH0gfSkge1xyXG4gICAgICAgIHJldHVybiB7aWQ6IGlkfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICBsZXQgdWlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyaWRcIik7XHJcbiAgICAgICAgbGV0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuXHJcbiAgICAgICAgLy8g55u05o6l5LuOIHVybCDov5vlhaXnu4Tku7ZcclxuICAgICAgICBpZiAodWlkID09IG51bGwgfHwgdG9rZW4gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2ZXJpZnkoKTtcclxuICAgICAgICAgICAgdWlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyaWRcIik7XHJcbiAgICAgICAgICAgIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvbGkudmMvcGxheS8ke3RoaXMucHJvcHMuaWR9P3VpZD0ke3VpZH0mdG9rZW49JHt0b2tlbn1gKTtcclxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLlJlc3VsdCA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIOiupOivgeW3sui/h+acnywg6ZyA6KaB6YeN5paw6K6k6K+BXHJcbiAgICAgICAgICAgIHZlcmlmeSgpO1xyXG4gICAgICAgICAgICB1aWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJpZFwiKTtcclxuICAgICAgICAgICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8g6YeN5paw6K6k6K+B5ZCO5Y+R6K+35rGCXHJcbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9saS52Yy9wbGF5LyR7dGhpcy5wcm9wcy5pZH0/dWlkPSR7dWlkfSZ0b2tlbj0ke3Rva2VufWApO1xyXG4gICAgICAgICAgICBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3VybDogZGF0YS5NZXNzYWdlfSk7XHJcblxyXG4gICAgICAgIGlmKEhscy5pc1N1cHBvcnRlZCgpKSB7XHJcbiAgICAgICAgICAgIHZhciB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0Jyk7XHJcbiAgICAgICAgICAgIHZhciBobHMgPSBuZXcgSGxzKCk7XHJcbiAgICAgICAgICAgIGhscy5sb2FkU291cmNlKHRoaXMuc3RhdGUudXJsKTtcclxuICAgICAgICAgICAgaGxzLmF0dGFjaE1lZGlhKHZpZGVvKTtcclxuICAgICAgICAgICAgaGxzLm9uKEhscy5FdmVudHMuTUFOSUZFU1RfUEFSU0VELGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge3VybDogXCJcIn07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWVcIj5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5sb2xpIDMuMDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL2dsb2JhbC5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBmbGV4PXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZpZGVvIGNsYXNzTmFtZT1cInRlc3RcIj48L3ZpZGVvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAudGVzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubWFzayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA2MzBweCkgYW5kIChtaW4td2lkdGg6IDEyOTRweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFzayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA4NzBweCkgYW5kIChtaW4td2lkdGg6IDEzMjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFzayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=pages\\movie.js?entry */'
            }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\pages\\movie.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Abaijun\\Documents\\GitHub\\loli\\pages\\movie.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(39)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/movie")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tb3ZpZS5qcz82YjM1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87Ozs7QUFDQTs7OztBQUNQOztBQUNPOzs7O0FBQ0E7Ozs7QUFDWTs7OztBQUNHOzs7O0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQVFQO3NDQUFNLGFBQWEsUUFDbkI7d0NBQVEsYUFBYSxRQUV6Qjs7QUFDQTs7b0NBQUksT0FBTyxRQUFRLFNBQVMsTUFDeEI7QUFDQTswQ0FBTSxhQUFhLFFBQ25COzRDQUFRLGFBQWEsUUFDeEI7Ozs7dUNBRWUsK0JBQTZCLEtBQUssTUFBTSxlQUFVLGtCQUFhOztpQ0FBM0U7Ozt1Q0FDYSxJQUFJOztpQ0FBakI7OztzQ0FFQSxLQUFLLFVBQVU7OztBQUNmOztBQUNBO0FBQ0E7c0NBQU0sYUFBYSxRQUNuQjt3Q0FBUSxhQUFhLFFBRXJCOzs7O3VDQUNZLCtCQUE2QixLQUFLLE1BQU0sZUFBVSxrQkFBYTs7aUNBQTNFOzs7dUNBQ2EsSUFBSTs7aUNBQWpCOzs7aUNBR0o7O3FDQUFLLFNBQVMsRUFBQyxLQUFLLEtBRXBCOztvQ0FBRyxjQUFJLGVBQ0M7QUFEYyw0Q0FDTixTQUFTLGNBQ2pCO0FBRmMsMENBR2xCOzt3Q0FBSSxXQUFXLEtBQUssTUFDcEI7d0NBQUksWUFDSjt3Q0FBSSxHQUFHLGNBQUksT0FBTyxpQkFBZ0IsWUFDaEM7OENBQ0Q7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQXZDb0MsV0FBVCxNQUFTOzs7OztrRUFDOUIsRUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUF5Q2hCOzs7b0JBQWEsT0FBTzs0Q0FBQTs7MElBRWhCOztjQUFLLFFBQVEsRUFBQyxLQUFLO2VBQ3RCOzs7OztpQ0FHRzttQ0FDSSx1QkFBSyxXQUFVLHFCQUNYO2FBREosa0JBQ0ssOEJBQ0c7NEJBQUE7QUFBQSxlQUNBLHFEQUFNLFNBQVEscUJBQ2Q7d0RBQU0sS0FBSSxjQUFhLE1BQUssa0NBR2hDO2lDQUFDLGdDQUNELDhDQUFLLFdBQVUsb0JBQ1g7K0JBQUMscUNBQVUsTUFDUCxpREFBTyxXQUFVLG9CQUFqQjs7eUJBVlo7cUJBb0NQO0FBcENPOzs7OztFQWxEaUIsZ0JBQU0iLCJmaWxlIjoiNC45YmI0NWEyNzdjNmRkNWRhZGZhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcclxuaW1wb3J0IEhscyBmcm9tICdobHMuanMnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcclxuaW1wb3J0IHZlcmlmeSBmcm9tICcuLi9saWIvdG9vbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcXVlcnk6IHsgaWQgfSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIHtpZDogaWR9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIGxldCB1aWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJpZFwiKTtcclxuICAgICAgICBsZXQgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG5cclxuICAgICAgICAvLyDnm7TmjqXku44gdXJsIOi/m+WFpee7hOS7tlxyXG4gICAgICAgIGlmICh1aWQgPT0gbnVsbCB8fCB0b2tlbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZlcmlmeSgpO1xyXG4gICAgICAgICAgICB1aWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJpZFwiKTtcclxuICAgICAgICAgICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9saS52Yy9wbGF5LyR7dGhpcy5wcm9wcy5pZH0/dWlkPSR7dWlkfSZ0b2tlbj0ke3Rva2VufWApO1xyXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEuUmVzdWx0ID09IDApIHtcclxuICAgICAgICAgICAgLy8g6K6k6K+B5bey6L+H5pyfLCDpnIDopoHph43mlrDorqTor4FcclxuICAgICAgICAgICAgdmVyaWZ5KCk7XHJcbiAgICAgICAgICAgIHVpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcmlkXCIpO1xyXG4gICAgICAgICAgICB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyDph43mlrDorqTor4HlkI7lj5Hor7fmsYJcclxuICAgICAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2xpLnZjL3BsYXkvJHt0aGlzLnByb3BzLmlkfT91aWQ9JHt1aWR9JnRva2VuPSR7dG9rZW59YCk7XHJcbiAgICAgICAgICAgIGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXJsOiBkYXRhLk1lc3NhZ2V9KTtcclxuXHJcbiAgICAgICAgaWYoSGxzLmlzU3VwcG9ydGVkKCkpIHtcclxuICAgICAgICAgICAgdmFyIHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlc3QnKTtcclxuICAgICAgICAgICAgdmFyIGhscyA9IG5ldyBIbHMoKTtcclxuICAgICAgICAgICAgaGxzLmxvYWRTb3VyY2UodGhpcy5zdGF0ZS51cmwpO1xyXG4gICAgICAgICAgICBobHMuYXR0YWNoTWVkaWEodmlkZW8pO1xyXG4gICAgICAgICAgICBobHMub24oSGxzLkV2ZW50cy5NQU5JRkVTVF9QQVJTRUQsZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7dXJsOiBcIlwifTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZVwiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPmxvbGkgMy4wPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvZ2xvYmFsLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hc2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsZXg9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dmlkZW8gY2xhc3NOYW1lPVwidGVzdFwiPjwvdmlkZW8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDYzMHB4KSBhbmQgKG1pbi13aWR0aDogMTI5NHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDg3MHB4KSBhbmQgKG1pbi13aWR0aDogMTMyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL21vdmllLmpzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==