'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _colorManipulator = require('material-ui/utils/colorManipulator');

var _add = require('material-ui/svg-icons/content/add');

var _add2 = _interopRequireDefault(_add);

var _clear = require('material-ui/svg-icons/content/clear');

var _clear2 = _interopRequireDefault(_clear);

var _withTheme = require('../../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _SovosIconButton = require('../../sovos-icon-button/SovosIconButton');

var _SovosIconButton2 = _interopRequireDefault(_SovosIconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-array-index-key */

/**
 * *SovosFilterSection* is subcomponents in the filter drawer to provide a wide range of selectors. Examples: checkbox lists, date range, slider
 */
var SovosFilterSection = function (_React$PureComponent) {
  _inherits(SovosFilterSection, _React$PureComponent);

  function SovosFilterSection() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SovosFilterSection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SovosFilterSection.__proto__ || Object.getPrototypeOf(SovosFilterSection)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      data: _this.props.data
    }, _this.getStyles = function (theme) {
      return {
        root: {
          padding: '15px 0',
          fontFamily: theme.fontFamily,
          fontSize: 12,
          fontWeight: 'normal',
          borderBottom: 1,
          borderBottomStyle: 'solid',
          borderBottomColor: (0, _colorManipulator.fade)(theme.palette.textColor, 0.1),
          width: '100%',
          boxSizing: 'border-box'
        },
        label: {
          color: theme.palette.secondaryColor,
          fontFamily: theme.fontFamily,
          fontWeight: 'bolder',
          fontSize: 13,
          height: 24,
          lineHeight: '24px'
        },
        left: {
          float: 'left',
          margin: 0
        },
        right: {
          float: 'right',
          marginRight: -11,
          marginTop: -6,
          height: 24
        },
        iconColor: theme.palette.secondaryColor,
        rowStyle: {
          whiteSpace: 'nowrap',
          height: 24,
          width: '100%',
          display: 'flex'
        },
        buttonStyle: {
          marginTop: -4,
          marginRight: 13,
          width: 12
        }
      };
    }, _this.getRows = function (styles) {
      return _this.state.data.map(function (entry, index) {
        return _react2.default.createElement(
          'div',
          {
            key: index,
            style: styles.rowStyle
          },
          _this.props.getRow({
            index: index,
            entry: entry,
            handleChange: _this.handleChange(index),
            handleBlur: _this.handleBlur
          }),
          _this.props.removeEnabled && _react2.default.createElement(
            'div',
            { style: styles.buttonStyle },
            _react2.default.createElement(
              _SovosIconButton2.default,
              { size: 'small', onClick: _this.handleRemove(index) },
              _react2.default.createElement(_clear2.default, { color: styles.iconColor })
            )
          )
        );
      });
    }, _this.getNewEntry = function (entry, newValue) {
      var dataValueName = _this.props.dataValueName;

      return dataValueName ? _extends({}, entry, _defineProperty({}, dataValueName, newValue)) : newValue;
    }, _this.handleChange = function (index) {
      return function (event, newValue) {
        var data = _this.state.data.map(function (entry, i) {
          return i === index ? _this.getNewEntry(entry, newValue) : entry;
        });
        _this.handleSetState(data, index);
      };
    }, _this.handleRemove = function (index) {
      return function () {
        var filtredData = _this.state.data.filter(function (entry, i) {
          return i !== index;
        });
        var data = _this.props.onRemove ? _this.props.onRemove(filtredData) : filtredData;
        _this.handleSetState(data);
      };
    }, _this.handleBlur = function () {
      var filtredData = _this.state.data.filter(function (entry) {
        return !!entry;
      });
      var data = _this.props.onBlur ? _this.props.onBlur(filtredData) : filtredData;
      _this.handleSetState(data);
    }, _this.handleAdd = function () {
      _this.handleSetState([].concat(_toConsumableArray(_this.state.data), ['']));
    }, _this.handleSetState = function (data, index) {
      if (_this.props.onChange) {
        _this.props.onChange(data);
      }
      if (index && data[index].onChange) {
        data[index].onChange(data[index]);
      }
      _this.setState(_extends({}, _this.state, { data: data }));
    }, _this.render = function () {
      var _this$props = _this.props,
          theme = _this$props.theme,
          label = _this$props.label,
          addEnabled = _this$props.addEnabled,
          multiple = _this$props.multiple;

      var styles = _this.getStyles(theme);
      var rows = _this.getRows(styles);
      var addable = addEnabled && (multiple || _this.state.data.length < 1);
      var onClick = addable ? { onClick: _this.handleAdd } : {};
      return _react2.default.createElement(
        'div',
        { style: styles.root },
        _react2.default.createElement(
          'div',
          _extends({ style: styles.label }, onClick),
          _react2.default.createElement(
            'p',
            { style: styles.left },
            label
          ),
          addable && _react2.default.createElement(
            'p',
            { style: styles.right },
            _react2.default.createElement(
              _SovosIconButton2.default,
              { size: 'small' },
              _react2.default.createElement(_add2.default, { color: styles.iconColor })
            )
          )
        ),
        rows
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return SovosFilterSection;
}(_react2.default.PureComponent);

SovosFilterSection.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Mandatory label for section
   */
  label: _propTypes2.default.string.isRequired,
  /**
   * Array of objects, that are used to generate rows. If there is onChange function, it'll be called when specific row is changed
   */
  data: _propTypes2.default.array,
  /** Function that return row. */
  getRow: _propTypes2.default.func.isRequired,
  /** Is it possible to add row. */
  addEnabled: _propTypes2.default.bool,
  /** Is it possible to remove row. */
  removeEnabled: _propTypes2.default.bool,
  /**
   * Callback function called on any filter change. Return changed data structure.
   * You can use also specific onChange for every record at data.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback function called on any filter blur. Return changed data structure.
   */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function called on any filter removed. Return changed data structure.
   */
  onRemove: _propTypes2.default.func,
  /**
   * Multiple datapoints allowed.
   * If a user wishes to enter multiple datapoints of a particular category (ex. “MA” OR “NY”),
   * a user will once again click on the filter category name or plus button adjacent to it.
   * When they do so, a new text field will appear below the datapoint(s) already entered by the user.
   */
  multiple: _propTypes2.default.bool,
  /**
   * Name of the changed value in row in data structure. Do not define it if data is only list of values
   */
  dataValueName: _propTypes2.default.string,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
} : {};

SovosFilterSection.defaultProps = {
  data: [],
  addEnabled: false,
  removeEnabled: false,
  multiple: false,
  onChange: undefined,
  onBlur: undefined,
  onRemove: undefined,
  dataValueName: undefined
};

exports.default = (0, _withTheme2.default)()(SovosFilterSection);

/* eslint-enable react/no-array-index-key */