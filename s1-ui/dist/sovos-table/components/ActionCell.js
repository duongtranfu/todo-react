'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionCellStyle = exports.actionPropTypes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _materialUi = require('material-ui');

var _moreVert = require('material-ui/svg-icons/navigation/more-vert');

var _moreVert2 = _interopRequireDefault(_moreVert);

var _SovosIconButton = require('../../sovos-icon-button/SovosIconButton');

var _SovosIconButton2 = _interopRequireDefault(_SovosIconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var actionPropTypes = exports.actionPropTypes = _propTypes2.default.shape({
  text: _propTypes2.default.string.isRequired,
  action: _propTypes2.default.func.isRequired
});

var actionCellStyle = exports.actionCellStyle = {
  minWidth: 24, width: 24, height: 24
};

var _ref = _react2.default.createElement(_moreVert2.default, null);

var ActionCell = function (_PureComponent) {
  _inherits(ActionCell, _PureComponent);

  function ActionCell(props) {
    _classCallCheck(this, ActionCell);

    var _this = _possibleConstructorReturn(this, (ActionCell.__proto__ || Object.getPrototypeOf(ActionCell)).call(this, props));

    _this.onDropdownActionClicked = function (action) {
      _this.closeDropdown();
      action();
    };

    _this.closeDropdown = function () {
      _this.setState({ dropdownOpen: false });
    };

    _this.expandDropdown = function (event) {
      event.preventDefault();
      event.stopPropagation();

      _this.setState({
        dropdownOpen: true,
        anchorEl: event.currentTarget
      });
    };

    _this.state = {
      dropdownOpen: false,
      anchorEl: undefined
    };
    return _this;
  }

  _createClass(ActionCell, [{
    key: 'renderPopover',
    value: function renderPopover() {
      var _this2 = this;

      var actions = this.props.actions;


      return _react2.default.createElement(
        _materialUi.Popover,
        {
          className: 'sovos-table-row__dropdown',
          open: this.state.dropdownOpen,
          anchorEl: this.state.anchorEl,
          anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
          targetOrigin: { horizontal: 'left', vertical: 'top' },
          onRequestClose: this.closeDropdown
        },
        actions && actions.length > 0 && actions.map(function (action) {
          return _react2.default.createElement(_materialUi.MenuItem, {
            key: action.text,
            primaryText: action.text,
            onClick: function onClick() {
              return _this2.onDropdownActionClicked(action.action);
            }
          });
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var opacity = this.props.isHovered || this.state.dropdownOpen ? '1' : '0';

      var style = Object.assign({ opacity: opacity }, actionCellStyle);

      var iconStyle = ({ paddingTop: 4 }, actionCellStyle);

      return _react2.default.createElement(
        'div',
        null,
        this.renderPopover(),
        _react2.default.createElement(
          _SovosIconButton2.default,
          {
            className: 'sovos-table-row__action-button',
            style: style,
            iconStyle: iconStyle,
            onClick: this.expandDropdown
          },
          _ref
        )
      );
    }
  }]);

  return ActionCell;
}(_react.PureComponent);

ActionCell.defaultProps = {
  actions: [],
  isHovered: false
};
ActionCell.propTypes = process.env.NODE_ENV !== "production" ? {
  actions: _propTypes2.default.arrayOf(actionPropTypes),
  isHovered: _propTypes2.default.bool
} : {};
exports.default = ActionCell;