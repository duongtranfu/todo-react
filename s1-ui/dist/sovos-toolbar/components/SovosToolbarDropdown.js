'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DropDownMenu = require('material-ui/DropDownMenu');

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

var _withTheme = require('../../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _reactHelpers = require('../../utils/reactHelpers');

var _SovosToolbarGroup = require('./SovosToolbarGroup');

var _SovosToolbarGroup2 = _interopRequireDefault(_SovosToolbarGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getStyles = function getStyles(theme) {
  return {
    style: {
      marginRight: 0,
      paddingLeft: 16
    },
    labelStyle: {
      color: theme.palette.secondaryColor,
      fontFamily: theme.fontFamily,
      height: 50,
      lineHeight: '50px',
      fontSize: 15,
      paddingLeft: 0,
      opacity: 1,
      top: 0
    },
    iconStyle: {
      padding: 0,
      fill: theme.palette.secondaryColor,
      right: 0,
      top: 0
    },
    underlineStyle: {
      display: 'none'
    }
  };
};

/**
 * *SovosToolbarDropdown* can be 1 or several dropdowns that are specified by the product.
 * Clicking on the container should open a Material UI dropdown menu. The list of the menu will be passed by the product.
 * If title is visible, these should display to the right of the title.
 *
 * Props from Material-UI DropDownMenu
 */
var SovosToolbarDropdown = function SovosToolbarDropdown(_ref) {
  var theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ['theme']);

  var styles = getStyles(theme);
  var styledProps = (0, _reactHelpers.mergeDefaultObjectProps)(props, styles);
  return _react2.default.createElement(
    _SovosToolbarGroup2.default,
    null,
    _react2.default.createElement(_DropDownMenu2.default, _extends({
      autoWidth: true,
      anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
      targetOrigin: { vertical: 'top', horizontal: 'left' }
    }, styledProps))
  );
};

SovosToolbarDropdown.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _DropDownMenu2.default.propTypes, {
  /** material-ui/MenuItem that can be specified. */
  children: _propTypes2.default.node.isRequired,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
}) : {};

exports.default = (0, _withTheme2.default)()(SovosToolbarDropdown);