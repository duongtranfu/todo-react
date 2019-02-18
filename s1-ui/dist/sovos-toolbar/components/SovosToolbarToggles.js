'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelpers = require('../../utils/reactHelpers');

var _SovosToolbarGroup = require('./SovosToolbarGroup');

var _SovosToolbarGroup2 = _interopRequireDefault(_SovosToolbarGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles() {
  return {
    group: {
      paddingLeft: 10,
      paddingRight: 10
    }
  };
};

/**
 * *SovosToolbarToggles* wrapper element for SovosToolbarToggle
 *
 * Props from Material-UI SovosToolbarGroup
 */
var SovosToolbarToggles = function SovosToolbarToggles(props) {
  var styles = getStyles();
  var styledProps = (0, _reactHelpers.mergePropsWithStyle)(props, styles.group);

  return _react2.default.createElement(_SovosToolbarGroup2.default, styledProps);
};

SovosToolbarToggles.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _SovosToolbarGroup2.default.propTypes) : {};

exports.default = SovosToolbarToggles;