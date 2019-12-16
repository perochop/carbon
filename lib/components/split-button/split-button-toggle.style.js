"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _button = _interopRequireDefault(require("../button/button.style"));

var _splitButtonClassic = require("./split-button-classic.style");

var _icon = _interopRequireDefault(require("../icon/icon.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        &:focus {\n          margin-left: -3px;\n        }\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      background-color: ", ";\n      border-color: ", ";\n\n      &,\n      ", " {\n        color: ", ";\n      }\n\n      &:focus {\n        border-left-color: ", ";\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([" \n    ", "\n    ", "\n    ", "\n    padding: 0 ", "px;\n  \n    ", " + & {\n      margin-left: 0;\n\n      ", "\n    }\n\n    ", " + & ", " {\n      margin-left: 0;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var horizontalPaddingSizes = {
  small: 5,
  medium: 10,
  large: 14
};
var StyledSplitButtonToggle = (0, _styledComponents.default)(_button.default)(_templateObject(), function (_ref) {
  var buttonType = _ref.buttonType,
      disabled = _ref.disabled,
      displayed = _ref.displayed,
      size = _ref.size,
      theme = _ref.theme;
  return (0, _styledComponents.css)(_templateObject2(), !disabled && displayed ? (0, _styledComponents.css)(_templateObject3(), theme.colors.secondary, theme.colors.secondary, _icon.default, theme.colors.white, theme.colors.secondary) : '', !disabled && buttonType === 'primary' && "border-left-color: ".concat(theme.colors.secondary, ";"), buttonType === 'secondary' && 'border-left-width: 0;', horizontalPaddingSizes[size], _button.default, buttonType === 'secondary' && (0, _styledComponents.css)(_templateObject4()), _button.default, _icon.default);
}, _splitButtonClassic.getSplitButtonToggleClassicStyles);
var _default = StyledSplitButtonToggle;
exports.default = _default;