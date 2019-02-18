'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyle = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyle = exports.getStyle = function getStyle(_ref) {
  var dialog = _ref.dialog;
  return {
    fontSize: dialog.body.fontSize,
    color: dialog.body.color,
    padding: 0,
    fontWeight: 400,
    minHeight: 186
  };
};

/**
 * `SovosDialogContent` is a component to be used inside `SovosDialog` to set up a dialog body.
 */
var SovosDialogContent = function SovosDialogContent(props) {
  return _react2.default.createElement('div', props);
};

/* eslint-disable react/no-unused-prop-types */
SovosDialogContent.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The contents of the component, any combination of text and components is allowed.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};

SovosDialogContent.defaultProps = {
  className: undefined,
  style: undefined
};

exports.default = SovosDialogContent;