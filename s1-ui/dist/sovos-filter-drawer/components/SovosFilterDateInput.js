'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AutoComplete = require('material-ui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _reactTextMask = require('react-text-mask');

var _reactTextMask2 = _interopRequireDefault(_reactTextMask);

var _createAutoCorrectedDatePipe = require('text-mask-addons/dist/createAutoCorrectedDatePipe');

var _createAutoCorrectedDatePipe2 = _interopRequireDefault(_createAutoCorrectedDatePipe);

var _withTheme = require('../../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _eventHelpers = require('../../utils/eventHelpers');

var _objectHelpers = require('../../utils/objectHelpers');

var _SovosFilterSection = require('./SovosFilterSection');

var _SovosFilterSection2 = _interopRequireDefault(_SovosFilterSection);

require('./SovosFilterDateInput.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getStyles = function getStyles(theme) {
  return {
    inputStyle: {
      width: 70,
      height: 24,
      fontFamily: theme.fontFamily,
      fontSize: 12,
      fontWeight: 'normal'
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

var onBlur = function onBlur(onChange) {
  return function (dates) {
    var fixedDates = dates.map(function (entry) {
      if ((typeof entry === 'undefined' ? 'undefined' : _typeof(entry)) === 'object') {
        return entry;
      }
      return new Date(entry.split('_').join(''));
    }).filter(function (entry) {
      return !!entry;
    });
    onChange(fixedDates);
    return fixedDates;
  };
};

var dateToString = function dateToString(date) {
  return ('0' + (date.getMonth() + 1)).slice(-2) + '/\n  ' + ('0' + date.getDate()).slice(-2) + '/\n  ' + ('000' + date.getFullYear()).slice(-4);
};

var entryToString = function entryToString(entry) {
  if (!entry || typeof entry === 'string' && entry.includes('/')) {
    return entry;
  }
  if (typeof entry === 'string') {
    return dateToString(new Date(entry));
  }
  return dateToString(entry);
};

var getStyledRow = function getStyledRow(_ref) {
  var entry = _ref.entry,
      index = _ref.index,
      handleChange = _ref.handleChange,
      handleBlur = _ref.handleBlur,
      styles = _ref.styles,
      style = _ref.style,
      datePlaceholder = _ref.datePlaceholder,
      props = _objectWithoutProperties(_ref, ['entry', 'index', 'handleChange', 'handleBlur', 'styles', 'style', 'datePlaceholder']);

  var handleKeyDown = function handleKeyDown(event) {
    if ((0, _eventHelpers.isEnter)(event)) {
      handleBlur(event);
    }
  };
  var commonProps = _extends({
    id: '' + index,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    style: _extends({}, styles.inputStyle, style)
  }, styles.underline, {
    onChange: handleChange
  }, props);
  return _react2.default.createElement(
    _TextField2.default,
    _extends({}, commonProps, {
      className: 'sovos-filter-date-input'
    }),
    _react2.default.createElement(_reactTextMask2.default, {
      mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
      placeholderChar: '_',
      pipe: (0, _createAutoCorrectedDatePipe2.default)(datePlaceholder.toLowerCase()),
      keepCharPositions: true,
      value: entryToString(entry),
      autoFocus: !entry,
      placeholder: entry ? '' : datePlaceholder
    })
  );
};

getStyledRow.propTypes = process.env.NODE_ENV !== "production" ? {
  datePlaceholder: _propTypes2.default.string.isRequired,
  entry: _propTypes2.default.node.isRequired,
  index: _propTypes2.default.number.isRequired,
  style: _propTypes2.default.node.isRequired,
  styles: _propTypes2.default.node.isRequired,
  handleChange: _propTypes2.default.func.isRequired,
  handleBlur: _propTypes2.default.func.isRequired
} : {};

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
var SovosFilterDateInput = function SovosFilterDateInput(_ref2) {
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
    multiple: multiple
    // onChange={ onChange }
    , onBlur: onBlur(onChange),
    onRemove: onBlur(onChange),
    getRow: getRow(_extends({ styles: styles, autoComplete: autoComplete }, props))
  }, props));
};

// Some props are removed from the interface and moved to subcomponents
var dialogPropTypesToKeep = (0, _objectHelpers.withoutKeys)(['dataSource'], _AutoComplete2.default.propTypes);

SovosFilterDateInput.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, dialogPropTypesToKeep, _TextField2.default.propTypes, {
  /**
   * Mandatory label for section
   */
  label: _propTypes2.default.string.isRequired,
  /**
   * Array of js Date, that are values of date field.
   */
  data: _propTypes2.default.arrayOf(_propTypes2.default.object),
  /**
   * Autocomplete: Product will provide an array of values. Typing should show matching results: See Material UI > Autocomplete (https://www.material-ui.com/#/components/auto-complete)
   */
  autoComplete: _propTypes2.default.arrayOf(_propTypes2.default.string),
  /**
   * Multiple datapoints allowed, resulting in an 'OR' query.
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
   * Optional date format string used a placeholder and validator for the masked input
   */
  datePlaceholder: _propTypes2.default.string,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
}) : {};

SovosFilterDateInput.defaultProps = {
  data: [],
  autoComplete: [],
  multiple: false,
  datePlaceholder: 'MM/DD/YYYY'
};

exports.default = (0, _withTheme2.default)()(SovosFilterDateInput);