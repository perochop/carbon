"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _styleHelper = require("../../../utils/helpers/style-helper");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .DayPicker {\n    margin-top: 0;\n    padding: 10px;\n    font-weight: 600;\n    color: ", ";\n  }\n\n  .DayPicker-Caption {\n    background-color: ", ";\n    color: rgba(0, 0, 0, .85);\n    font-weight: 600;\n    font-size: 14px;\n  }\n\n  .DayPicker-Day {\n    min-width: auto;\n    border-color: ", ";\n    border-style: solid;\n    border-width: 0 3px 3px 3px;\n    font-weight: 600;\n\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n  }\n\n  .DayPicker-Day--outside {\n    color: ", ";\n\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n  }\n\n  .DayPicker-Day--today, .DayPicker-Day--today.DayPicker-Day--outside {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  .DayPicker-Day--disabled, .DayPicker-Day--disabled:hover {\n    color: ", ";\n    background-color: ", ";\n    cursor: default;\n  }\n\n  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {\n    color: ", ";\n    background-color: ", ";\n    font-weight: 700;\n  }\n\n  .DayPicker-Day--selected.DayPicker-Day--disabled:not(.DayPicker-Day--outside) {\n    background-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(_ref) {
  var theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject(), theme.text.color, theme.colors.white, theme.colors.white, theme.disabled.input, theme.colors.white, theme.colors.greyDarkBlue50, theme.disabled.input, theme.colors.white, theme.disabled.border, theme.colors.white, theme.disabled.disabled, theme.colors.white, theme.colors.white, theme.colors.baseBlue, theme.colors.baseBlue);
};

exports.default = _default;