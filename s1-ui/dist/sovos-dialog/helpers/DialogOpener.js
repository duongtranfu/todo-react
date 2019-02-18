'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sovosFlatButton = require('../../sovos-flat-button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This is a helper class created for SovosDialog examples.
 * If you pass a dialog as child to this component, the helper can open it using a button.
 */
var DialogOpener = function (_React$Component) {
  _inherits(DialogOpener, _React$Component);

  function DialogOpener() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DialogOpener);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DialogOpener.__proto__ || Object.getPrototypeOf(DialogOpener)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleClickOpen = function () {
      _this.setState({ open: true });
    }, _this.handleRequestClose = function () {
      _this.setState({ open: false });
    }, _this.renderDialog = function () {
      var dialog = _react2.default.Children.only(_this.props.children);
      return _react2.default.cloneElement(dialog, {
        open: _this.state.open,
        onRequestClose: _this.handleRequestClose
      });
    }, _this.render = function () {
      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_sovosFlatButton.SovosFlatButton, { label: _this.props.buttonLabel, type: 'secondary', onClick: _this.handleClickOpen }),
        _this.renderDialog()
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return DialogOpener;
}(_react2.default.Component);

DialogOpener.defaultProps = {
  buttonLabel: 'Click here to open dialog'
};
DialogOpener.propTypes = process.env.NODE_ENV !== "production" ? {
  buttonLabel: _propTypes2.default.string,
  children: _propTypes2.default.element.isRequired
} : {};
exports.default = DialogOpener;