'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _sovosEnterprise = require('../themes/sovos-enterprise');

var _sovosEnterprise2 = _interopRequireDefault(_sovosEnterprise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_THEME = void 0;
var getDefaultTheme = function getDefaultTheme() {
  if (!DEFAULT_THEME) {
    DEFAULT_THEME = (0, _getMuiTheme.getMuiTheme)(_sovosEnterprise2.default);
  }
  return DEFAULT_THEME;
};

/**
 * Material UI v1 withTheme mockup for easier transition to the newer version.
 * (e.g. using 'theme' as a prop instead of 'muiTheme')
 */

exports.default = function () {
  return function (Component) {
    var MuiComponent = function MuiComponent(props, context) {
      var _context$muiTheme = context.muiTheme,
          muiTheme = _context$muiTheme === undefined ? getDefaultTheme() : _context$muiTheme;


      return _react2.default.createElement(Component, _extends({ theme: muiTheme }, props));
    };

    MuiComponent.contextTypes = {
      muiTheme: _propTypes2.default.object.isRequired
    };

    return MuiComponent;
  };
};