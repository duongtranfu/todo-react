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

var _SovosSettingsTitle = require('./SovosSettingsTitle');

var _SovosSettingsTitle2 = _interopRequireDefault(_SovosSettingsTitle);

var _SovosSettingsSubtitle = require('./SovosSettingsSubtitle');

var _SovosSettingsSubtitle2 = _interopRequireDefault(_SovosSettingsSubtitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles() {
  return {
    section: {},
    header: {}
  };
};

function getSectionElements(children, isHeader) {
  return _react2.default.Children.toArray(children).filter(function (c) {
    return isHeader === [_SovosSettingsTitle2.default, _SovosSettingsSubtitle2.default].includes(c.type);
  });
}

/**
 * *SovosSettingsSection* contains information about the settings section
 *
 */

var _ref2 = _react2.default.createElement('hr', { className: 'sovos-settings__divider' });

var SovosSettingsSection = function SovosSettingsSection(_ref) {
  var theme = _ref.theme,
      children = _ref.children;

  var styles = getStyles(theme);
  return _react2.default.createElement(
    'div',
    { className: 'sovos-settings__section', style: styles.section },
    _react2.default.createElement(
      'div',
      { className: 'sovos-settings__header', style: styles.header },
      getSectionElements(children, true)
    ),
    getSectionElements(children, false),
    _ref2
  );
};

SovosSettingsSection.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node.isRequired,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
} : {};

exports.default = (0, _withTheme2.default)()(SovosSettingsSection);