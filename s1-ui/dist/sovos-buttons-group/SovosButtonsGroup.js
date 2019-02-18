'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./sovosButtonsGroup.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SovosButtonsGroup = function SovosButtonsGroup(_ref) {
  var children = _ref.children,
      align = _ref.align,
      style = _ref.style;
  return _react2.default.createElement(
    'div',
    { className: 'sovos-buttons-group sovos-buttons-group__' + align, style: style },
    children
  );
};

/**
 * A group of buttons that will be next to each other with 10px of spacing between them except the first and the last one
 * that won't have margin on the edges. It also exposes an align attribute to show the buttons on the left, center or right
 * section of its parent.
 * @type {{align, style: shim}}
 */
SovosButtonsGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Alignment of the buttons on the button group.
   */
  align: _propTypes2.default.oneOf(['right', 'left', 'center']),
  /**
   * @ignore
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired,
  /**
   * Style of the buttons container
   */
  style: _propTypes2.default.object
} : {};

SovosButtonsGroup.defaultProps = {
  align: 'left',
  style: {}
};

SovosButtonsGroup.displayName = 'ButtonsGroup';

exports.default = SovosButtonsGroup;