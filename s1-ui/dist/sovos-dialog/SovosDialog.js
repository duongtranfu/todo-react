'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _withTheme = require('../utils/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _SovosDialogTitle = require('./components/SovosDialogTitle');

var _SovosDialogTitle2 = _interopRequireDefault(_SovosDialogTitle);

var _SovosDialogContent = require('./components/SovosDialogContent');

var _SovosDialogContent2 = _interopRequireDefault(_SovosDialogContent);

var _SovosDialogActions = require('./components/SovosDialogActions');

var _SovosDialogActions2 = _interopRequireDefault(_SovosDialogActions);

var _reactHelpers = require('../utils/reactHelpers');

var _objectHelpers = require('../utils/objectHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SMALL = 'small';
var MEDIUM = 'medium';
var LARGE = 'large';

/**
 * Returns body of the dialog = all the children except SovosDialogTitle and SovosDialogActions
 * @param {React.ReactNode} children
 */
var getBody = function getBody(children) {
  return (0, _reactHelpers.filterOutChildrenByType)(children, _SovosDialogTitle2.default, _SovosDialogActions2.default);
};

var getWidthStyle = function getWidthStyle(width) {
  switch (width) {
    case SMALL:
      return {
        maxWidth: '400px'
      };
    case MEDIUM:
      return {
        minWidth: '600px',
        maxWidth: '700px'
      };
    case LARGE:
      return {
        minWidth: '600px',
        maxWidth: '80%'
      };
    default:
      return {
        width: width
      };
  }
};

var getStyles = function getStyles(theme, width) {
  return {
    contentStyle: _extends({}, getWidthStyle(width), {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }),
    titleStyle: (0, _SovosDialogTitle.getStyle)(theme),
    bodyStyle: (0, _SovosDialogContent.getStyle)(theme),
    actionsContainerStyle: (0, _SovosDialogActions.getStyle)(theme),
    paperProps: {
      style: {
        maxHeight: '90%',
        padding: '20px'
      }
    }
  };
};

// Material ui Api 1.0 compatibility
var getTitleProps = (0, _reactHelpers.mapChildToParentPropsFactory)(_SovosDialogTitle2.default, {
  className: 'titleClassName',
  style: 'titleStyle',
  children: 'title'
});

var getBodyProps = (0, _reactHelpers.mapChildToParentPropsFactory)(_SovosDialogContent2.default, {
  className: 'bodyClassName',
  style: 'bodyStyle',
  children: 'children'
});

var getActionsProps = (0, _reactHelpers.mapChildToParentPropsFactory)(_SovosDialogActions2.default, {
  className: 'actionsContainerClassName',
  style: 'actionsContainerStyle',
  children: 'actions'
});

/**
 * Overlaid modal with a backdrop based on [Material UI Dialog](https://material-ui-next.com/api/dialog/).
 */
var SovosDialog = function SovosDialog(_ref) {
  var children = _ref.children,
      width = _ref.width,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ['children', 'width', 'theme']);

  var actionsProps = getActionsProps(children);
  var actions = (0, _SovosDialogActions.getStyledActions)(actionsProps.actions);
  actionsProps = _extends({}, actionsProps, {
    actions: actions
  });

  var compositeProps = _extends({}, props, getTitleProps(children), getBodyProps(children), actionsProps);

  var styles = getStyles(theme, width);
  var propsWithStyle = (0, _reactHelpers.mergeDefaultObjectProps)(compositeProps, styles);
  return _react2.default.createElement(
    _Dialog2.default,
    propsWithStyle,
    getBody(children)
  );
};

// Some props are removed from the interface and moved to subcomponents
var dialogPropTypesToKeep = (0, _objectHelpers.withoutKeys)(['title', 'titleClassName', 'titleStyle', 'actions', 'actionsContainerClassName', 'actionsContainerStyle'], _Dialog2.default.propTypes);

SovosDialog.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, dialogPropTypesToKeep, {
  /**
   * Width, can be 'small', 'medium', 'large' or an arbitrary number.
   */
  width: _propTypes2.default.oneOfType([_propTypes2.default.oneOf([SMALL, MEDIUM, LARGE]), _propTypes2.default.number]),
  /**
   * @ignore
   */
  autoScrollBodyContent: _propTypes2.default.bool,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
}) : {};

SovosDialog.defaultProps = {
  width: MEDIUM,
  open: false, // eslint-disable-line react/default-props-match-prop-types
  autoScrollBodyContent: true
};

SovosDialog.displayName = 'Dialog';

exports.default = (0, _withTheme2.default)()(SovosDialog);