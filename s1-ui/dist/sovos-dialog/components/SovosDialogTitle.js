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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getStyle = function getStyle(_ref) {
  var dialog = _ref.dialog,
      theme = _objectWithoutProperties(_ref, ['dialog']);

  return {
    fontSize: dialog.title.fontSize,
    color: dialog.title.color,
    fontWeight: 500,
    fontFamily: theme.fontFamily,
    lineHeight: 1,
    padding: '0 0 10px 0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };
};

/**
 * Default value for a title if not specified
 */
exports.getStyle = getStyle;
var DEFAULT_TITLE = 'Title';

/**
 * `SovosDialogTitle` is a component to be used inside `SovosDialog` to set up a dialog title.
 */
var SovosDialogTitle = function SovosDialogTitle(props) {
  return _react2.default.createElement('div', props);
};

/* eslint-disable react/no-unused-prop-types */
SovosDialogTitle.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The contents of the component, must be a string.
   */
  children: _propTypes2.default.string,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};

SovosDialogTitle.defaultProps = {
  children: DEFAULT_TITLE,
  className: undefined,
  style: undefined
};

exports.default = SovosDialogTitle;