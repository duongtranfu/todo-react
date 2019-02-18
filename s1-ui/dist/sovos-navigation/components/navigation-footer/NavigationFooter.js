'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterProps = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _materialUi = require('material-ui');

var _accountCircle = require('material-ui/svg-icons/action/account-circle');

var _accountCircle2 = _interopRequireDefault(_accountCircle);

var _settings = require('material-ui/svg-icons/action/settings');

var _settings2 = _interopRequireDefault(_settings);

var _help = require('material-ui/svg-icons/action/help');

var _help2 = _interopRequireDefault(_help);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _sovosIconButton = require('../../../sovos-icon-button');

var _sovosIconButton2 = _interopRequireDefault(_sovosIconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItemPropType = _propTypes2.default.shape({
  label: _propTypes2.default.string,
  action: _propTypes2.default.func
});

var _ref = _react2.default.createElement(_accountCircle2.default, null);

var _ref2 = _react2.default.createElement(_settings2.default, null);

var _ref3 = _react2.default.createElement(_help2.default, null);

var NavigationFooter = function (_React$Component) {
  _inherits(NavigationFooter, _React$Component);

  function NavigationFooter(props) {
    _classCallCheck(this, NavigationFooter);

    var _this = _possibleConstructorReturn(this, (NavigationFooter.__proto__ || Object.getPrototypeOf(NavigationFooter)).call(this, props));

    _this.handleMenuClick = function (action) {
      _this.hideUserMenu();
      action();
    };

    _this.showUserMenu = function (event) {
      event.preventDefault();
      _this.setState({
        userMenuOpen: true,
        userAnchorEl: event.currentTarget
      });
    };

    _this.hideUserMenu = function () {
      _this.setState({ userMenuOpen: false });
    };

    _this.showSettingsMenu = function (event) {
      event.preventDefault();
      _this.setState({
        settingsMenuOpen: true,
        settingsAnchorEl: event.currentTarget
      });
    };

    _this.hideSettingsMenu = function () {
      _this.setState({ settingsMenuOpen: false });
    };

    _this.renderSettingsMenu = function () {
      var settingsMenuItems = _this.props.settingsMenuItems;

      var styles = _this.props.muiTheme.navigation.footer;
      var popover = styles.popover,
          popoverContainer = styles.popoverContainer,
          popoverMenuItems = styles.popoverMenuItems;


      return _react2.default.createElement(
        _materialUi.Popover,
        {
          style: popoverContainer,
          open: _this.state.settingsMenuOpen,
          anchorEl: _this.state.settingsAnchorEl,
          onRequestClose: _this.hideSettingsMenu,
          anchorOrigin: { horizontal: 'middle', vertical: 'top' },
          targetOrigin: { horizontal: 'middle', vertical: 'bottom' }
        },
        _react2.default.createElement(
          'div',
          { style: popover },
          _react2.default.createElement(
            _materialUi.Menu,
            null,
            settingsMenuItems.map(function (element) {
              return _react2.default.createElement(_materialUi.MenuItem, {
                style: popoverMenuItems,
                innerDivStyle: { padding: 0 },
                onClick: function onClick() {
                  return _this.handleMenuClick(element.action);
                },
                primaryText: element.label,
                key: element.label
              });
            })
          )
        )
      );
    };

    _this.renderUserMenu = function () {
      var _this$props = _this.props,
          userMenuItems = _this$props.userMenuItems,
          userName = _this$props.userName;

      var styles = _this.props.muiTheme.navigation.footer;
      var popover = styles.popover,
          userMenuHeader = styles.userMenuHeader,
          popoverMenuItems = styles.popoverMenuItems,
          popoverContainer = styles.popoverContainer;


      return _react2.default.createElement(
        _materialUi.Popover,
        {
          style: popoverContainer,
          open: _this.state.userMenuOpen,
          anchorEl: _this.state.userAnchorEl,
          onRequestClose: _this.hideUserMenu,
          anchorOrigin: { horizontal: 'middle', vertical: 'top' },
          targetOrigin: { horizontal: 'middle', vertical: 'bottom' }
        },
        _react2.default.createElement(
          'div',
          { style: popover },
          _react2.default.createElement(
            'div',
            { style: userMenuHeader },
            _react2.default.createElement(_accountCircle2.default, {
              style: {
                height: 36,
                width: 36,
                color: 'rgba(255,255,255,0.8)',
                marginRight: 5
              }
            }),
            _react2.default.createElement(
              'span',
              null,
              userName
            )
          ),
          _react2.default.createElement(
            _materialUi.Menu,
            null,
            (userMenuItems || []).map(function (element) {
              return _react2.default.createElement(_materialUi.MenuItem, {
                style: popoverMenuItems,
                innerDivStyle: { padding: 0 },
                onClick: function onClick() {
                  return _this.handleMenuClick(element.action);
                },
                primaryText: element.label,
                key: element.label
              });
            })
          )
        )
      );
    };

    _this.state = {
      userMenuOpen: false,
      settingsMenuOpen: false
    };
    return _this;
  }

  _createClass(NavigationFooter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          showSettingsButton = _props.showSettingsButton,
          showHelpButton = _props.showHelpButton,
          muiTheme = _props.muiTheme;

      var style = {
        minWidth: 30, width: 30, height: 30
      };

      var iconStyle = {
        minWidth: 30, width: 30, height: 30, paddingTop: 4
      };

      var color = 'rgba(255, 255, 255, 0.7)';

      return _react2.default.createElement(
        'div',
        {
          className: 'sovos-navigation__footer',
          style: muiTheme.navigation.footer
        },
        _react2.default.createElement(
          _sovosIconButton2.default,
          {
            className: 'sovos-navigation__footer_avatar-icon',
            color: color,
            style: style,
            iconStyle: iconStyle,
            onClick: this.showUserMenu
          },
          _ref
        ),
        this.renderUserMenu(),
        showSettingsButton && _react2.default.createElement(
          _sovosIconButton2.default,
          {
            className: 'sovos-navigation__footer_settings-icon',
            style: style,
            iconStyle: iconStyle,
            color: color,
            onClick: this.showSettingsMenu
          },
          _ref2
        ),
        showSettingsButton && this.renderSettingsMenu(),
        showHelpButton && _react2.default.createElement(
          _sovosIconButton2.default,
          {
            className: 'sovos-navigation__footer_help-icon',
            style: style,
            iconStyle: iconStyle,
            color: color,
            onClick: this.props.onHelpClicked
          },
          _ref3
        )
      );
    }
  }]);

  return NavigationFooter;
}(_react2.default.Component);

NavigationFooter.defaultProps = {
  onHelpClicked: function onHelpClicked() {},
  showSettingsButton: false,
  showHelpButton: false,
  settingsMenuItems: []
};
NavigationFooter.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: _propTypes2.default.object.isRequired,
  onHelpClicked: _propTypes2.default.func,
  showSettingsButton: _propTypes2.default.bool,
  showHelpButton: _propTypes2.default.bool,
  settingsMenuItems: _propTypes2.default.arrayOf(MenuItemPropType),
  userName: _propTypes2.default.string.isRequired,
  userMenuItems: _propTypes2.default.arrayOf(MenuItemPropType).isRequired
} : {};
var FooterProps = exports.FooterProps = NavigationFooter.propTypes;

exports.default = (0, _muiThemeable2.default)()(NavigationFooter);