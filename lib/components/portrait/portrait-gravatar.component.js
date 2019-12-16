"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

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

var _md = _interopRequireDefault(require("crypto-js/md5"));

var _styledComponents = require("styled-components");

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _portrait = require("./portrait.style");

var _portraitSize = _interopRequireDefault(require("./portrait-size.config"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var PortraitGravatar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PortraitGravatar, _React$Component);

  function PortraitGravatar() {
    _classCallCheck(this, PortraitGravatar);

    return _possibleConstructorReturn(this, _getPrototypeOf(PortraitGravatar).apply(this, arguments));
  }

  _createClass(PortraitGravatar, [{
    key: "gravatarSrc",

    /** Generates the Gravatar URL for the specified email address and dimensions. */
    value: function gravatarSrc() {
      var _this$props = this.props,
          theme = _this$props.theme,
          gravatarEmail = _this$props.gravatarEmail,
          size = _this$props.size;

      var _getSizeParams = (0, _portraitSize.default)(theme, size),
          dimensions = _getSizeParams.dimensions;

      var base = 'https://www.gravatar.com/avatar/';
      var hash = (0, _md.default)(gravatarEmail.toLowerCase());
      var fallbackOption = '404'; // "Return an HTTP 404 File Not Found response"

      /** @see https://en.gravatar.com/site/implement/images/#default-image */

      return "".concat(base).concat(hash, "?s=").concat(dimensions, "&d=").concat(fallbackOption);
    }
    /** Renders the component. */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          alt = _this$props2.alt,
          size = _this$props2.size,
          shape = _this$props2.shape,
          errorCallback = _this$props2.errorCallback,
          otherProps = _objectWithoutProperties(_this$props2, ["alt", "size", "shape", "errorCallback"]);

      return _react.default.createElement(_portrait.StyledPortraitGravatar, _extends({
        src: this.gravatarSrc(),
        alt: alt,
        size: size,
        shape: shape,
        onError: errorCallback,
        "data-element": "user-image"
      }, otherProps));
    }
  }]);

  return PortraitGravatar;
}(_react.default.Component);

PortraitGravatar.propTypes = {
  /** The theme to use. */
  theme: _propTypes.default.object,

  /** The user's email address for the Gravatar. */
  gravatarEmail: _propTypes.default.string.isRequired,

  /** The size of the Gravatar. */
  size: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.sizesFull), _toConsumableArray(_optionsHelper.default.sizesPortrait))).isRequired,

  /** The shape of the Gravatar. */
  shape: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.shapesVaried), _toConsumableArray(_optionsHelper.default.shapesPortrait))),

  /** The `alt` HTML string. */
  alt: _propTypes.default.string,

  /** A callback to execute if the Gravatar image fails to load. */
  errorCallback: _propTypes.default.func
};
PortraitGravatar.defaultProps = {
  shape: 'square',
  theme: _base.default
};

var _default = (0, _styledComponents.withTheme)(PortraitGravatar);

exports.default = _default;