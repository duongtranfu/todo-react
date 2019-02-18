'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _filterList = require('material-ui/svg-icons/content/filter-list');

var _filterList2 = _interopRequireDefault(_filterList);

var _withTheme = require('../../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _SovosIconButton = require('../../sovos-icon-button/SovosIconButton');

var _SovosIconButton2 = _interopRequireDefault(_SovosIconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Filter (opens the filter drawer)
 *
 * Props from the SovosIconButton
 */
var SovosToolbarFilter = function SovosToolbarFilter(_ref) {
  var theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ['theme']);

  return _react2.default.createElement(
    _SovosIconButton2.default,
    props,
    _react2.default.createElement(_filterList2.default, { color: theme.palette.secondaryColor })
  );
};

SovosToolbarFilter.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _SovosIconButton2.default.propTypes, {
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
}) : {};

SovosToolbarFilter.defaultProps = {
  tooltip: 'Filters' // eslint-disable-line react/default-props-match-prop-types
};

exports.default = (0, _withTheme2.default)()(SovosToolbarFilter);