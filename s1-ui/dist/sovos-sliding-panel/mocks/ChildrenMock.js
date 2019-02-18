'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChildrenMock = function ChildrenMock(props) {
  return _react2.default.createElement(
    'div',
    { id: 'childrenMock' },
    _react2.default.createElement(_RaisedButton2.default, { id: 'closeChildrenMock', label: 'Close', onClick: props.onCloseParentSlide }),
    _react2.default.createElement(_RaisedButton2.default, { id: 'forcedCloseChildrenMock', label: 'Forced Close', onClick: props.onForcedCloseParentSlide })
  );
};

ChildrenMock.propTypes = process.env.NODE_ENV !== "production" ? {
  onCloseParentSlide: _propTypes2.default.func,
  onForcedCloseParentSlide: _propTypes2.default.func
} : {};

ChildrenMock.defaultProps = {
  onCloseParentSlide: null,
  onForcedCloseParentSlide: null
};

exports.default = ChildrenMock;