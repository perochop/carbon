"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _events = _interopRequireDefault(require("../../utils/helpers/events"));

var _browser = _interopRequireDefault(require("../../utils/helpers/browser"));

var _portal = _interopRequireDefault(require("../portal"));

var _modal = require("./modal.style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A Modal Component
 *
 * Abstract base class for all modals
 */
var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "updateDataState", function () {
      clearTimeout(_this.openTimeout);
      _this.openTimeout = setTimeout(function () {
        _this.setState({
          state: _this.props.open ? 'open' : 'closed'
        });
      }, _this.timeout);
    });

    _defineProperty(_assertThisInitialized(_this), "closeModal", function (ev) {
      if (_this.props.open && _this.props.onCancel && !_this.props.disableEscKey && _events.default.isEscKey(ev)) {
        _this.props.onCancel();
      }
    });

    _this.listening = false;
    _this.timeout = 500;
    _this.state = {
      state: _this.props.open ? 'open' : 'closed'
    };
    return _this;
  }

  _createClass(Modal, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        modal: {
          onCancel: this.props.onCancel
        }
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.open) this.handleOpen();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.listening) this.handleClose();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.open && !this.listening) {
        this.handleOpen();
      } else if (!this.props.open && this.listening) {
        this.handleClose();
      }
    }
  }, {
    key: "handleOpen",
    value: function handleOpen() {
      this.listening = true;
      this.updateDataState();
      this.onOpening; // eslint-disable-line no-unused-expressions

      _browser.default.getWindow().addEventListener('keyup', this.closeModal);
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.listening = false;
      this.updateDataState();
      this.onClosing; // eslint-disable-line no-unused-expressions

      _browser.default.getWindow().removeEventListener('keyup', this.closeModal);
    }
  }, {
    key: "componentTags",
    value: function componentTags() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var backgroundHTML, modalHTML;

      if (this.props.open) {
        backgroundHTML = this.backgroundHTML;
        modalHTML = this.modalHTML;
      }

      return _react.default.createElement(_portal.default, {
        key: "1"
      }, _react.default.createElement(_modal.StyledModal, _extends({
        className: this.mainClasses
      }, this.componentTags(this.props), {
        "data-state": this.state.state,
        transitionName: this.transitionName
      }), _react.default.createElement(_reactTransitionGroup.TransitionGroup, null, backgroundHTML && _react.default.createElement(_reactTransitionGroup.CSSTransition, {
        key: "modal",
        appear: true,
        classNames: this.backgroundTransitionName,
        timeout: this.timeout
      }, backgroundHTML)), _react.default.createElement(_reactTransitionGroup.TransitionGroup, null, modalHTML && _react.default.createElement(_reactTransitionGroup.CSSTransition, {
        appear: true,
        classNames: this.transitionName,
        timeout: this.timeout
      }, modalHTML))));
    }
  }, {
    key: "backgroundHTML",
    get: function get() {
      if (!this.props.enableBackgroundUI) {
        return _react.default.createElement(_modal.StyledModalBackground, {
          "data-element": "modal-background",
          transitionName: this.backgroundTransitionName
        });
      }

      return null;
    }
  }, {
    key: "onOpening",
    get: function get() {
      return null;
    }
  }, {
    key: "onClosing",
    get: function get() {
      return null;
    }
  }, {
    key: "mainClasses",
    get: function get() {
      return null;
    }
  }, {
    key: "modalHTML",
    get: function get() {
      return null;
    }
  }, {
    key: "transitionName",
    get: function get() {
      return 'modal';
    }
  }, {
    key: "backgroundTransitionName",
    get: function get() {
      return 'modal-background';
    }
  }]);

  return Modal;
}(_react.default.Component);

_defineProperty(Modal, "childContextTypes", {
  modal: _propTypes.default.object
});

Modal.propTypes = {
  /** A custom close event handler */
  onCancel: _propTypes.default.func,

  /** Sets the open state of the modal */
  open: _propTypes.default.bool.isRequired,

  /** Determines if the background is disabled when the modal is open */
  enableBackgroundUI: _propTypes.default.bool,

  /** Determines if the Esc Key closes the modal */
  disableEscKey: _propTypes.default.bool,

  /** The ARIA role to be applied to the modal */
  ariaRole: _propTypes.default.string // eslint-disable-line react/no-unused-prop-types

};
Modal.defaultProps = {
  onCancel: null,
  enableBackgroundUI: false,
  disableEscKey: false
};
var _default = Modal;
exports.default = _default;