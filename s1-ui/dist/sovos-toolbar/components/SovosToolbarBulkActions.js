'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _colorManipulator = require('material-ui/utils/colorManipulator');

var _withTheme = require('../../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _reactHelpers = require('../../utils/reactHelpers');

var _SovosToolbarGroup = require('./SovosToolbarGroup');

var _SovosToolbarGroup2 = _interopRequireDefault(_SovosToolbarGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getGradientSpec = function getGradientSpec(backgroundColor) {
  return [(0, _colorManipulator.darken)(backgroundColor, 0.5) + ' 0', (0, _colorManipulator.darken)(backgroundColor, 0.2) + ' 4px', backgroundColor + ' 12px'].join(', ');
};

var getStyles = function getStyles(theme, count) {
  return {
    root: {
      background: 'linear-gradient(to left, ' + getGradientSpec(theme.palette.secondaryColor) + ')',
      borderTopLeftRadius: 4,
      paddingLeft: 0,
      overflow: 'hidden',
      flexShrink: 0
    },
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 10px 0 15px',
      marginLeft: count > 0 ? 0 : -300,
      transition: 'margin-left 400ms ease-in-out'
    },
    label: {
      color: theme.palette.secondaryTextColor,
      fontFamily: theme.fontFamily,
      fontSize: 13,
      fontStyle: 'italic',
      whiteSpace: 'nowrap',
      marginRight: 15
    }
  };
};

/**
 * *SovosToolbarBulkActions* is a hidden container that slides out from the left if one or several rows are selected and slides back in if everything is deselected. Therefore, bulk actions only display if at least one row is selected.
 *
 * Props from Material-UI SovosToolbarGroup
 */
var SovosToolbarBulkActions = function SovosToolbarBulkActions(_ref) {
  var count = _ref.count,
      children = _ref.children,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ['count', 'children', 'theme']);

  var styles = getStyles(theme, count);
  var styledProps = (0, _reactHelpers.mergePropsWithStyle)(props, styles.root);

  return _react2.default.createElement(
    _SovosToolbarGroup2.default,
    styledProps,
    _react2.default.createElement(
      'div',
      { style: styles.wrapper },
      _react2.default.createElement(
        'span',
        { style: styles.label },
        count + ' selected'
      ),
      children
    )
  );
};

SovosToolbarBulkActions.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _SovosToolbarGroup2.default.propTypes, {
  /** Actions that can be specified. */
  children: _propTypes2.default.node,
  /** Number of selected items.  */
  count: _propTypes2.default.number.isRequired,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
}) : {};

SovosToolbarBulkActions.defaultProps = {
  children: null
};

exports.default = (0, _withTheme2.default)()(SovosToolbarBulkActions);