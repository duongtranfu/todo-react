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

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _colorManipulator = require('material-ui/utils/colorManipulator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SovosFlatButton = function SovosFlatButton(_ref) {
  var type = _ref.type,
      disabled = _ref.disabled,
      color = _ref.color,
      muiTheme = _ref.muiTheme,
      otherProps = _objectWithoutProperties(_ref, ['type', 'disabled', 'color', 'muiTheme']);

  var style = _extends({}, muiTheme.flatButton);
  var textColor = void 0;
  var hoverColor = void 0;

  switch (type.toLowerCase()) {
    case 'custom':
      textColor = disabled ? (0, _colorManipulator.fade)(color, 0.2) : color;
      hoverColor = (0, _colorManipulator.fade)(color, 0.25);
      break;
    case 'secondary':
      textColor = disabled ? (0, _colorManipulator.fade)(style[type].labelColor, 0.6) : style[type].textColor;
      hoverColor = style[type].hoverColor; // eslint-disable-line prefer-destructuring
      break;
    case 'primary':
    default:
      textColor = disabled ? (0, _colorManipulator.fade)(style[type].labelColor, 0.2) : style[type].labelColor;
      hoverColor = style[type].hoverColor; // eslint-disable-line prefer-destructuring
      break;
  }

  var labelStyle = _extends({}, muiTheme.flatButton.labelStyle, {
    color: textColor
  });

  return _react2.default.createElement(_FlatButton2.default, _extends({}, otherProps, {
    disabled: disabled,
    hoverColor: hoverColor,
    labelStyle: labelStyle
  }));
};

SovosFlatButton.propTypes = process.env.NODE_ENV !== "production" ? _extends({
  type: _propTypes2.default.oneOf(['primary', 'secondary', 'custom']),
  color: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  muiTheme: _propTypes2.default.object.isRequired
}, _FlatButton2.default.propTypes) : {};

SovosFlatButton.defaultProps = {
  color: '',
  disabled: false,
  type: 'primary'
};

SovosFlatButton.displayName = 'FlatButton';

exports.default = (0, _muiThemeable2.default)()(SovosFlatButton);