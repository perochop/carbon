"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.fill");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _pill = _interopRequireDefault(require("./pill.style"));

var _icon = _interopRequireDefault(require("../icon"));

var _ether = require("../../utils/ether/ether");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags/tags"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Pill =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Pill, _React$Component);

  function Pill() {
    _classCallCheck(this, Pill);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pill).apply(this, arguments));
  }

  _createClass(Pill, [{
    key: "renderCloseIcon",
    value: function renderCloseIcon() {
      var onDelete = this.props.onDelete;
      return _react.default.createElement("button", {
        type: "button",
        onClick: onDelete,
        "data-element": "close",
        "aria-label": "close"
      }, _react.default.createElement(_icon.default, {
        type: "cross",
        bgSize: "small",
        bgTheme: "none"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fill = _this$props.fill,
          as = _this$props.as,
          onDelete = _this$props.onDelete,
          colorVariant = _this$props.colorVariant,
          pillRole = _this$props.pillRole,
          children = _this$props.children,
          size = _this$props.size;
      return _react.default.createElement(_pill.default, _extends({}, (0, _ether.validProps)(this), {
        inFill: fill,
        colorVariant: colorVariant || as,
        isDeletable: onDelete,
        pillRole: pillRole,
        size: size
      }, (0, _tags.default)('pill', this.props)), children, onDelete && this.renderCloseIcon());
    }
  }]);

  return Pill;
}(_react.default.Component);

_defineProperty(Pill, "safeProps", ['onClick']);

Pill.propTypes = {
  /** Sets the theme of the notification [legacy]. */
  as: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.colors), ['disabled'])),

  /** Sets the theme of the notification. */
  colorVariant: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.pillColors), ['warning'])),

  /** This component supports children.  */
  children: _propTypes.default.string.isRequired,

  /** Fills the pill background with colour. When fill is false only the border is coloured. */
  fill: _propTypes.default.bool,

  /** Sets the type of pill in use. */
  pillRole: _propTypes.default.oneOf(_toConsumableArray(_optionsHelper.default.pillRoles)),

  /** Callback function for when the pill is clicked. */
  onClick: _propTypes.default.func,

  /** Callback function to delete the component, when the added Icon is clicked. */
  onDelete: _propTypes.default.func,

  /** Assigns a size to the button: "S" | "M" | "L" | "XL" */
  size: _propTypes.default.oneOf(_optionsHelper.default.pillSizesRestricted)
};
Pill.defaultProps = {
  as: 'default',
  fill: false,
  onClick: null,
  onDelete: null,
  pillRole: 'tag',
  size: 'M'
};
var _default = Pill;
exports.default = _default;