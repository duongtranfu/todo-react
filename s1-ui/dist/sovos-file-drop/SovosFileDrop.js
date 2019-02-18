'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

require('./sovosFileDrop.css');

var _pDFIcon = require('./assets/img/p-d-f-icon.png');

var _pDFIcon2 = _interopRequireDefault(_pDFIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref2 = _react2.default.createElement('img', { className: 'sovos-drag-drop__description__icon', src: _pDFIcon2.default, alt: '' });

var _ref3 = _react2.default.createElement(
  'div',
  { className: 'sovos-drag-drop--item-center sovos-drag-drop__description--text-highlighted' },
  'Drag and Drop'
);

var SovosFileDrop = function (_Component) {
  _inherits(SovosFileDrop, _Component);

  function SovosFileDrop() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SovosFileDrop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SovosFileDrop.__proto__ || Object.getPrototypeOf(SovosFileDrop)).call.apply(_ref, [this].concat(args))), _this), _this.onOpenClick = function () {
      _this.dropzone.open();
    }, _this.getIcons = function () {
      return _ref2;
    }, _this.getMimeType = function (type) {
      switch (type) {
        case 'PDF':
          return 'application/pdf';
        case 'PNG':
          return 'image/png';
        case 'JPG':
          return 'image/jpeg';
        case 'EXCEL':
          return 'application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        case 'DOC':
          return 'application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        case 'TEXT':
          return 'text/*';
        case 'APPLICATION':
          return 'application/*';
        case 'IMAGE':
          return 'image/*';
        case 'ZIP':
          return 'application/zip';
        case 'TIFF':
          return 'image/tiff';

        default:
          return 'application/*';
      }
    }, _this.getAcceptedFileTypes = function () {
      var acceptedTypes = _this.props.acceptedTypes;

      var types = '';

      switch (typeof acceptedTypes === 'undefined' ? 'undefined' : _typeof(acceptedTypes)) {
        case 'string':
          return _this.getMimeType(acceptedTypes.toUpperCase());
        case 'undefined':
          return '';
        default:
          if (Array.isArray(acceptedTypes)) {
            acceptedTypes.forEach(function (type, index, acceptedTypesArray) {
              types += _this.getMimeType(type.toUpperCase());
              if (index !== acceptedTypesArray.length - 1) {
                types += ' ,';
              }
            });
          } else {
            console.error('Expected acceptedTypes to be either a string or array. Received type: ', typeof acceptedTypes === 'undefined' ? 'undefined' : _typeof(acceptedTypes));
          }

          return types;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SovosFileDrop, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var activeStyle = this.props.style && this.props.style.acceptedBorderColor ? { border: '1px solid ' + this.props.style.acceptedBorderColor } : { border: '1px solid #369D43' };
      var rejectStyle = this.props.style && this.props.style.rejectedBorderColor ? { border: '1px solid ' + this.props.style.rejectedBorderColor } : { border: '1px solid #f93f3f' };
      var style = this.props.style && this.props.style.width && this.props.style.height ? {
        width: this.props.style.width || '640px',
        height: this.props.style.height || '335px'
      } : {};

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactDropzone2.default,
          {
            style: style,
            className: 'sovos-drag-drop',
            activeStyle: activeStyle,
            rejectStyle: rejectStyle,
            ref: function ref(node) {
              _this2.dropzone = node;
            },
            onDrop: this.props.onFileSelect,
            onDropAccepted: this.props.onDropAccepted,
            onDropRejected: this.props.onDropRejected,
            multiple: this.props.multiple,
            accept: this.getAcceptedFileTypes()
          },
          _react2.default.createElement(
            'div',
            { className: 'sovos-drag-drop__description' },
            _react2.default.createElement(
              'div',
              { className: 'sovos-drag-drop--item-center' },
              this.getIcons()
            ),
            _ref3,
            _react2.default.createElement(
              'div',
              { className: 'sovos-drag-drop--item-center' },
              'your files here or ',
              _react2.default.createElement(
                'span',
                { onClick: this.onOpenClick },
                'Browse File'
              )
            )
          )
        )
      );
    }
  }]);

  return SovosFileDrop;
}(_react.Component);

SovosFileDrop.defaultProps = {
  acceptedTypes: undefined,
  style: undefined,
  multiple: false
};
SovosFileDrop.displayName = 'FileDrop';
SovosFileDrop.propTypes = process.env.NODE_ENV !== "production" ? {
  acceptedTypes: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  style: _propTypes2.default.shape({
    acceptedBorderColor: _propTypes2.default.string,
    rejectedBorderColor: _propTypes2.default.string,
    height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
  }),
  multiple: _propTypes2.default.bool,
  onFileSelect: _propTypes2.default.func.isRequired,
  onDropAccepted: _propTypes2.default.func.isRequired,
  onDropRejected: _propTypes2.default.func.isRequired
} : {};
exports.default = SovosFileDrop;