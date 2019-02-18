'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AutoComplete = require('material-ui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _withTheme = require('../../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _eventHelpers = require('../../utils/eventHelpers');

var _objectHelpers = require('../../utils/objectHelpers');

var _SovosFilterSection = require('./SovosFilterSection');

var _SovosFilterSection2 = _interopRequireDefault(_SovosFilterSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getStyles = function getStyles(theme) {
  return {
    inputStyle: {
      width: '100%',
      height: 24,
      fontFamily: theme.fontFamily,
      fontSize: 12,
      fontWeight: 'normal'
    },
    autoCompleteStyle: {
      width: '100%'
    },
    autoCompleteMenuItemStyle: {
      lineHeight: '24px',
      minHeight: 24,
      fontSize: 13
    },
    underline: {
      underlineStyle: {
        position: 'absolute',
        bottom: 2
      },
      underlineFocusStyle: {
        borderColor: theme.palette.secondaryColor
      }
    }
  };
};

var getStyledRow = function getStyledRow(_ref) {
  var entry = _ref.entry,
      index = _ref.index,
      handleChange = _ref.handleChange,
      handleBlur = _ref.handleBlur,
      styles = _ref.styles,
      autoComplete = _ref.autoComplete,
      style = _ref.style,
      inputStyle = _ref.inputStyle,
      props = _objectWithoutProperties(_ref, ['entry', 'index', 'handleChange', 'handleBlur', 'styles', 'autoComplete', 'style', 'inputStyle']);

  var handler = function handler(newValue, event) {
    return handleChange(event, newValue);
  };
  var handleKeyDown = function handleKeyDown(event) {
    if ((0, _eventHelpers.isEnter)(event)) {
      handleBlur(event);
    }
  };
  var handleAutocompleteRequest = function handleAutocompleteRequest(value) {
    return handleChange(undefined, value);
  };
  var commonProps = _extends({
    id: '' + index,
    onBlur: handleBlur,
    value: entry,
    autoFocus: !entry,
    onKeyDown: handleKeyDown
  }, styles.underline, props);
  return autoComplete ? _react2.default.createElement(_AutoComplete2.default, _extends({
    style: _extends({}, styles.autoCompleteStyle, style),
    textFieldStyle: _extends({}, styles.inputStyle, inputStyle),
    menuProps: { menuItemStyle: styles.autoCompleteMenuItemStyle },
    searchText: entry,
    onUpdateInput: handler,
    onNewRequest: handleAutocompleteRequest,
    dataSource: autoComplete,
    filter: _AutoComplete2.default.caseInsensitiveFilter
  }, commonProps)) : _react2.default.createElement(_TextField2.default, _extends({
    style: _extends({}, styles.inputStyle, style),
    value: entry,
    onChange: handleChange
  }, commonProps));
};

getStyledRow.propTypes = process.env.NODE_ENV !== "production" ? {
  entry: _propTypes2.default.node.isRequired,
  index: _propTypes2.default.number.isRequired,
  style: _propTypes2.default.node.isRequired,
  styles: _propTypes2.default.node.isRequired,
  inputStyle: _propTypes2.default.node.isRequired,
  handleChange: _propTypes2.default.func.isRequired,
  handleBlur: _propTypes2.default.func.isRequired,
  autoComplete: _propTypes2.default.arrayOf(_propTypes2.default.string)
} : {};

getStyledRow.defaultProps = {
  autoComplete: undefined
};

var getRow = function getRow(componentProps) {
  return function (props) {
    return getStyledRow(_extends({}, componentProps, props));
  };
};

/**
 * SovosFilterTextEntry is used for searchable input fields + free text entry.
 *
 * This is a dynamic component where the text field is hidden by default.
 * When a user clicks on a label or the plus button to the right of the label, a text field (or in some cases,
 * a set of text fields) will appear below. The container will grow vertically to push down all other content in the filter drawer.
 *
 * If a user clicks the X to the right of an empty text field, the text field will disappear and should be removed from the filter.
 *
 * If a user has input a valid datapoint in the field and they either 1) press Enter or 2) click outside of the field,
 * the text field will disappear and the datapoint entered will be added as a filter selection
 *
 * Props from the mui AutoComplete(except dataSource) or TextField
 * Hint text is optional and will be provided by the product. Leverage the default hint text available in both material UI components
 */
var SovosFilterTextEntry = function SovosFilterTextEntry(_ref2) {
  var theme = _ref2.theme,
      multiple = _ref2.multiple,
      label = _ref2.label,
      autoComplete = _ref2.autoComplete,
      onChange = _ref2.onChange,
      props = _objectWithoutProperties(_ref2, ['theme', 'multiple', 'label', 'autoComplete', 'onChange']);

  var styles = getStyles(theme);
  return _react2.default.createElement(_SovosFilterSection2.default, _extends({
    label: label,
    addEnabled: true,
    removeEnabled: true,
    multiple: multiple,
    onChange: onChange,
    getRow: getRow(_extends({ styles: styles, autoComplete: autoComplete }, props))
  }, props));
};

// Some props are removed from the interface and moved to subcomponents
var autoCompletPropTypesToKeep = (0, _objectHelpers.withoutKeys)(['dataSource'], _AutoComplete2.default.propTypes);

SovosFilterTextEntry.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, autoCompletPropTypesToKeep, _TextField2.default.propTypes, {
  /**
   * Mandatory label for section
   */
  label: _propTypes2.default.string.isRequired,
  /**
   * Array of values for TextField/AutoComplete
   */
  data: _propTypes2.default.arrayOf(_propTypes2.default.string),
  /**
   * Autocomplete: Product will provide an array of values. Typing should show matching results:
   * See Material UI > Autocomplete (https://www.material-ui.com/#/components/auto-complete)
   */
  autoComplete: _propTypes2.default.arrayOf(_propTypes2.default.string),
  /**
   * Multiple datapoints allowed.
   * If a user wishes to enter multiple datapoints of a particular category (ex. “MA” OR “NY”),
   * a user will once again click on the filter category name or plus button adjacent to it.
   * When they do so, a new text field will appear below the datapoint(s) already entered by the user.
   */
  multiple: _propTypes2.default.bool,
  /**
   * Callback function called on any filter change. Return changed data structure
   */
  onChange: _propTypes2.default.func.isRequired,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
}) : {};

SovosFilterTextEntry.defaultProps = {
  data: [],
  autoComplete: undefined,
  multiple: false
};

exports.default = (0, _withTheme2.default)()(SovosFilterTextEntry);