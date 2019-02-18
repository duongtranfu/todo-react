'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withTheme = require('../../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles(theme) {
  return {
    subtitle: {
      fontFamily: theme.fontFamily,
      fontSize: 14,
      color: theme.settings.subtitleColor,
      paddingBottom: 15
    }
  };
};

/**
 * *SovosSettingsSubtitle* contains text describing the settings section
 *
 */
var SovosSettingsSubtitle = function SovosSettingsSubtitle(_ref) {
  var theme = _ref.theme,
      children = _ref.children;

  var styles = getStyles(theme);
  return _react2.default.createElement(
    'div',
    { style: styles.subtitle, className: 'sovos-settings__subtitle' },
    children
  );
};

SovosSettingsSubtitle.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node.isRequired,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
} : {};

exports.default = (0, _withTheme2.default)()(SovosSettingsSubtitle);