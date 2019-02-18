'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var columnPropType = _propTypes2.default.shape({
  alignment: _propTypes2.default.oneOf(['center', 'left', 'right']),
  component: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.element, _propTypes2.default.func]),
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  title: _propTypes2.default.string,
  width: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['greedy', 'noWrap']), _propTypes2.default.string, _propTypes2.default.number])
});

exports.default = columnPropType;