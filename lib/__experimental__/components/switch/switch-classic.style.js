"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _fieldHelp = _interopRequireDefault(require("../field-help/field-help.style"));

var _hiddenCheckableInput = _interopRequireDefault(require("../checkable-input/hidden-checkable-input.style"));

var _label = _interopRequireDefault(require("../label/label.style"));

var _help = _interopRequireDefault(require("../../../components/help/help.style"));

var _checkableInput = require("../checkable-input/checkable-input.style");

var _switchSlider = _interopRequireDefault(require("./switch-slider.style"));

var _validationIcon = _interopRequireDefault(require("../../../components/validations/validation-icon.style"));

var _icon = _interopRequireDefault(require("../../../components/icon/icon.style"));

var _styleHelper = require("../../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        margin-top: 0;\n        padding: 5px 0;\n      }\n\n      ", "\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    ", ", ", ", ", " {\n      height: 28px;\n      width: 55px;\n    }\n\n    ", "\n\n    ", "\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    ", " {\n      padding: 5px 0;\n    }\n\n    ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ", ", " {\n    border-radius: 24px;\n    height: 28px;\n    width: 55px;\n  }\n\n  ", " { transition: box-shadow .1s linear; }\n\n  ", ":not([disabled]) {\n    &:focus + ", " {\n      box-shadow: 0 0 6px 2px rgba(37, 91, 199, 0.6);\n    }\n\n    &:focus + ", ",\n    &:hover + ", " {\n      outline: none;\n    }\n  }\n\n  ", " {\n    & ", " {\n      & ", "::before {\n        font-size: 16px;\n      }\n    }\n\n    ", " {\n      &, &:hover, &:focus {\n        color: #8099a4;\n      }\n    }\n  }\n\n  ", " ", "{\n    top: 1px;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(_ref) {
  var disabled = _ref.disabled,
      fieldHelpInline = _ref.fieldHelpInline,
      labelInline = _ref.labelInline,
      reverse = _ref.reverse,
      size = _ref.size,
      theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject(), _checkableInput.StyledCheckableInput, _hiddenCheckableInput.default, _switchSlider.default, _hiddenCheckableInput.default, _switchSlider.default, _switchSlider.default, _switchSlider.default, _label.default, _validationIcon.default, _icon.default, _help.default, _checkableInput.StyledCheckableInput, _icon.default, labelInline && (0, _styledComponents.css)(_templateObject2(), _label.default, !fieldHelpInline && reverse && "\n      ".concat(_fieldHelp.default, " {\n        margin-left: 66px;\n      }\n    ")), disabled && "\n    ".concat(_label.default, " { color: ").concat(theme.text.color, " }\n  "), size === 'large' && (0, _styledComponents.css)(_templateObject3(), _checkableInput.StyledCheckableInput, _hiddenCheckableInput.default, _switchSlider.default, fieldHelpInline && "\n      ".concat(_fieldHelp.default, " {\n        margin-top: 0;\n        padding: 3px 0;\n      }\n    "), labelInline && (0, _styledComponents.css)(_templateObject4(), _label.default, !fieldHelpInline && reverse && "\n        ".concat(_fieldHelp.default, " {\n          margin-left: 66px;\n        }\n      "))));
};

exports.default = _default;