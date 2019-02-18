'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SovosMonthSelector = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Popover = require('material-ui/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _dateRange = require('material-ui/svg-icons/action/date-range');

var _dateRange2 = _interopRequireDefault(_dateRange);

var _keyboardArrowLeft = require('material-ui/svg-icons/hardware/keyboard-arrow-left');

var _keyboardArrowLeft2 = _interopRequireDefault(_keyboardArrowLeft);

var _keyboardArrowRight = require('material-ui/svg-icons/hardware/keyboard-arrow-right');

var _keyboardArrowRight2 = _interopRequireDefault(_keyboardArrowRight);

var _SovosFlatButton = require('../sovos-flat-button/SovosFlatButton');

var _SovosFlatButton2 = _interopRequireDefault(_SovosFlatButton);

var _SovosIconButton = require('../sovos-icon-button/SovosIconButton');

var _SovosIconButton2 = _interopRequireDefault(_SovosIconButton);

var _sovosColors = require('../themes/sovos-colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SovosMonthSelector = exports.SovosMonthSelector = function (_React$Component) {
  _inherits(SovosMonthSelector, _React$Component);

  function SovosMonthSelector(props) {
    _classCallCheck(this, SovosMonthSelector);

    var _this = _possibleConstructorReturn(this, (SovosMonthSelector.__proto__ || Object.getPrototypeOf(SovosMonthSelector)).call(this, props));

    _initialiseProps.call(_this);

    var selectedMonth = props.selectedMonth,
        selectedYear = props.selectedYear,
        minDate = props.minDate,
        maxDate = props.maxDate;


    var minYear = minDate.getFullYear();
    var minMonth = minDate.getMonth();
    var maxYear = maxDate.getFullYear();
    var maxMonth = maxDate.getMonth();
    var year = selectedYear;
    var month = selectedMonth;

    if (year < minYear) {
      year = minYear;
      month = minMonth;
    } else if (year === minYear && month < minMonth) {
      month = minMonth;
    } else if (year > maxYear) {
      year = maxYear;
      month = maxMonth;
    } else if (year === maxMonth && month > maxMonth) {
      month = maxMonth;
    }

    _this.state = {
      toggleEl: null,
      showMenu: false,
      selectedMonth: month,
      selectedYear: year
    };
    return _this;
  }

  _createClass(SovosMonthSelector, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        muiTheme: this.props.muiTheme
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var monthSelector = this.props.muiTheme.monthSelector;


      return _react2.default.createElement(
        'div',
        { style: monthSelector.container },
        this.renderWidget(),
        this.renderDropdownMenu()
      );
    }
  }]);

  return SovosMonthSelector;
}(_react2.default.Component);

