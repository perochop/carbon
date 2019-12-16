"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselSelectorLabelStyleClassic = exports.CarouselButtonStyleClassic = void 0;

var _styledComponents = require("styled-components");

var _styleHelper = require("../../utils/helpers/style-helper");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid #4C6F7F;\n  background: transparent;\n  width: 8px;\n  height: 8px;\n  margin: 0px 5px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 45px; \n  height: 45px;\n  background-color: #CCD6DA;\n  color: rgba(0,0,0, 0.85);\n\n  :hover{\n    background-color: #99ADB6;\n    color: #255BC7;\n    cursor: default;\n  }\n\n  &:focus {\n    outline: none;\n    border: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CarouselButtonStyleClassic = function CarouselButtonStyleClassic(_ref) {
  var theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject());
};

exports.CarouselButtonStyleClassic = CarouselButtonStyleClassic;

var CarouselSelectorLabelStyleClassic = function CarouselSelectorLabelStyleClassic(_ref2) {
  var theme = _ref2.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject2());
};

exports.CarouselSelectorLabelStyleClassic = CarouselSelectorLabelStyleClassic;