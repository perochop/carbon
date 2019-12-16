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
  var data = _taggedTemplateLiteral(["\n  background-color: #003349;\n  border-radius: 24px;\n  height: 28px;\n  width: 55px;\n\n  &::before {\n    border-radius: 50%;\n    box-shadow: 0 2px 3px 0 rgba(0,0,0,.3);\n    height: 23px;\n    top: 2px;\n    transition: transform .25s ease;\n    width: 23px;\n  }\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(_ref) {
  var checked = _ref.checked,
      isLoading = _ref.isLoading,
      theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject(), checked && "\n    background-color: ".concat(theme.colors.baseBlue, ";\n\n    &::before {\n        transform: translateX(28px);\n      }\n  "), isLoading && "\n    opacity: 0.6;\n  ");
};

exports.default = _default;