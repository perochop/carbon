"use strict";

require("core-js/modules/es.array.concat");

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

var _styleHelper = require("../../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    circle {\n      fill: #e6ebed;\n    }\n\n    ", ":checked + ", " circle {\n      fill: #8099a4;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ",\n  ", ",\n  ", ",\n  svg {\n    height: 15px;\n    width: 15px;\n  }\n\n  ", " {\n    margin-left: 22px;\n  }\n\n  ", ", ", " {\n    padding: 0 6px;\n  }\n\n  ", " {\n    margin-right: 6px;\n  }\n\n  ", ":not([disabled]) {\n    &:focus + ", " > svg {\n      box-shadow: 0 0 6px rgba(25, 99, 246, 0.6);\n      transition: box-shadow 0.1s linear;\n    }\n  }\n\n  circle {\n    r: 5;\n  }\n\n  svg {\n    border-color: rgb(175, 175, 175);\n  }\n\n  ", ":checked + ", " circle {\n    fill: rgba(0, 0, 0, 0.85);\n  }\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(_ref) {
  var disabled = _ref.disabled,
      fieldHelpInline = _ref.fieldHelpInline,
      reverse = _ref.reverse,
      theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject(), _checkableInput.StyledCheckableInput, _hiddenCheckableInput.default, _checkableInputSvgWrapper.default, _fieldHelp.default, _fieldHelp.default, _label.default, _checkableInput.StyledCheckableInput, _hiddenCheckableInput.default, _checkableInputSvgWrapper.default, _hiddenCheckableInput.default, _checkableInputSvgWrapper.default, disabled && (0, _styledComponents.css)(_templateObject2(), _hiddenCheckableInput.default, _checkableInputSvgWrapper.default), (fieldHelpInline || reverse) && "\n    ".concat(_fieldHelp.default, " {\n      margin-left: 0;\n      margin-right: 6px;\n    }\n\n    ").concat(_checkableInput.StyledCheckableInput, " {\n      margin-left: 6px;\n    }\n  "));
};

exports.default = _default;