"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _checkableInput = require("../checkable-input/checkable-input.style");

var _fieldHelp = _interopRequireDefault(require("../field-help/field-help.style"));

var _hiddenCheckableInput = _interopRequireDefault(require("../checkable-input/hidden-checkable-input.style"));

var _checkableInputSvgWrapper = _interopRequireDefault(require("../checkable-input/checkable-input-svg-wrapper.style"));

var _label = _interopRequireDefault(require("../label/label.style"));

var _help = _interopRequireDefault(require("../../../components/help/help.style"));

var _styleHelper = require("../../../utils/helpers/style-helper");

var _icon = _interopRequireDefault(require("../../../components/icon/icon.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    ", " {\n      color: ", ";\n    }\n\n    svg {\n      background-color: #e6ebed;\n      border-color: #bfccd2;\n    }\n\n    svg path { fill: #", "; }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", " {\n    padding: 1px 0 0 0;\n  }\n\n  ", ",\n  svg {\n    padding: 1px;\n  }\n\n  ", ",\n  ", ",\n  ", ",\n  svg {\n    height: 15px;\n    width: 15px;\n  }\n\n  ", " {\n    margin-left: 15px;\n  }\n\n  ", " ", " {\n    &, &:hover, &:focus {\n      color: #8099a4;\n    }\n  }\n\n  ", " ", "::before {\n    font-size: 16px;\n  }\n\n  ", "\n  ", " {\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n\n  ", ":not([disabled]) {\n    &:focus + ", ",\n    &:hover + ", " {\n      box-shadow: none;\n    }\n  }\n\n  ", ":not([disabled]) {\n    &:focus + ", " > svg,\n    &:hover + ", " > svg {\n      border: 1px solid #1963f6;\n      outline: none;\n    }\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(_ref) {
  var checked = _ref.checked,
      disabled = _ref.disabled,
      fieldHelpInline = _ref.fieldHelpInline,
      reverse = _ref.reverse,
      theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject(), _checkableInput.StyledCheckableInput, _hiddenCheckableInput.default, _checkableInput.StyledCheckableInput, _hiddenCheckableInput.default, _checkableInputSvgWrapper.default, _fieldHelp.default, _label.default, _help.default, _label.default, _icon.default, fieldHelpInline && "".concat(_fieldHelp.default, ","), _label.default, _hiddenCheckableInput.default, _checkableInputSvgWrapper.default, _checkableInputSvgWrapper.default, _hiddenCheckableInput.default, _checkableInputSvgWrapper.default, _checkableInputSvgWrapper.default, checked && "\n    svg path { fill: rgba(0, 0, 0, 0.85); }\n  ", disabled && (0, _styledComponents.css)(_templateObject2(), _label.default, theme.disabled.text, checked ? '8099a4' : 'e6ebed'), (fieldHelpInline || reverse) && "\n    ".concat(_fieldHelp.default, " {\n      margin-left: 0;\n    }\n  "));
};

exports.default = _default;