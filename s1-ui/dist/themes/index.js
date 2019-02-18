'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SovosEnterprise = exports.colors = undefined;

var _sovosEnterprise = require('./sovos-enterprise');

Object.defineProperty(exports, 'SovosEnterprise', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sovosEnterprise).default;
  }
});

var _sovosColors = require('./sovos-colors');

var colors = _interopRequireWildcard(_sovosColors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.colors = colors;