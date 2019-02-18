'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyledActions = exports.getStyle = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SovosFlatButton = require('../../sovos-flat-button/SovosFlatButton');

var _SovosFlatButton2 = _interopRequireDefault(_SovosFlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyle = exports.getStyle = function getStyle() {
  return {
    padding: '10px 0 0 0'
  };
};

/**
 * Default value for actions if not specified
 */
var DEFAULT_ACTIONS = [_react2.default.createElement(_SovosFlatButton2.default, { label: 'Cancel', type: 'secondary' }), _react2.default.createElement(_SovosFlatButton2.default, { label: 'Action', type: 'primary' })];

/**
 * `SovosDialogActions` is a component to be used inside `SovosDialog` to set up a dialog actions.
 */
var SovosDialogActions = function SovosDialogActions(props) {
  return _react2.default.createElement('div', props);
};

/* eslint-disable react/no-unused-prop-types */
SovosDialogActions.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The contents of the component, must be one or more SovosFlatButtons.
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};

SovosDialogActions.defaultProps = {
  children: DEFAULT_ACTIONS,
  className: undefined,
  style: undefined
};

var actionsStyles = {
  margin: 0,
  marginRight: '10px'
};

var lastActionStyle = {
  marginRight: 0
};

var getStyledActions = exports.getStyledActions = function getStyledActions(actions) {
  if (actions && actions.length > 0) {
    actions = _react2.default.Children.map(actions, function (action, index) {
      var style = index === actions.length - 1 ? _extends({}, action.style, actionsStyles, lastActionStyle) : _extends({}, action.style, actionsStyles);

      return _react2.default.cloneElement(action, { style: style });
    });
  }

  return actions;
};

exports.default = SovosDialogActions;