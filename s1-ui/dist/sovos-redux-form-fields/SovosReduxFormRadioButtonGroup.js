'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RadioButtonGroup = require('material-ui/RadioButton/RadioButtonGroup');

var _RadioButtonGroup2 = _interopRequireDefault(_RadioButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SovosReduxFormRadioButtonGroup = function SovosReduxFormRadioButtonGroup(_ref) {
  var _ref$input = _ref.input,
      _onChange = _ref$input.onChange,
      value = _ref$input.value,
      inputProps = _objectWithoutProperties(_ref$input, ['onChange', 'value']),
      custom = _objectWithoutProperties(_ref, ['input']);

  return _react2.default.createElement(_RadioButtonGroup2.default, _extends({}, inputProps, custom, {
    onChange: function onChange(e, val) {
      return _onChange(val);
    },
    valueSelected: value
  }));
};

SovosReduxFormRadioButtonGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  input: _propTypes2.default.object.isRequired
} : {};

exports.default = SovosReduxFormRadioButtonGroup;