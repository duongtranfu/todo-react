'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _colorManipulator = require('material-ui/utils/colorManipulator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SovosIconButton = function SovosIconButton(_ref) {
  var size = _ref.size,
      color = _ref.color,
      disabled = _ref.disabled,
      muiTheme = _ref.muiTheme,
      iconStyle = _ref.iconStyle,
      style = _ref.style,
      otherProps = _objectWithoutProperties(_ref, ['size', 'color', 'disabled', 'muiTheme', 'iconStyle', 'style']);

  var styles = {};
  switch (size.toLowerCase()) {
    default:
      console.warn('Unrecognized size ' + size + '. Defaulting to \'medium\'.');
    case 'small': // eslint-disable-line no-fallthrough
    case 'medium':
    case 'large':
      styles = {
        style: _extends({}, muiTheme.iconButton.base.style, muiTheme.iconButton[size].style, style),
        iconStyle: _extends({}, muiTheme.iconButton.base.iconStyle, muiTheme.iconButton[size].iconStyle, iconStyle)
      };
      break;
  }

  if (color) {
    styles.iconStyle.color = color;
  }

  if (disabled) {
    styles.iconStyle.color = (0, _colorManipulator.fade)(styles.iconStyle.color, 0.15);
  }

  return _react2.default.createElement(_IconButton2.default, _extends({}, otherProps, styles));
};

SovosIconButton.propTypes = process.env.NODE_ENV !== "production" ? _extends({
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  color: _propTypes2.default.string
}, _IconButton2.default.propTypes) : {};

SovosIconButton.defaultProps = {
  size: 'medium',
  color: undefined
};

SovosIconButton.displayName = 'IconButton';

exports.default = (0, _muiThemeable2.default)()(SovosIconButton);