'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _errorHelper = require('./errorHelper');

var _errorHelper2 = _interopRequireDefault(_errorHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SovosReduxFormTextField = function SovosReduxFormTextField(_ref) {
  var input = _ref.input,
      meta = _ref.meta,
      custom = _objectWithoutProperties(_ref, ['input', 'meta']);

  return _react2.default.createElement(_TextField2.default, _extends({}, input, custom, {
    errorText: (0, _errorHelper2.default)(meta)
  }));
};

SovosReduxFormTextField.propTypes = process.env.NODE_ENV !== "production" ? {
  input: _propTypes2.default.object.isRequired,
  meta: _propTypes2.default.object.isRequired
} : {};

exports.default = SovosReduxFormTextField;