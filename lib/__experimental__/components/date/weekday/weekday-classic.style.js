"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _styleHelper = require("../../../../utils/helpers/style-helper");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: rgba(0, 0, 0, .6);\n  font-size: 14px;\n  font-weight: 700;\n  text-transform: capitalize;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 0 3px 3px 3px;\n  min-width: auto;\n  padding: 10px 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(_ref) {
  var theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject(), theme.colors.white, theme.colors.white);
};

exports.default = _default;