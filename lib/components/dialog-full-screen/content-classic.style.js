"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _styleHelper = require("../../utils/helpers/style-helper");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 30px;\n  padding-bottom: 30px;\n\n  .carbon-app-wrapper {\n    max-width: 1600px;\n    padding: 0 40px;\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(_ref) {
  var theme = _ref.theme,
      hasHeader = _ref.hasHeader;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject(), !hasHeader && "\n    padding-top: 0;\n    margin-top: 0;\n\n    .carbon-app-wrapper {\n      max-width: 100%;\n      padding: 0;\n      height: 106px;\n    }\n  ");
};

exports.default = _default;