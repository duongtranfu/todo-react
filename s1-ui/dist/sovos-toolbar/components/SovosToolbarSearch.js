'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _search = require('material-ui/svg-icons/action/search');

var _search2 = _interopRequireDefault(_search);

var _Toolbar = require('material-ui/Toolbar');

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _colorManipulator = require('material-ui/utils/colorManipulator');

var _withTheme = require('../../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _SovosIconButton = require('../../sovos-icon-button/SovosIconButton');

var _SovosIconButton2 = _interopRequireDefault(_SovosIconButton);

var _eventHelpers = require('../../utils/eventHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Search
 *
 * Props from the SovosIconButton
 */
var SovosToolbarSearch = function (_React$PureComponent) {
  _inherits(SovosToolbarSearch, _React$PureComponent);

  function SovosToolbarSearch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SovosToolbarSearch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SovosToolbarSearch.__proto__ || Object.getPrototypeOf(SovosToolbarSearch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: _this.props.active,
      value: _this.props.defaultValue
    }, _this.componentWillReceiveProps = function (nextProps) {
      if (_this.props.value !== nextProps.value) {
        _this.setState({ value: nextProps.value });
      }
    }, _this.getStyles = function (theme, active) {
      return {
        root: active ? {
          width: 250,
          height: 50,
          marginLeft: -5,
          boxShadow: '0px 2px 4px 1px ' + theme.palette.secondaryColor
        } : {
          height: 50,
          maxWidth: 250,
          minWidth: 0
        },
        hintStyle: {
          color: (0, _colorManipulator.fade)(theme.palette.textColor, 0.5),
          fontFamily: theme.fontFamily,
          fontSize: 13
        },
        inputStyle: {
          color: theme.palette.secondaryColor,
          fontFamily: theme.fontFamily
        },
        textStyle: {
          fontSize: 13,
          paddingLeft: 10
        },
        title: {
          color: theme.palette.secondaryColor,
          fontFamily: theme.fontFamily,
          fontSize: 13,
          paddingLeft: 10,
          paddingRight: 0
        },
        iconButton: {
          minWidth: 40
        }
      };
    }, _this.handleSearch = function () {
      _this.setState(_extends({}, _this.state, { active: !_this.state.active }));
      if (_this.props.onSearch && _this.state.active) {
        _this.props.onSearch(_this.state.value);
      }
    }, _this.handleTextChange = function (event, value) {
      _this.setState(_extends({}, _this.state, { value: value }));
    }, _this.handleKeyDown = function (event) {
      if ((0, _eventHelpers.isEnter)(event)) {
        _this.handleSearch();
      }
    }, _this.render = function () {
      var _this$props = _this.props,
          onSearch = _this$props.onSearch,
          active = _this$props.active,
          theme = _this$props.theme,
          buttonProps = _objectWithoutProperties(_this$props, ['onSearch', 'active', 'theme']);

      var styles = _this.getStyles(theme, _this.state.active);

      return _react2.default.createElement(
        _Toolbar.ToolbarGroup,
        { style: styles.root },
        _this.state.active ? _react2.default.createElement(_TextField2.default, {
          name: 'toolbar-search-text',
          hintText: _this.placeholder,
          hintStyle: styles.hintStyle,
          inputStyle: styles.inputStyle,
          style: styles.textStyle,
          underlineShow: false,
          value: _this.state.value,
          onChange: _this.handleTextChange,
          onKeyDown: _this.handleKeyDown,
          autoFocus: true
        }) : _this.state.value && _react2.default.createElement(_Toolbar.ToolbarTitle, { text: _this.state.value, onClick: _this.handleSearch, style: styles.title }),
        _react2.default.createElement(
          _SovosIconButton2.default,
          _extends({ onClick: _this.handleSearch, style: styles.iconButton }, buttonProps),
          _react2.default.createElement(_search2.default, {
            color: theme.palette.secondaryColor
          })
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return SovosToolbarSearch;
}(_react2.default.PureComponent);

SovosToolbarSearch.defaultProps = {
  tooltip: 'Search',
  placeholder: 'Search',
  active: false,
  onSearch: undefined,
  defaultValue: '',
  value: ''
};
SovosToolbarSearch.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _SovosIconButton2.default.propTypes, {
  /**
   * Callback function that is fired when the search value changes.
     function(newValue: string) => void
   newValue: The new value of the text field.
   */
  onSearch: _propTypes2.default.func,
  /**
   * Default value for search component
   */
  defaultValue: _propTypes2.default.string,
  /**
   * Value for search component
   */
  value: _propTypes2.default.string,
  /**
   * Placeholder text
   */
  placeholder: _propTypes2.default.string,
  /**
   * Tooltip text
   */
  tooltip: _propTypes2.default.string,
  /**
   * If search is active, so you can write text there
   */
  active: _propTypes2.default.bool,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
}) : {};
exports.default = (0, _withTheme2.default)()(SovosToolbarSearch);