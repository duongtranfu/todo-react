'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addCircle = require('material-ui/svg-icons/content/add-circle');

var _addCircle2 = _interopRequireDefault(_addCircle);

var _sovosAttachmentsList = require('../../sovos-attachments-list');

var _sovosAttachmentsList2 = _interopRequireDefault(_sovosAttachmentsList);

var _sovosFlatButton = require('../../sovos-flat-button');

var _sovosFlatButton2 = _interopRequireDefault(_sovosFlatButton);

var _reactHelpers = require('../../utils/reactHelpers');

var _withTheme = require('../../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getStyles = function getStyles(theme) {
  return {
    attachmentsTab: {
      padding: 0,
      marginBottom: 8,
      borderBottom: 'solid 1px ' + theme.list.rowBorderColor
    },
    addButton: {
      color: theme.flatButton.primary.labelColor,
      left: '-7px'
    }
  };
};

var addButtonIcon = _react2.default.createElement(_addCircle2.default, null);

/**
 * Specialized tab that houses [SovosAttachmentsList](#sovosattachmentslist) used in [SovosTabCard](#sovostabcard).
 */
var SovosTabCardAttachments = function SovosTabCardAttachments(_ref) {
  var theme = _ref.theme,
      addButtonLabel = _ref.addButtonLabel,
      data = _ref.data,
      onDelete = _ref.onDelete,
      onDownload = _ref.onDownload,
      onAdd = _ref.onAdd,
      props = _objectWithoutProperties(_ref, ['theme', 'addButtonLabel', 'data', 'onDelete', 'onDownload', 'onAdd']);

  var styles = getStyles(theme);
  var styledProps = (0, _reactHelpers.mergePropsWithStyle)(props, styles.attachmentsTab);

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_sovosAttachmentsList2.default, _extends({
      data: data,
      onDelete: onDelete,
      onDownload: onDownload
    }, styledProps)),
    _react2.default.createElement(_sovosFlatButton2.default, {
      className: 'sovos-tab-card-attachments__add-button',
      type: 'primary',
      label: addButtonLabel,
      style: styles.addButton,
      icon: addButtonIcon,
      onClick: onAdd
    })
  );
};

SovosTabCardAttachments.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Label of the tab.
   */
  label: _propTypes2.default.string,
  /**
   * Text of the add button below the attachments list.
   */
  addButtonLabel: _propTypes2.default.string,
  /**
   * OnAdd callback provided to the click on the Add button.
   */
  onAdd: _propTypes2.default.func.isRequired,
  /**
   * OnDelete callback provided to the [SovosAttachmentsList](#sovosattachmentslist).
   */
  onDelete: _propTypes2.default.func.isRequired,
  /**
   * OnDownload callback provided to the [SovosAttachmentsList](#sovosattachmentslist).
   */
  onDownload: _propTypes2.default.func.isRequired,
  /**
   * Data provided to the [SovosAttachmentsList](#sovosattachmentslist).
   */
  data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.number.isRequired,
    document: _propTypes2.default.string.isRequired,
    documentLink: _propTypes2.default.string.isRequired,
    avatar: _propTypes2.default.string,
    timestamp: _propTypes2.default.number.isRequired,
    timeLabel: _propTypes2.default.string
  })).isRequired,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object
} : {};

SovosTabCardAttachments.defaultProps = {
  label: 'Attachments',
  addButtonLabel: 'ADD',
  theme: {}
};

exports.default = (0, _withTheme2.default)()(SovosTabCardAttachments);