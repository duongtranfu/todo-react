'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Toolbar = require('material-ui/Toolbar');

var _withTheme = require('../../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _reactHelpers = require('../../utils/reactHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getStyles = function getStyles(theme) {
  return {
    borderLeftColor: theme.palette.neutralColors.light,
    paddingLeft: 0
  };
};

/**
 * *SovosToolbarContainer* wraps elements of specific type. Can have left border if it's not first. For internal use only
 *
 * Props from Material-UI ToolbarGroup
 */
var SovosToolbarGroup = function SovosToolbarGroup(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ['children', 'theme']);

  var styles = getStyles(theme);
  var styledProps = (0, _reactHelpers.mergePropsWithStyle)(props, styles);
  return _react2.default.createElement(
    _Toolbar.ToolbarGroup,
    _extends({ className: 'sovos-toolbar__group' }, styledProps),
    children
  );
};

SovosToolbarGroup.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _Toolbar.ToolbarGroup.propTypes, {
  /** Children that can be specified here. */
  children: _propTypes2.default.node,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
}) : {};

SovosToolbarGroup.defaultProps = {
  children: undefined
};

exports.default = (0, _withTheme2.default)()(SovosToolbarGroup);