'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var color = 'rgba(0,0,0,.54)';
var fontSize = 12;
var selectFieldStyle = {
  color: color,
  fontSize: fontSize,
  width: 70,
  position: 'static',
  verticalAlign: 'middle',
  paddingLeft: 10
};

var footerStyle = {
  color: 'rgba(0,0,0,.54)',
  fontSize: 12,
  height: 30,
  lineHeight: '24px',
  padding: '16px 14px',
  textAlign: 'right',
  verticalAlign: 'middle',
  boxSizing: 'content-box'
};

var footerElementStyle = {
  display: 'inline-block',
  verticalAlign: 'middle'
};

var footerCountStyle = Object.assign({
  margin: '0 15px'
}, footerElementStyle);

var footerArrowStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'inline-block',
  textAlign: 'left',
  textDecoration: 'none',
  width: 24,
  verticalAlign: 'middle'
};

var _ref2 = _react2.default.createElement(
  'div',
  { style: footerElementStyle },
  'Items per page: '
);

var SovosPaginationFooter = function (_React$Component) {
  _inherits(SovosPaginationFooter, _React$Component);

  function SovosPaginationFooter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SovosPaginationFooter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SovosPaginationFooter.__proto__ || Object.getPrototypeOf(SovosPaginationFooter)).call.apply(_ref, [this].concat(args))), _this), _this.renderItems = function () {
      return _this.props.itemsPerPageOptions.map(function (value) {
        return _react2.default.createElement(_MenuItem2.default, {
          key: value,
          primaryText: value,
          style: { color: color, fontSize: fontSize },
          value: value
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SovosPaginationFooter, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.endItem !== this.props.endItem || nextProps.itemsPerPage !== this.props.itemsPerPage || nextProps.startItem !== this.props.startItem || nextProps.totalItems !== this.props.totalItems;
    }
  }, {
    key: 'render',
    value: function render() {
      var countText = this.props.startItem + ' - ' + this.props.endItem + ' of ' + this.props.totalItems;
      return _react2.default.createElement(
        'div',
        { style: footerStyle },
        _ref2,
        _react2.default.createElement(
          _SelectField2.default,
          {
            id: 'selectPageSize',
            iconStyle: { color: color, fill: color },
            labelStyle: { color: color, width: 25 },
            onChange: this.props.onPerPageChanged,
            style: selectFieldStyle,
            underlineStyle: { borderBottom: 'none' },
            value: this.props.itemsPerPage
          },
          this.renderItems()
        ),
        _react2.default.createElement(
          'div',
          { style: footerCountStyle },
          countText
        ),
        _react2.default.createElement(
          'button',
          {
            style: Object.assign({ marginLeft: 24 }, footerArrowStyle),
            onClick: this.props.onPrevClicked
          },
          '\u276E'
        ),
        _react2.default.createElement(
          'button',
          {
            style: footerArrowStyle,
            onClick: this.props.onNextClicked
          },
          '\u276F'
        )
      );
    }
  }]);

  return SovosPaginationFooter;
}(_react2.default.Component);

SovosPaginationFooter.displayName = 'SovosPaginationFooter';

SovosPaginationFooter.propTypes = process.env.NODE_ENV !== "production" ? {
  endItem: _propTypes2.default.number.isRequired,
  itemsPerPage: _propTypes2.default.number.isRequired,
  onNextClicked: _propTypes2.default.func.isRequired,
  onPerPageChanged: _propTypes2.default.func.isRequired,
  onPrevClicked: _propTypes2.default.func.isRequired,
  itemsPerPageOptions: _propTypes2.default.array,
  startItem: _propTypes2.default.number.isRequired,
  totalItems: _propTypes2.default.number.isRequired
} : {};

SovosPaginationFooter.defaultProps = {
  itemsPerPageOptions: [50, 100, 200, 300]
};

exports.default = SovosPaginationFooter;