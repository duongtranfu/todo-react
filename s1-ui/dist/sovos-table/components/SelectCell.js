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

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _sovosColors = require('../../themes/sovos-colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var checkboxStyle = {
  height: 18,
  width: 18
};

var cellStyle = {
  textAlign: 'left',
  paddingLeft: 5,
  paddingRight: 5,
  width: 25
};

var SelectCell = function (_PureComponent) {
  _inherits(SelectCell, _PureComponent);

  function SelectCell(props) {
    _classCallCheck(this, SelectCell);

    var _this = _possibleConstructorReturn(this, (SelectCell.__proto__ || Object.getPrototypeOf(SelectCell)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(SelectCell, [{
    key: 'onClick',
    value: function onClick() {
      var _props = this.props,
          onCheck = _props.onCheck,
          rowIndex = _props.rowIndex;

      onCheck(rowIndex);
    }
  }, {
    key: 'render',
    value: function render() {
      var checked = this.props.checked;


      return _react2.default.createElement(
        'div',
        { style: cellStyle },
        _react2.default.createElement(_Checkbox2.default, {
          checked: checked,
          iconStyle: _extends({}, checkboxStyle, { fill: checked ? _sovosColors.purple : _sovosColors.black }),
          inputStyle: checkboxStyle,
          onClick: this.onClick,
          style: checkboxStyle
        })
      );
    }
  }]);

  return SelectCell;
}(_react.PureComponent);

SelectCell.defaultProps = {
  rowIndex: undefined
};
SelectCell.propTypes = process.env.NODE_ENV !== "production" ? {
  checked: _propTypes2.default.bool.isRequired,
  onCheck: _propTypes2.default.func.isRequired,
  rowIndex: _propTypes2.default.number
} : {};
exports.default = SelectCell;