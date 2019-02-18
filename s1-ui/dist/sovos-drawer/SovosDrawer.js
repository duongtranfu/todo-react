'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SovosDrawerContainer = require('./components/sovosDrawerContainer/SovosDrawerContainer');

var _SovosDrawerContainer2 = _interopRequireDefault(_SovosDrawerContainer);

var _SovosDrawerOverlay = require('./components/sovosDrawerOverlay/SovosDrawerOverlay');

var _SovosDrawerOverlay2 = _interopRequireDefault(_SovosDrawerOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transitionsTimeout = 300;

var SovosDrawer = function SovosDrawer(props) {
  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(_SovosDrawerOverlay2.default, { open: props.open, onClose: props.onClose, transitionsTimeout: transitionsTimeout }),
    _react2.default.createElement(_SovosDrawerContainer2.default, _extends({}, props, { transitionsTimeout: transitionsTimeout }))
  );
};

SovosDrawer.propTypes = process.env.NODE_ENV !== "production" ? {
  open: _propTypes2.default.bool.isRequired,
  onClose: _propTypes2.default.func.isRequired
} : {};

SovosDrawer.displayName = 'Drawer';

exports.default = SovosDrawer;