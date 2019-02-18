'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require('material-ui/Card');

var _reactHelpers = require('../utils/reactHelpers');

var _sovosToolbar = require('../sovos-toolbar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getStyles = function getStyles() {
  return {
    card: {
      paddingBottom: 15
    },
    container: {
      margin: '10px 5px 0px'
    }
  };
};

/**
 * *TableCard* is the component that we will always use for tables.
 *
 * Props from Material-UI Card
 */

var _ref2 = _react2.default.createElement(_sovosToolbar.SovosToolbar, null);

var SovosTableCard = function SovosTableCard(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  var styles = getStyles();
  var toolbar = (0, _reactHelpers.findChildByType)(children, _sovosToolbar.SovosToolbar) || _ref2;
  var childrenToKeep = (0, _reactHelpers.filterOutChildrenByType)(children, _sovosToolbar.SovosToolbar);
  var styledProps = (0, _reactHelpers.mergePropsWithStyle)(props, styles.card);
  return _react2.default.createElement(
    _Card.Card,
    styledProps,
    toolbar,
    _react2.default.createElement(
      'div',
      { style: styles.container },
      childrenToKeep
    )
  );
};

SovosTableCard.propTypes = process.env.NODE_ENV !== "production" ? _extends({
  /** SovosToolbar and mui Table. */
  children: _propTypes2.default.node.isRequired
}, _Card.Card.propTypes) : {};

SovosTableCard.displayName = 'TableCard';

exports.default = SovosTableCard;