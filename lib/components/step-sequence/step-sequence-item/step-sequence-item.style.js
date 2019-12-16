"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _stepSequenceItemClassic = _interopRequireDefault(require("./step-sequence-item-classic.style"));

var _base = _interopRequireDefault(require("../../../style/themes/base"));

var _icon = _interopRequireDefault(require("../../icon/icon.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: column;\n    align-items: flex-start;\n\n    &::before {\n      flex-grow: 0;\n      width: 1px;\n      height: 24px;\n      margin: 12px 8px;\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n  \n    &::before {\n      background-color: ", ";\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n\n    &::before {\n      background-color: ", ";\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  text-align: right;\n  list-style-type: none;\n  color: ", ";\n\n  &::before {\n    content: '';\n    flex-grow: 1;\n    display: block;\n    height: 1px;\n    margin: 0 16px;\n    background-color: ", ";\n  }\n\n  ", " {\n    position: relative;\n    top: -2px;\n    margin-right: 8px;\n    color: ", ";\n  }\n\n  &:first-child {\n    flex-grow: 0;\n\n    &::before {\n      display: none;\n    }\n  }\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StepSequenceItemStyle = _styledComponents.default.li(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.disabled.disabled;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.disabled.disabled;
}, _icon.default, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.base;
}, function (_ref4) {
  var theme = _ref4.theme,
      status = _ref4.status;
  return status === 'current' && (0, _styledComponents.css)(_templateObject2(), theme.text.color, theme.colors.withOpacity);
}, function (_ref5) {
  var theme = _ref5.theme,
      status = _ref5.status;
  return status === 'complete' && (0, _styledComponents.css)(_templateObject3(), theme.colors.base, theme.colors.base);
}, function (_ref6) {
  var orientation = _ref6.orientation;
  return orientation === 'vertical' && (0, _styledComponents.css)(_templateObject4());
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.name === 'classic' && (0, _styledComponents.css)(_templateObject5(), _stepSequenceItemClassic.default);
});

StepSequenceItemStyle.defaultProps = {
  theme: _base.default
};
var _default = StepSequenceItemStyle;
exports.default = _default;