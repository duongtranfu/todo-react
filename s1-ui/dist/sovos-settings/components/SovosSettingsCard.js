'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require('material-ui/Card');

var _Card2 = _interopRequireDefault(_Card);

var _withTheme = require('../../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles() {
  return {
    card: {
      padding: 40
    }
  };
};

/**
 * *SovosSettingsCard* contains all the elements that are to be displayed there
 */
var SovosSettingsCard = function SovosSettingsCard(_ref) {
  var theme = _ref.theme,
      children = _ref.children;

  var styles = getStyles(theme);

  return _react2.default.createElement(
    _Card2.default,
    { style: styles.card, className: 'sovos-settings__card' },
    children
  );
};

SovosSettingsCard.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _Card2.default.PropTypes, {
  children: _propTypes2.default.node.isRequired,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
}) : {};

exports.default = (0, _withTheme2.default)()(SovosSettingsCard);