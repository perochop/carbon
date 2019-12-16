"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sidebarCloseClassicStyle = exports.sidebarClassicStyle = void 0;

var _styledComponents = require("styled-components");

var _styleHelper = require("../../utils/helpers/style-helper");

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    color: rgba(0, 0, 0, 0.85);\n    top: 15px;\n    \n    &:hover {\n        color: #255BC7;\n    };\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        border-right: 1px solid #ccd6db;\n        box-shadow: 10px 0 15px rgba(0,0,0,.05);\n        left: 0;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        border-left: 1px solid #ccd6db;\n        box-shadow: -10px 0 15px rgba(0,0,0,.05);\n        right: 0;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-color: #e6ebed;\n    padding: 20px;\n    \n    ", "\n\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sidebarClassicStyle = function sidebarClassicStyle(_ref) {
  var theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject(), function (_ref2) {
    var position = _ref2.position;
    return position === 'right' && (0, _styledComponents.css)(_templateObject2());
  }, function (_ref3) {
    var position = _ref3.position;
    return position === 'left' && (0, _styledComponents.css)(_templateObject3());
  });
};

exports.sidebarClassicStyle = sidebarClassicStyle;

var sidebarCloseClassicStyle = function sidebarCloseClassicStyle(_ref4) {
  var theme = _ref4.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject4());
};

exports.sidebarCloseClassicStyle = sidebarCloseClassicStyle;