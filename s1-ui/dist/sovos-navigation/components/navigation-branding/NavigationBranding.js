'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brandingPropTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _sovosbranding = require('../../assets/sovosbranding.png');

var _sovosbranding2 = _interopRequireDefault(_sovosbranding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SovosNavigationBranding = function SovosNavigationBranding(_ref) {
  var collapsed = _ref.collapsed,
      muiTheme = _ref.muiTheme,
      productName = _ref.productName;
  return _react2.default.createElement(
    'div',
    {
      className: 'sovos-navigation__branding_container',
      style: collapsed ? muiTheme.navigation.branding.containerCollapsed : muiTheme.navigation.branding.container
    },
    _react2.default.createElement('div', {
      className: 'sovos-navigation__branding_logo',
      style: _extends({
        backgroundImage: 'url(' + _sovosbranding2.default + ')'
      }, muiTheme.navigation.branding.logo)
    }),
    _react2.default.createElement(
      'span',
      {
        className: 'sovos-navigation__branding_product-name',
        style: muiTheme.navigation.branding.productName
      },
      productName
    )
  );
};

SovosNavigationBranding.defaultProps = {
  collapsed: false
};

SovosNavigationBranding.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: _propTypes2.default.object.isRequired,
  productName: _propTypes2.default.string.isRequired,
  collapsed: _propTypes2.default.bool
} : {};

var brandingPropTypes = exports.brandingPropTypes = SovosNavigationBranding.propTypes;

exports.default = (0, _muiThemeable2.default)()(SovosNavigationBranding);