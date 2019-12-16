"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

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

var _styledComponents = require("styled-components");

var _portraitSize = _interopRequireDefault(require("./portrait-size.config"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _browser = _interopRequireDefault(require("../../utils/helpers/browser"));

var _styleHelper = require("../../utils/helpers/style-helper");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _portrait = require("./portrait.style");

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PortraitInitials =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PortraitInitials, _React$Component);

  function PortraitInitials() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PortraitInitials);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PortraitInitials)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "cachedImageDataUrl", null);

    return _this;
  }

  _createClass(PortraitInitials, [{
    key: "UNSAFE_componentWillReceiveProps",

    /** Invoked before a mounted component receives new props. */
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var shouldClearCache = this.props.theme !== nextProps.theme || this.props.initials !== nextProps.initials || this.props.size !== nextProps.size || this.props.darkBackground !== nextProps.darkBackground;

      if (shouldClearCache) {
        this.cachedImageDataUrl = null;
      }
    }
    /** Generates a graphic with initials. */

  }, {
    key: "generateDataUrl",
    value: function generateDataUrl() {
      if (this.cachedImageDataUrl) {
        return this.cachedImageDataUrl;
      }

      var _this$props = this.props,
          theme = _this$props.theme,
          size = _this$props.size,
          darkBackground = _this$props.darkBackground;

      var _getColorsForInitials = (0, _portrait.getColorsForInitials)(theme, darkBackground),
          textColor = _getColorsForInitials.textColor,
          bgColor = _getColorsForInitials.bgColor;

      var canvas = _browser.default.getDocument().createElement('canvas');

      var context = canvas.getContext('2d');

      var _getSizeParams = (0, _portraitSize.default)(theme, size),
          dimensions = _getSizeParams.dimensions;

      if (!(0, _styleHelper.isClassic)(theme)) {
        // For non-Classic themes, reduce the size by 2 pixels to
        // allow for the CSS border around the canvas <img> element.
        dimensions -= 2;
      } // Set canvas with & height


      canvas.width = dimensions;
      canvas.height = dimensions; // Select a font family to support different language characters
      // like Arial

      context.font = "".concat(Math.round(canvas.width / 2.4), "px Lato, Arial");
      context.textAlign = 'center'; // Setup background and front color

      context = this.applyBackground(context, dimensions, bgColor);
      context = this.applyText(context, dimensions, textColor); // Set image representation in default format (png)

      var dataURI = canvas.toDataURL(); // Dispose canvas element

      canvas = null;
      this.cachedImageDataUrl = dataURI;
      return this.cachedImageDataUrl;
    }
    /** Applies the background colour to the canvas. */

  }, {
    key: "applyBackground",
    value: function applyBackground(canvasContext, dimensions, bgColor) {
      canvasContext.fillStyle = bgColor;
      canvasContext.fillRect(0, 0, dimensions, dimensions);
      return canvasContext;
    }
    /** Applies the initials text to the canvas. */

  }, {
    key: "applyText",
    value: function applyText(canvasContext, dimensions, textColor) {
      var letters = this.props.initials.slice(0, 3);
      canvasContext.fillStyle = textColor;
      canvasContext.fillText(letters.toUpperCase(), dimensions / 2, dimensions / 1.5);
      return canvasContext;
    }
    /** Renders the component. */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          size = _this$props2.size,
          shape = _this$props2.shape,
          theme = _this$props2.theme,
          otherProps = _objectWithoutProperties(_this$props2, ["size", "shape", "theme"]);

      return _react.default.createElement(_portrait.StyledPortraitInitials, _extends({
        "data-element": "initials",
        size: size,
        shape: shape,
        theme: theme
      }, otherProps), _react.default.createElement(_portrait.StyledPortraitInitialsImg, {
        src: this.generateDataUrl(),
        alt: this.props.alt
      }));
    }
  }]);

  return PortraitInitials;
}(_react.default.Component);

PortraitInitials.propTypes = {
  /** The theme to use. */
  theme: _propTypes.default.object,

  /** The user's initials to render. */
  initials: _propTypes.default.string.isRequired,

  /** The size of the initials image. */
  size: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.sizesFull), _toConsumableArray(_optionsHelper.default.sizesPortrait))).isRequired,

  /** Use a dark background. */
  darkBackground: _propTypes.default.bool,

  /** The shape of the Portrait. */
  shape: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.shapesVaried), _toConsumableArray(_optionsHelper.default.shapesPortrait))),

  /** The `alt` HTML string. */
  alt: _propTypes.default.string
};
PortraitInitials.defaultProps = {
  shape: 'square',
  theme: _base.default
};

var _default = (0, _styledComponents.withTheme)(PortraitInitials);

exports.default = _default;