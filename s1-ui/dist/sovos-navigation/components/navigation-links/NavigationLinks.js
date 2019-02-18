'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkPropTypes = exports.nestedLinkPropsTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = require('material-ui/List');

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _keyboardArrowDown = require('material-ui/svg-icons/hardware/keyboard-arrow-down');

var _keyboardArrowDown2 = _interopRequireDefault(_keyboardArrowDown);

var _keyboardArrowUp = require('material-ui/svg-icons/hardware/keyboard-arrow-up');

var _keyboardArrowUp2 = _interopRequireDefault(_keyboardArrowUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var nestedLinkPropsTypes = exports.nestedLinkPropsTypes = _propTypes2.default.shape({
  label: _propTypes2.default.string.isRequired,
  action: _propTypes2.default.func.isRequired
});

var linkPropTypes = exports.linkPropTypes = _propTypes2.default.shape({
  label: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.func.isRequired,
  action: _propTypes2.default.func,
  nestedLinks: _propTypes2.default.arrayOf(nestedLinkPropsTypes)
});

var NavigationLinks = function (_React$Component) {
  _inherits(NavigationLinks, _React$Component);

  function NavigationLinks() {
    _classCallCheck(this, NavigationLinks);

    var _this = _possibleConstructorReturn(this, (NavigationLinks.__proto__ || Object.getPrototypeOf(NavigationLinks)).call(this));

    _this.onLinkClick = function (link) {
      var hasNestedLinks = link.nestedLinks && link.nestedLinks.length > 0;
      if (hasNestedLinks) {
        var isOpen = _this.state[link.label] || false;
        _this.setState(_defineProperty({}, link.label, !isOpen));
      } else {
        _this.props.onLinkClick(link.label, link.action, hasNestedLinks);
      }
    };

    _this.getNestedLinkArrow = function (link) {
      var style = { fill: 'white', margin: 10 };
      return _this.state[link.label] ? _react2.default.createElement(_keyboardArrowUp2.default, { style: style }) : _react2.default.createElement(_keyboardArrowDown2.default, { style: style });
    };

    _this.getIcon = function (link) {
      var muiTheme = _this.props.muiTheme;

      return _react2.default.createElement(link.icon, {
        style: muiTheme.navigation.links.icons,
        color: '#fff'
      });
    };

    _this.renderLinkItem = function (link, isNested) {
      var _this$props = _this.props,
          getActiveLinkStyle = _this$props.getActiveLinkStyle,
          muiTheme = _this$props.muiTheme;

      var styles = muiTheme.navigation.links;
      var hasNestedLinks = link.nestedLinks && link.nestedLinks.length > 0;
      var style = _extends({}, styles.link, getActiveLinkStyle(link.label));

      return _react2.default.createElement(_List.ListItem, {
        className: isNested ? 'sovos-navigation__links_nested-list-item' : 'sovos-navigation__links_list-item',
        primaryText: link.label,
        leftIcon: isNested ? null : _this.getIcon(link, isNested),
        key: link.label,
        style: style,
        innerDivStyle: styles.innerDivStyle,
        onClick: function onClick() {
          return _this.onLinkClick(link);
        },
        primaryTogglesNestedList: true,
        open: _this.state[link.label],
        nestedListStyle: styles.nestedList,
        rightIcon: hasNestedLinks && _this.getNestedLinkArrow(link),
        nestedItems: link.nestedLinks && link.nestedLinks.map(function (nestedLink) {
          return _this.renderLinkItem(nestedLink, true);
        })
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(NavigationLinks, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          links = _props.links,
          muiTheme = _props.muiTheme;

      return _react2.default.createElement(
        'div',
        {
          className: 'sovos-navigation__links_container',
          style: muiTheme.navigation.links.container
        },
        _react2.default.createElement(
          _List.List,
          { style: { paddingTop: 0 } },
          links.map(function (link) {
            return _this2.renderLinkItem(link);
          })
        )
      );
    }
  }]);

  return NavigationLinks;
}(_react2.default.Component);

NavigationLinks.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: _propTypes2.default.object.isRequired,
  getActiveLinkStyle: _propTypes2.default.func.isRequired,
  onLinkClick: _propTypes2.default.func.isRequired,
  links: _propTypes2.default.arrayOf(linkPropTypes).isRequired
} : {};
exports.default = (0, _muiThemeable2.default)()(NavigationLinks);