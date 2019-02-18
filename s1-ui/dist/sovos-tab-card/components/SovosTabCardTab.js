'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tabs = require('material-ui/Tabs');

var _withTheme = require('../../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _reactHelpers = require('../../utils/reactHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getStyles = function getStyles(theme) {
  return {
    tab: {
      width: 'auto',
      padding: '0 24px',
      color: 'black',
      borderBottom: 'solid 3px transparent'
    },
    tabActive: {
      width: 'auto',
      padding: '0 24px',
      color: theme.palette.textColor,
      borderBottom: 'solid 3px ' + theme.palette.accent1Color
    }
  };
};

/**
 * Custom tab container used for wrapping tabs content in [SovosTabCard](#sovostabcard).
 */
var SovosTabCardTab = function SovosTabCardTab(_ref) {
  var theme = _ref.theme,
      children = _ref.children,
      active = _ref.active,
      props = _objectWithoutProperties(_ref, ['theme', 'children', 'active']);

  var styles = getStyles(theme);
  var styledProps = (0, _reactHelpers.mergePropsWithStyle)(props, active ? styles.tabActive : styles.tab);

  return _react2.default.createElement(
    _Tabs.Tab,
    styledProps,
    children
  );
};

SovosTabCardTab.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _Tabs.Tab.propTypes, {
  /**
   * True if this tab is currently active, otherwise false.
   */
  active: _propTypes2.default.bool,
  /**
   * Label of the tab.
   */
  label: _propTypes2.default.string,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
}) : {};

SovosTabCardTab.defaultProps = {
  active: false,
  label: undefined
};

// To prevent "Tabs only accepts Tab as children" warning
var toExport = (0, _withTheme2.default)()(SovosTabCardTab);
toExport.muiName = 'Tab';

exports.default = toExport;