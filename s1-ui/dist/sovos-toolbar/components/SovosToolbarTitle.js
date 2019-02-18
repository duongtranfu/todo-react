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

var _colorManipulator = require('material-ui/utils/colorManipulator');

var _withTheme = require('../../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _reactHelpers = require('../../utils/reactHelpers');

var _SovosToolbarSpace = require('./SovosToolbarSpace');

var _SovosToolbarSpace2 = _interopRequireDefault(_SovosToolbarSpace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getStyles = function getStyles(theme) {
  return {
    color: (0, _colorManipulator.fade)(theme.palette.textColor, 0.9),
    fontFamily: theme.fontFamily,
    fontSize: 18,
    paddingLeft: 16,
    lineHeight: 'auto'
  };
};

/**
 * *SovosToolbarTitle* element is optional
 *
 * Props from Material-UI ToolbarTitle
 */
var SovosToolbarTitle = function SovosToolbarTitle(_ref) {
  var theme = _ref.theme,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['theme', 'children']);

  var styles = getStyles(theme);
  var styledProps = (0, _reactHelpers.mergePropsWithStyle)(props, styles);
  return _react2.default.createElement(
    _SovosToolbarSpace2.default,
    null,
    _react2.default.createElement(_Toolbar.ToolbarTitle, _extends({ text: children }, styledProps))
  );
};

SovosToolbarTitle.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _Toolbar.ToolbarTitle.propTypes, {
  /** Title is optional and is a parameter that can be specified. */
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]).isRequired,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
}) : {};

exports.default = (0, _withTheme2.default)()(SovosToolbarTitle);