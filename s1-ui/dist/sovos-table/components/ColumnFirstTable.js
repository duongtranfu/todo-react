'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DataColumn = require('./DataColumn');

var _DataColumn2 = _interopRequireDefault(_DataColumn);

var _SelectColumn = require('./SelectColumn');

var _SelectColumn2 = _interopRequireDefault(_SelectColumn);

var _ActionColumn = require('./ActionColumn');

var _ActionColumn2 = _interopRequireDefault(_ActionColumn);

var _columnPropType = require('../helper/columnPropType');

var _columnPropType2 = _interopRequireDefault(_columnPropType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0
  },
  column: {
    overflow: 'hidden',
    backgroundColor: 'white'
  }
};

function getWidthOptionsFromType(type) {
  switch (type) {
    case 'greedy':
      return {
        grow: 1,
        shrink: 100,
        min: 60
      };
    case 'currency':
      return {
        grow: 0,
        shrink: 0
      };
    default:
      return {
        grow: 1,
        shrink: 1,
        max: 120,
        min: 60
      };
  }
}

// If no columns are greedy make all columns greedy
function getColumns(columnConfig) {
  // Hydrate widthConfig from type
  var columnsWithWidthConfig = columnConfig.map(function (config) {
    return _extends({
      widthConfig: _extends({}, getWidthOptionsFromType(config.type), config.widthConfig)
    }, config);
  });

  // Clone config and populate default options
  var columns = columnsWithWidthConfig.map(function (column) {
    // If there are no greedy columns all columns should be greedy
    var optionsStyle = {
      flexGrow: column.widthConfig.grow,
      flexShrink: column.widthConfig.shrink,
      flexBasis: column.widthConfig.basis,
      minWidth: column.widthConfig.min,
      maxWidth: column.widthConfig.max
    };
    // Manually configured styles should overwrite options
    var columnStyle = _extends({}, optionsStyle, column.style);
    return _extends({ style: columnStyle }, column);
  });

  return columns;
}

var ColumnFirstTable = function (_PureComponent) {
  _inherits(ColumnFirstTable, _PureComponent);

  function ColumnFirstTable() {
    _classCallCheck(this, ColumnFirstTable);

    return _possibleConstructorReturn(this, (ColumnFirstTable.__proto__ || Object.getPrototypeOf(ColumnFirstTable)).apply(this, arguments));
  }

  _createClass(ColumnFirstTable, [{
    key: 'renderActionColumn',
    value: function renderActionColumn() {
      var _props = this.props,
          data = _props.data,
          toggleHover = _props.toggleHover,
          hoveredIndex = _props.hoveredIndex,
          allSelected = _props.allSelected,
          selectedRows = _props.selectedRows;


      if (data.find(function (d) {
        return d.actions;
      })) {
        return _react2.default.createElement(_ActionColumn2.default, {
          data: data,
          toggleHover: toggleHover,
          hoveredIndex: hoveredIndex,
          allSelected: allSelected,
          selectedRows: selectedRows
        });
      }

      return null;
    }
  }, {
    key: 'renderSelectColumn',
    value: function renderSelectColumn() {
      var _props2 = this.props,
          data = _props2.data,
          selectable = _props2.selectable,
          allSelected = _props2.allSelected,
          onSelectAllClicked = _props2.onSelectAllClicked,
          onSelectRowClicked = _props2.onSelectRowClicked,
          selectedRows = _props2.selectedRows,
          toggleHover = _props2.toggleHover,
          hoveredIndex = _props2.hoveredIndex;


      if (selectable) {
        return _react2.default.createElement(_SelectColumn2.default, {
          data: data,
          allSelected: allSelected,
          onSelectAllClicked: onSelectAllClicked,
          onSelectRowClicked: onSelectRowClicked,
          selectedRows: selectedRows,
          toggleHover: toggleHover,
          hoveredIndex: hoveredIndex
        });
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          columns = _props3.columns,
          data = _props3.data,
          onRowClick = _props3.onRowClick,
          toggleHover = _props3.toggleHover,
          hoveredIndex = _props3.hoveredIndex;


      return _react2.default.createElement(
        'div',
        { style: styles.container },
        this.renderSelectColumn(),
        getColumns(columns).map(function (column, index) {
          return _react2.default.createElement(_DataColumn2.default, {
            key: 'dataColumn-' + (column.id || index),
            column: column,
            data: data,
            style: _extends({}, styles.column, column.style),
            onRowClick: onRowClick,
            toggleHover: toggleHover,
            hoveredIndex: hoveredIndex
          });
        }),
        this.renderActionColumn()
      );
    }
  }]);

  return ColumnFirstTable;
}(_react.PureComponent);

ColumnFirstTable.defaultProps = {
  hoveredIndex: undefined
};
ColumnFirstTable.propTypes = process.env.NODE_ENV !== "production" ? {
  columns: _propTypes2.default.arrayOf(_columnPropType2.default).isRequired,
  data: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  selectable: _propTypes2.default.bool.isRequired,
  allSelected: _propTypes2.default.bool.isRequired,
  onRowClick: _propTypes2.default.func.isRequired,
  onSelectAllClicked: _propTypes2.default.func.isRequired,
  onSelectRowClicked: _propTypes2.default.func.isRequired,
  selectedRows: _propTypes2.default.arrayOf(_propTypes2.default.number).isRequired,
  toggleHover: _propTypes2.default.func.isRequired,
  hoveredIndex: _propTypes2.default.number
} : {};
exports.default = ColumnFirstTable;