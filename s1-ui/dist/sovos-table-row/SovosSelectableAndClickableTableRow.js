'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableRow = require('material-ui/Table/TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SovosSelectableAndClickableTableRow = function SovosSelectableAndClickableTableRow(props) {
  var originalOnRowClick = props.onRowClick;
  props = Object.assign({}, props, {
    selectable: true,
    onRowClick: function onRowClick(event, rowNumber) {
      if (event.target.type !== 'checkbox') {
        event.stopPropagation();
      } else {
        originalOnRowClick(event, rowNumber);
      }
    }
  });
  return _react2.default.createElement(_TableRow2.default, props);
};

SovosSelectableAndClickableTableRow.propTypes = process.env.NODE_ENV !== "production" ? _TableRow2.default.propTypes : {};
exports.default = SovosSelectableAndClickableTableRow;