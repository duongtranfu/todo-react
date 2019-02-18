'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = require('react-transition-group/TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransition = require('react-transition-group/CSSTransition');

var _CSSTransition2 = _interopRequireDefault(_CSSTransition);

var _SlidingPanelHeader = require('../slidingPanelHeader/SlidingPanelHeader');

var _SlidingPanelHeader2 = _interopRequireDefault(_SlidingPanelHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContainerLayer = function ContainerLayer(_ref) {
  var order = _ref.order,
      contentBackgroundColor = _ref.contentBackgroundColor,
      zIndex = _ref.zIndex,
      contentTransition = _ref.contentTransition,
      contentEffectTime = _ref.contentEffectTime,
      children = _ref.children,
      open = _ref.open,
      showHeaderBar = _ref.showHeaderBar,
      title = _ref.title,
      titleStyle = _ref.titleStyle,
      onRequestClose = _ref.onRequestClose,
      stickToLeft = _ref.stickToLeft,
      additionalButtons = _ref.additionalButtons,
      actionButtons = _ref.actionButtons,
      showHeaderBorderBottom = _ref.showHeaderBorderBottom,
      showCloseButton = _ref.showCloseButton,
      closeButtonIndex = _ref.closeButtonIndex,
      tabs = _ref.tabs;

  var handleContainerClick = function handleContainerClick(event) {
    event.stopPropagation();
  };

  var getChildContainerStyle = function getChildContainerStyle() {
    return {
      zIndex: zIndex,
      backgroundColor: contentBackgroundColor
    };
  };

  var scrollingLayerStyle = {
    top: actionButtons.length > 0 || tabs.length > 0 ? 100 : 50
  };

  var getContainerClassNames = function getContainerClassNames() {
    return 'sliding-panel__child-container\n     sliding-panel__child-container_' + (stickToLeft ? 'stick' : 'fixed-width') + '\n    ' + (order === 0 ? ' sliding-panel___first-container' : '');
  };

  return _react2.default.createElement(
    _TransitionGroup2.default,
    null,
    open && _react2.default.createElement(
      _CSSTransition2.default,
      {
        classNames: contentTransition,
        timeout: contentEffectTime
      },
      _react2.default.createElement(
        'div',
        { className: getContainerClassNames(), style: getChildContainerStyle(), onClick: handleContainerClick },
        _react2.default.createElement('div', { id: 'slidingPanelPortal-' + (order + 1) }),
        showHeaderBar && _react2.default.createElement(_SlidingPanelHeader2.default, {
          title: title,
          titleStyle: titleStyle,
          onCloseClick: function onCloseClick() {
            return onRequestClose(false);
          },
          additionalButtons: additionalButtons,
          actionButtons: actionButtons,
          showHeaderBorderBottom: showHeaderBorderBottom,
          showCloseButton: showCloseButton,
          closeButtonIndex: closeButtonIndex,
          tabs: tabs
        }),
        _react2.default.createElement(
          'div',
          { className: 'sliding-panel__scrolling-layer', style: scrollingLayerStyle },
          children
        )
      )
    )
  );
};

ContainerLayer.propTypes = process.env.NODE_ENV !== "production" ? {
  zIndex: _propTypes2.default.number.isRequired,
  children: _propTypes2.default.element.isRequired,
  contentTransition: _propTypes2.default.string.isRequired,
  contentEffectTime: _propTypes2.default.number.isRequired,
  onRequestClose: _propTypes2.default.func.isRequired,
  open: _propTypes2.default.bool.isRequired,
  order: _propTypes2.default.number.isRequired,
  showHeaderBar: _propTypes2.default.bool.isRequired,
  title: _propTypes2.default.string.isRequired,
  titleStyle: _propTypes2.default.object.isRequired,
  contentBackgroundColor: _propTypes2.default.string.isRequired,
  stickToLeft: _propTypes2.default.bool.isRequired,
  additionalButtons: _propTypes2.default.array,
  actionButtons: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    callback: _propTypes2.default.func,
    style: _propTypes2.default.object
  })).isRequired,
  showHeaderBorderBottom: _propTypes2.default.bool.isRequired,
  showCloseButton: _propTypes2.default.bool,
  closeButtonIndex: _propTypes2.default.number,
  tabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    onClick: _propTypes2.default.func.isRequired
  }))
} : {};

ContainerLayer.defaultProps = {
  additionalButtons: [],
  showCloseButton: true,
  closeButtonIndex: undefined,
  tabs: []
};

exports.default = ContainerLayer;