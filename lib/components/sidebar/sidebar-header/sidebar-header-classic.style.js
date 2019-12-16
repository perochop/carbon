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
  var data = _taggedTemplateLiteral(["\n    border-bottom: solid 4px #e4e9ec;\n    padding: 20px;\n    font-size: 14px;\n    font-weight: normal;\n    box-shadow: none;\n    color: rgba(0,0,0,.85);\n    width: 100%;\n    top: -20px;\n    margin-left: -20px;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sidebarHeaderClassicStyle = function sidebarHeaderClassicStyle(_ref) {
  var theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject());
};

var _default = sidebarHeaderClassicStyle;
exports.default = _default;