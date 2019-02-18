'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = require('material-ui/List');

var _insertDriveFile = require('material-ui/svg-icons/editor/insert-drive-file');

var _insertDriveFile2 = _interopRequireDefault(_insertDriveFile);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _moreVert = require('material-ui/svg-icons/navigation/more-vert');

var _moreVert2 = _interopRequireDefault(_moreVert);

var _withTheme = require('../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _index = require('../index');

var _sovosAvatar = require('../sovos-avatar');

var _sovosAvatar2 = _interopRequireDefault(_sovosAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var documentStyle = {
  fontSize: 13,
  paddingLeft: 10,
  paddingRight: 10,
  flex: '1 1 auto',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
};

var linkStyle = {
  textDecoration: 'none',
  color: 'inherit'
};

var iconMenuStyle = {
  display: 'flex !important',
  flex: '0 0 28px'
};

var timestampStyle = {
  marginLeft: 'auto'
};

var getStyles = function getStyles(theme) {
  return {
    time: {
      fontSize: 11
    },
    fileIcon: {
      color: theme.attachmentsList.fileIcon,
      marginLeft: 8,
      width: 18,
      height: 18,
      flex: '0 0 18px'
    },
    info: {
      marginLeft: 'auto',
      flex: '0 0 160px',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingRight: 12,
      color: theme.attachmentsList.infoColor
    },
    menuItem: {
      style: {
        lineHeight: '25px',
        minHeight: '25px'
      },
      innerDivStyle: {
        fontSize: '13px',
        lineHeight: '25px'
      }
    }
  };
};

var _ref = _react2.default.createElement(
  _IconButton2.default,
  null,
  _react2.default.createElement(_moreVert2.default, null)
);

var getRowRenderer = function getRowRenderer(onDownload, onDelete, styles) {
  return function (entry) {
    var document = entry.document,
        documentLink = entry.documentLink,
        timestamp = entry.timestamp,
        timeLabel = entry.timeLabel,
        name = entry.name,
        surname = entry.surname;


    return _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(_insertDriveFile2.default, { style: styles.fileIcon }),
      _react2.default.createElement(
        'span',
        { style: documentStyle },
        _react2.default.createElement(
          'a',
          {
            style: linkStyle,
            rel: 'noopener noreferrer',
            target: '_blank',
            href: documentLink
          },
          document
        )
      ),
      _react2.default.createElement(
        'div',
        { style: styles.info },
        name && _react2.default.createElement(_sovosAvatar2.default, {
          name: name,
          surname: surname,
          size: 'large'
        }),
        _react2.default.createElement(
          'span',
          { style: timestampStyle },
          timeLabel || timestamp
        )
      ),
      _react2.default.createElement(
        _IconMenu2.default,
        {
          iconButtonElement: _ref,
          style: iconMenuStyle,
          anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
          targetOrigin: { horizontal: 'right', vertical: 'top' }
        },
        _react2.default.createElement(_MenuItem2.default, _extends({}, styles.menuItem, { primaryText: 'Download', onClick: function onClick() {
            return onDownload(entry);
          } })),
        _react2.default.createElement(_MenuItem2.default, _extends({}, styles.menuItem, { primaryText: 'Delete', onClick: function onClick() {
            return onDelete(entry);
          } }))
      )
    );
  };
};

/**
 * Specialized list base[](http://www.material-ui.com/#/components/list).
 */
var SovosAttachmentsList = function SovosAttachmentsList(_ref2) {
  var data = _ref2.data,
      theme = _ref2.theme,
      rowHeight = _ref2.rowHeight,
      onDownload = _ref2.onDownload,
      onDelete = _ref2.onDelete,
      props = _objectWithoutProperties(_ref2, ['data', 'theme', 'rowHeight', 'onDownload', 'onDelete']);

  var styles = getStyles(theme, rowHeight);
  return _react2.default.createElement(_index.SovosList, _extends({}, props, {
    styles: styles,
    rowHeight: rowHeight,
    data: data,
    rowRenderer: getRowRenderer(onDownload, onDelete, styles)
  }));
};

SovosAttachmentsList.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _List.List.propTypes, {
  /**
   * Array of entries to be rendered. Each entry should contain document, documentLink, timestamp and optional time label and avatar.
   */
  data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.number,
    document: _propTypes2.default.string.isRequired,
    documentLink: _propTypes2.default.string.isRequired,
    avatar: _propTypes2.default.string,
    timestamp: _propTypes2.default.number,
    timeLabel: _propTypes2.default.string
  })).isRequired,
  /**
   * Callback to be invoked when `delete` is pressed from the menu. Takes id of the document as an argument.
   */
  onDelete: _propTypes2.default.func.isRequired,
  /**
   * Callback to be invoked when `download` is pressed from the menu. Takes id of the document as an argument.
   */
  onDownload: _propTypes2.default.func.isRequired,
  /**
   * Height of the row in pixels.
   */
  rowHeight: _propTypes2.default.number,
  /**
   * Function used to sort provided data.
   */
  sortFunction: _propTypes2.default.func,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
}) : {};

SovosAttachmentsList.defaultProps = {
  rowHeight: 50,
  sortFunction: undefined
};

SovosAttachmentsList.displayName = 'AttachmentsList';

exports.default = (0, _withTheme2.default)()(SovosAttachmentsList);