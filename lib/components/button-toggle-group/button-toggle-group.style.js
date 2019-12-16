"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _buttonToggle = require("../button-toggle/button-toggle.style");

var _validationIcon = _interopRequireDefault(require("../validations/validation-icon.style"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    ", " {\n      border-color: ", ";\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  \n  ", ";\n\n  ", " {\n    display: inline-block;\n    margin-left: 10px;\n    margin-top: -4px;\n    vertical-align: middle;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonToggleGroupStyle = _styledComponents.default.div(_templateObject(), function (_ref) {
  var inputWidth = _ref.inputWidth;
  return inputWidth && (0, _styledComponents.css)(_templateObject2(), "".concat(inputWidth, "%"));
}, function (_ref2) {
  var theme = _ref2.theme,
      errorMessage = _ref2.errorMessage;
  return errorMessage && (0, _styledComponents.css)(_templateObject3(), _buttonToggle.StyledButtonToggleLabel, theme.colors.error);
}, _validationIcon.default);

ButtonToggleGroupStyle.defaultProps = {
  theme: _base.default
};
var _default = ButtonToggleGroupStyle;
exports.default = _default;