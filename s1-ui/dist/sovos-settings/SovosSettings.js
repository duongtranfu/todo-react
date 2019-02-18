'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withTheme = require('../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _reactHelpers = require('../utils/reactHelpers');

require('./SovosSettings.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getStyles = function getStyles(theme) {
  return {
    backgroundColor: theme.settings.backgroundColor,
    fontFamily: theme.fontFamily
  };
};

/**
 * *Settings* is a component that allows to create responsive layout for settings divided into multiple sections.
 *
 */
var SovosSettings = function SovosSettings(_ref) {
  var theme = _ref.theme,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['theme', 'children']);

  var styles = getStyles(theme);
  var styledProps = (0, _reactHelpers.mergePropsWithStyle)(props, styles);
  return _react2.default.createElement(
    'div',
    _extends({ className: 'sovos-settings' }, styledProps),
    children
  );
};

SovosSettings.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A collection of SovosSettingsSection subcomponents
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
} : {};

SovosSettings.displayName = 'Settings';

exports.default = (0, _withTheme2.default)()(SovosSettings);