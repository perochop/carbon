"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMainSplitButtonClassicStyles = exports.getSplitButtonToggleClassicStyles = exports.getSplitButtonChildrenClassicStyles = void 0;

var _styledComponents = require("styled-components");

var _button = _interopRequireDefault(require("../button/button.style"));

var _styleHelper = require("../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    border-left: 1px solid #1e499f;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    &:active {\n      background-color: #1963f6;\n      border-color: #1963f6;\n    }\n\n    && {\n      background-color: #1e499f;\n      border-color: #1e499f;\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  z-index: 20;\n\n  ", "\n\n  ", "\n\n  &&,\n  ", " + &:focus {\n    margin-left: 0;\n    padding: 0 5px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  & > ", ":focus {\n    border: 1px solid #1e499f;\n    margin: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  max-width: 100%;\n  min-width: 100%;\n  width: 100%;\n  white-space: normal;\n\n  ", " {\n    background-color: ", ";\n    border: 1px solid ", ";\n    color: #FFF;\n    height: 31px;\n    letter-spacing: 0;\n    padding: 0 18px;\n\n    &:focus,\n    &:hover {\n      background-color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var classicColors = {
  active: '#1963f6',
  primary: '#255bc7',
  secondary: '#1e499f',
  tertiary: '#163777'
};

var getSplitButtonChildrenClassicStyles = function getSplitButtonChildrenClassicStyles(_ref) {
  var theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) ? (0, _styledComponents.css)(_templateObject(), classicColors.secondary, _button.default, classicColors.secondary, classicColors.secondary, classicColors.tertiary) : '';
};

exports.getSplitButtonChildrenClassicStyles = getSplitButtonChildrenClassicStyles;

var getMainSplitButtonClassicStyles = function getMainSplitButtonClassicStyles(_ref2) {
  var theme = _ref2.theme;
  return (0, _styleHelper.isClassic)(theme) ? (0, _styledComponents.css)(_templateObject2(), _button.default) : '';
};

exports.getMainSplitButtonClassicStyles = getMainSplitButtonClassicStyles;

var getSplitButtonToggleClassicStyles = function getSplitButtonToggleClassicStyles(_ref3) {
  var theme = _ref3.theme,
      disabled = _ref3.disabled,
      displayed = _ref3.displayed,
      buttonType = _ref3.buttonType;
  return (0, _styleHelper.isClassic)(theme) ? (0, _styledComponents.css)(_templateObject3(), !disabled && displayed ? (0, _styledComponents.css)(_templateObject4()) : '', !disabled && buttonType === 'primary' ? (0, _styledComponents.css)(_templateObject5()) : '', _button.default) : '';
};

exports.getSplitButtonToggleClassicStyles = getSplitButtonToggleClassicStyles;