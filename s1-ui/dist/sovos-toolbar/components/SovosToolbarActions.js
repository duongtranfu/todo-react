'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelpers = require('../../utils/reactHelpers');

var _SovosToolbarGroup = require('./SovosToolbarGroup');

var _SovosToolbarGroup2 = _interopRequireDefault(_SovosToolbarGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getStyles = function getStyles() {
  return {
    paddingLeft: 5,
    paddingRight: 5,
    flexShrink: 1
  };
};

/**
 * *SovosToolbarActions* element is optional - It consists of 1 or more icon buttons. If no icon buttons are sent over, then do not display the container
 *
 * Props from Material-UI SovosToolbarGroup
 */
var SovosToolbarActions = function SovosToolbarActions(_ref) {
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

SovosToolbarActions.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _SovosToolbarGroup2.default.propTypes, {
  /** Actions that can be specified. */
  children: _propTypes2.default.node.isRequired
}) : {};

exports.default = SovosToolbarActions;