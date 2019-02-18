'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapChildToParentPropsFactory = exports.mergePropsWithStyle = exports.mergeDefaultObjectProps = exports.getChildContents = exports.filterOutChildrenByType = exports.findChildrenByType = exports.findChildByType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Finds the first child in a collection of React children that matches the type
 * @param {React.ReactNode} children
 * @param {string | React.ComponentClass} type
 * @return {React.ReactNode | undefined}
 */
var findChildByType = exports.findChildByType = function findChildByType(children, type) {
  return _react.Children.toArray(children).find(function (child) {
    return child.type === type;
  });
};

var findChildrenByType = exports.findChildrenByType = function findChildrenByType(children, type) {
  return _react.Children.toArray(children).filter(function (child) {
    return child.type === type;
  });
};

/**
 * Modifies a collection of React children by omitting children of specific type(s)
 * @param {React.ReactNode} children
 * @param {...string | ...React.ComponentClass} type
 * @return {[React.ReactNode]}
 */
var filterOutChildrenByType = exports.filterOutChildrenByType = function filterOutChildrenByType(children) {
  for (var _len = arguments.length, types = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    types[_key - 1] = arguments[_key];
  }

  return _react.Children.toArray(children).filter(function (child) {
    return !types.includes(child.type);
  });
};

/**
 * Extracts contents from a child of a specific type from a collection of React children
 * @param {React.ReactNode} children
 * @param {string | React.ComponentClass} type
 * @return {React.ReactNode | undefined}
 */
var getChildContents = exports.getChildContents = function getChildContents(children, type) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

  var child = findChildByType(children, type);
  return child !== undefined ? child.props.children : defaultValue;
};

/**
 * Merges props with default values (plain objects expected)
 * @param {object} props
 * @param {object} defaultProps
 */
var mergeDefaultObjectProps = exports.mergeDefaultObjectProps = function mergeDefaultObjectProps(props, defaultObjectProps) {
  return Object.keys(defaultObjectProps).reduce(function (acc, propName) {
    return _extends({}, acc, _defineProperty({}, propName, _extends({}, defaultObjectProps[propName], props[propName])));
  }, props);
};

/**
 * Merges props.style with default styles (plain objects expected)
 * @param {object} props
 * @param {object} defaultStyle
 */
var mergePropsWithStyle = exports.mergePropsWithStyle = function mergePropsWithStyle(props, defaultObjectStyle) {
  return mergeDefaultObjectProps(props, { style: defaultObjectStyle });
};

var mapChildToParentPropsFactory = exports.mapChildToParentPropsFactory = function mapChildToParentPropsFactory(type, map) {
  return function (children) {
    var child = findChildByType(children, type);
    if (!child) return {};

    var childPropKeys = Object.keys(child.props);

    return Object.keys(map).reduce(function (parentProps, childPropKey) {
      if (childPropKeys.includes(childPropKey)) {
        parentProps[map[childPropKey]] = child.props[childPropKey];
      }
      return parentProps;
    }, {});
  };
};