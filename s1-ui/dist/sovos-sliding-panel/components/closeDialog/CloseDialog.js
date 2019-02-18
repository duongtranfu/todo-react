'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseDialog = function CloseDialog(_ref) {
  var open = _ref.open,
      onOKClick = _ref.onOKClick,
      onCancelClick = _ref.onCancelClick,
      dialogTitle = _ref.dialogTitle,
      dialogText = _ref.dialogText;

  var actions = [_react2.default.createElement(_FlatButton2.default, { label: 'Cancel', onClick: onCancelClick, key: 'cancel-button' }), _react2.default.createElement(_FlatButton2.default, { label: 'Ok', onClick: onOKClick, key: 'ok-button' })];

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Dialog2.default,
      { title: dialogTitle, actions: actions, open: open, modal: true },
      dialogText
    )
  );
};

CloseDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  open: _propTypes2.default.bool.isRequired,
  onOKClick: _propTypes2.default.func.isRequired,
  onCancelClick: _propTypes2.default.func.isRequired,
  dialogTitle: _propTypes2.default.string.isRequired,
  dialogText: _propTypes2.default.string.isRequired
} : {};

exports.default = CloseDialog;