SovosMonthSelector.defaultProps = {
  onToggle: function onToggle() {},
  onChange: function onChange() {},
  minDate: new Date(new Date().getFullYear(), 0),
  maxDate: new Date(new Date().getFullYear(), 11),
  selectedYear: new Date().getFullYear(),
  selectedMonth: new Date().getMonth(),
  format: 'number',
  monthsAbbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  monthsFull: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
SovosMonthSelector.childContextTypes = {
  muiTheme: _propTypes2.default.object
};
SovosMonthSelector.displayName = 'MonthSelector';

var _ref = _react2.default.createElement(_dateRange2.default, null);

var _ref2 = _react2.default.createElement(_keyboardArrowLeft2.default, null);

var _ref3 = _react2.default.createElement(_keyboardArrowRight2.default, null);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onValueChanged = function () {
    if (_this2.props.onChange) {
      _this2.props.onChange(_this2.getOutput());
    }

    if (_this2.state.showMenu) {
      _this2.toggleMenu();
    }
  };

  this.setStateAndTriggerUpdateEvent = function (state) {
    if (_this2.closeMenuTimeout) {
      clearTimeout(_this2.closeMenuTimeout);
      _this2.closeMenuTimeout = null;
    }

    _this2.setState(state, _this2.onValueChanged);
  };

  this.getOutput = function () {
    switch (_this2.props.format) {
      case 'month-name':
        return {
          month: _this2.props.monthsFull[_this2.state.selectedMonth],
          year: _this2.state.selectedYear
        };
      case 'number':
        return {
          month: _this2.state.selectedMonth,
          year: _this2.state.selectedYear
        };
      default:
        throw new Error('Unrecognized format \'' + _this2.props.format + '\' in SovosMonthSelector.');
    }
  };

  this.toggleMenu = function (e) {
    return _this2.setState({
      showMenu: !_this2.state.showMenu,
      toggleEl: e ? e.currentTarget : null
    }, function () {
      _this2.props.onToggle(_this2.state.showMenu);
    });
  };

  this.selectMonth = function (month) {
    return _this2.setStateAndTriggerUpdateEvent({
      selectedMonth: month
    });
  };

  this.selectYear = function (year) {
    var _props = _this2.props,
        minDate = _props.minDate,
        maxDate = _props.maxDate;
    var selectedMonth = _this2.state.selectedMonth;

    var newState = { selectedYear: year };

    if (year === minDate.getFullYear()) {
      newState.selectedMonth = Math.max(minDate.getMonth(), selectedMonth);
    }

    if (year === maxDate.getFullYear()) {
      newState.selectedMonth = Math.min(maxDate.getMonth(), selectedMonth);
    }

    _this2.setStateAndTriggerUpdateEvent(newState);
  };

  this.canIncreaseMonth = function () {
    var maxDate = _this2.props.maxDate;
    var _state = _this2.state,
        selectedYear = _state.selectedYear,
        selectedMonth = _state.selectedMonth;


    if (selectedYear !== maxDate.getFullYear()) {
      return true;
    }

    return selectedMonth < maxDate.getMonth();
  };

  this.canDecreaseMonth = function () {
    var minDate = _this2.props.minDate;
    var _state2 = _this2.state,
        selectedYear = _state2.selectedYear,
        selectedMonth = _state2.selectedMonth;


    if (selectedYear !== minDate.getFullYear()) {
      return true;
    }

    return selectedMonth > minDate.getMonth();
  };

  this.nextMonth = function () {
    if (!_this2.canIncreaseMonth()) {
      return;
    }

    var _state3 = _this2.state,
        selectedYear = _state3.selectedYear,
        selectedMonth = _state3.selectedMonth;

    var newMonth = selectedMonth + 1;
    var newState = { selectedMonth: newMonth };

    if (newMonth > 11) {
      newState.selectedYear = selectedYear + 1;
      newState.selectedMonth = 0;
    }

    _this2.setStateAndTriggerUpdateEvent(newState);
  };

  this.prevMonth = function () {
    if (!_this2.canDecreaseMonth()) {
      return;
    }

    var _state4 = _this2.state,
        selectedYear = _state4.selectedYear,
        selectedMonth = _state4.selectedMonth;

    var newMonth = selectedMonth - 1;
    var newState = { selectedMonth: newMonth };

    if (newMonth < 0) {
      newState.selectedYear = selectedYear - 1;
      newState.selectedMonth = 11;
    }

    _this2.setStateAndTriggerUpdateEvent(newState);
  };

  this.renderMonths = function () {
    var _props2 = _this2.props,
        minDate = _props2.minDate,
        maxDate = _props2.maxDate,
        monthSelector = _props2.muiTheme.monthSelector;
    var _state5 = _this2.state,
        selectedMonth = _state5.selectedMonth,
        selectedYear = _state5.selectedYear;


    return _this2.props.monthsAbbreviated.map(function (item, index) {
      var style = _extends({}, monthSelector.menuItem);

      if (index === selectedMonth) {
        style.backgroundColor = _sovosColors.purple;
        style.color = 'white';
      }

      var disabled = selectedYear === minDate.getFullYear() && index < minDate.getMonth() || selectedYear === maxDate.getFullYear() && index > maxDate.getMonth();
      return _react2.default.createElement(_MenuItem2.default, {
        key: 'month-' + item,
        primaryText: item,
        style: style,
        disabled: disabled,
        onClick: disabled ? null : function () {
          return _this2.selectMonth(index);
        }
      });
    });
  };

  this.renderYears = function () {
    var _props3 = _this2.props,
        minDate = _props3.minDate,
        maxDate = _props3.maxDate,
        monthSelector = _props3.muiTheme.monthSelector;


    var years = [];
    for (var year = minDate.getFullYear(); year <= maxDate.getFullYear(); year += 1) {
      years.push(year);
    }

    return years.map(function (item) {
      var style = _extends({}, monthSelector.menuItem);
      var isSelected = item === _this2.state.selectedYear;

      if (isSelected) {
        style.backgroundColor = _sovosColors.purple;
        style.color = 'white';
      }

      return _react2.default.createElement(_MenuItem2.default, {
        key: 'year-' + item,
        primaryText: item,
        style: style,
        onClick: function onClick() {
          return _this2.selectYear(item);
        }
      });
    });
  };

  this.renderDropdownMenu = function () {
    var monthSelector = _this2.props.muiTheme.monthSelector;


    return _react2.default.createElement(
      _Popover2.default,
      {
        open: _this2.state.showMenu,
        anchorEl: _this2.state.toggleEl,
        anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
        targetOrigin: { horizontal: 'left', vertical: 'top' },
        onRequestClose: _this2.toggleMenu
      },
      _react2.default.createElement(
        _Paper2.default,
        { style: monthSelector.dropdown },
        _react2.default.createElement(
          'div',
          { style: monthSelector.menuSections.left },
          _this2.renderMonths()
        ),
        _react2.default.createElement(
          'div',
          { style: monthSelector.menuSections.right },
          _this2.renderYears()
        )
      )
    );
  };

  this.renderWidget = function () {
    var monthSelector = _this2.props.muiTheme.monthSelector;


    var today = new Date();
    var label = today.getMonth() === _this2.state.selectedMonth && today.getFullYear() === _this2.state.selectedYear ? 'This Month' : _this2.props.monthsAbbreviated[_this2.state.selectedMonth] + ' ' + _this2.state.selectedYear;

    return _react2.default.createElement(
      'div',
      { style: monthSelector.widget },
      _react2.default.createElement(_SovosFlatButton2.default, {
        className: 'month-select',
        type: 'custom',
        icon: _ref,
        style: monthSelector.currentSelectionButton,
        color: _sovosColors.purple,
        label: label,
        onClick: _this2.toggleMenu,
        tooltip: 'Go to a specific month'
      }),
      _react2.default.createElement(
        _SovosIconButton2.default,
        {
          className: 'previous-button',
          color: _sovosColors.purple,
          style: monthSelector.nextPrevButton,
          onClick: _this2.prevMonth,
          tooltip: 'Previous Month',
          disabled: !_this2.canDecreaseMonth()
        },
        _ref2
      ),
      _react2.default.createElement(
        _SovosIconButton2.default,
        {
          className: 'next-button',
          color: _sovosColors.purple,
          style: monthSelector.nextPrevButton,
          onClick: _this2.nextMonth,
          tooltip: 'Next Month',
          disabled: !_this2.canIncreaseMonth()
        },
        _ref3
      )
    );
  };
};

SovosMonthSelector.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: _propTypes2.default.object.isRequired,
  onChange: _propTypes2.default.func,
  onToggle: _propTypes2.default.func,
  selectedMonth: _propTypes2.default.number,
  selectedYear: _propTypes2.default.number,
  minDate: _propTypes2.default.instanceOf(Date),
  maxDate: _propTypes2.default.instanceOf(Date),
  format: _propTypes2.default.oneOf(['number', 'month-name']),
  monthsAbbreviated: _propTypes2.default.arrayOf(_propTypes2.default.string),
  monthsFull: _propTypes2.default.arrayOf(_propTypes2.default.string)
} : {};
exports.default = (0, _muiThemeable2.default)()(SovosMonthSelector);