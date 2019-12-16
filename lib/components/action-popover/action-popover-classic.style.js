"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuButtonClassic = exports.MenuItemClassic = exports.MenuClassic = void 0;

var _styledComponents = require("styled-components");

var _styleHelper = require("../../utils/helpers/style-helper");

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  &:focus {\n    outline: 1px solid #255BC7;\n  }\n\n  &:hover,\n  &:focus {\n    > span {\n      color: #255BC7;\n    }\n  }\n\n  > span {\n    ", "\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  &:focus {\n    outline: none;\n    box-shadow: inset 0px 0px 0px 1px #255BC7;\n  }\n\n  line-height: 35px;\n  padding: 0 15px 0 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: 0 10px 10px 0 rgba(0, 20, 29, 0.1),\n    0 5px 5px 0 rgba(0, 20, 29, 0.2);\n  padding: 5px 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MenuClassic = function MenuClassic(_ref) {
  var theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject());
};

exports.MenuClassic = MenuClassic;

var MenuItemClassic = function MenuItemClassic(_ref2) {
  var theme = _ref2.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject2());
};

exports.MenuItemClassic = MenuItemClassic;

var MenuButtonClassic = function MenuButtonClassic(_ref3) {
  var theme = _ref3.theme,
      isOpen = _ref3.isOpen;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject3(), isOpen && 'color: #255BC7');
};

exports.MenuButtonClassic = MenuButtonClassic;