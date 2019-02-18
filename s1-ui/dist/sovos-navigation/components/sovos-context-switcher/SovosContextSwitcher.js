'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contextItemPropTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Popover = require('material-ui/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _colorManipulator = require('material-ui/utils/colorManipulator');

var _lens = require('material-ui/svg-icons/image/lens');

var _lens2 = _interopRequireDefault(_lens);

var _search = require('material-ui/svg-icons/action/search');

var _search2 = _interopRequireDefault(_search);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _sovosColors = require('../../../themes/sovos-colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contextColors = {
  production: { background: _sovosColors.green, icon: _sovosColors.green, text: _sovosColors.neutralWhite },
  test: { background: _sovosColors.pink, icon: _sovosColors.pink, text: _sovosColors.neutralWhite },
  default: { background: _sovosColors.neutralWhite, icon: _sovosColors.grayMedium, text: 'black' }
};

var contextItemPropTypes = exports.contextItemPropTypes = _propTypes2.default.shape({
  name: _propTypes2.default.string.isRequired,
  taxYear: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['production', 'test', 'default'])
});

var SovosContextSwitcher = function (_React$Component) {
  _inherits(SovosContextSwitcher, _React$Component);

  function SovosContextSwitcher(props) {
    _classCallCheck(this, SovosContextSwitcher);

    var _this = _possibleConstructorReturn(this, (SovosContextSwitcher.__proto__ || Object.getPrototypeOf(SovosContextSwitcher)).call(this, props));

    _this.contextMenuFilter = function (context) {
      var searchRegex = new RegExp(_this.state.searchValue, 'i');
      return _this.props.selectedContext.name !== context.name && (!_this.state.searchValue || searchRegex.test(context.name));
    };

    _this.handleContextBarClick = function (event) {
      if (_this.props.contexts.length > 1) {
        _this.setState({
          open: true,
          anchorEl: event.currentTarget,
          searchValue: ''
        });
      }
    };

    _this.selectNewContext = function (context) {
      _this.props.setContext(context);
    };

    _this.closeMenu = function () {
      _this.setState({ open: false });
    };

    _this.handleSearch = function (event) {
      _this.setState({ searchValue: event.target.value });
    };

    _this.renderContextItem = function (context) {
      var styles = _this.props.muiTheme.navigation.context;
      return _react2.default.createElement(
        'div',
        {
          className: 'sovos-navigation__context-switcher_item',
          style: styles.dropdownContext,
          key: context.name,
          onClick: function onClick() {
            return _this.selectNewContext(context);
          }
        },
        _react2.default.createElement(_lens2.default, { style: styles.icons, color: contextColors[context.type].icon }),
        _react2.default.createElement(
          'span',
          {
            style: _extends({}, styles.dropdownContextName, { float: 'left' })
          },
          context.name
        ),
        _react2.default.createElement(
          'span',
          { style: { float: 'right' } },
          context.taxYear
        )
      );
    };

    _this.state = {
      open: false,
      searchValue: ''
    };
    return _this;
  }

  _createClass(SovosContextSwitcher, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.selectedContext.name !== nextProps.selectedContext.name) {
        this.setState({
          open: false
        });
      }
    }
  }, {
    key: 'renderContextDropdownButton',
    value: function renderContextDropdownButton() {
      var selectedContext = this.props.selectedContext;
      var _contextColors$select = contextColors[selectedContext.type],
          background = _contextColors$select.background,
          text = _contextColors$select.text;

      var styles = this.props.muiTheme.navigation.context;
      var buttonStyle = {
        height: 40, padding: '0 25px', fontWeight: 400, color: text
      };

      return _react2.default.createElement(
        _FlatButton2.default,
        {
          fullWidth: true,
          className: 'sovos-navigation__context-switcher_dropdown-button',
          backgroundColor: (0, _colorManipulator.fade)(background, 0.6),
          hoverColor: background,
          onClick: this.handleContextBarClick,
          style: buttonStyle
        },
        _react2.default.createElement(
          'span',
          {
            style: _extends({}, styles.alias, {
              maxWidth: selectedContext.taxYear ? 140 : 180
            })
          },
          selectedContext ? selectedContext.name : ''
        ),
        selectedContext.taxYear && _react2.default.createElement(
          'span',
          {
            className: 'sovos-navigation__context-switcher_year',
            style: styles.taxyear
          },
          _react2.default.createElement(
            'span',
            { style: styles.taxyearOpacity },
            selectedContext ? 20 : ''
          ),
          selectedContext ? selectedContext.taxYear.substring(2) : ''
        )
      );
    }
  }, {
    key: 'renderPopover',
    value: function renderPopover() {
      var styles = this.props.muiTheme.navigation.context;
      var contextItems = this.props.contexts.filter(this.contextMenuFilter).map(this.renderContextItem);

      return _react2.default.createElement(
        _Popover2.default,
        {
          open: this.state.open,
          anchorEl: this.state.anchorEl,
          onRequestClose: this.closeMenu,
          anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
          targetOrigin: { horizontal: 'left', vertical: 'top' }
        },
        _react2.default.createElement(_search2.default, {
          style: styles.searchIcons,
          color: 'lightgrey'
        }),
        _react2.default.createElement(
          'div',
          { style: styles.search },
          _react2.default.createElement('input', {
            type: 'text',
            autoFocus: true,
            value: this.state.searchValue,
            onChange: this.handleSearch,
            name: 'contextSearch',
            placeholder: 'Search'
          })
        ),
        contextItems
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = this.props.muiTheme.navigation.context;
      return _react2.default.createElement(
        'div',
        {
          className: 'sovos-navigation__context-switcher',
          style: styles.context
        },
        this.renderContextDropdownButton(),
        this.renderPopover()
      );
    }
  }]);

  return SovosContextSwitcher;
}(_react2.default.Component);

SovosContextSwitcher.propTypes = process.env.NODE_ENV !== "production" ? {
  selectedContext: contextItemPropTypes.isRequired,
  contexts: _propTypes2.default.arrayOf(contextItemPropTypes).isRequired,
  setContext: _propTypes2.default.func.isRequired,
  muiTheme: _propTypes2.default.object.isRequired
} : {};
exports.default = (0, _muiThemeable2.default)()(SovosContextSwitcher);