"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _splitButton = _interopRequireDefault(require("../split-button/split-button.style"));

var _button = _interopRequireDefault(require("../button/button.style"));

var _splitButtonChildren = _interopRequireDefault(require("../split-button/split-button-children.style"));

var _styleHelper = require("../../utils/helpers/style-helper");

var _icon = _interopRequireDefault(require("../icon/icon.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    ", " > ", " {\n      background-color: transparent;\n      box-shadow: none;\n      border: 1px solid transparent;\n      color: #335c6d;\n\n      &:hover,\n      &:active,\n      &:focus {\n        background-color: transparent;\n        box-shadow: none;\n        border-color: transparent;\n        color: #335c6d;\n      }\n\n      ", " {\n        color: #335c6d;\n      }\n    }\n\n    ", " {\n      background-color: #FFF;\n      box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);\n\n      ", " {\n        color: #335c6d;\n        background: #FFF;\n\n        &:focus {\n          background-color: #FFF;\n          color: #335c6d;\n          box-shadow: none;\n          outline: 0;\n        }\n\n        &:hover,\n        &:active {\n          background-color: #e6ebed;\n          color: #4782F7;\n        }\n      }\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    ", " > ", " {\n      background-color: #1e499f;\n      border-color: #1e499f;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", " > ", ",\n  ", " > ", ":focus {\n    margin: 0;\n    height: 31px;\n    padding: 6px 14px 7px 18px;\n  }\n\n  ", " > ", ":focus {\n    border-color: #1e499f;\n  }\n\n  ", "\n\n  ", " {\n    max-width: none;\n    width: auto;\n    padding-top: 5px;\n    top: 29px;\n    z-index: 12;\n\n    ", " {\n      border: none;\n      border-radius: 0;\n      color: #fff;\n      display: block;\n      margin-left: 0;\n      min-width: 100%;\n      padding-bottom: 5px;\n      padding-top: 5px;\n\n      &:hover {\n        background-color: #163777;\n      }\n    }\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getMultiActionButtonClassicStyles = function getMultiActionButtonClassicStyles(_ref) {
  var disabled = _ref.disabled,
      displayed = _ref.displayed,
      theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) ? (0, _styledComponents.css)(_templateObject(), _splitButton.default, _button.default, _splitButton.default, _button.default, _splitButton.default, _button.default, !disabled && displayed && (0, _styledComponents.css)(_templateObject2(), _splitButton.default, _button.default), _splitButtonChildren.default, _button.default, function (_ref2) {
    var buttonType = _ref2.buttonType;
    return buttonType === 'transparent' && (0, _styledComponents.css)(_templateObject3(), _splitButton.default, _button.default, _icon.default, _splitButtonChildren.default, _button.default);
  }) : '';
};

var _default = getMultiActionButtonClassicStyles;
exports.default = _default;