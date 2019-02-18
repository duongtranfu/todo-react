'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CONFIRMATION = 'confirmation';
var WARNING = 'warning';
var ERROR = 'error';

var SovosSnackbar = function (_React$Component) {
  _inherits(SovosSnackbar, _React$Component);

  function SovosSnackbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SovosSnackbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SovosSnackbar.__proto__ || Object.getPrototypeOf(SovosSnackbar)).call.apply(_ref, [this].concat(args))), _this), _this.getSnackBarWidth = function () {
      switch (_this.props.length) {
        case 'short':
          return '300px';
        case 'medium':
          return '600px';
        case 'long':
        default:
          return '100%';
      }
    }, _this.getSnackBarColor = function () {
      var backgroundColor = _this.props.muiTheme.snackbar.backgroundColor;
      var errorBackgroundColor = _this.props.muiTheme.snackbar.errorBackgroundColor;
      var warningBackgroundColor = _this.props.muiTheme.snackbar.warningBackgroundColor;


      switch (_this.props.snackBarType) {
        case CONFIRMATION:
          return backgroundColor;
        case WARNING:
          return warningBackgroundColor;
        case ERROR:
          return errorBackgroundColor;
        default:
          return backgroundColor;
      }
    }, _this.getSnackBarAction = function () {
      if (_this.props.snackBarType === ERROR) {
        return 'CLOSE';
      }

      return null;
    }, _this.getAutoHideDuration = function () {
      if (_this.props.snackBarType !== ERROR) {
        return 4000;
      }

      return null;
    }, _this.handleOnActionClick = function () {
      _this.props.actionSovosSnackbar();
    }, _this.handleOnRequestClose = function (reason) {
      if (reason !== 'clickaway') {
        _this.props.closeSovosSnackbar();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SovosSnackbar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Snackbar2.default, {
        style: {
          maxWidth: this.getSnackBarWidth(),
          width: this.getSnackBarWidth(),
          padding: '0px, 20px'
        },
        bodyStyle: {
          maxWidth: this.getSnackBarWidth(),
          width: this.getSnackBarWidth(),
          height: '50px',
          rightMargin: '30px',
          backgroundColor: this.getSnackBarColor()
        },
        open: this.props.open,
        message: this.props.message,
        autoHideDuration: this.getAutoHideDuration(),
        action: this.props.actionLabel ? this.props.actionLabel : this.getSnackBarAction(),
        onActionClick: this.handleOnActionClick,
        onRequestClose: this.handleOnRequestClose
      });
    }
  }]);

  return SovosSnackbar;
}(_react2.default.Component);

SovosSnackbar.defaultProps = {
  open: false,
  length: '',
  message: '',
  actionLabel: '',
  snackBarType: ''
};
SovosSnackbar.displayName = 'Snackbar';
SovosSnackbar.propTypes = process.env.NODE_ENV !== "production" ? _extends({
  open: _propTypes2.default.bool,
  length: _propTypes2.default.string,
  message: _propTypes2.default.string,
  actionLabel: _propTypes2.default.string,
  snackBarType: _propTypes2.default.string,
  closeSovosSnackbar: _propTypes2.default.func.isRequired,
  actionSovosSnackbar: _propTypes2.default.func.isRequired
}, _Snackbar2.default.propTypes) : {};
exports.default = (0, _muiThemeable2.default)()(SovosSnackbar);