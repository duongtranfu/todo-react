'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _objectHelpers = require('../utils/objectHelpers');

var _sovosEnterprise = require('../themes/sovos-enterprise');

var _sovosEnterprise2 = _interopRequireDefault(_sovosEnterprise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SovosThemeProvider = function (_Component) {
  _inherits(SovosThemeProvider, _Component);

  function SovosThemeProvider() {
    _classCallCheck(this, SovosThemeProvider);

    return _possibleConstructorReturn(this, (SovosThemeProvider.__proto__ || Object.getPrototypeOf(SovosThemeProvider)).apply(this, arguments));
  }

  _createClass(SovosThemeProvider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Add our custom fonts
      var typographyCss = document.createElement('link');
      typographyCss.rel = 'stylesheet';
      typographyCss.type = 'text/css';
      typographyCss.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';
      document.head.appendChild(typographyCss);

      // Set defaults
      document.body.style.fontFamily = this.props.theme.fontFamily || _sovosEnterprise2.default.fontFamily;
      document.body.style.margin = 0;
      document.body.style.padding = 0;
    }
  }, {
    key: 'render',
    value: function render() {
      var theme = this.props.theme;


      if (typeof theme !== 'undefined') {
        theme = (0, _objectHelpers.mergeDeep)({}, _sovosEnterprise2.default, theme);
      }

      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        { muiTheme: (0, _getMuiTheme2.default)(theme) },
        this.props.children
      );
    }
  }]);

  return SovosThemeProvider;
}(_react.Component);

SovosThemeProvider.defaultProps = {
  theme: {}
};

SovosThemeProvider.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node.isRequired,
  /* eslint-disable */
  theme: _propTypes2.default.object
  /* eslint-enable */
} : {};

exports.default = SovosThemeProvider;