"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _inputIconToggle = _interopRequireDefault(require("../input-icon-toggle/input-icon-toggle.style"));

var _input = _interopRequireDefault(require("./input.style"));

var _icon = _interopRequireDefault(require("../../../components/icon/icon.style"));

var _styleHelper = require("../../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background: #d9e0e4;\n    border-color: #d9e0e4 !important;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    && {\n      border: 1px solid #255BC7;\n      outline: none;\n    }\n\n    ", " {\n      color: #FFFFFF;\n    }\n    ", ",\n    &:hover ", " {\n      background-color: #1e499f;\n      border-color: #1e499f !important;\n      color: #fff;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-color: #ccd6db;\n  box-shadow: none;\n  min-height: 31px;\n  padding-left: 6px;\n  padding-right: 6px;\n\n  ", " {\n    /* this is required for an IE11 fix: */\n    height: 27px;\n  }\n\n  &:hover {\n    border-color: #99adb6;\n    z-index: 2;\n\n    ", " {\n      background-color: #255bc7;\n      border-color: #255bc7;\n      color: #fff;\n    }\n    \n    ", ":hover {\n      background-color: #1e499f;\n      border-color: #1e499f;\n    }\n  }\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(_ref) {
  var disabled = _ref.disabled,
      hasFocus = _ref.hasFocus,
      theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject(), _input.default, _inputIconToggle.default, _inputIconToggle.default, hasFocus && (0, _styledComponents.css)(_templateObject2(), _icon.default, _inputIconToggle.default, _inputIconToggle.default), disabled && (0, _styledComponents.css)(_templateObject3()));
};

exports.default = _default;