'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tabs = require('material-ui/Tabs');

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _withTheme = require('../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _reactHelpers = require('../utils/reactHelpers');

var _SovosTabCardTab = require('./components/SovosTabCardTab');

var _SovosTabCardTab2 = _interopRequireDefault(_SovosTabCardTab);

var _sovosColors = require('../themes/sovos-colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getStyles = function getStyles(theme) {
  return {
    root: {
      background: 'white',
      minHeight: 150,
      height: 'auto'
    },
    inkBar: {
      display: 'none'
    },
    tabItemContainer: {
      background: _sovosColors.neutralWhite,
      borderBottom: 'solid 1px ' + theme.list.rowBorderColor
    },
    tabContentContainer: {
      padding: '0px 20px 20px 20px'
    }
  };
};

/**
 * Specialized card that houses history, attachments and comments. Based on [Material UI Tabs](http://www.material-ui.com/#/components/tabs) and
 * utilizing [SovosTabCardHistory](#sovostabcardhistory), [SovosTabCardAttachments](#sovostabcardattachments) and in the future [SovosTabCardComments](#sovostabcardcomments).
 */

var SovosTabCard = function (_React$PureComponent) {
  _inherits(SovosTabCard, _React$PureComponent);

  function SovosTabCard() {
    _classCallCheck(this, SovosTabCard);

    var _this = _possibleConstructorReturn(this, (SovosTabCard.__proto__ || Object.getPrototypeOf(SovosTabCard)).call(this));

    _this.onChange = function (value) {
      _this.setState({
        value: value
      });
    };

    _this.state = {
      value: 0
    };
    return _this;
  }

  _createClass(SovosTabCard, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          theme = _props.theme,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['theme', 'children']);

      var styles = getStyles(theme);
      var styledProps = (0, _reactHelpers.mergePropsWithStyle)(props, styles.root);

      return _react2.default.createElement(
        _Paper2.default,
        null,
        _react2.default.createElement(
          _Tabs.Tabs,
          _extends({
            tabItemContainerStyle: styles.tabItemContainer,
            contentContainerStyle: styles.tabContentContainer,
            value: this.state.value,
            inkBarStyle: styles.inkBar,
            onChange: this.onChange
          }, styledProps),
          _react2.default.Children.map(children, function (child, index) {
            return _react2.default.createElement(
              _SovosTabCardTab2.default,
              {
                value: index,
                active: index === _this2.state.value,
                label: child.props.label
              },

              // Theme is provided manually to enable getting default label prop values
              // -> components used here should be "dumb" and not use a container e.g. withTheme/muiThemeable
              // which don't preserve default props
              _react2.default.cloneElement(child, {
                theme: theme
              })
            );
          })
        )
      );
    }
  }]);

  return SovosTabCard;
}(_react2.default.PureComponent);

SovosTabCard.displayName = 'TabCard';
SovosTabCard.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _Tabs.Tabs.propTypes, {
  /**
   * Each child represents the content of 1 tab.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
}) : {};
exports.default = (0, _withTheme2.default)()(SovosTabCard);