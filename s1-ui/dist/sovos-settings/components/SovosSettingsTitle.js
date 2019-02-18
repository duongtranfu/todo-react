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
    title: {
      fontFamily: theme.fontFamily,
      fontSize: 20,
      color: theme.settings.titleColor,
      paddingTop: 20,
      paddingBottom: 10
    }
  };
};

/**
 * *SovosSettingsTitle* name of the settings title
 *
 */
var SovosSettingsTitle = function SovosSettingsTitle(_ref) {
  var theme = _ref.theme,
      children = _ref.children;

  var styles = getStyles(theme);
  return _react2.default.createElement(
    'div',
    { className: 'sovos-settings__title', style: styles.title },
    children
  );
};

SovosSettingsTitle.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node.isRequired,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
} : {};

exports.default = (0, _withTheme2.default)()(SovosSettingsTitle);