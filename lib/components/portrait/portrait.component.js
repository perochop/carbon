"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

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

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _portraitGravatar = _interopRequireDefault(require("./portrait-gravatar.component"));

var _portraitInitials = _interopRequireDefault(require("./portrait-initials.component"));

var _portrait = require("./portrait.style");

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Portrait =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Portrait, _React$Component);

  function Portrait() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Portrait);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Portrait)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      externalError: false
    });

    return _this;
  }

  _createClass(Portrait, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var relevantPropsChanged = this.props.gravatar !== prevProps.gravatar || this.props.src !== prevProps.src;

      if (relevantPropsChanged) {
        this.setState({
          externalError: false
        }); // eslint-disable-line react/no-did-update-set-state
      }
    }
  }, {
    key: "externalImageLoadFailed",
    value: function externalImageLoadFailed() {
      this.setState({
        externalError: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          alt = _this$props.alt,
          darkBackground = _this$props.darkBackground,
          gravatar = _this$props.gravatar,
          initials = _this$props.initials,
          shape = _this$props.shape,
          size = _this$props.size,
          src = _this$props.src;
      var tagProps = (0, _tags.default)('portrait', this.props);

      if (gravatar && !this.state.externalError) {
        return _react.default.createElement(_portraitGravatar.default, _extends({
          gravatarEmail: gravatar,
          shape: shape,
          size: size,
          alt: alt,
          errorCallback: function errorCallback() {
            return _this2.externalImageLoadFailed();
          }
        }, tagProps));
      }

      if (src && !this.state.externalError) {
        return _react.default.createElement(_portrait.StyledCustomImg, _extends({
          src: src,
          alt: alt,
          size: size,
          shape: shape,
          "data-element": "user-image",
          onError: function onError() {
            return _this2.externalImageLoadFailed();
          }
        }, tagProps));
      }

      if (initials) {
        return _react.default.createElement(_portraitInitials.default, _extends({
          size: size,
          shape: shape,
          initials: initials,
          darkBackground: darkBackground,
          alt: alt
        }, tagProps));
      }

      return _react.default.createElement(_portrait.StyledIcon, _extends({
        type: "individual",
        size: size,
        shape: shape,
        darkBackground: darkBackground
      }, tagProps));
    }
  }]);

  return Portrait;
}(_react.default.Component);

Portrait.propTypes = {
  /** The size of the Portrait. */
  size: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.sizesFull), _toConsumableArray(_optionsHelper.default.sizesPortrait))),

  /** A custom image URL. */
  src: function src(props) {
    if (props.src && typeof props.src !== 'string') {
      throw new Error("Invalid prop `src` of type `".concat(_typeof(props.src), "` supplied to `Portrait`, expected `string`."));
    } else if (props.gravatar && props.src) {
      throw new Error('Portrait requires a prop of "src" or "gravatar" but not both');
    }
  },

  /** An email address registered with Gravatar. */
  gravatar: _propTypes.default.string,

  /** The `alt` HTML string. */
  alt: _propTypes.default.string,

  /** The shape of the Portrait. */
  shape: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.shapesVaried), _toConsumableArray(_optionsHelper.default.shapesPortrait))),

  /** The initials to render in the Portrait. */
  initials: _propTypes.default.string,

  /** Use a dark background. */
  darkBackground: _propTypes.default.bool
};
Portrait.defaultProps = {
  size: 'M',
  shape: 'square',
  darkBackground: false,
  alt: ''
};
var _default = Portrait;
exports.default = _default;