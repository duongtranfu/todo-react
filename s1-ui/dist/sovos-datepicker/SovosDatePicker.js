'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DatePicker = require('material-ui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SovosDatePicker = function SovosDatePicker(props) {
  return _react2.default.createElement(_DatePicker2.default, _extends({}, props, { container: 'inline' }));
};

SovosDatePicker.propTypes = process.env.NODE_ENV !== "production" ? _DatePicker2.default.propTypes : {};

SovosDatePicker.displayName = 'DatePicker';

exports.default = SovosDatePicker;