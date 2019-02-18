'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _sovosAvatar = require('../../sovos-avatar');

var _sovosAvatar2 = _interopRequireDefault(_sovosAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comment = function Comment(_ref) {
  var content = _ref.content,
      name = _ref.name,
      surname = _ref.surname,
      formattedDate = _ref.formattedDate,
      style = _ref.style,
      theme = _ref.theme;
  return _react2.default.createElement(
    'div',
    {
      style: _extends({}, theme.tabCardComments.comment.container, style),
      className: 'sovos-tab-card__comment'
    },
    _react2.default.createElement(_sovosAvatar2.default, {
      className: 'sovos-tab-card__comment_avatar',
      name: name,
      style: theme.tabCardComments.comment.avatar,
      surname: surname,
      size: 'large',
      backgroundColor: 'rgb(224, 224, 224)',
      color: '#4d5d6c'
    }),
    _react2.default.createElement(
      'p',
      {
        style: theme.tabCardComments.comment.content,
        className: 'sovos-tab-card__comment_content'
      },
      content
    ),
    _react2.default.createElement(
      'p',
      {
        style: theme.tabCardComments.comment.timestamp,
        className: 'sovos-tab-card__comment_date'
      },
      formattedDate
    )
  );
};

Comment.propTypes = process.env.NODE_ENV !== "production" ? {
  content: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  surname: _propTypes2.default.string.isRequired,
  formattedDate: _propTypes2.default.string.isRequired,
  style: _propTypes2.default.object,
  theme: _propTypes2.default.object.isRequired
} : {};

Comment.defaultProps = {
  style: null
};

exports.default = (0, _withTheme2.default)()(Comment);