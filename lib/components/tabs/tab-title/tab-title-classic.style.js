"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _styleHelper = require("../../../utils/helpers/style-helper");

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    border-bottom-color: #D63F40;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    border-bottom-color: #FF7D00;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      border-right-color: #D63F40;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    border-right-color: #FF7D00;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      border-right-color: #1963f6;\n      background-color: #fff;\n\n      &:hover {\n        background-color: #fff;\n      }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background-color: #f5f6f7;\n    border-bottom: 0px;\n    border-right: 2px solid #ccd6da;\n\n    &:hover {\n      border-right-color: #1963f6;\n      background: #004b87;\n    }\n\n    ", "\n\n    ", "\n\n    ", "\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background-color: #fff;\n    border-bottom-color: #1963f6;\n\n    &:focus {\n      outline: none;\n      box-shadow: 0 0 6px rgba(37, 91, 199, 0.6);\n    }\n\n    &:hover {\n      background: #fff;\n      border-bottom-color: #004b87;\n      \n      color: #003349;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    &:focus {\n      background: #004b87;\n      border-bottom-color: #004b87;\n      color: #fff;\n      outline: none;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: #f5f6f7;\n  border-bottom: 2px solid #ccd6da;\n  color: #003349;\n\n  &:hover {\n    background: #004b87;\n    border-bottom-color: #004b87;\n    color: #fff;\n    outline: none;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(_ref) {
  var theme = _ref.theme,
      tabHasWarning = _ref.tabHasWarning,
      tabHasError = _ref.tabHasError,
      isTabSelected = _ref.isTabSelected,
      position = _ref.position;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject(), !isTabSelected && (0, _styledComponents.css)(_templateObject2()), isTabSelected && (0, _styledComponents.css)(_templateObject3()), position === 'left' && (0, _styledComponents.css)(_templateObject4(), isTabSelected && (0, _styledComponents.css)(_templateObject5()), tabHasWarning && (0, _styledComponents.css)(_templateObject6()), tabHasError && (0, _styledComponents.css)(_templateObject7())), tabHasWarning && (0, _styledComponents.css)(_templateObject8()), tabHasError && (0, _styledComponents.css)(_templateObject9()));
};

exports.default = _default;