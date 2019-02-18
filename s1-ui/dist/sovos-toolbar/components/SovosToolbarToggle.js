'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Chip = require('material-ui/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _withTheme = require('../../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _reactHelpers = require('../../utils/reactHelpers');

require('./SovosToolbarToggle.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getStyles = function getStyles(theme) {
  return {
    style: {
      height: 30,
      marginLeft: 5,
      marginRight: 5,
      borderRadius: 10,
      cursor: 'pointer'
    },
    labelStyle: {
      lineHeight: '30px',
      paddingLeft: 10,
      paddingRight: 10,
      fontWeight: 'normal',
      fontFamily: theme.fontFamily,
      fontSize: 13
    }
  };
};

/**
 * *SovosToolbarDropdown* can be 1 or several dropdowns that are specified by the product.
 * Clicking on the container should open a Material UI dropdown menu. The list of the menu will be passed by the product.
 * If title is visible, these should display to the right of the title.
 *
 * Props from Material-UI Chip
 */
var SovosToolbarToggle = function SovosToolbarToggle(_ref) {
  var selected = _ref.selected,
      children = _ref.children,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ['selected', 'children', 'theme']);

  var styles = getStyles(theme, selected);
  var styledProps = (0, _reactHelpers.mergeDefaultObjectProps)(props, styles);
  return _react2.default.createElement(
    _Chip2.default,
    _extends({
      className: 'chip',
      backgroundColor: selected ? theme.palette.secondaryColor : theme.palette.neutralColors.light,
      labelColor: selected ? theme.palette.secondaryTextColor : theme.palette.disabledColor
    }, styledProps),
    children
  );
};

SovosToolbarToggle.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _Chip2.default.propTypes, {
  /** material-ui/MenuItem that can be specified. */
  children: _propTypes2.default.node.isRequired,
  /** true if element state is on. */
  selected: _propTypes2.default.bool,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
}) : {};

SovosToolbarToggle.defaultProps = {
  selected: false
};

exports.default = (0, _withTheme2.default)()(SovosToolbarToggle);