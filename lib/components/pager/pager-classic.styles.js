"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PagerNavigationClassicStyles = exports.PagerContainerClassicStyles = void 0;

var _styledComponents = require("styled-components");

var _styleHelper = require("../../utils/helpers/style-helper");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  .carbon-number__input {\n    width: 35px;\n    height: 31px;\n    padding: 0;\n    margin: 0 4px;\n    line-height: 24px;\n    text-align: center;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 3px 16px;\n  font-size: 14px;\n  background-color: #F2F4F5;\n  .common-input__input {\n    &:active {\n      border-color: #265BC7;\n    }\n    &:hover, :focus {\n      border-color: #99adb6;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PagerContainerClassicStyles = function PagerContainerClassicStyles(_ref) {
  var theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject());
};

exports.PagerContainerClassicStyles = PagerContainerClassicStyles;

var PagerNavigationClassicStyles = function PagerNavigationClassicStyles(_ref2) {
  var theme = _ref2.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject2());
};

exports.PagerNavigationClassicStyles = PagerNavigationClassicStyles;