'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('/Users/phbai/Documents/code/custom-server/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('/Users/phbai/Documents/code/custom-server/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('/Users/phbai/Documents/code/custom-server/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('/Users/phbai/Documents/code/custom-server/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('/Users/phbai/Documents/code/custom-server/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('/Users/phbai/Documents/code/custom-server/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('/Users/phbai/Documents/code/custom-server/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('/Users/phbai/Documents/code/custom-server/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/phbai/Documents/code/custom-server/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _link = require('/Users/phbai/Documents/code/custom-server/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

require('isomorphic-fetch');

var _hls = require('hls.js');

var _hls2 = _interopRequireDefault(_hls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    (0, _createClass3.default)(_class, [{
        key: 'componentWillMount',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                var res, data, video, hls;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return fetch('http://loli.vc/play/' + this.props.id + '?uid=B6F19453-D852-4592-B6F1-70B537C1FF1F&token=B7CACBD2A0004E6487038F59EA906228');

                            case 2:
                                res = _context.sent;
                                _context.next = 5;
                                return res.json();

                            case 5:
                                data = _context.sent;

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

                            case 8:
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
                                console.log(id);

                                return _context2.abrupt('return', { id: id });

                            case 2:
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
            return _react2.default.createElement('div', { className: 'movie', 'data-jsx': 1345854300
            }, _react2.default.createElement('video', { className: 'test', 'data-jsx': 1345854300
            }), _react2.default.createElement(_style2.default, {
                styleId: 1345854300,
                css: 'body[data-jsx="1345854300"] {margin: 0;}'
            }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;