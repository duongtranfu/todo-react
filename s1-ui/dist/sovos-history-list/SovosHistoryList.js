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

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var timestampStyle = {
  marginLeft: 'auto'
};

var getStyles = function getStyles(theme) {
  return {
    username: {
      marginLeft: 8,
      color: theme.historyList.usernameColor
    },
    row: {
      color: theme.historyList.color
    },
    lastRow: {
      color: theme.historyList.color
    }
  };
};

/* eslint-disable react/prop-types */
var getRowRenderer = function getRowRenderer(styles) {
  return function (_ref) {
    var username = _ref.username,
        action = _ref.action,
        timestamp = _ref.timestamp,
        timeLabel = _ref.timeLabel;
    return _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        'span',
        { style: styles.username },
        username
      ),
      _react2.default.createElement(
        'span',
        null,
        '\xA0',
        action
      ),
      _react2.default.createElement(
        'span',
        { style: timestampStyle },
        timeLabel || timestamp
      )
    );
  };
};
/* eslint-enable react/prop-types */

/**
 * Specialized list based on [Material UI List](http://www.material-ui.com/#/components/list).
 */
var SovosHistoryList = function SovosHistoryList(_ref2) {
  var data = _ref2.data,
      theme = _ref2.theme,
      rowHeight = _ref2.rowHeight,
      props = _objectWithoutProperties(_ref2, ['data', 'theme', 'rowHeight']);

  var styles = getStyles(theme, rowHeight);

  return _react2.default.createElement(_index.SovosList, _extends({}, props, {
    styles: styles,
    rowHeight: rowHeight,
    data: data,
    rowRenderer: getRowRenderer(styles)
  }));
};

SovosHistoryList.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _List.List.propTypes, {
  /**
   * Array of entries to be rendered. Each entry should contain username, action, timestamp and optional time label.
   */
  data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    username: _propTypes2.default.string.isRequired,
    action: _propTypes2.default.string.isRequired,
    timestamp: _propTypes2.default.number.isRequired,
    timeLabel: _propTypes2.default.string
  })).isRequired,
  /**
   * Height of the row in pixels.
   */
  rowHeight: _propTypes2.default.number,
  /**
   * Function used to sort provided data.
   */
  sortFunction: _propTypes2.default.func,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
}) : {};

SovosHistoryList.defaultProps = {
  sortFunction: function sortFunction(e1, e2) {
    return e1.timestamp - e2.timestamp;
  },
  rowHeight: 50
};

SovosHistoryList.displayName = 'HistoryList';

exports.default = (0, _withTheme2.default)()(SovosHistoryList);