'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withTheme = require('../../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

var _ColumnHeaderRow = require('./ColumnHeaderRow');

var _ColumnHeaderRow2 = _interopRequireDefault(_ColumnHeaderRow);

var _ColumnRow = require('./ColumnRow');

var _ColumnRow2 = _interopRequireDefault(_ColumnRow);

var _SelectCell = require('./SelectCell');

var _SelectCell2 = _interopRequireDefault(_SelectCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectColumn = function (_PureComponent) {
  _inherits(SelectColumn, _PureComponent);

  function SelectColumn() {
    _classCallCheck(this, SelectColumn);

    return _possibleConstructorReturn(this, (SelectColumn.__proto__ || Object.getPrototypeOf(SelectColumn)).apply(this, arguments));
  }

  _createClass(SelectColumn, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          allSelected = _props.allSelected,
          selectedRows = _props.selectedRows,
          onSelectAllClicked = _props.onSelectAllClicked,
          onSelectRowClicked = _props.onSelectRowClicked,
          hoveredIndex = _props.hoveredIndex,
          toggleHover = _props.toggleHover,
          otherProps = _objectWithoutProperties(_props, ['data', 'allSelected', 'selectedRows', 'onSelectAllClicked', 'onSelectRowClicked', 'hoveredIndex', 'toggleHover']);

      return _react2.default.createElement(
        _Column2.default,
        otherProps,
        _react2.default.createElement(
          _ColumnHeaderRow2.default,
          null,
          _react2.default.createElement(_SelectCell2.default, {
            checked: allSelected,
            onCheck: onSelectAllClicked
          })
        ),
        data.map(function (dataRow, rowIndex) {
          return _react2.default.createElement(
            _ColumnRow2.default,
            {
              key: 'selectRow-' + (dataRow.id || rowIndex),
              toggleHover: toggleHover,
              dataRow: dataRow,
              isHovered: hoveredIndex === rowIndex,
              rowIndex: rowIndex
            },
            _react2.default.createElement(_SelectCell2.default, {
              checked: allSelected || selectedRows.includes(rowIndex),
              onCheck: onSelectRowClicked,
              rowIndex: rowIndex
            })
          );
        })
      );
    }
  }]);

  return SelectColumn;
}(_react.PureComponent);

SelectColumn.propTypes = process.env.NODE_ENV !== "production" ? _extends({
  allSelected: _propTypes2.default.bool.isRequired,
  selectedRows: _propTypes2.default.arrayOf(_propTypes2.default.number).isRequired,
  onSelectAllClicked: _propTypes2.default.func.isRequired,
  onSelectRowClicked: _propTypes2.default.func.isRequired
}, _Column.columnProps) : {};
exports.default = (0, _withTheme2.default)()(SelectColumn);