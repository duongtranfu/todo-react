'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Transition = require('react-transition-group/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var duration = 300;

var defaultStyle = {
  opacity: 0,
  transition: 'opacity ' + duration + 'ms ease-in-out',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.5)',
  zIndex: -1
};

var transitionStyles = {
  entering: {
    zIndex: 1340,
    opacity: 0
  },
  entered: {
    opacity: 1,
    zIndex: 1340
  },
  exiting: {
    zIndex: 1340
  }
};

var SovosDrawerOverlay = function SovosDrawerOverlay(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      transitionsTimeout = _ref.transitionsTimeout;
  return _react2.default.createElement(
    _Transition2.default,
    { 'in': open, timeout: transitionsTimeout },
    function (state) {
      return _react2.default.createElement('div', {
        style: _extends({}, defaultStyle, transitionStyles[state]),
        onClick: onClose
      });
    }
  );
};

SovosDrawerOverlay.propTypes = process.env.NODE_ENV !== "production" ? {
  open: _propTypes2.default.bool.isRequired,
  transitionsTimeout: _propTypes2.default.number.isRequired,
  onClose: _propTypes2.default.func.isRequired
} : {};

exports.default = SovosDrawerOverlay;