'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SovosTable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withTheme = require('../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _columnPropType = require('./helper/columnPropType');

var _columnPropType2 = _interopRequireDefault(_columnPropType);

var _ColumnFirstTable = require('./components/ColumnFirstTable');

var _ColumnFirstTable2 = _interopRequireDefault(_ColumnFirstTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseTableStyle = {
  borderCollapse: 'collapse',
  margin: 5,
  width: '100%'
};

var getStyles = function getStyles(theme) {
  return Object.assign({}, baseTableStyle, theme.table);
};

var SovosTable = exports.SovosTable = function (_PureComponent) {
  _inherits(SovosTable, _PureComponent);

  function SovosTable(props) {
    _classCallCheck(this, SovosTable);

    var _this = _possibleConstructorReturn(this, (SovosTable.__proto__ || Object.getPrototypeOf(SovosTable)).call(this, props));

    _this.state = {
      allSelected: false,
      selectedRows: [],
      hoveredIndex: undefined
    };

    _this.selectAllClicked = _this.selectAllClicked.bind(_this);
    _this.selectRowClicked = _this.selectRowClicked.bind(_this);
    _this.toggleHover = _this.toggleHover.bind(_this);
    return _this;
  }

  _createClass(SovosTable, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        muiTheme: this.props.theme
      };
    }
  }, {
    key: 'selectAllClicked',
    value: function selectAllClicked() {
      var _this2 = this;

      var allSelected = !this.state.allSelected;
      var selectedRows = allSelected ? this.props.data.map(function (d, i) {
        return i;
      }) : [];

      this.setState({ allSelected: allSelected, selectedRows: selectedRows }, function () {
        return _this2.props.onRowSelection(_this2.state.selectedRows);
      });
    }
  }, {
    key: 'selectRowClicked',
    value: function selectRowClicked(row) {
      var _this3 = this;

      var selectedRows = this.state.selectedRows;

      var selectedIndex = selectedRows.indexOf(row);
      var newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selectedRows, row);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selectedRows.slice(1));
      } else if (selectedIndex === selectedRows.length - 1) {
        newSelected = newSelected.concat(selectedRows.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(selectedRows.slice(0, selectedIndex), selectedRows.slice(selectedIndex + 1));
      }

      this.setState({
        allSelected: newSelected.length === this.props.data.length,
        selectedRows: newSelected
      }, function () {
        return _this3.props.onRowSelection(_this3.state.selectedRows);
      });
    }
  }, {
    key: 'toggleHover',
    value: function toggleHover(hoveredIndex, isHovered) {
      var newIndex = !isHovered && hoveredIndex === this.state.hoveredIndex ? undefined : hoveredIndex;
      this.setState({ hoveredIndex: newIndex });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          columns = _props.columns,
          data = _props.data,
          theme = _props.theme,
          selectable = _props.selectable,
          onRowClick = _props.onRowClick;
      var _state = this.state,
          allSelected = _state.allSelected,
          selectedRows = _state.selectedRows;


      return _react2.default.createElement(
        'div',
        { style: getStyles(theme) },
        _react2.default.createElement(_ColumnFirstTable2.default, {
          columns: columns,
          data: data,
          selectable: selectable,
          allSelected: allSelected,
          onRowClick: onRowClick,
          onSelectAllClicked: this.selectAllClicked,
          onSelectRowClicked: this.selectRowClicked,
          selectedRows: selectedRows,
          toggleHover: this.toggleHover,
          hoveredIndex: this.state.hoveredIndex
        })
      );
    }
  }]);

  return SovosTable;
}(_react.PureComponent);

SovosTable.defaultProps = {
  onRowSelection: function onRowSelection() {},
  onRowClick: function onRowClick() {},
  selectable: false
};
SovosTable.childContextTypes = {
  muiTheme: _propTypes2.default.object
};
SovosTable.displayName = 'Table';
SovosTable.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * An array of column ojects to display in the table. This array is assumed to
   * be immutable. If the set of columns changes, a new array must be passed to them
   * to trigger a re-render.
   */
  columns: _propTypes2.default.arrayOf(_columnPropType2.default).isRequired,
  /**
   * An array of data objects displayed as rows in the table, columns define how
   * data properties are rendered. This array is assumed to
   * be immutable. If the data changes, a new array must be passed to them
   * to trigger a re-render.
   */
  data: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  /**
   * Callback triggered when a row is selected.
   */
  onRowSelection: _propTypes2.default.func,
  /**
   * Callback triggered when a row is clicked.
   */
  onRowClick: _propTypes2.default.func,
  /**
   * Display select all and row select checkboxes.
   */
  selectable: _propTypes2.default.bool,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
} : {};
exports.default = (0, _withTheme2.default)()(SovosTable);