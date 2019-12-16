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

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _inputSizes = _interopRequireDefault(require("./input-sizes.style"));

var _inputPresentationClassic = _interopRequireDefault(require("./input-presentation-classic.style"));

var _input = _interopRequireDefault(require("./input.style"));

var _inlineInputs = _interopRequireDefault(require("../../../components/inline-inputs/inline-inputs.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background: transparent !important;\n    box-shadow: none;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    && {\n      outline: 3px solid ", ";\n      z-index: 2;\n    }\n\n    ", " && {\n      position: relative;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background: ", ";\n    border-color: ", ";\n    cursor: not-allowed;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: stretch;\n  background: #fff;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  cursor: text;\n  display: flex;\n  flex-wrap: wrap;\n  flex: 0 0 ", "%;\n  margin: 0;\n  min-height: ", ";\n  padding-left: ", ";\n  padding-right: ", ";\n\n  ", " {\n    /* this is required for an IE11 fix: */\n    height: calc(", " - 4px);\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  input::-ms-clear {\n    display: none;\n  }\n  input::-webkit-contacts-auto-fill-button {\n    display: none!important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputPresentationStyle = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.border;
}, function (_ref2) {
  var inputWidth = _ref2.inputWidth;
  return inputWidth;
}, function (_ref3) {
  var size = _ref3.size;
  return _inputSizes.default[size].height;
}, function (_ref4) {
  var size = _ref4.size;
  return _inputSizes.default[size].padding;
}, function (_ref5) {
  var size = _ref5.size;
  return _inputSizes.default[size].padding;
}, _input.default, function (_ref6) {
  var size = _ref6.size;
  return _inputSizes.default[size].height;
}, function (_ref7) {
  var disabled = _ref7.disabled,
      theme = _ref7.theme;
  return disabled && (0, _styledComponents.css)(_templateObject2(), theme.disabled.input, theme.disabled.border);
}, function (_ref8) {
  var hasFocus = _ref8.hasFocus,
      theme = _ref8.theme;
  return hasFocus && (0, _styledComponents.css)(_templateObject3(), theme.colors.focus, _inlineInputs.default);
}, stylingForValidations, function (_ref9) {
  var readOnly = _ref9.readOnly;
  return readOnly && (0, _styledComponents.css)(_templateObject4());
}, _inputPresentationClassic.default);

function stylingForValidations(_ref10) {
  var theme = _ref10.theme,
      hasError = _ref10.hasError,
      hasWarning = _ref10.hasWarning,
      hasInfo = _ref10.hasInfo;
  var validationColor;

  if (hasError) {
    validationColor = theme.colors.error;
  } else if (hasWarning) {
    validationColor = theme.colors.warning;
  } else if (hasInfo) {
    validationColor = theme.colors.info;
  } else {
    return '';
  }

  return "\n    border-color: ".concat(validationColor, " !important;\n    box-shadow: inset 1px 1px 0 ").concat(validationColor, ",\n                inset -1px -1px 0 ").concat(validationColor, ";\n  ");
}

InputPresentationStyle.safeProps = ['disabled', 'hasFocus', 'inputWidth', 'readOnly', 'size', 'hasError', 'hasWarning', 'hasInfo'];
InputPresentationStyle.defaultProps = {
  inputWidth: 100,
  size: 'medium',
  theme: _base.default
};
InputPresentationStyle.propTypes = {
  disabled: _propTypes.default.bool,
  hasFocus: _propTypes.default.bool,
  inputWidth: _propTypes.default.number,
  readOnly: _propTypes.default.bool,
  size: _propTypes.default.oneOf(_optionsHelper.default.sizesRestricted),
  hasError: _propTypes.default.bool,
  hasWarning: _propTypes.default.bool,
  hasInfo: _propTypes.default.bool
};
var _default = InputPresentationStyle;
exports.default = _default;