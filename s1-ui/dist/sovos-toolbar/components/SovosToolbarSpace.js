'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Toolbar = require('material-ui/Toolbar');

var _reactHelpers = require('../../utils/reactHelpers');

var _SovosToolbarGroup = require('./SovosToolbarGroup');

var _SovosToolbarGroup2 = _interopRequireDefault(_SovosToolbarGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getStyles = function getStyles() {
  return {
    minWidth: 0,
    flex: '1 1 auto'
  };
};

/**
 * *SovosToolbarSpace* empty element. You can use it to split left and right align components when there is no title
 *
 * Props from Material-UI ToolbarTitle
 */
var SovosToolbarSpace = function SovosToolbarSpace(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  var styles = getStyles();
  var styledProps = (0, _reactHelpers.mergePropsWithStyle)(props, styles);
  return _react2.default.createElement(
    _SovosToolbarGroup2.default,
    styledProps,
    children
  );
};

SovosToolbarSpace.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _Toolbar.ToolbarTitle.propTypes) : {};

exports.default = SovosToolbarSpace;