'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabElementProps = exports.TitleElementProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _menu = require('material-ui/svg-icons/navigation/menu');

var _menu2 = _interopRequireDefault(_menu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Popover = require('material-ui/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _arrowDropDown = require('material-ui/svg-icons/navigation/arrow-drop-down');

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

var _Tabs = require('material-ui/Tabs');

var _SovosIconButton = require('../../sovos-icon-button/SovosIconButton');

var _SovosIconButton2 = _interopRequireDefault(_SovosIconButton);

var _SovosFlatButton = require('../../sovos-flat-button/SovosFlatButton');

var _SovosFlatButton2 = _interopRequireDefault(_SovosFlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var titleElementProps = {
  text: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func
};

var tabElementProps = {
  label: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func.isRequired
};

var _ref = _react2.default.createElement(_arrowDropDown2.default, null);

var _ref2 = _react2.default.createElement(
  'span',
  null,
  '/'
);

var _ref3 = _react2.default.createElement(_menu2.default, null);

var SovosTitleBar = function (_React$Component) {
  _inherits(SovosTitleBar, _React$Component);

  function SovosTitleBar(props) {
    _classCallCheck(this, SovosTitleBar);

    var _this = _possibleConstructorReturn(this, (SovosTitleBar.__proto__ || Object.getPrototypeOf(SovosTitleBar)).call(this, props));

    _this.getStyle = function (element) {
      return _this.props.muiTheme.globalLayout.titleBar[element];
    };

    _this.shouldShowTabs = function () {
      return _this.props.tabs && _this.props.tabs.length > 0;
    };

    _this.closeBreadCrumbDropDown = function () {
      return _this.setState({ popoverOpen: false });
    };

    _this.expandBreadCrumbDropDown = function (event) {
      event.preventDefault();

      _this.setState({
        popoverOpen: true,
        anchorEl: event.currentTarget
      });
    };

    _this.renderClickableBreadCrumb = function (item) {
      return _react2.default.createElement(_SovosFlatButton2.default, {
        className: 'sovos-title-bar__top-section__bread-crumb-clickable',
        label: item.text,
        labelPosition: 'before',
        style: { height: 50, minWidth: 0 },
        labelStyle: _this.getStyle('breadCrumbClickable'),
        type: 'custom',
        color: '#000',
        onClick: item.onClick || _this.expandBreadCrumbDropDown,
        icon: item.nestedItems && _ref
      });
    };

    _this.renderNonClickableBreadCrumb = function (item) {
      return _react2.default.createElement(
        'span',
        {
          className: 'sovos-title-bar__top-section__bread-crumb-non-clickable',
          style: _this.getStyle('breadCrumbNonClickable')
        },
        item.text
      );
    };

    _this.renderDropdownItem = function (element, index) {
      return _react2.default.createElement(_MenuItem2.default, {
        key: 'NestedBreadCrumbItem' + index + '-' + element.text,
        primaryText: element.text,
        onClick: element.action
      });
    };

    _this.renderBreadCrumbDropdown = function (element) {
      return _react2.default.createElement(
        _Popover2.default,
        {
          className: 'sovos-title-bar__top-section__bread-crumb-dropdown',
          open: _this.state.popoverOpen,
          anchorEl: _this.state.anchorEl,
          anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
          targetOrigin: { horizontal: 'left', vertical: 'top' },
          onRequestClose: _this.closeBreadCrumbDropDown
        },
        element.nestedItems && element.nestedItems.length > 0 && element.nestedItems.map(_this.renderDropdownItem)
      );
    };

    _this.renderBreadCrumb = function (element, index) {
      var titleElements = _this.props.titleElements;

      var isClickable = !!element.onClick || !!element.nestedItems;
      var isLastItem = index === titleElements.length - 1;

      var opacity = isLastItem || !isClickable ? { opacity: 0.9 } : { opacity: 0.6 };

      return _react2.default.createElement(
        'div',
        {
          className: 'sovos-title-bar__top-section__bread-crumb',
          key: 'BreadCrumb' + index + '-' + element.text,
          style: _extends({}, _this.getStyle('breadCrumb'), opacity)
        },
        isClickable ? _this.renderClickableBreadCrumb(element) : _this.renderNonClickableBreadCrumb(element),
        element.nestedItems && _this.renderBreadCrumbDropdown(element),
        !isLastItem && _ref2
      );
    };

    _this.renderBreadCrumbsSection = function () {
      var _this$props = _this.props,
          navigationCollapsed = _this$props.navigationCollapsed,
          titleElements = _this$props.titleElements;

      var style = _extends({
        padding: navigationCollapsed ? '' : '0 20px'
      }, _this.getStyle('breadCrumbContainer'));

      return _react2.default.createElement(
        'div',
        {
          className: 'sovos-title-bar__top-section__bread-crumbs-container',
          style: style
        },
        titleElements.map(_this.renderBreadCrumb)
      );
    };

    _this.renderTab = function (tab, index) {
      var isSelected = typeof tab.selected === 'function' ? tab.selected() : tab.selected;
      var style = { color: isSelected ? 'rgb(64,192,240)' : 'rgba(0,0,0,.6)' };

      return _react2.default.createElement(_Tabs.Tab, {
        key: 'Tab' + index + '-' + tab.label,
        label: tab.label,
        onActive: tab.onClick,
        style: style
      });
    };

    _this.renderTabSection = function () {
      var _this$props2 = _this.props,
          tabs = _this$props2.tabs,
          window = _this$props2.window,
          navigationCollapsed = _this$props2.navigationCollapsed;


      if (!_this.shouldShowTabs()) return null;

      var width = 100 * tabs.length;
      var containerWidth = navigationCollapsed ? window.innerWidth - 40 : window.innerWidth - 280;
      width = Math.min(width, containerWidth);

      return _react2.default.createElement(
        _Tabs.Tabs,
        {
          className: 'sovos-title-bar__tabs-section',
          onChange: _this.handleChange,
          value: _this.state.slideIndex,
          style: _this.getStyle('tabsContainer'),
          tabItemContainerStyle: _extends({ width: width }, _this.getStyle('tabItemContainer')),
          inkBarStyle: _this.getStyle('tabsInkBar')
        },
        tabs.map(_this.renderTab)
      );
    };

    _this.renderNavigationToggleButton = function () {
      return _this.props.navigationCollapsed && _react2.default.createElement(
        _SovosIconButton2.default,
        {
          className: 'sovos-title-bar__top-section__navigation-button',
          style: _this.getStyle('navigationMenuButton'),
          onClick: _this.props.toggleNavigation
        },
        _ref3
      );
    };

    _this.renderRightIcons = function () {
      if (_this.props.rightIcons && _this.props.rightIcons.length > 0) {
        return _react2.default.createElement(
          'div',
          {
            className: 'sovos-title-bar__top-section__right-icons',
            style: _this.getStyle('rightIconContainer')
          },
          _this.props.rightIcons
        );
      }

      return null;
    };

    _this.state = {
      popoverOpen: false
    };
    return _this;
  }

  _createClass(SovosTitleBar, [{
    key: 'render',
    value: function render() {
      var style = _extends({}, this.getStyle('container'), {
        height: this.shouldShowTabs() ? 100 : 50
      });
      return _react2.default.createElement(
        'div',
        { className: 'sovos-title-bar', style: style },
        _react2.default.createElement(
          'div',
          { className: 'sovos-title-bar__top-section', style: this.getStyle('topSection') },
          this.renderNavigationToggleButton(),
          this.renderBreadCrumbsSection(),
          this.renderRightIcons()
        ),
        this.renderTabSection()
      );
    }
  }]);

  return SovosTitleBar;
}(_react2.default.Component);

SovosTitleBar.defaultProps = {
  rightIcons: [],
  tabs: [],
  window: window
};
SovosTitleBar.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: _propTypes2.default.object.isRequired,
  navigationCollapsed: _propTypes2.default.bool.isRequired,
  rightIcons: _propTypes2.default.node,
  tabs: _propTypes2.default.arrayOf(_propTypes2.default.shape(tabElementProps)),
  titleElements: _propTypes2.default.arrayOf(_propTypes2.default.shape(titleElementProps)).isRequired,
  toggleNavigation: _propTypes2.default.func.isRequired,
  window: _propTypes2.default.object
} : {};
var TitleElementProps = exports.TitleElementProps = titleElementProps;
var TabElementProps = exports.TabElementProps = tabElementProps;
exports.default = (0, _muiThemeable2.default)()(SovosTitleBar);