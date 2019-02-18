'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _objectHelpers = require('../utils/objectHelpers');

var _withTheme = require('../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SovosAvatar = function SovosAvatar(_ref) {
  var name = _ref.name,
      surname = _ref.surname,
      size = _ref.size,
      backgroundColor = _ref.backgroundColor,
      color = _ref.color,
      style = _ref.style,
      theme = _ref.theme;

  var styles = (0, _objectHelpers.mergeDeep)({}, theme.authorAvatar.all, theme.authorAvatar[size]);

  styles.button = _extends({}, styles.button, style);
  color = color || theme.authorAvatar.color;
  backgroundColor = backgroundColor || theme.authorAvatar.backgroundColor;

  return _react2.default.createElement(
    _materialUi.IconButton,
    {
      tooltip: name ? name + ' ' + surname : 'Unassigned',
      iconStyle: styles.icon,
      style: styles.button,
      tooltipStyles: styles.tooltip
    },
    _react2.default.createElement(
      _materialUi.Avatar,
      { backgroundColor: backgroundColor, color: color },
      name ? name[0].toUpperCase() + surname[0].toUpperCase() : '?'
    )
  );
};

SovosAvatar.propTypes = process.env.NODE_ENV !== "production" ? {
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  name: _propTypes2.default.string,
  surname: _propTypes2.default.string,
  backgroundColor: _propTypes2.default.string,
  color: _propTypes2.default.string,
  style: _propTypes2.default.object,
  theme: _propTypes2.default.object.isRequired
} : {};

SovosAvatar.defaultProps = {
  size: 'medium',
  name: undefined,
  surname: undefined,
  backgroundColor: undefined,
  color: undefined,
  style: {}
};

SovosAvatar.displayName = 'Avatar';

exports.default = (0, _withTheme2.default)()(SovosAvatar);