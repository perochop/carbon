"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _link = _interopRequireDefault(require("../link"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _createClassic = _interopRequireDefault(require("./create-classic.style"));

var _icon = _interopRequireDefault(require("../icon/icon.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  \n  a {\n      background-color: ", ";\n      border: 1px dashed ", ";\n      display: block;\n      padding: 12px 12px 10px;\n      text-align: center;\n      font-weight: 700;\n      text-decoration: none;\n      width: 100%;\n\n      :hover {\n        background-color: ", ";\n      }\n\n      :focus {\n        color: ", ";\n        background-color: ", ";\n        outline: 3px solid ", ";\n      }\n\n      ", "::before {\n        font-size: 12px;\n      }\n\n      ", " {\n        top: 0;\n      }\n\n      ", "\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CreateStyle = (0, _styledComponents.default)(_link.default)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.disabled.input;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.border;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.white;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.white;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.focus;
}, _icon.default, _icon.default, _createClassic.default);
CreateStyle.defaultProps = {
  theme: _base.default
};
var _default = CreateStyle;
exports.default = _default;