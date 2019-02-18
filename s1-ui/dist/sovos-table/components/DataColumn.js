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

var _columnPropType = require('../helper/columnPropType');

var _columnPropType2 = _interopRequireDefault(_columnPropType);

var _DataCell = require('./DataCell');

var _DataCell2 = _interopRequireDefault(_DataCell);

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

var _ColumnHeaderRow = require('./ColumnHeaderRow');

var _ColumnHeaderRow2 = _interopRequireDefault(_ColumnHeaderRow);

var _ColumnRow = require('./ColumnRow');

var _ColumnRow2 = _interopRequireDefault(_ColumnRow);

var _getStyles = require('./getStyles');

var _getStyles2 = _interopRequireDefault(_getStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataColumn = function (_PureComponent) {
  _inherits(DataColumn, _PureComponent);

  function DataColumn() {
    _classCallCheck(this, DataColumn);

    return _possibleConstructorReturn(this, (DataColumn.__proto__ || Object.getPrototypeOf(DataColumn)).apply(this, arguments));
  }

  _createClass(DataColumn, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          column = _props.column,
          data = _props.data,
          onRowClick = _props.onRowClick,
          hoveredIndex = _props.hoveredIndex,
          toggleHover = _props.toggleHover,
          theme = _props.theme,
          otherProps = _objectWithoutProperties(_props, ['column', 'data', 'onRowClick', 'hoveredIndex', 'toggleHover', 'theme']);

      var styles = (0, _getStyles2.default)(theme);

      return _react2.default.createElement(
        _Column2.default,
        _extends({
          theme: theme
        }, otherProps),
        _react2.default.createElement(
          _ColumnHeaderRow2.default,
          null,
          _react2.default.createElement(
            'div',
            { style: styles.header },
            column.title
          )
        ),
        data.map(function (dataRow, rowIndex) {
          return _react2.default.createElement(
            _ColumnRow2.default,
            {
              key: 'dataRow-' + (dataRow.id || rowIndex),
              toggleHover: toggleHover,
              dataRow: dataRow,
              isHovered: hoveredIndex === rowIndex,
              rowIndex: rowIndex
            },
            _react2.default.createElement(_DataCell2.default, {
              data: dataRow,
              style: styles.cell,
              component: column.component
            })
          );
        })
      );
    }
  }]);

  return DataColumn;
}(_react.PureComponent);

DataColumn.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _Column.columnProps, {
  column: _columnPropType2.default.isRequired,
  onRowClick: _propTypes2.default.func.isRequired
}) : {};
exports.default = (0, _withTheme2.default)()(DataColumn);