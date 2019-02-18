'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sovosHistoryList = require('../../sovos-history-list');

var _sovosHistoryList2 = _interopRequireDefault(_sovosHistoryList);

var _reactHelpers = require('../../utils/reactHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  padding: 0
};

/**
 * Specialized tab that houses [SovosHistoryList](#sovoshistorylist) used in [SovosTabCard](#sovostabcard).
 */
var SovosTabCardHistory = function SovosTabCardHistory(props) {
  var styledProps = (0, _reactHelpers.mergePropsWithStyle)(props, style);
  return _react2.default.createElement(_sovosHistoryList2.default, styledProps);
};

SovosTabCardHistory.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Label of the tab.
   */
  label: _propTypes2.default.string,
  /**
   * Data provided to the [SovosHistoryList](#sovoshistorylist) in the history tab.
   */
  data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    username: _propTypes2.default.string.isRequired,
    action: _propTypes2.default.string.isRequired,
    timestamp: _propTypes2.default.number.isRequired,
    timeLabel: _propTypes2.default.string
  })).isRequired,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object
} : {};

SovosTabCardHistory.defaultProps = {
  label: 'History',
  theme: {}
};

exports.default = SovosTabCardHistory;