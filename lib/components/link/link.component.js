"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouter = require("react-router");

var _icon = _interopRequireDefault(require("../icon"));

var _events = _interopRequireDefault(require("../../utils/helpers/events"));

var _link = _interopRequireDefault(require("./link.style"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Link =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Link)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (ev) {
      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(ev);
      } // return early if there is no onClick or there is a href prop
      // or the event is not an enter key


      if (_this.props.href || !_events.default.isEnterKey(ev) && !_events.default.isSpaceKey(ev)) {
        return;
      }

      if (_this.props.onClick) {
        _this.props.onClick(ev);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderLinkIcon", function () {
      var currentAlignment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'left';
      var hasProperAlignment = _this.props.icon && _this.props.iconAlign === currentAlignment;
      return hasProperAlignment ? _this.icon : null;
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (ev) {
      if (_this.props.disabled) {
        ev.preventDefault();
      } else if (_this.props.onClick) {
        _this.props.onClick(ev);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "linkContent", function () {
      return _react.default.createElement(_react.default.Fragment, null, _this.renderLinkIcon(), _react.default.createElement("span", {
        className: "carbon-link__content"
      }, _this.props.children), _this.renderLinkIcon('right'));
    });

    _defineProperty(_assertThisInitialized(_this), "createLinkBasedOnType", function () {
      var type = 'a';

      if (_this.props.to) {
        type = _reactRouter.Link;
      } else if (_this.props.onClick) {
        type = 'button';
      }

      return _react.default.createElement(type, _objectSpread({}, _this.componentProps), _this.linkContent());
    });

    return _this;
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          className = _this$props.className,
          iconAlign = _this$props.iconAlign;
      return _react.default.createElement(_link.default, _extends({
        disabled: disabled,
        className: className,
        iconAlign: iconAlign
      }, (0, _tags.default)('link', this.props)), this.createLinkBasedOnType());
    }
  }, {
    key: "icon",
    get: function get() {
      return _react.default.createElement(_icon.default, {
        type: this.props.icon,
        tooltipMessage: this.props.tooltipMessage,
        tooltipAlign: this.props.tooltipAlign,
        tooltipPosition: this.props.tooltipPosition,
        bgTheme: "none",
        iconColor: "business-color",
        disabled: this.props.disabled
      });
    }
  }, {
    key: "tabIndex",
    get: function get() {
      return this.props.tabbable && !this.props.disabled ? '0' : '-1';
    }
  }, {
    key: "componentProps",
    get: function get() {
      var props = {
        onKeyDown: this.onKeyDown,
        onMouseDown: this.props.onMouseDown,
        disabled: this.props.disabled,
        onClick: this.handleClick,
        tabIndex: this.tabIndex
      };

      if (this.props.to) {
        props.to = this.props.to;
      } else {
        props.href = this.props.href;
      }

      return props;
    }
  }]);

  return Link;
}(_react.default.Component);

_defineProperty(Link, "safeProps", ['onClick']);

Link.propTypes = {
  /** Child content to render in the link. */
  children: _propTypes.default.node,

  /** Classes to apply to the component. */
  className: _propTypes.default.string,

  /** The disabled state of the link. */
  disabled: _propTypes.default.bool,

  /** An href for an anchor tag. */
  href: _propTypes.default.string,

  /** An icon to display next to the link. */
  icon: _propTypes.default.string,

  /** Which side of the link to the render the link. */
  iconAlign: _propTypes.default.string,

  /** Function called when the mouse is clicked. */
  onClick: _propTypes.default.func,

  /** Function called when a key is pressed. */
  onKeyDown: _propTypes.default.func,

  /** Function called when a mouse down event triggers. */
  onMouseDown: _propTypes.default.func,

  /** Whether to include the link in the tab order of the page */
  tabbable: _propTypes.default.bool,

  /** Using `to` instead of `href` will create a React Router link rather than a web href. */
  to: _propTypes.default.string,

  /** A message to display as a tooltip to the link. */
  tooltipMessage: _propTypes.default.string,

  /** Positions the tooltip with the link. */
  tooltipPosition: _propTypes.default.oneOf(_optionsHelper.default.positions),

  /** Aligns the tooltip. */
  tooltipAlign: _propTypes.default.oneOf(_optionsHelper.default.alignAroundEdges)
};
Link.defaultProps = {
  iconAlign: 'left',
  tabbable: true
};
var _default = Link;
exports.default = _default;