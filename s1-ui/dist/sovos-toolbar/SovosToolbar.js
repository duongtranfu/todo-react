'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Toolbar = require('material-ui/Toolbar');

var _withTheme = require('../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _reactHelpers = require('../utils/reactHelpers');

require('./SovosToolbar.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getStyles = function getStyles(theme) {
  return {
    display: 'flex',
    backgroundColor: theme.palette.canvasColor,
    height: 50,
    width: '100%',
    padding: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)'
  };
};

/**
 * *Toolbar* is a component that can be added to the top of any card to give user basic information + tools.
 *
 * Props from Material-UI Toolbar
 */
var SovosToolbar = function SovosToolbar(_ref) {
  var theme = _ref.theme,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['theme', 'children']);

  var styles = getStyles(theme);
  var styledProps = (0, _reactHelpers.mergePropsWithStyle)(props, styles);
  return _react2.default.createElement(
    _Toolbar.Toolbar,
    _extends({}, styledProps, { className: 'sovos-toolbar' }),
    children
  );
};

SovosToolbar.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _Toolbar.Toolbar.propTypes, {
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
}) : {};

SovosToolbar.displayName = 'Toolbar';

exports.default = (0, _withTheme2.default)()(SovosToolbar);