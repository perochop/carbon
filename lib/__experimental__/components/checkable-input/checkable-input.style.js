"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCheckableInputWrapper = exports.StyledCheckableInput = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fieldHelp = _interopRequireDefault(require("../field-help/field-help.style"));

var _formField = require("../form-field/form-field.style");

var _hiddenCheckableInput = _interopRequireDefault(require("./hidden-checkable-input.style"));

var _label = _interopRequireDefault(require("../label/label.style"));

var _help = _interopRequireDefault(require("../../../components/help/help.style"));

var _base = _interopRequireDefault(require("../../../style/themes/base"));

var _validationIcon = _interopRequireDefault(require("../../../components/validations/validation-icon.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        width: ", "% !important;\n      }\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        margin-left: 0;\n      }\n\n      ", " {\n        flex-grow: 1;\n      }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        flex-wrap: nowrap;\n      }\n\n      ", " {\n        margin-right: 0;\n        margin-left: 8px;\n      }\n      \n      ", " {\n        flex-grow: 0;\n        flex-basis: auto;\n        padding-left: 0;\n        width: auto;\n      }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        &, & ", " {\n          color: ", ";\n        }\n      }\n\n      ", ",\n      ", " {\n        &:hover, &:focus {\n          outline: none;\n          cursor: not-allowed;\n        }\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    ", " {\n      display: flex;\n    }\n\n    ", " {\n      text-align: ", ";\n      margin-top: -2px;\n      width: auto;\n\n      & ", ",\n      & ", " {\n        color: ", ";\n        vertical-align: middle;\n        top: -1px;\n\n        &:hover, &:focus {\n          color: ", ";\n        }\n      }\n    }\n\n    ", " {\n      flex-basis: 100%;\n    }\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledCheckableInput = _styledComponents.default.div(_templateObject());

exports.StyledCheckableInput = StyledCheckableInput;

var StyledCheckableInputWrapper = _styledComponents.default.div(_templateObject2(), function (_ref) {
  var disabled = _ref.disabled,
      fieldHelpInline = _ref.fieldHelpInline,
      inputWidth = _ref.inputWidth,
      labelAlign = _ref.labelAlign,
      labelWidth = _ref.labelWidth,
      reverse = _ref.reverse,
      theme = _ref.theme;
  return (0, _styledComponents.css)(_templateObject3(), _formField.FieldLineStyle, _label.default, labelAlign, _help.default, _validationIcon.default, theme.help.color, theme.text.color, _fieldHelp.default, disabled && (0, _styledComponents.css)(_templateObject4(), _label.default, _help.default, theme.disabled.disabled, _hiddenCheckableInput.default, _label.default), fieldHelpInline && (0, _styledComponents.css)(_templateObject5(), _formField.FieldLineStyle, StyledCheckableInput, _fieldHelp.default), reverse && fieldHelpInline && (0, _styledComponents.css)(_templateObject6(), StyledCheckableInput, _fieldHelp.default), inputWidth !== undefined && inputWidth !== 0 && (0, _styledComponents.css)(_templateObject7(), StyledCheckableInput, inputWidth), labelWidth !== undefined && labelWidth !== 0 && "\n      ".concat(_label.default, " {\n        width: ").concat(labelWidth, "% !important;\n      }\n    "));
});

exports.StyledCheckableInputWrapper = StyledCheckableInputWrapper;
StyledCheckableInputWrapper.propTypes = {
  disabled: _propTypes.default.bool,
  fieldHelpInline: _propTypes.default.bool,
  inputWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  labelAlign: _propTypes.default.string,
  labelWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  theme: _propTypes.default.object
};
StyledCheckableInputWrapper.defaultProps = {
  labelAlign: 'left',
  theme: _base.default
};