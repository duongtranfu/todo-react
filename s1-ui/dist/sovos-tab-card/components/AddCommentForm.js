'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _attachFile = require('material-ui/svg-icons/editor/attach-file');

var _attachFile2 = _interopRequireDefault(_attachFile);

var _withTheme = require('../../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _sovosRaisedButton = require('../../sovos-raised-button');

var _sovosRaisedButton2 = _interopRequireDefault(_sovosRaisedButton);

var _sovosIconButton = require('../../sovos-icon-button');

var _sovosIconButton2 = _interopRequireDefault(_sovosIconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _react2.default.createElement(_attachFile2.default, null);

var AddCommentForm = function (_React$Component) {
  _inherits(AddCommentForm, _React$Component);

  function AddCommentForm(props) {
    _classCallCheck(this, AddCommentForm);

    var _this = _possibleConstructorReturn(this, (AddCommentForm.__proto__ || Object.getPrototypeOf(AddCommentForm)).call(this, props));

    _this.handleCommentChanged = function (event) {
      var comment = event.target.value;
      var onCommentContentChange = _this.props.onCommentContentChange;


      onCommentContentChange(comment);

      _this.setState({ comment: comment });
      _this.validate(comment);
    };

    _this.handleSubmit = function () {
      var comment = _this.state.comment;


      if (!comment || comment.length === 0) {
        _this.setState({ error: 'Comment is empty.' });
        return;
      }

      _this.props.handleSubmit(comment);
      _this.setState({ error: '', comment: '' });
    };

    _this.validate = function (comment) {
      if (comment && comment.length > 500) {
        _this.setState({ error: 'Comment must be less than 500 characters.' });
        return false;
      }

      _this.setState({ error: '' });
      return true;
    };

    _this.state = {
      comment: '',
      error: ''
    };
    return _this;
  }

  _createClass(AddCommentForm, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          handleAttachmentClicked = _props.handleAttachmentClicked,
          theme = _props.theme;

      var styles = theme.tabCardComments.addCommentForm;

      return _react2.default.createElement(
        'form',
        {
          onSubmit: function onSubmit() {
            return _this2.handleSubmit(_this2.state.comment);
          },
          style: styles.container
        },
        _react2.default.createElement(_materialUi.TextField, {
          name: 'add-comment',
          value: this.state.comment,
          hintText: 'Being typing to leave a comment...',
          multiLine: true,
          underlineShow: false,
          style: styles.commentField,
          errorText: this.state.error,
          errorStyle: styles.error,
          onChange: this.handleCommentChanged
        }),
        _react2.default.createElement(
          _sovosIconButton2.default,
          { onClick: handleAttachmentClicked },
          _ref
        ),
        _react2.default.createElement(_sovosRaisedButton2.default, {
          label: 'Comment',
          onClick: function onClick() {
            return _this2.handleSubmit(_this2.state.comment);
          }
        })
      );
    }
  }]);

  return AddCommentForm;
}(_react2.default.Component);

AddCommentForm.defaultProps = {
  onCommentContentChange: function onCommentContentChange() {}
};
AddCommentForm.propTypes = process.env.NODE_ENV !== "production" ? {
  handleSubmit: _propTypes2.default.func.isRequired,
  handleAttachmentClicked: _propTypes2.default.func.isRequired,
  onCommentContentChange: _propTypes2.default.func,
  theme: _propTypes2.default.object.isRequired
} : {};
exports.default = (0, _withTheme2.default)()(AddCommentForm);