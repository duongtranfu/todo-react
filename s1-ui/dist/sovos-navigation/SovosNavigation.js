'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sovosNavigationProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withTheme = require('../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _NavigationBranding = require('./components/navigation-branding/NavigationBranding');

var _NavigationBranding2 = _interopRequireDefault(_NavigationBranding);

var _NavigationLinks = require('./components/navigation-links/NavigationLinks');

var _NavigationLinks2 = _interopRequireDefault(_NavigationLinks);

var _SovosContextSwitcher = require('./components/sovos-context-switcher/SovosContextSwitcher');

var _SovosContextSwitcher2 = _interopRequireDefault(_SovosContextSwitcher);

var _NavigationFooter = require('./components/navigation-footer/NavigationFooter');

var _NavigationFooter2 = _interopRequireDefault(_NavigationFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SovosNavigation = function (_React$Component) {
  _inherits(SovosNavigation, _React$Component);

  function SovosNavigation(props) {
    _classCallCheck(this, SovosNavigation);

    var _this = _possibleConstructorReturn(this, (SovosNavigation.__proto__ || Object.getPrototypeOf(SovosNavigation)).call(this, props));

    _this.getActiveLinkStyle = function (key) {
      return key === _this.state.selectedLink ? { opacity: 1 } : '';
    };

    _this.handleSelectLink = function (key, action, expandMenu) {
      action();
      _this.setState({ selectedLink: key });
      if (!expandMenu) {
        _this.props.hideDrawer();
      }
    };

    _this.state = { selectedLink: '' || props.initialSelectedLink };
    return _this;
  }

  _createClass(SovosNavigation, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          contexts = _props.contexts,
          selectedContext = _props.selectedContext,
          setContext = _props.setContext,
          collapsed = _props.collapsed,
          theme = _props.theme,
          footerProps = _props.footerProps;

      var styles = theme.navigation;

      return _react2.default.createElement(
        'div',
        {
          className: 'sovos-navigation',
          style: _extends({}, styles.container, collapsed ? styles.containerHidden : styles.containerOpen)
        },
        _react2.default.createElement(
          'div',
          { style: styles.innerContainer },
          _react2.default.createElement(_NavigationBranding2.default, {
            productName: this.props.branding.productName
          }),
          contexts && contexts.length > 0 && _react2.default.createElement(_SovosContextSwitcher2.default, {
            collapsed: collapsed,
            contexts: contexts,
            selectedContext: selectedContext,
            setContext: setContext
          }),
          _react2.default.createElement(_NavigationLinks2.default, {
            links: this.props.links,
            getActiveLinkStyle: this.getActiveLinkStyle,
            onLinkClick: this.handleSelectLink
          }),
          _react2.default.createElement(_NavigationFooter2.default, footerProps)
        )
      );
    }
  }]);

  return SovosNavigation;
}(_react2.default.Component);

SovosNavigation.defaultProps = {
  footerProps: null
};
SovosNavigation.displayName = 'Navigation';
SovosNavigation.propTypes = process.env.NODE_ENV !== "production" ? {
  branding: _propTypes2.default.shape({
    productName: _propTypes2.default.string.isRequired,
    collapsed: _propTypes2.default.bool
  }).isRequired,
  collapsed: _propTypes2.default.bool.isRequired,
  contexts: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    taxYear: _propTypes2.default.string,
    type: _propTypes2.default.oneOf(['production', 'test', 'default'])
  })).isRequired,
  footerProps: _propTypes2.default.shape({
    onHelpClicked: _propTypes2.default.func,
    showSettingsButton: _propTypes2.default.bool,
    showHelpButton: _propTypes2.default.bool,
    settingsMenuItems: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      label: _propTypes2.default.string,
      action: _propTypes2.default.func
    })),
    userName: _propTypes2.default.string.isRequired,
    userMenuItems: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      label: _propTypes2.default.string,
      action: _propTypes2.default.func
    })).isRequired
  }),
  hideDrawer: _propTypes2.default.func.isRequired,
  initialSelectedLink: _propTypes2.default.string.isRequired,
  links: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    icon: _propTypes2.default.func.isRequired,
    action: _propTypes2.default.func,
    nestedLinks: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      label: _propTypes2.default.string.isRequired,
      action: _propTypes2.default.func.isRequired
    }))
  })).isRequired,
  theme: _propTypes2.default.object.isRequired,
  selectedContext: _SovosContextSwitcher.contextItemPropTypes.isRequired,
  setContext: _propTypes2.default.func.isRequired
} : {};
var sovosNavigationProps = exports.sovosNavigationProps = SovosNavigation.propTypes;

exports.default = (0, _withTheme2.default)()(SovosNavigation);