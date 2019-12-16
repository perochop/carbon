"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledCheckboxGroup = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("../../../style/themes/base"));

var _checkableInput = require("../checkable-input/checkable-input.style");

var _fieldHelp = _interopRequireDefault(require("../field-help/field-help.style"));

var _hiddenCheckableInput = _interopRequireDefault(require("../checkable-input/hidden-checkable-input.style"));

var _checkableInputSvgWrapper = _interopRequireDefault(require("../checkable-input/checkable-input-svg-wrapper.style"));

var _label = _interopRequireDefault(require("../label/label.style"));

var _checkboxClassic = _interopRequireDefault(require("./checkbox-classic.style"));

var _validationIcon = _interopRequireDefault(require("../../../components/validations/validation-icon.style"));

var _formField = _interopRequireDefault(require("../form-field/form-field.style"));

var _icon = _interopRequireDefault(require("../../../components/icon/icon.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  ", "::before {\n    font-size: 16px;\n  }\n\n  ", " {\n    margin-top: -2px;\n  }\n\n  & ", " {\n    padding-top: 12px;\n\n    & ", " {\n      & ", " {\n        line-height: 21px;\n      }\n    }\n  }\n\n  & > ", " {\n    & > ", " {\n      padding-bottom: 4px;\n      vertical-align: middle;\n\n      ", " {\n        display: inline-block;\n      }\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        ", " {\n          margin-right: 8px;\n        }\n\n        ", " {\n          padding-left: 6px;\n        }\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        margin-left: 0;\n        padding-left: 0;\n      }\n\n      ", " {\n        padding-left: 0;\n        flex: 0 1 auto;\n      }\n\n      ", "\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      ", " { height: 24px; }\n\n      ", ",\n      ", ",\n      svg {\n        padding: 2px;\n      }\n\n      ", ",\n      ", ",\n      ", ",\n      svg {\n        height: 24px;\n        width: 24px;\n      }\n\n      ", " {\n        margin-left: 24px;\n      }\n\n      ", ",\n      ", " {\n        padding-left: 8px;\n      }\n\n      ", "\n      ", " {\n        padding-top: 4px;\n        padding-bottom: 4px;\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        border: 1px solid ", ";\n\n        ", "\n        ", "\n        ", "\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding-top: 8px;\n\n    ", " {\n      padding-top: 1px;\n    }\n\n    ", " { height: 16px; }\n\n    svg {\n      background-color: ", ";\n      ", "\n    }\n\n    ", ",\n    svg {\n      height: 16px;\n      position: absolute;\n      padding: 1px;\n    }\n\n    ", ",\n    ", ",\n    ", ",\n    svg {\n      box-sizing: border-box;\n      min-width: 16px;\n      width: 16px;\n    }\n\n    ", ":not([disabled]) {\n      &:focus + ", ",\n      &:hover + ", " {\n        box-shadow: 0 0 0 3px ", ";\n      }\n    }\n\n    ", " {\n      padding-left: 6px;\n      width: auto;\n      flex: 1 1 calc(100% - 28px);\n    }\n\n    ", " {\n      margin-left: 16px;\n      margin-top: 0;\n      padding-left: 6px;\n    }\n\n    ", " {\n      position: relative;\n      display: inline-block;\n    }\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n\n    ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CheckboxStyle = _styledComponents.default.div(_templateObject(), function (_ref) {
  var checked = _ref.checked,
      disabled = _ref.disabled,
      hasError = _ref.hasError,
      hasWarning = _ref.hasWarning,
      hasInfo = _ref.hasInfo,
      fieldHelpInline = _ref.fieldHelpInline,
      inputWidth = _ref.inputWidth,
      reverse = _ref.reverse,
      size = _ref.size,
      theme = _ref.theme;
  return (0, _styledComponents.css)(_templateObject2(), _checkableInput.StyledCheckableInput, _checkableInputSvgWrapper.default, theme.colors.white, !disabled && (0, _styledComponents.css)(_templateObject3(), theme.colors.border, hasInfo && "border: 1px solid ".concat(theme.colors.info, ";"), hasWarning && "border: 1px solid ".concat(theme.colors.warning, ";"), hasError && "border: 1px solid ".concat(theme.colors.error, ";")), _hiddenCheckableInput.default, _checkableInput.StyledCheckableInput, _hiddenCheckableInput.default, _checkableInputSvgWrapper.default, _hiddenCheckableInput.default, _checkableInputSvgWrapper.default, _checkableInputSvgWrapper.default, theme.colors.focus, _label.default, _fieldHelp.default, _validationIcon.default, size === 'large' && (0, _styledComponents.css)(_templateObject4(), _checkableInputSvgWrapper.default, _checkableInput.StyledCheckableInput, _hiddenCheckableInput.default, _checkableInput.StyledCheckableInput, _hiddenCheckableInput.default, _checkableInputSvgWrapper.default, _fieldHelp.default, _fieldHelp.default, _label.default, fieldHelpInline && "".concat(_fieldHelp.default, ","), _label.default), checked && "\n      svg path {\n        fill: ".concat(theme.checkable.checked, ";\n      }\n    "), disabled && "\n      svg {\n        background-color: ".concat(theme.disabled.input, ";\n        border: 1px solid ").concat(theme.disabled.border, ";\n      }\n\n      svg path { fill: ").concat(checked ? theme.disabled.border : theme.disabled.input, "; }\n\n      ").concat(_checkableInputSvgWrapper.default, " {\n        &:hover, &:focus {\n          outline: none;\n          cursor: not-allowed;\n        }\n      }\n    "), fieldHelpInline && "\n      ".concat(_fieldHelp.default, " {\n        margin: 0;\n      }\n\n      ").concat(_label.default, " {\n        flex: 0 1 auto;\n      }\n    "), inputWidth !== undefined && inputWidth !== 0 && "\n      ".concat(_fieldHelp.default, " {\n        ").concat(reverse ? 'margin-right' : 'margin-left', ": ").concat(inputWidth, "% !important;\n      }\n    "), reverse && (0, _styledComponents.css)(_templateObject5(), _fieldHelp.default, _label.default, fieldHelpInline && (0, _styledComponents.css)(_templateObject6(), _checkableInput.StyledCheckableInput, _fieldHelp.default)), _checkboxClassic.default);
});

CheckboxStyle.defaultProps = {
  labelAlign: 'left',
  theme: _base.default
};
CheckboxStyle.propTypes = {
  disabled: _propTypes.default.bool,
  hasError: _propTypes.default.bool,
  fieldHelpInline: _propTypes.default.bool,
  inputWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  labelAlign: _propTypes.default.string,
  labelWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  size: _propTypes.default.string
};

var StyledCheckboxGroup = _styledComponents.default.div(_templateObject7(), _icon.default, _label.default, CheckboxStyle, _formField.default, _label.default, _formField.default, _label.default, _validationIcon.default);

exports.StyledCheckboxGroup = StyledCheckboxGroup;
StyledCheckboxGroup.defaultProps = {
  theme: _base.default
};
var _default = CheckboxStyle;
exports.default = _default;