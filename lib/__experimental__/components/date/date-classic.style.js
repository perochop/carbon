"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _styleHelper = require("../../../utils/helpers/style-helper");

var _inputPresentation = _interopRequireDefault(require("../input/input-presentation.style"));

var _inputIconToggle = _interopRequireDefault(require("../input-icon-toggle/input-icon-toggle.style"));

var _icon = _interopRequireDefault(require("../../../components/icon/icon.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  & ", " {\n    width: 125px;\n    \n    &:focus {\n      & ", " {\n        background-color: #1e499f;\n        border-color: #1e499f;\n      }\n      ", " {\n        color: #FFFFFF;\n      }\n    }\n    &:hover {\n      & ", " {\n        background-color: #255BC7;\n        border-color: #255BC7; \n      }\n      ", " {\n        color: #FFFFFF;\n      }\n    }\n  }\n\n  &&& ", " {\n    border-left: 1px solid #bfccd2;\n    box-sizing: border-box;\n    width: 31px;\n    &:hover {\n      background-color: #1e499f;\n      border-color: #1e499f;  \n      ", " {\n        color: #FFFFFF;\n      }\n    }\n  }\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var dateClassicStyle = function dateClassicStyle(_ref) {
  var theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject(), _inputPresentation.default, _inputIconToggle.default, _icon.default, _inputIconToggle.default, _icon.default, _inputIconToggle.default, _icon.default);
};

var _default = dateClassicStyle;
exports.default = _default;