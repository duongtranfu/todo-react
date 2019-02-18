'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _OverlayLayer = require('./components/overlayLayer/OverlayLayer');

var _OverlayLayer2 = _interopRequireDefault(_OverlayLayer);

var _ContainerLayer = require('./components/containerLayer/ContainerLayer');

var _ContainerLayer2 = _interopRequireDefault(_ContainerLayer);

var _CloseDialog = require('./components/closeDialog/CloseDialog');

var _CloseDialog2 = _interopRequireDefault(_CloseDialog);

require('./sovosSlidingPanel.css');

var _SovosSlidingPanelStore = require('./SovosSlidingPanelStore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * *Sliding Panel* component is a container used in UIs the needs implement different detail levels.
 */
var SovosSlidingPanel = function (_Component) {
  _inherits(SovosSlidingPanel, _Component);

  function SovosSlidingPanel(props) {
    _classCallCheck(this, SovosSlidingPanel);

    var _this = _possibleConstructorReturn(this, (SovosSlidingPanel.__proto__ || Object.getPrototypeOf(SovosSlidingPanel)).call(this, props));

    _this.getSlidingPanelPortalRoot = function () {
      return document.getElementById(_this.rootDivName) || _this.createSlidingPanelPortalRoot();
    };

    _this.getZIndex = function () {
      return _this.props.open ? _this.props.baseZIndex + _this.order * 2 : 0;
    };

    _this.createSlidingPanelPortalRoot = function () {
      var slidingPanelPortalRootDiv = document.createElement('div');
      slidingPanelPortalRootDiv.setAttribute('id', _this.rootDivName);
      document.body.appendChild(slidingPanelPortalRootDiv);
      return slidingPanelPortalRootDiv;
    };

    _this.handleCancelDialog = function () {
      (0, _SovosSlidingPanelStore.resetDialogOpen)();
      _this.hideDialog();
    };

    _this.hideDialog = function () {
      return _this.setState({ openDialog: false });
    };

    _this.showDialog = function () {
      return _this.setState({ openDialog: true });
    };

    _this.handleCloseDialog = function () {
      return (0, _SovosSlidingPanelStore.removeSlide)(_this.order, true);
    };

    _this.requestClose = function () {
      return _this.props.onRequestClose(_this.order);
    };

    _this.callCloseReducer = function (fromOverlay) {
      return (0, _SovosSlidingPanelStore.removeSlide)(_this.order, false, fromOverlay);
    };

    _this.callForcedCloseReducer = function () {
      return (0, _SovosSlidingPanelStore.removeSlide)(_this.order, true);
    };

    _this.state = {
      openDialog: false
    };
    _this.order = (0, _SovosSlidingPanelStore.getNumberOfSlides)();
    _this.divContainer = document.createElement('div');
    _this.rootDivName = 'slidingPanel-0';
    return _this;
  }

  _createClass(SovosSlidingPanel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.order = (0, _SovosSlidingPanelStore.getNumberOfSlides)();
      this.SlidingPanelRoot = this.order === 0 ? this.getSlidingPanelPortalRoot() : document.getElementById('slidingPanelPortal-' + this.order);
      this.SlidingPanelRoot.appendChild(this.divContainer);

      if (this.props.open) {
        (0, _SovosSlidingPanelStore.createNewSlide)(Object.assign({}, {
          requestClose: this.requestClose,
          showDialog: this.showDialog,
          hideDialog: this.hideDialog,
          props: _extends({}, this.props)
        }));
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.open !== nextProps.open) {
        if (nextProps.open) {
          (0, _SovosSlidingPanelStore.createNewSlide)(Object.assign({}, {
            requestClose: this.requestClose,
            showDialog: this.showDialog,
            hideDialog: this.hideDialog,
            props: _extends({}, this.props)
          }));
        } else {
          (0, _SovosSlidingPanelStore.removeSlideFromStore)(this.order);
        }
      }
      if (this.props.showDialogOnClose !== nextProps.showDialogOnClose) {
        (0, _SovosSlidingPanelStore.setShowDialogOnClose)(this.order, nextProps.showDialogOnClose);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.SlidingPanelRoot.removeChild(this.divContainer);
      (0, _SovosSlidingPanelStore.removeSlideFromUnMount)(this.order, true);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          dialogTitle = _props.dialogTitle,
          dialogText = _props.dialogText,
          contentBackgroundColor = _props.contentBackgroundColor,
          contentTransition = _props.contentTransition,
          open = _props.open,
          showHeaderBar = _props.showHeaderBar,
          showCloseButton = _props.showCloseButton,
          closeButtonIndex = _props.closeButtonIndex,
          title = _props.title,
          titleStyle = _props.titleStyle,
          overlayTransition = _props.overlayTransition,
          showDialogOnClose = _props.showDialogOnClose,
          stickToLeft = _props.stickToLeft,
          effectTime = _props.effectTime,
          tabs = _props.tabs,
          actionButtons = _props.actionButtons,
          additionalButtons = _props.additionalButtons,
          showHeaderBorderBottom = _props.showHeaderBorderBottom;


      var zIndex = this.getZIndex();
      return _reactDom2.default.createPortal(_react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(_OverlayLayer2.default, {
          overlayTransition: overlayTransition,
          open: open,
          onRequestClose: this.callCloseReducer,
          zIndex: zIndex,
          overlayEffectTime: effectTime
        }),
        _react2.default.createElement(
          _ContainerLayer2.default,
          {
            order: this.order,
            contentBackgroundColor: contentBackgroundColor,
            contentTransition: contentTransition,
            open: open,
            showHeaderBar: showHeaderBar,
            showCloseButton: showCloseButton,
            closeButtonIndex: closeButtonIndex,
            title: title,
            titleStyle: titleStyle,
            zIndex: zIndex,
            onRequestClose: this.callCloseReducer,
            stickToLeft: stickToLeft,
            additionalButtons: additionalButtons,
            actionButtons: actionButtons,
            showHeaderBorderBottom: showHeaderBorderBottom,
            contentEffectTime: effectTime,
            tabs: tabs
          },
          children
        ),
        showDialogOnClose && open && _react2.default.createElement(_CloseDialog2.default, { open: this.state.openDialog, dialogTitle: dialogTitle, onOKClick: this.handleCloseDialog, onCancelClick: this.handleCancelDialog, dialogText: dialogText })
      ), this.divContainer);
    }
  }]);

  return SovosSlidingPanel;
}(_react.Component);

