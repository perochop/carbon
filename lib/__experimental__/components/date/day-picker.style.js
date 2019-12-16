"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _base = _interopRequireDefault(require("../../../style/themes/base"));

var _dayPickerClassic = _interopRequireDefault(require("./day-picker-classic.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .DayPicker {\n    background-color: ", ";\n    box-shadow: ", ";\n    color: ", ";\n    display: block;\n    font-size: 14px;\n    font-weight: 800;\n    margin-top: 3px;\n    overflow: hidden;\n    padding: 24px;\n    position: absolute;\n    text-align: center;\n    user-select: none;\n  }\n  \n  .DayPicker * {\n    box-sizing: border-box;\n  }\n\n  .DayPicker:focus {\n    outline: none;\n  }\n\n  .DayPicker abbr[title] {\n    border: none;\n    cursor: initial;\n  }\n\n  .DayPicker-wrapper {\n    padding: 0;\n  }\n\n  .DayPicker-Month {\n    margin: 0 0 2px;\n  }\n\n  .DayPicker-Body, .DayPicker-Week {\n    width: 100%;\n  }\n\n  .DayPicker-Caption {\n    line-height: 40px;\n    height: 40px;\n    font-size: 16px;\n    font-weight: 800;\n\n    >div {\n      margin: 0 auto;\n      width: 80%;\n    }\n  }\n\n  .DayPicker-Day {\n    min-width: 40px;\n    background-color: ", ";\n    cursor: pointer;\n    border: none;\n    font-weight: 800;\n    padding: 10px 0;\n\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n\n    +* {\n      border-left: 1px;\n    }\n\n    abbr {\n      text-decoration: none;\n    }\n  }\n\n  .DayPicker-Day--today, .DayPicker-Day--today.DayPicker-Day--outside {\n    font-weight: 800;\n    color: ", ";\n    background-color: ", ";\n  }\n\n  .DayPicker-Day--outside {\n    color: ", ";\n    background-color: $", ";\n  }\n\n  .DayPicker-Day--disabled, .DayPicker-Day--disabled:hover {\n    color: ", ";\n    background-color: ", ";\n    cursor: default;\n  }\n\n  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {\n    background-color: ", ";\n    color: ", ";\n    font-weight: 800;\n  }\n\n  .DayPicker-Day--selected.DayPicker-Day--disabled:not(.DayPicker-Day--outside) {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDayPicker = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.shadows.depth1;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.text.color;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.white;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.disabled.input;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.text.color;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.text.color;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.disabled.border;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.disabled.disabled;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.white;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.disabled.disabled;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.white;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.primary;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.colors.white;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.colors.primary;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.colors.white;
}, _dayPickerClassic.default);

StyledDayPicker.defaultProps = {
  theme: _base.default
};
var _default = StyledDayPicker;
exports.default = _default;