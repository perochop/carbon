"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _styleHelper = require("../../utils/helpers/style-helper");

var _icon = _interopRequireDefault(require("../icon/icon.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      pointer-events: none;\n\n      &:hover {\n        text-decoration: none;\n        cursor: default;\n        ", "\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-weight: bold;\n    text-decoration: none;\n    ", "\n  \n    &:hover {\n      text-decoration: underline;\n      cursor: pointer;\n      ", "\n    }\n\n    &:focus {\n      outline: none;\n    }\n\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function addStyle(color) {
  return "\n    color: ".concat(color, ";\n    ").concat(_icon.default, " {\n      color: ").concat(color, ";\n    }\n  ");
}

var _default = function _default(_ref) {
  var disabled = _ref.disabled,
      theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject(), addStyle('#255BC7'), addStyle('#004B87'), disabled && (0, _styledComponents.css)(_templateObject2(), addStyle('#255BC7')));
};

exports.default = _default;