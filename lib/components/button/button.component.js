"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ButtonWithForwardRef = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouter = require("react-router");

var _icon = _interopRequireDefault(require("../icon"));

var _button = _interopRequireWildcard(require("./button.style"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(props) {
  var disabled = props.disabled,
      to = props.to,
      iconType = props.iconType,
      size = props.size,
      subtext = props.subtext;

  var as = props.as,
      buttonType = props.buttonType,
      rest = _objectWithoutProperties(props, ["as", "buttonType"]);

  var propsWithoutAs = _objectSpread({}, rest, {
    buttonType: buttonType || as
  });

  if (subtext.length > 0 && size !== 'large') {
    throw new Error('subtext prop has no effect unless the button is large');
  } // added to support legacy link buttons


  if (!disabled && to) {
    return _react.default.createElement(_reactRouter.Link, {
      to: to,
      type: iconType
    }, renderStyledButton(propsWithoutAs));
  }

  return renderStyledButton(propsWithoutAs);
};

function renderStyledButton(buttonProps) {
  var disabled = buttonProps.disabled,
      buttonType = buttonProps.buttonType,
      iconType = buttonProps.iconType,
      theme = buttonProps.theme,
      forwardRef = buttonProps.forwardRef,
      href = buttonProps.href,
      styleProps = _objectWithoutProperties(buttonProps, ["disabled", "buttonType", "iconType", "theme", "forwardRef", "href"]); // added to support legacy link buttons


  if (href) {
    styleProps.href = href;
  }

  return _react.default.createElement(_button.default, _extends({
    as: !disabled && href ? 'a' : 'button' // legacy link button feature
    ,
    buttonType: buttonType,
    disabled: disabled,
    role: "button",
    type: "button",
    legacyColorVariant: theme,
    iconType: iconType
  }, (0, _tags.default)('button', buttonProps), styleProps, {
    ref: forwardRef
  }), renderChildren(buttonProps));
}

function renderChildren(_ref) {
  var iconType = _ref.iconType,
      iconPosition = _ref.iconPosition,
      size = _ref.size,
      subtext = _ref.subtext,
      children = _ref.children,
      disabled = _ref.disabled,
      buttonType = _ref.buttonType;
  var iconColorMap = {
    primary: 'on-dark-background',
    secondary: 'business-color',
    tertiary: 'business-color',
    destructive: 'on-dark-background',
    darkBackground: 'business-color'
  };
  return _react.default.createElement(_react.default.Fragment, null, iconType && iconPosition === 'before' && _react.default.createElement(_icon.default, {
    type: iconType,
    disabled: disabled,
    bgTheme: "none",
    iconColor: iconColorMap[buttonType]
  }), _react.default.createElement("span", null, _react.default.createElement("span", {
    "data-element": "main-text"
  }, children), size === 'large' && _react.default.createElement(_button.StyledButtonSubtext, {
    "data-element": "subtext"
  }, subtext)), iconType && iconPosition === 'after' && _react.default.createElement(_icon.default, {
    type: iconType,
    disabled: disabled,
    bgTheme: "none",
    iconColor: iconColorMap[buttonType]
  }));
}

Button.propTypes = {
  /** Color variants for new business themes: "primary" | "secondary" | "tertiary" | "destructive" | "darkBackground" */
  buttonType: _propTypes.default.oneOf(_optionsHelper.default.buttonTypes),

  /** The text the button displays */
  children: _propTypes.default.node.isRequired,

  /** Apply disabled state to the button */
  disabled: _propTypes.default.bool,

  /** Defines an Icon position within the button: "before" | "after" */
  iconPosition: _propTypes.default.oneOf(_toConsumableArray(_optionsHelper.default.buttonIconPositions)),

  /** Defines an Icon type within the button (see Icon for options) */
  iconType: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.icons), [''])),

  /** Assigns a size to the button: "small" | "medium" | "large" */
  size: _propTypes.default.oneOf(_optionsHelper.default.sizesRestricted),

  /** Second text child, renders under main text, only when size is "large" */
  subtext: _propTypes.default.string,

  /** Ref to be forwarded */
  forwardRef: _propTypes.default.func,

  /** Button types for legacy theme: "primary" | "secondary" */
  as: _propTypes.default.oneOf(_optionsHelper.default.themesBinary),

  /** Set this prop to pass in legacy theme color variants */
  theme: _propTypes.default.oneOf(_optionsHelper.default.buttonColors),
  checkTheme: _propTypes.default.func,

  /** Legacy - used to transfrom button into anchor */
  href: _propTypes.default.string,

  /** Legacy - used to transfrom button into anchor */
  to: _propTypes.default.string
};
Button.defaultProps = {
  as: 'secondary',
  size: 'medium',
  disabled: false,
  iconPosition: 'before',
  theme: 'blue',
  subtext: ''
};

var ButtonWithForwardRef = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(Button, _extends({
    forwardRef: ref
  }, props));
});

exports.ButtonWithForwardRef = ButtonWithForwardRef;
ButtonWithForwardRef.displayName = 'Button';
ButtonWithForwardRef.defaultProps = Button.defaultProps;
Button.displayName = 'Button';
var _default = Button;
exports.default = _default;