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

var ColumnRow = function (_PureComponent) {
  _inherits(ColumnRow, _PureComponent);

  function ColumnRow(props) {
    _classCallCheck(this, ColumnRow);

    var _this = _possibleConstructorReturn(this, (ColumnRow.__proto__ || Object.getPrototypeOf(ColumnRow)).call(this, props));

    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(ColumnRow, [{
    key: 'onToggleHover',
    value: function onToggleHover(toggled) {
      this.props.toggleHover(this.props.rowIndex, toggled);
    }
  }, {
    key: 'onMouseEnter',
    value: function onMouseEnter() {
      this.onToggleHover(true);
    }
  }, {
    key: 'onMouseLeave',
    value: function onMouseLeave() {
      this.onToggleHover(false);
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      var _props = this.props,
          onRowClick = _props.onRowClick,
          dataRow = _props.dataRow;

      if (onRowClick) {
        onRowClick(dataRow);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          theme = _props2.theme,
          isHovered = _props2.isHovered;

      var styles = (0, _getStyles2.default)(theme);

      return _react2.default.createElement(
        'div',
        {
          style: Object.assign({}, styles.cellWrapper, isHovered ? theme.tableRowClickable : {}),
          onMouseEnter: this.onMouseEnter,
          onMouseLeave: this.onMouseLeave,
          onClick: this.onClick
        },
        children
      );
    }
  }]);

  return ColumnRow;
}(_react.PureComponent);

ColumnRow.defaultProps = {
  isHovered: false,
  onRowClick: undefined
};
ColumnRow.propTypes = process.env.NODE_ENV !== "production" ? {
  theme: _propTypes2.default.object.isRequired,
  dataRow: _propTypes2.default.object.isRequired,
  rowIndex: _propTypes2.default.number.isRequired,
  isHovered: _propTypes2.default.bool,
  toggleHover: _propTypes2.default.func.isRequired,
  onRowClick: _propTypes2.default.func,
  children: _propTypes2.default.element.isRequired
} : {};
exports.default = (0, _withTheme2.default)()(ColumnRow);