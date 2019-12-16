"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classicToastContentStyle = exports.classicToastTypeStyle = exports.classicToastStyle = void 0;

var _styledComponents = require("styled-components");

var _styleHelper = require("../../utils/helpers/style-helper");

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 15px 20px 15px 50px;\n  white-space: pre-wrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  position: fixed;\n  right: 30px;\n  top: 0;\n  width: 300px;\n  z-index: 2001;\n  box-shadow: 0 15px 20px 0 rgba(2,18,36, 0.2);\n  border: none;\n  border-radius: 0px;\n  background-color: ", ";\n\n  &.toast-appear,\n  &.toast-enter {\n    opacity: 0;\n    margin-top: -100px;\n  }\n\n  &.toast-appear.toast-appear-active,\n  &.toast-enter.toast-enter-active {\n    opacity: 1;\n    margin-top: 30px;\n    transition: all 300ms 1000ms cubic-bezier(0.250, 0.250, 0.000, 1.500);\n  }\n\n  &.toast-exit.toast-exit-active {\n    opacity: 0;\n    right: -360px;\n    transition: all 300ms cubic-bezier(0.960, -0.335, 0.750, 0.750);\n  }\n\n  strong {\n    color: ", ";\n  }\n\n  .carbon-toast__close {\n    color: ", ";\n  }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: -1px;\n  width: 31px;\n  background-color: ", ";\n  border-radius: 0;\n  \n  svg {\n    height: 24px;\n    margin-top: -12px;\n    width: 30px;\n\n    .carbon-icon__svg-group {\n      fill: #fff;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var colors = {
  warning: {
    color: '#FF7D00',
    backgroundColor: '#FFF8F2'
  },
  default: {
    color: '#335B6D',
    backgroundColor: '#335B6D'
  },
  error: {
    color: '#c7384f',
    backgroundColor: '#FDF5F5'
  },
  info: {
    color: '#1573E6',
    backgroundColor: '#F3F8FE'
  },
  new: {
    color: '#663399',
    backgroundColor: '#F7F5FA'
  },
  success: {
    color: '#50B848',
    backgroundColor: '#F6FBF6'
  },
  help: {
    color: '#FFAB00',
    backgroundColor: '#FFFBF2'
  },
  maintenance: {
    color: '#FF7D00',
    backgroundColor: '#FFF8F2'
  }
};

var classicToastTypeStyle = function classicToastTypeStyle(_ref) {
  var theme = _ref.theme,
      variant = _ref.variant;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject(), colors[variant].color);
};

exports.classicToastTypeStyle = classicToastTypeStyle;

var classicToastStyle = function classicToastStyle(_ref2) {
  var theme = _ref2.theme,
      variant = _ref2.variant;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject2(), colors[variant].backgroundColor, colors[variant].color, colors[variant].color);
};

exports.classicToastStyle = classicToastStyle;

var classicToastContentStyle = function classicToastContentStyle(_ref3) {
  var theme = _ref3.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject3());
};

exports.classicToastContentStyle = classicToastContentStyle;