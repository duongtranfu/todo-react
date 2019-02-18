'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = require('react-transition-group/TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransition = require('react-transition-group/CSSTransition');

var _CSSTransition2 = _interopRequireDefault(_CSSTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OverlayLayer = function OverlayLayer(_ref) {
  var overlayTransition = _ref.overlayTransition,
      overlayEffectTime = _ref.overlayEffectTime,
      onRequestClose = _ref.onRequestClose,
      zIndex = _ref.zIndex,
      open = _ref.open;
  return _react2.default.createElement(
    _TransitionGroup2.default,
    null,
    open && _react2.default.createElement(
      _CSSTransition2.default,
      {
        classNames: overlayTransition,
        timeout: overlayEffectTime
      },
      _react2.default.createElement('div', { className: 'sliding-panel__overlay', style: { zIndex: zIndex }, onClick: function onClick() {
          return onRequestClose(true);
        } })
    )
  );
};

OverlayLayer.propTypes = process.env.NODE_ENV !== "production" ? {
  open: _propTypes2.default.bool.isRequired,
  onRequestClose: _propTypes2.default.func.isRequired,
  overlayTransition: _propTypes2.default.string.isRequired,
  zIndex: _propTypes2.default.number.isRequired,
  overlayEffectTime: _propTypes2.default.number.isRequired
} : {};

exports.default = OverlayLayer;