'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = require('material-ui/List');

var _withTheme = require('../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _reactHelpers = require('../utils/reactHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable react/no-array-index-key */

var getStyles = function getStyles(theme, rowHeight) {
  return {
    root: {
      font: theme.fontFamily,
      fontSize: theme.fontSize,
      background: 'white',
      padding: '8px 16px'
    },
    row: {
      height: rowHeight + 'px',
      borderBottom: 'solid 1px ' + theme.list.rowBorderColor
    },
    lastRow: {
      height: rowHeight + 'px',
      borderBottom: 0
    },
    rowInnerDiv: {
      padding: '0',
      display: 'flex',
      alignItems: 'center',
      font: theme.fontFamily,
      fontSize: '13px'
    }
  };
};

var renderRows = function renderRows(rowRenderer, data, styles) {
  return data.map(function (entry, index) {
    return _react2.default.createElement(
      _List.ListItem,
      {
        key: index,
        style: index === data.length - 1 ? styles.lastRow : styles.row,
        innerDivStyle: styles.rowInnerDiv,
        disabled: true
      },
      rowRenderer(entry, styles)
    );
  });
};

/**
 * Generic list template based on [Material UI List](http://www.material-ui.com/#/components/list)
 * used in [SovosAttachmentsList](#sovosattachmentslist) and [SovosHistoryList](#sovoshistorylist).
 */
var SovosList = function SovosList(_ref) {
  var data = _ref.data,
      theme = _ref.theme,
      sortFunction = _ref.sortFunction,
      styles = _ref.styles,
      rowRenderer = _ref.rowRenderer,
      rowHeight = _ref.rowHeight,
      props = _objectWithoutProperties(_ref, ['data', 'theme', 'sortFunction', 'styles', 'rowRenderer', 'rowHeight']);

  var defaultStyles = getStyles(theme, rowHeight);
  var customStyles = (0, _reactHelpers.mergeDefaultObjectProps)(styles, defaultStyles);

  if (typeof sortFunction === 'function') {
    data = data.slice().sort(sortFunction);
  }

  var rows = renderRows(rowRenderer, data, customStyles);

  var styledProps = (0, _reactHelpers.mergePropsWithStyle)(props, customStyles.root);

  return _react2.default.createElement(
    _List.List,
    styledProps,
    rows
  );
};

SovosList.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _List.List.propTypes, {
  /**
   * Data provided to the getRows function.
   */
  data: _propTypes2.default.arrayOf(_propTypes2.default.shape).isRequired,
  /**
   * Function used to get the row items.
   */
  rowRenderer: _propTypes2.default.func.isRequired,
  /**
   * Height of the row in pixels.
   */
  rowHeight: _propTypes2.default.number,
  /**
   * Function used to sort provided data.
   */
  sortFunction: _propTypes2.default.func,
  /**
   * Additional styles to be used by the getRow function.
   */
  styles: _propTypes2.default.shape(),
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
}) : {};

SovosList.defaultProps = {
  rowHeight: 50,
  styles: {},
  sortFunction: undefined
};

SovosList.displayName = 'List';

exports.default = (0, _withTheme2.default)()(SovosList);

/* eslint-enable react/no-array-index-key */