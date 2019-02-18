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

var _SovosDrawerHeader = require('../sovosDrawerHeader/SovosDrawerHeader');

var _SovosDrawerHeader2 = _interopRequireDefault(_SovosDrawerHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var duration = 300;

var defaultStyle = {
  transition: 'width ' + duration + 'ms ease-in-out',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: 0,
  background: 'rgba(0, 0, 0, 0.5)',
  backgroundColor: 'white',
  zIndex: 1350,
  display: 'flex',
  flexDirection: 'column'
};

var transitionStyles = {
  entering: {
    transform: 'translateX(300px)'
  },
  entered: {
    boxShadow: '0 0 17px 6px #444',
    width: 220,
    transform: 'translateX(0)',
    transition: 'transform 0.3s'
  },
  exiting: {
    transform: 'translateX(0)'
  }
};

var SovosDrawerContainer = function SovosDrawerContainer(_ref) {
  var open = _ref.open,
      transitionsTimeout = _ref.transitionsTimeout,
      children = _ref.children,
      headerProps = _objectWithoutProperties(_ref, ['open', 'transitionsTimeout', 'children']);

  return _react2.default.createElement(
    _Transition2.default,
    { 'in': open, timeout: transitionsTimeout },
    function (state) {
      return _react2.default.createElement(
        'div',
        {
          style: _extends({}, defaultStyle, transitionStyles[state])
        },
        _react2.default.createElement(_SovosDrawerHeader2.default, headerProps),
        _react2.default.createElement(
          'div',
          {
            style: {
              padding: 15,
              overflowY: 'auto',
              flex: '1 1 auto'
            }
          },
          children
        )
      );
    }
  );
};

SovosDrawerContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.element.isRequired,
  transitionsTimeout: _propTypes2.default.number.isRequired,
  open: _propTypes2.default.bool.isRequired
} : {};

exports.default = SovosDrawerContainer;