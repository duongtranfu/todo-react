'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SovosReduxFormStaticField = function SovosReduxFormStaticField(_ref) {
  var value = _ref.input.value,
      component = _ref.component,
      custom = _objectWithoutProperties(_ref, ['input', 'component']);

  component = component || 'span';
  return (0, _react.createElement)(component, custom, [value]);
};

SovosReduxFormStaticField.propTypes = {
  component: _propTypes2.default.element,
  input: _propTypes2.default.object
};

exports.default = SovosReduxFormStaticField;