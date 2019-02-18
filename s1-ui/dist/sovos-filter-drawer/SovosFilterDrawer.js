'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SovosDrawer = require('../sovos-drawer/SovosDrawer');

var _SovosDrawer2 = _interopRequireDefault(_SovosDrawer);

var _sovosColors = require('../themes/sovos-colors');

require('./sovosFilterDrawer.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SovosFilterDrawer = function SovosFilterDrawer(_ref) {
  var onSave = _ref.onSave,
      onClose = _ref.onClose,
      onClearAll = _ref.onClearAll,
      open = _ref.open,
      children = _ref.children;
  return _react2.default.createElement(
    _SovosDrawer2.default,
    {
      title: 'Filters',
      onPrimaryButtonClick: onSave,
      onSecondaryButtonClick: onClearAll,
      secondaryButtonLabel: 'Clear',
      onClose: onClose,
      open: open
    },
    _react2.default.createElement(
      'div',
      { className: 'filter-drawer' },
      _react2.default.createElement(
        'p',
        { className: 'filter-drawer__status', style: { color: _sovosColors.purple } },
        'Status'
      ),
      children
    )
  );
};

SovosFilterDrawer.propTypes = process.env.NODE_ENV !== "production" ? {
  onSave: _propTypes2.default.func.isRequired,
  onClose: _propTypes2.default.func.isRequired,
  onClearAll: _propTypes2.default.func.isRequired,
  open: _propTypes2.default.bool.isRequired,
  children: _propTypes2.default.node.isRequired
} : {};

SovosFilterDrawer.displayName = 'FilterDrawer';

exports.default = SovosFilterDrawer;