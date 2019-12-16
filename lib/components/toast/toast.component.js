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

var _classnames = _interopRequireDefault(require("classnames"));

var _reactTransitionGroup = require("react-transition-group");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icon = _interopRequireDefault(require("../icon"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags/tags"));

var _portal = _interopRequireDefault(require("../portal/portal"));

var _toast = require("./toast.style");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _dismissButton = _interopRequireDefault(require("../dismiss-button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Toast =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Toast, _React$Component);

  function Toast() {
    _classCallCheck(this, Toast);

    return _possibleConstructorReturn(this, _getPrototypeOf(Toast).apply(this, arguments));
  }

  _createClass(Toast, [{
    key: "toastContent",

    /** Content rendered for the toast. */
    value: function toastContent() {
      if (this.props.open) {
        return _react.default.createElement(_reactTransitionGroup.CSSTransition, {
          enter: true,
          classNames: "toast",
          timeout: {
            appear: 1600,
            enter: 1500,
            exit: 500
          }
        }, _react.default.createElement(_toast.ToastStyle, _extends({
          isCenter: this.props.isCenter,
          variant: this.props.variant || this.props.as,
          className: this.componentClasses
        }, (0, _tags.default)(this.props['data-component'] || 'toast', this.props)), _react.default.createElement(_toast.ToastTypeStyle, {
          variant: this.props.variant || this.props.as
        }, _react.default.createElement(_icon.default, {
          type: this.props.variant || this.props.as
        })), _react.default.createElement(_toast.ToastContentStyle, {
          variant: this.props.variant || this.props.as,
          isDismiss: this.props.onDismiss
        }, this.props.children), this.dismissIcon));
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_portal.default, null, _react.default.createElement(_toast.ToastWrapper, {
        isCenter: this.props.isCenter
      }, _react.default.createElement(_reactTransitionGroup.TransitionGroup, null, this.toastContent())));
    }
  }, {
    key: "componentClasses",

    /** Classes to be applied to the component. */
    get: function get() {
      return (0, _classnames.default)(this.props.className);
    }
    /** Content rendered for dismiss X */

  }, {
    key: "dismissIcon",
    get: function get() {
      if (this.props.onDismiss) {
        return _react.default.createElement(_dismissButton.default, {
          "data-element": "close",
          onDismiss: this.props.onDismiss,
          type: "close",
          variant: this.props.variant || this.props.as
        });
      }

      return null;
    }
  }]);

  return Toast;
}(_react.default.Component);

Toast.propTypes = {
  /** Customizes the appearance in the DLS theme */
  variant: _propTypes.default.oneOf(_optionsHelper.default.colors),

  /** Customizes the appearance in a legacy theme through colour see the 'iconColorSets' for possible values) */
  as: _propTypes.default.oneOf(_optionsHelper.default.colors),

  /** Custom className */
  className: _propTypes.default.string,

  /** Custom id  */
  id: _propTypes.default.string,

  /** Component name */
  'data-component': _propTypes.default.string,

  /** The rendered children of the component. */
  children: _propTypes.default.node,

  /** Determines if the toast is open. */
  open: _propTypes.default.bool,

  /** Callback for when dismissed. */
  onDismiss: _propTypes.default.func,

  /** props used with flash component. Allow to center a component */
  isCenter: _propTypes.default.bool
};
Toast.defaultProps = {
  as: 'warning',
  onDismiss: null,
  open: true,
  isCenter: false
};
var _default = Toast;
exports.default = _default;