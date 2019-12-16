"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledButtonSubtext = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _buttonTypes = _interopRequireDefault(require("./button-types.style"));

var _buttonSizes = _interopRequireDefault(require("./button-sizes.style"));

var _buttonClassic = _interopRequireDefault(require("./button-classic.style"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _icon = _interopRequireDefault(require("../icon/icon.style"));

var _styleHelper = require("../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    border: 2px solid transparent;\n    box-sizing: border-box;\n    font-weight: 600;\n    padding-top: 1px;\n    padding-bottom: 1px;\n    text-decoration: none;\n    &:focus {\n      outline: solid 3px ", ";\n    }\n    \n    margin-right: 16px;\n\n    ", ";\n    ", "\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 400;\n  display: block;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    ", " {\n      margin-left: ", ";\n      margin-right: ", ";\n      height: ", ";\n      svg { \n        margin-top: 0;\n      }\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  cursor: ", ";\n  display: inline-flex;\n  flex-direction: column;\n  flex-flow: wrap;\n  justify-content: center;\n  vertical-align: middle;\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents.default.button(_templateObject(), function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, addButtonStyle, function (_ref2) {
  var iconPosition = _ref2.iconPosition;
  return (0, _styledComponents.css)(_templateObject2(), _icon.default, iconPosition === 'before' ? '0px' : '8px', iconPosition === 'before' ? '8px' : '0px', additionalIconStyle);
});

var StyledButtonSubtext = _styledComponents.default.span(_templateObject3());

exports.StyledButtonSubtext = StyledButtonSubtext;

function additionalIconStyle(_ref3) {
  var theme = _ref3.theme,
      iconType = _ref3.iconType;

  if ((0, _styleHelper.isClassic)(theme)) {
    if (iconType === 'services') return '8px';
    return '18px';
  }

  if (iconType === 'services') return '6px';
  return '16px;';
}

function addButtonStyle(props) {
  if (isClassicButton(props)) return (0, _buttonClassic.default)(props);
  return stylingForType(props);
}

function stylingForType(_ref4) {
  var disabled = _ref4.disabled,
      buttonType = _ref4.buttonType,
      theme = _ref4.theme,
      size = _ref4.size;
  return (0, _styledComponents.css)(_templateObject4(), theme.colors.focus, (0, _buttonTypes.default)(theme, disabled)[buttonType], (0, _buttonSizes.default)(theme)[size]);
}

function isClassicButton(_ref5) {
  var theme = _ref5.theme,
      buttonType = _ref5.buttonType;

  var isClassicButtonType = _optionsHelper.default.themesBinary.includes(buttonType);

  return (0, _styleHelper.isClassic)(theme) && isClassicButtonType;
}

StyledButton.defaultProps = {
  theme: _base.default,
  medium: true,
  buttonType: 'secondary',
  legacyColorVariant: 'blue'
};
StyledButton.propTypes = {
  /** Button types for new business themes */
  buttonType: _propTypes.default.oneOf(_optionsHelper.default.buttonTypes),

  /** The text the button displays */
  children: _propTypes.default.node.isRequired,

  /** Apply disabled state to the button */
  disabled: _propTypes.default.bool,

  /** Used to transfrom button into anchor */
  href: _propTypes.default.string,

  /** Defines an Icon position within the button */
  iconPosition: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.buttonIconPositions), [''])),

  /** Defines an Icon type within the button (see Icon for options) */
  iconType: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.icons), [''])),

  /** Assigns a size to the button */
  size: _propTypes.default.oneOf(_optionsHelper.default.sizesRestricted),

  /** Second text child, renders under main text, only when size is "large" */
  subtext: _propTypes.default.string,

  /** Set this prop to pass in legacy theme color variants */
  legacyColorVariant: _propTypes.default.oneOf(_optionsHelper.default.buttonColors),

  /** Used to transfrom button into anchor */
  to: _propTypes.default.string
};
var _default = StyledButton;
exports.default = _default;