SovosSlidingPanel.defaultProps = {
  onRequestClose: function onRequestClose() {
    return null;
  },
  title: '',
  titleStyle: {},
  baseZIndex: 1310,
  overlayTransition: 'fade',
  contentTransition: 'slide',
  showDialogOnClose: false,
  dialogTitle: 'Information not saved',
  dialogText: 'Are you sure you want to close this slide, without saving the information?.',
  showHeaderBar: true,
  showCloseButton: true,
  closeButtonIndex: undefined,
  contentBackgroundColor: '#fff',
  additionalButtons: [],
  actionButtons: [],
  showHeaderBorderBottom: true,
  stickToLeft: false,
  effectTime: 400,
  tabs: []
};
SovosSlidingPanel.displayName = 'SlidingPanel';
SovosSlidingPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Children react prop is marked as required because this component is a container.
   *
   * @ignore
   */
  children: _propTypes2.default.element.isRequired,
  /** The index of the "Additional Button" that is associated with the close action. */
  closeButtonIndex: _propTypes2.default.number,
  /** If open is true Sliding Panel will be displayed. */
  open: _propTypes2.default.bool.isRequired,
  /** Callback called when this panel is being closed. */
  onRequestClose: _propTypes2.default.func,
  /** Title of the panel. */
  title: _propTypes2.default.string,
  /** Optional title style can be passed and will be applied to the title */
  titleStyle: _propTypes2.default.object,
  /** Used if the your app works with high levels of z-index. */
  baseZIndex: _propTypes2.default.number,
  /** Name of the effect that the overlay layer uses when appear. Two posible values:  slide or fade */
  overlayTransition: _propTypes2.default.string,
  /** Name of the effect that the container uses when appear. Two posible values:  slide or fade */
  contentTransition: _propTypes2.default.string,
  /** Shows a confirmation dialog when sliding panel is closing. */
  showDialogOnClose: _propTypes2.default.bool,
  /** Title for dialog showed if showDialogOnClose is true */
  dialogTitle: _propTypes2.default.string,
  /** Message of dialog showed if showDialogOnClose is true */
  dialogText: _propTypes2.default.string,
  /** Shows a header in the container. */
  showHeaderBar: _propTypes2.default.bool,
  /** Shows or hides close button in the header. */
  showCloseButton: _propTypes2.default.bool,
  /** Background color of the sliding panel. */
  contentBackgroundColor: _propTypes2.default.string,
  /** Array of buttons that will appear in header bar. */
  additionalButtons: _propTypes2.default.array,
  /** Array of Action buttons that will be placed on the header, should pass { label: 'button label, callback: functionCallback, style: overwrite style for the button root element } */
  actionButtons: _propTypes2.default.arrayOf(_propTypes2.default.object),
  /** Controls if it will be draw a border that will separate the Sliding panel header from the content. */
  showHeaderBorderBottom: _propTypes2.default.bool,
  /** Controls the time that the effect will take place */
  effectTime: _propTypes2.default.number,
  /** Controls the drawing way of the sliding panel, if true, it will have a fixed distance of 300px from the left of the browser, if false it will have a fixed width */
  stickToLeft: _propTypes2.default.bool,
  /** An array of tabs to display in the header */
  tabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    onClick: _propTypes2.default.func.isRequired
  }))
} : {};
exports.default = SovosSlidingPanel;