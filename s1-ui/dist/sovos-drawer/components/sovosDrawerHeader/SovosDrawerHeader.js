'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _sovosRaisedButton = require('../../../sovos-raised-button');

var _sovosRaisedButton2 = _interopRequireDefault(_sovosRaisedButton);

var _sovosColors = require('../../../themes/sovos-colors');

require('./sovosDrawerHeader.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var labelStyle = { fontSize: '14px', padding: '0 8px' };

var _ref2 = _react2.default.createElement('path', { d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' });

var SovosDrawerHeader = function SovosDrawerHeader(_ref) {
  var title = _ref.title,
      onPrimaryButtonClick = _ref.onPrimaryButtonClick,
      onSecondaryButtonClick = _ref.onSecondaryButtonClick,
      onClose = _ref.onClose,
      disabled = _ref.disabled,
      primaryButtonLabel = _ref.primaryButtonLabel,
      secondaryButtonLabel = _ref.secondaryButtonLabel;
  return _react2.default.createElement(
    'div',
    { className: 'sovos-drawer-header' },
    _react2.default.createElement(
      'div',
      { className: 'sovos-drawer-header__title-section' },
      _react2.default.createElement(
        'h2',
        null,
        title
      ),
      _react2.default.createElement(
        _SvgIcon2.default,
        { className: 'sovos-drawer-header__close', onClick: onClose },
        _ref2
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'sovos-drawer-header__buttons-section' },
      _react2.default.createElement(
        'div',
        { className: 'sovos-drawer-header__button' },
        _react2.default.createElement(_sovosRaisedButton2.default, {
          label: primaryButtonLabel,
          backgroundColor: _sovosColors.purple,
          labelColor: _sovosColors.neutralWhite,
          onClick: onPrimaryButtonClick,
          disabled: disabled,
          labelStyle: labelStyle
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'sovos-drawer-header__button' },
        _react2.default.createElement(_sovosRaisedButton2.default, {
          label: secondaryButtonLabel,
          backgroundColor: _sovosColors.neutralWhite,
          labelColor: _sovosColors.purple,
          onClick: onSecondaryButtonClick,
          disabled: disabled,
          labelStyle: labelStyle
        })
      )
    )
  );
};

SovosDrawerHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  title: _propTypes2.default.string.isRequired,
  onClose: _propTypes2.default.func.isRequired,
  onPrimaryButtonClick: _propTypes2.default.func.isRequired,
  onSecondaryButtonClick: _propTypes2.default.func.isRequired,
  primaryButtonLabel: _propTypes2.default.string,
  secondaryButtonLabel: _propTypes2.default.string,
  disabled: _propTypes2.default.bool
} : {};

SovosDrawerHeader.defaultProps = {
  primaryButtonLabel: 'Apply',
  secondaryButtonLabel: 'Cancel',
  disabled: false
};

exports.default = SovosDrawerHeader;