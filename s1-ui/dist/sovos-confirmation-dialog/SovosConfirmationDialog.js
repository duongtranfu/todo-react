'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withTheme = require('../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _index = require('../sovos-dialog/index');

var _sovosFlatButton = require('../sovos-flat-button');

var _sovosFlatButton2 = _interopRequireDefault(_sovosFlatButton);

var _reactHelpers = require('../utils/reactHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DEFAULT_TITLE = 'Are you sure?';
var DEFAULT_CONTENT = 'A positive confirmation, like Transmit, should have 2 buttons:\nCancel (secondary button) and \'Positive action\' (primary button).\nA negative confirmation, like Delete, should have 2 actions,\nCancel (primary button) and \'Negative action\' in a red button.';

var _ref = _react2.default.createElement(
  _index.SovosDialogTitle,
  null,
  DEFAULT_TITLE
);

var getTitle = function getTitle(children) {
  return (0, _reactHelpers.findChildByType)(children, _index.SovosDialogTitle) || _ref;
};

var _ref2 = _react2.default.createElement(
  _index.SovosDialogContent,
  null,
  DEFAULT_CONTENT
);

var getContent = function getContent(children) {
  var childrenToKeep = (0, _reactHelpers.filterOutChildrenByType)(children, _index.SovosDialogTitle, _index.SovosDialogActions);
  if (childrenToKeep.length === 0) {
    return _ref2;
  }

  return childrenToKeep;
};

var getActions = function getActions(dialogProps) {
  var actionLabel = dialogProps.actionLabel,
      cancelLabel = dialogProps.cancelLabel,
      theme = dialogProps.theme,
      negative = dialogProps.negative,
      children = dialogProps.children,
      onAction = dialogProps.onAction,
      onCancel = dialogProps.onCancel;

  // Return custom actions if specified

  var customActions = (0, _reactHelpers.findChildByType)(children, _index.SovosDialogActions);
  if (customActions) {
    return customActions;
  }

  var cancelButton = _react2.default.createElement(_sovosFlatButton2.default, {
    label: cancelLabel,
    type: negative ? 'primary' : 'secondary',
    onClick: onCancel
  });
  var actionButton = _react2.default.createElement(_sovosFlatButton2.default, {
    label: actionLabel,
    type: negative ? 'custom' : 'primary',
    color: negative ? theme.palette.semanticColors.danger.dark : null,
    onClick: onAction
  });

  return _react2.default.createElement(
    _index.SovosDialogActions,
    null,
    cancelButton,
    actionButton
  );
};

/**
 * Specific use case of [SovosDialog component](#dialog).
 * Uses all of its parent props except width, which is set to small.
 */
var SovosConfirmationDialog = function SovosConfirmationDialog(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ['children']);

  return _react2.default.createElement(
    _index.SovosDialog,
    _extends({}, props, { width: 'small' }),
    getTitle(children),
    getContent(children),
    getActions(props)
  );
};

SovosConfirmationDialog.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _index.SovosDialog.propTypes, {
  /**
   * False if the confirmation dialog represents a "negative" action (like delete), otherwise true.
   * Negative dialogs have different default action button colors.
   */
  negative: _propTypes2.default.bool,
  /**
   * Action button label.
   */
  actionLabel: _propTypes2.default.string,
  /**
   * Cancel button label.
   */
  cancelLabel: _propTypes2.default.string,
  /**
   * Function to call when the action button is clicked.
   */
  onAction: _propTypes2.default.func,
  /**
   * Function to call when the cancel button is clicked.
   */
  onCancel: _propTypes2.default.func,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
}) : {};

SovosConfirmationDialog.defaultProps = {
  actionLabel: 'Action',
  onAction: function onAction() {},
  cancelLabel: 'Cancel',
  onCancel: function onCancel() {},
  negative: false
};

SovosConfirmationDialog.displayName = 'ConfirmationDialog';

exports.default = (0, _withTheme2.default)()(SovosConfirmationDialog);