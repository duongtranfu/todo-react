'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _SovosNavigation = require('../sovos-navigation/SovosNavigation');

var _SovosNavigation2 = _interopRequireDefault(_SovosNavigation);

var _SovosHeroBanner = require('../sovos-hero-banner/SovosHeroBanner');

var _SovosHeroBanner2 = _interopRequireDefault(_SovosHeroBanner);

var _SovosTitleBar = require('./components/SovosTitleBar');

var _SovosTitleBar2 = _interopRequireDefault(_SovosTitleBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SovosGlobalLayout = function (_React$Component) {
  _inherits(SovosGlobalLayout, _React$Component);

  function SovosGlobalLayout(props) {
    _classCallCheck(this, SovosGlobalLayout);

    var _this = _possibleConstructorReturn(this, (SovosGlobalLayout.__proto__ || Object.getPrototypeOf(SovosGlobalLayout)).call(this, props));

    _this.onLinkClick = function (action) {
      action();
      _this.toggleNavigation(false);
    };

    _this.toggleNavigation = function (collapsed) {
      _this.setState({
        navigationCollapsed: typeof collapsed === 'boolean' ? !collapsed : !_this.state.navigationCollapsed
      });
    };

    _this.isSmallerThanBreakpoint = function () {
      return _this.props.window.innerWidth < _this.props.breakPoint;
    };

    _this.renderTitleBarAndPage = function () {
      var _this$props = _this.props,
          muiTheme = _this$props.muiTheme,
          wrapContentInPaper = _this$props.wrapContentInPaper,
          children = _this$props.children,
          style = _this$props.style,
          heroBanner = _this$props.heroBanner,
          window = _this$props.window;

      var styles = muiTheme.globalLayout;

      return _react2.default.createElement(
        'div',
        {
          style: _extends({}, styles.appBarAndContentContainer, style)
        },
        _react2.default.createElement(_SovosTitleBar2.default, {
          window: window,
          titleElements: _this.props.titleElements,
          navigationCollapsed: _this.isSmallerThanBreakpoint(),
          toggleNavigation: _this.toggleNavigation,
          rightIcons: _this.props.titleBarActions,
          tabs: _this.props.titleBarTabs
        }),
        _react2.default.createElement(
          'div',
          { style: { padding: 20 } },
          heroBanner && _react2.default.createElement(_SovosHeroBanner2.default, _extends({
            parentPadding: { top: 20, left: 20, right: 20 }
          }, heroBanner)),
          wrapContentInPaper ? _react2.default.createElement(
            _Paper2.default,
            { style: { padding: 20, marginTop: heroBanner ? 20 : 0 } },
            children
          ) : children
        )
      );
    };

    _this.renderNavigation = function () {
      return _react2.default.createElement(_SovosNavigation2.default, _extends({}, _this.props.navigationProps, {
        branding: _this.props.navigationProps.branding,
        footerProps: _this.props.navigationProps.footerProps,
        links: _this.props.navigationProps.links,
        initialSelectedLink: _this.props.navigationProps.initialSelectedLink,
        collapsed: _this.state.navigationCollapsed,
        onItemClick: _this.onLinkClick,
        onCollapseToggled: _this.toggleNavigation,
        hideDrawer: function hideDrawer() {
          return _this.isSmallerThanBreakpoint() && _this.toggleNavigation(false);
        }
      }));
    };

    _this.renderOverlay = function () {
      return _react2.default.createElement('div', {
        className: 'sovos-global-layout__overlay',
        onClick: function onClick() {
          return _this.toggleNavigation(false);
        },
        style: _this.isSmallerThanBreakpoint() && !_this.state.navigationCollapsed ? _this.props.muiTheme.globalLayout.overlayVisible : _this.props.muiTheme.globalLayout.overlayHidden
      });
    };

    var initialNavigationCollapsed = _this.props.initialNavigationCollapsed;

    _this.state = {
      navigationCollapsed: typeof initialNavigationCollapsed !== 'undefined' ? initialNavigationCollapsed : _this.isSmallerThanBreakpoint()
    };

    if (window.addEventListener) {
      window.addEventListener('resize', function () {
        var isSmallerThanBreakpoint = _this.isSmallerThanBreakpoint();
        if (isSmallerThanBreakpoint !== _this.state.navigationCollapsed) {
          _this.setState({ navigationCollapsed: isSmallerThanBreakpoint });
        }
      });
    }
    return _this;
  }

  _createClass(SovosGlobalLayout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: {
              display: 'flex',
              width: this.props.style.width || '100vw'
            }
          },
          this.renderNavigation(),
          this.renderTitleBarAndPage()
        ),
        this.renderOverlay()
      );
    }
  }]);

  return SovosGlobalLayout;
}(_react2.default.Component);

SovosGlobalLayout.defaultProps = {
  titleBarTabs: null,
  titleBarActions: null,
  initialNavigationCollapsed: undefined,
  breakPoint: 960,
  wrapContentInPaper: true,
  style: {},
  heroBanner: undefined,
  window: window
};
SovosGlobalLayout.displayName = 'GlobalLayout';
SovosGlobalLayout.propTypes = process.env.NODE_ENV !== "production" ? {
  breakPoint: _propTypes2.default.number,
  children: _propTypes2.default.node.isRequired,
  initialNavigationCollapsed: _propTypes2.default.bool,
  heroBanner: _propTypes2.default.object,
  muiTheme: _propTypes2.default.object.isRequired,
  navigationProps: _propTypes2.default.shape({
    branding: _propTypes2.default.shape({
      productName: _propTypes2.default.string.isRequired,
      collapsed: _propTypes2.default.bool
    }),
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
    links: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      label: _propTypes2.default.string.isRequired,
      icon: _propTypes2.default.func.isRequired,
      action: _propTypes2.default.func,
      nestedLinks: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        label: _propTypes2.default.string.isRequired,
        action: _propTypes2.default.func.isRequired
      }))
    })).isRequired,
    initialSelectedLink: _propTypes2.default.string.isRequired,
    setContext: _propTypes2.default.func.isRequired
  }).isRequired,
  style: _propTypes2.default.object,
  titleBarTabs: _propTypes2.default.arrayOf(_propTypes2.default.object),
  titleBarActions: _propTypes2.default.node,
  titleElements: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    text: _propTypes2.default.string.isRequired,
    onClick: _propTypes2.default.func
  })).isRequired,
  window: _propTypes2.default.object,
  wrapContentInPaper: _propTypes2.default.bool
} : {};
exports.default = (0, _muiThemeable2.default)()(SovosGlobalLayout);