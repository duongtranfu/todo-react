'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withTheme = require('../../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _getStyles = require('./getStyles');

var _getStyles2 = _interopRequireDefault(_getStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColumnHeaderRow = function (_PureComponent) {
  _inherits(ColumnHeaderRow, _PureComponent);

  function ColumnHeaderRow() {
    _classCallCheck(this, ColumnHeaderRow);

    return _possibleConstructorReturn(this, (ColumnHeaderRow.__proto__ || Object.getPrototypeOf(ColumnHeaderRow)).apply(this, arguments));
  }

  _createClass(ColumnHeaderRow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          theme = _props.theme;

      var styles = (0, _getStyles2.default)(theme);

      return _react2.default.createElement(
        'div',
        { style: styles.headerWrapper },
        children
      );
    }
  }]);

  return ColumnHeaderRow;
}(_react.PureComponent);

ColumnHeaderRow.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.element.isRequired,
  theme: _propTypes2.default.object.isRequired
} : {};
exports.default = (0, _withTheme2.default)()(ColumnHeaderRow);