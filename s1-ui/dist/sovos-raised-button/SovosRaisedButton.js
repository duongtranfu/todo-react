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

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _colorManipulator = require('material-ui/utils/colorManipulator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SovosRaisedButton = function SovosRaisedButton(_ref) {
  var type = _ref.type,
      muiTheme = _ref.muiTheme,
      action = _ref.action,
      otherProps = _objectWithoutProperties(_ref, ['type', 'muiTheme', 'action']);

  var styles = {};
  var labelStyle = muiTheme.raisedButton.labelStyle;
  var labelColor = otherProps.labelColor,
      backgroundColor = otherProps.backgroundColor;


  switch (type) {
    default:
      console.warn('Unrecognized type ' + type + '. Defaulting to primary.');
      type = 'primary';
    case 'primary': // eslint-disable-line no-fallthrough
    case 'secondary':
      styles = _extends({
        labelStyle: labelStyle
      }, muiTheme.raisedButton[type]);
      break;
    case 'custom':
      styles = {
        labelStyle: labelStyle,
        labelColor: labelColor,
        backgroundColor: backgroundColor,
        disabledBackgroundColor: (0, _colorManipulator.lighten)(backgroundColor, 0.75),
        disabledLabelColor: (0, _colorManipulator.lighten)(labelColor, 0.8)
      };
      break;
  }

  return _react2.default.createElement(_RaisedButton2.default, _extends({}, otherProps, styles, {
    type: action
  }));
};

SovosRaisedButton.propTypes = process.env.NODE_ENV !== "production" ? Object.assign({}, _RaisedButton2.default.propTypes, {
  type: _propTypes2.default.string
}) : {};

SovosRaisedButton.propTypes = process.env.NODE_ENV !== "production" ? _extends({
  type: _propTypes2.default.oneOf(['primary', 'secondary', 'custom']),
  color: _propTypes2.default.string,
  action: _propTypes2.default.string
}, _RaisedButton2.default.propTypes) : {};

SovosRaisedButton.defaultProps = {
  type: 'primary',
  color: '',
  action: ''
};

SovosRaisedButton.displayName = 'RaisedButton';

exports.default = (0, _muiThemeable2.default)()(SovosRaisedButton);