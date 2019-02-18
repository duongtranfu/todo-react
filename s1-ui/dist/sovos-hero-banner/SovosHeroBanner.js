'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _hero_bg = require('./assets/img/hero_bg.png');

var _hero_bg2 = _interopRequireDefault(_hero_bg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SovosHeroBanner = function SovosHeroBanner(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      subtitle2 = _ref.subtitle2,
      parentPadding = _ref.parentPadding,
      containerStyle = _ref.containerStyle,
      textStyle = _ref.textStyle,
      muiTheme = _ref.muiTheme;

  var styles = {
    container: _extends({
      backgroundImage: _hero_bg2.default
    }, muiTheme.heroBanner.container, containerStyle),
    title: _extends({}, muiTheme.heroBanner.title, textStyle),
    subtitles: _extends({}, muiTheme.heroBanner.subtitles, textStyle)
  };

  if (parentPadding) {
    var top = -parentPadding.top || 0;
    var right = -parentPadding.right || 0;
    var bottom = -parentPadding.bottom || 0;
    var left = -parentPadding.left || 0;

    styles.container.margin = top + 'px ' + right + 'px ' + bottom + 'px ' + left + 'px';
  }

  return _react2.default.createElement(
    'div',
    { style: styles.container },
    _react2.default.createElement(
      'span',
      { style: styles.title },
      title
    ),
    subtitle ? _react2.default.createElement(
      'span',
      { style: styles.subtitles },
      subtitle
    ) : null,
    subtitle2 ? _react2.default.createElement(
      'span',
      { style: styles.subtitles },
      subtitle2
    ) : null
  );
};

SovosHeroBanner.propTypes = process.env.NODE_ENV !== "production" ? {
  parentPadding: _propTypes2.default.shape({
    top: _propTypes2.default.number,
    right: _propTypes2.default.number,
    bottom: _propTypes2.default.number,
    left: _propTypes2.default.number
  }),
  title: _propTypes2.default.string,
  subtitle: _propTypes2.default.string,
  subtitle2: _propTypes2.default.string,
  containerStyle: _propTypes2.default.object,
  textStyle: _propTypes2.default.object,
  muiTheme: _propTypes2.default.object.isRequired
} : {};

SovosHeroBanner.defaultProps = {
  parentPadding: undefined,
  title: '',
  subtitle: '',
  subtitle2: '',
  containerStyle: {},
  textStyle: {}
};

SovosHeroBanner.displayName = 'HeroBanner';

exports.default = (0, _muiThemeable2.default)()(SovosHeroBanner);