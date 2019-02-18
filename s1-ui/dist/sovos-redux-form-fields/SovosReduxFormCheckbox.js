'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkboxSize = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _transitions = require('material-ui/styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _errorHelper = require('./errorHelper');

var _errorHelper2 = _interopRequireDefault(_errorHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var checkboxSize = exports.checkboxSize = 24;

var rootStyle = {
  position: 'relative',
  width: '100%'
};

var errorTextStyle = {
  position: 'relative',
  top: 10,
  fontSize: 12,
  lineHeight: '12px',
  transition: _transitions2.default.easeOut()
};

var errorUnderlineStyle = {
  boxSizing: 'content-box',
  borderTop: 'none',
  borderRight: 'none',
  borderBottom: '2px solid',
  borderLeft: 'none',
  bottom: 8,
  margin: 0,
  position: 'absolute',
  transform: 'scaleX(1)',
  transition: _transitions2.default.easeOut()
};

var SovosReduxFormCheckbox = function SovosReduxFormCheckbox(_ref) {
  var _ref$input = _ref.input,
      onChange = _ref$input.onChange,
      value = _ref$input.value,
      inputProps = _objectWithoutProperties(_ref$input, ['onChange', 'value']),
      meta = _ref.meta,
      muiTheme = _ref.muiTheme,
      custom = _objectWithoutProperties(_ref, ['input', 'meta', 'muiTheme']);

  var errorContainer = null;
  var errorText = (0, _errorHelper2.default)(meta);
  var errorColor = muiTheme.textField.errorColor;
  var iconStyle = custom.iconStyle;

  iconStyle = iconStyle || {};

  if (errorText) {
    errorContainer = _react2.default.createElement(
      'div',
      {
        className: 'checkbox__errorContainer',
        style: rootStyle
      },
      _react2.default.createElement('hr', { style: _extends({}, errorUnderlineStyle, { borderColor: errorColor, width: iconStyle.width || checkboxSize }) }),
      _react2.default.createElement(
        'div',
        {
          className: 'checkbox__errorText',
          style: _extends({}, errorTextStyle, { color: errorColor })
        },
        errorText
      )
    );
  }

  return _react2.default.createElement(
    'div',
    { style: rootStyle },
    _react2.default.createElement(_Checkbox2.default, _extends({}, inputProps, custom, {
      checked: !!value,
      onCheck: onChange
    })),
    errorContainer
  );
};

SovosReduxFormCheckbox.propTypes = process.env.NODE_ENV !== "production" ? {
  input: _propTypes2.default.object.isRequired,
  meta: _propTypes2.default.object.isRequired,
  muiTheme: _propTypes2.default.object.isRequired
} : {};

exports.default = (0, _muiThemeable2.default)()(SovosReduxFormCheckbox);