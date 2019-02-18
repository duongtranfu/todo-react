'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _errorHelper = require('./errorHelper');

var _errorHelper2 = _interopRequireDefault(_errorHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SovosReduxFormSelectField = function SovosReduxFormSelectField(_ref) {
  var _ref$input = _ref.input,
      _onChange = _ref$input.onChange,
      inputProps = _objectWithoutProperties(_ref$input, ['onChange']),
      meta = _ref.meta,
      options = _ref.options,
      custom = _objectWithoutProperties(_ref, ['input', 'meta', 'options']);

  return _react2.default.createElement(
    _SelectField2.default,
    _extends({}, inputProps, custom, {
      errorText: (0, _errorHelper2.default)(meta),
      onChange: function onChange(event, index, value) {
        return _onChange(value);
      }
    }),
    options.map(function (o) {
      return _react2.default.createElement(_MenuItem2.default, {
        key: o.value,
        primaryText: o.primaryText,
        value: o.value
      });
    })
  );
};

SovosReduxFormSelectField.propTypes = process.env.NODE_ENV !== "production" ? {
  input: _propTypes2.default.object.isRequired,
  meta: _propTypes2.default.object.isRequired,
  options: _propTypes2.default.array.isRequired
} : {};

exports.default = SovosReduxFormSelectField;