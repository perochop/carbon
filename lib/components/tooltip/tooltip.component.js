"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tooltip = require("./tooltip.style");

var _tooltipPointer = _interopRequireDefault(require("./tooltip-pointer.style"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper/options-helper"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags/tags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).apply(this, arguments));
  }

  _createClass(Tooltip, [{
    key: "render",
    value: function render() {
      return this.props.isVisible && this.props.children ? this.tooltipHTML : null;
    }
  }, {
    key: "tooltipHTML",
    get: function get() {
      var _this$props = this.props,
          children = _this$props.children,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseLeave = _this$props.onMouseLeave,
          commonProps = _objectWithoutProperties(_this$props, ["children", "onMouseEnter", "onMouseLeave"]);

      return _react.default.createElement(_tooltip.StyledTooltipWrapper, _extends({
        role: "tooltip",
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave
      }, commonProps, (0, _tags.default)('tooltip', this.props)), _react.default.createElement(_tooltip.StyledTooltipInner, commonProps, _react.default.createElement(_react.default.Fragment, null, children, _react.default.createElement(_tooltipPointer.default, _extends({
        key: "pointer"
      }, commonProps, {
        "data-element": "tooltip-pointer"
      })))));
    }
  }]);

  return Tooltip;
}(_react.default.Component);

_defineProperty(Tooltip, "propTypes", {
  /**
   * Sets alignment of pointer on tooltip
   */
  align: _propTypes.default.oneOf(_optionsHelper.default.alignAroundEdges),

  /** Children elements */
  children: _propTypes.default.node,

  /** The id attribute to use for the tooltip */
  id: _propTypes.default.string,

  /** Whether to to show the Tooltip */
  isVisible: _propTypes.default.bool,

  /**
   * Sets position of the tooltip
   */
  position: _propTypes.default.oneOf(_optionsHelper.default.positions),

  /** Sets a onMouseEnter function */
  onMouseEnter: _propTypes.default.func,

  /** Sets a onMouseLeave function */
  onMouseLeave: _propTypes.default.func,

  /** Defines the message type */
  type: _propTypes.default.string
});

_defineProperty(Tooltip, "defaultProps", {
  align: 'center',
  position: 'top',
  isVisible: false
});

var _default = Tooltip;
exports.default = _default;