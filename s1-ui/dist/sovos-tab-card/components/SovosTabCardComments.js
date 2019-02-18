'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddCommentForm = require('./AddCommentForm');

var _AddCommentForm2 = _interopRequireDefault(_AddCommentForm);

var _Comment = require('./Comment');

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SovosTabCardComments = function SovosTabCardComments(_ref) {
  var data = _ref.data,
      handleSubmit = _ref.handleSubmit,
      handleAttachmentClicked = _ref.handleAttachmentClicked,
      props = _objectWithoutProperties(_ref, ['data', 'handleSubmit', 'handleAttachmentClicked']);

  return _react2.default.createElement(
    'div',
    props,
    _react2.default.createElement(
      'div',
      null,
      data.map(function (comment, index) {
        return _react2.default.createElement(_Comment2.default, {
          key: comment.id,
          content: comment.comment,
          name: comment.name,
          surname: comment.surname,
          formattedDate: comment.formattedDate,
          style: index < data.length - 1 ? { borderBottom: '1px solid rgb(0, 0, 0, .1)' } : null
        });
      })
    ),
    _react2.default.createElement(_AddCommentForm2.default, {
      handleSubmit: handleSubmit,
      handleAttachmentClicked: handleAttachmentClicked
    })
  );
};

SovosTabCardComments.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Label of the tab.
   */
  label: _propTypes2.default.string,
  data: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  handleSubmit: _propTypes2.default.func.isRequired,
  handleAttachmentClicked: _propTypes2.default.func.isRequired
} : {};

SovosTabCardComments.defaultProps = {
  label: 'Comments'
};

exports.default = SovosTabCardComments;