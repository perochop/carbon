"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("../../../style/themes/base"));

var _fieldHelp = _interopRequireDefault(require("../field-help/field-help.style"));

var _hiddenCheckableInput = _interopRequireDefault(require("../checkable-input/hidden-checkable-input.style"));

var _label = _interopRequireDefault(require("../label/label.style"));

var _checkableInput = require("../checkable-input/checkable-input.style");

var _switchSlider = _interopRequireDefault(require("./switch-slider.style"));

var _validationIcon = _interopRequireDefault(require("../../../components/validations/validation-icon.style"));

var _formField = require("../form-field/form-field.style");

var _switchClassic = _interopRequireDefault(require("./switch-classic.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n        ", " {\n          margin-top: 1px;\n          padding: 10px 0;\n        }\n\n        ", "\n      "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      ", ", ", ", ", " {\n        height: 40px;\n        width: 78px;\n      }\n\n      ", "\n\n      ", "\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        ", " {\n          margin-left: 0;\n          margin-top: 0;\n        }\n\n        ", " {\n          margin-left: 10px;\n        }\n\n        ", "\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        flex-basis: auto;\n        margin-left: 10px;\n      }\n\n      ", " {\n        display: flex;\n      }\n  \n      ", " {\n        margin-bottom: 0;\n        margin-right: 32px;\n        width: auto;\n      }\n\n      ", " {\n        margin-bottom: 0;\n        margin-top: 0;\n      }\n\n      ", "\n\n      ", "\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        ", " {\n          margin-top: 8px;\n        }\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      ", "\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        margin-bottom: 10px;\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        margin-right: ", "%;\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    ", " {\n      display: block;\n    }\n\n    ", ", ", " {\n      border: none;\n      box-sizing: border-box;\n      height: 24px;\n      width: 60px;\n      flex-basis: 100%;\n      margin-left: 0;\n    }\n\n    margin-bottom: 24px;\n\n    ", ":not([disabled]) {\n      &:focus + ", ",\n      &:hover + ", " {\n        outline: solid 3px ", ";\n      }\n    }\n\n    ", " {\n      margin-left: 0;\n    }\n\n    ", " {\n      padding: 0;\n      margin-bottom: 8px;\n      margin-top: 2px;\n\n      ", " {\n        position: relative;\n        display: inline-block;\n      }\n\n      ", "\n    }\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n  "]);

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

var StyledSwitch = _styledComponents.default.div(_templateObject(), function (_ref) {
  var fieldHelpInline = _ref.fieldHelpInline,
      labelInline = _ref.labelInline,
      labelWidth = _ref.labelWidth,
      reverse = _ref.reverse,
      size = _ref.size,
      theme = _ref.theme;
  return (0, _styledComponents.css)(_templateObject2(), _formField.FieldLineStyle, _checkableInput.StyledCheckableInput, _hiddenCheckableInput.default, _hiddenCheckableInput.default, _switchSlider.default, _switchSlider.default, theme.colors.focus, _fieldHelp.default, _label.default, _validationIcon.default, labelWidth && (0, _styledComponents.css)(_templateObject3(), 100 - labelWidth), fieldHelpInline && (0, _styledComponents.css)(_templateObject4(), _fieldHelp.default), reverse && (0, _styledComponents.css)(_templateObject5(), !labelInline && (0, _styledComponents.css)(_templateObject6(), _label.default)), labelInline && (0, _styledComponents.css)(_templateObject7(), _checkableInput.StyledCheckableInput, _formField.FieldLineStyle, _label.default, _fieldHelp.default, reverse && (0, _styledComponents.css)(_templateObject8(), _checkableInput.StyledCheckableInput, _label.default, !fieldHelpInline && "\n          ".concat(_fieldHelp.default, " {\n            margin-left: 70px;\n          }\n        ")), fieldHelpInline && "\n        ".concat(_label.default, " {\n          margin-right: 10px;\n          margin-top: 2px;\n        }\n\n        ").concat(_fieldHelp.default, " {\n          margin-left: 0;\n        }\n      ")), size === 'large' && (0, _styledComponents.css)(_templateObject9(), _checkableInput.StyledCheckableInput, _hiddenCheckableInput.default, _switchSlider.default, fieldHelpInline && "\n        ".concat(_fieldHelp.default, " {\n          padding: 10px 0;\n        }\n      "), labelInline && (0, _styledComponents.css)(_templateObject10(), _label.default, !fieldHelpInline && reverse && "\n          ".concat(_fieldHelp.default, " {\n            margin-left: 88px;\n          }\n        "))), _switchClassic.default);
});

StyledSwitch.propTypes = {
  disabled: _propTypes.default.bool,
  fieldHelpInline: _propTypes.default.bool,
  labelInline: _propTypes.default.bool,
  reverse: _propTypes.default.bool,
  size: _propTypes.default.string,
  theme: _propTypes.default.object
};
StyledSwitch.defaultProps = {
  theme: _base.default
};
var _default = StyledSwitch;
exports.default = _default;