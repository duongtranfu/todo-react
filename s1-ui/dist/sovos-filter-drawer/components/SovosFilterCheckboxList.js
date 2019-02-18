'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _withTheme = require('../../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _SovosFilterSection = require('./SovosFilterSection');

var _SovosFilterSection2 = _interopRequireDefault(_SovosFilterSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getStyles = function getStyles(theme) {
  return {
    iconStyle: {
      fill: theme.palette.secondaryColor
    }
  };
};

var getStyledRow = function getStyledRow(_ref) {
  var styles = _ref.styles,
      _ref$entry = _ref.entry,
      label = _ref$entry.label,
      checked = _ref$entry.checked,
      props = _objectWithoutProperties(_ref$entry, ['label', 'checked']),
      handleChange = _ref.handleChange;

  return _react2.default.createElement(_Checkbox2.default, _extends({
    iconStyle: styles.iconStyle,
    label: label,
    checked: checked,
    onCheck: handleChange
  }, props));
};

getStyledRow.propTypes = process.env.NODE_ENV !== "production" ? {
  entry: _propTypes2.default.node.isRequired,
  styles: _propTypes2.default.node.isRequired,
  handleChange: _propTypes2.default.func.isRequired
} : {};

var getRow = function getRow(styles) {
  return function (props) {
    return getStyledRow(_extends({ styles: styles }, props));
  };
};

/**
 * SovosFilterCheckboxes is used for short lists. This subcomponent consists of a label and a checklist that is sent by the product
 *
 * Props from the mui SovosFilterSection
 */
var SovosFilterCheckboxList = function SovosFilterCheckboxList(_ref2) {
  var theme = _ref2.theme,
      label = _ref2.label,
      props = _objectWithoutProperties(_ref2, ['theme', 'label']);

  var styles = getStyles(theme);
  return _react2.default.createElement(_SovosFilterSection2.default, _extends({
    label: label,
    dataValueName: 'checked',
    getRow: getRow(styles)
  }, props));
};

SovosFilterCheckboxList.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _SovosFilterSection2.default.propTypes, {
  /**
   * Mandatory label for section
   */
  label: _propTypes2.default.string.isRequired,
  /**
   * Array of objects, that are properties for Checkboxes. It's possible to override props from  mui Checkbox here
   */
  data: _propTypes2.default.arrayOf(_propTypes2.default.shape(_extends({
    /**
     * Identifier
     */
    id: _propTypes2.default.string,
    /**
     * Mandatory label for Checkbox
     */
    label: _propTypes2.default.string.isRequired,
    /**
     * Value of Checkbox
     */
    checked: _propTypes2.default.bool,
    /**
     * Callback function called on any Checkbox change. Return changed data structure for single Checkbox
     */
    onChange: _propTypes2.default.func
  }, _Checkbox2.default.propTypes))).isRequired,
  /**
   * Callback function called on any filter change. Return changed data structure
   */
  onChange: _propTypes2.default.func,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
}) : {};

SovosFilterCheckboxList.defaultProps = {
  onChange: undefined
};

exports.default = (0, _withTheme2.default)()(SovosFilterCheckboxList);