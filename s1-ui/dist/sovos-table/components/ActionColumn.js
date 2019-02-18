'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

var _ColumnHeaderRow = require('./ColumnHeaderRow');

var _ColumnHeaderRow2 = _interopRequireDefault(_ColumnHeaderRow);

var _ColumnRow = require('./ColumnRow');

var _ColumnRow2 = _interopRequireDefault(_ColumnRow);

var _ActionCell = require('./ActionCell');

var _ActionCell2 = _interopRequireDefault(_ActionCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _react2.default.createElement(
  _ColumnHeaderRow2.default,
  null,
  _react2.default.createElement('div', { style: _ActionCell.actionCellStyle })
);

var ActionColumn = function (_PureComponent) {
  _inherits(ActionColumn, _PureComponent);

  function ActionColumn() {
    _classCallCheck(this, ActionColumn);

    return _possibleConstructorReturn(this, (ActionColumn.__proto__ || Object.getPrototypeOf(ActionColumn)).apply(this, arguments));
  }

  _createClass(ActionColumn, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          hoveredIndex = _props.hoveredIndex,
          toggleHover = _props.toggleHover,
          props = _objectWithoutProperties(_props, ['data', 'hoveredIndex', 'toggleHover']);

      return _react2.default.createElement(
        _Column2.default,
        props,
        _ref,
        data.map(function (dataRow, rowIndex) {
          var isHovered = hoveredIndex === rowIndex;
          return _react2.default.createElement(
            _ColumnRow2.default,
            {
              key: 'actionRow-' + (dataRow.id || rowIndex),
              toggleHover: toggleHover,
              dataRow: dataRow,
              isHovered: isHovered,
              rowIndex: rowIndex
            },
            _react2.default.createElement(_ActionCell2.default, {
              actions: dataRow.actions,
              isHovered: isHovered
            })
          );
        })
      );
    }
  }]);

  return ActionColumn;
}(_react.PureComponent);

ActionColumn.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _Column.columnProps) : {};
exports.default = (0, _withTheme2.default)()(ActionColumn);