"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.classicStyleConfig = void 0;

var _styledComponents = require("styled-components");

var _icon = _interopRequireDefault(require("../icon/icon.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n          background-color: transparent;\n          color: ", ";\n        "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n          background-color: ", ";\n          color: ", ";\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      padding: 2px 19px 2px 7px;\n\n      button {\n        -webkit-appearance: none;\n        border-radius: 0 9px 9px 0;\n        border: none;\n        bottom: 0;\n        font-size: 100%;\n        margin: 0;\n        padding: 0;\n        position: absolute;\n        right: 0;\n        top: 0;\n        width: 17px;\n\n        ", "\n\n        ", "\n\n        &:hover {\n          cursor: pointer;\n          background-color: ", ";\n          color: ", ";\n        }\n        \n        ", " {\n          font-size: 14px;\n          margin-left: -1px;\n\n          &:before {\n            font-size: 9px;\n          }\n\n          &:hover,\n          &:focus {\n            color: ", ";\n          }\n        }\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      padding: 2px 7px;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      background-color: ", ";\n      color: #FFFFFF;\n\n      ", " {\n        color: #FFFFFF;\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 10px; \n    display: inline-block;\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 15px;\n    letter-spacing: 0.7px;\n    position: relative;\n    text-align: center;\n\n    .common-input & {\n      font-size: 13px;\n      line-height: 13px;\n    }\n   \n    border: 1px solid ", ";\n    color: ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var classicStyleConfig = {
  disabled: {
    color: '#CCD6DA'
  },
  default: {
    color: '#335B6D',
    hoverBackgroundColor: '#004b87',
    hoverColor: '#FFFFFF'
  },
  error: {
    color: '#C7384F',
    hoverBackgroundColor: '#004b87',
    hoverColor: '#FFFFFF'
  },
  help: {
    color: '#FFAB00',
    hoverBackgroundColor: '#004b87',
    hoverColor: '#FFFFFF'
  },
  info: {
    color: '#1573E6',
    hoverBackgroundColor: '#004b87',
    hoverColor: '#FFFFFF'
  },
  maintenance: {
    color: '#FF7D00',
    hoverBackgroundColor: '#004b87',
    hoverColor: '#FFFFFF'
  },
  warning: {
    color: '#FF7D00',
    hoverBackgroundColor: '#004b87',
    hoverColor: '#FFFFFF'
  },
  new: {
    color: '#663399',
    hoverBackgroundColor: '#004b87',
    hoverColor: '#FFFFFF'
  },
  success: {
    color: '#50B848',
    hoverBackgroundColor: '#004b87',
    hoverColor: '#FFFFFF'
  }
};
exports.classicStyleConfig = classicStyleConfig;

var _default = function _default(colorVariant, inFill, isDeletable) {
  var colorSet = classicStyleConfig[colorVariant];
  return (0, _styledComponents.css)(_templateObject(), colorSet.color, colorSet.color, colorVariant !== 'disabled' && "\n      ".concat(_icon.default, " {\n        &:hover,\n        &:focus {\n          cursor: pointer;\n        }\n      }\n    "), inFill && (0, _styledComponents.css)(_templateObject2(), colorSet.color, _icon.default), !isDeletable && (0, _styledComponents.css)(_templateObject3()), isDeletable && (0, _styledComponents.css)(_templateObject4(), inFill && (0, _styledComponents.css)(_templateObject5(), colorSet.color, colorSet.color), !inFill && (0, _styledComponents.css)(_templateObject6(), colorSet.color), colorSet.hoverBackgroundColor, colorSet.hoverColor, _icon.default, colorSet.hoverColor));
};

exports.default = _default;