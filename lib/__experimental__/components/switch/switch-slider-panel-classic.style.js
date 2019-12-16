"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _styleHelper = require("../../../utils/helpers/style-helper");

var _icon = _interopRequireDefault(require("../../../components/icon/icon.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      margin-right: 3px;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 5px;\n\n  ", " {\n    color: ", ";\n  }\n\n  &[type='off'] {\n    margin-right: 9px;\n    color: ", ";\n\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(_ref) {
  var isLoading = _ref.isLoading,
      theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject(), _icon.default, theme.colors.white, theme.colors.white, isLoading && (0, _styledComponents.css)(_templateObject2()));
};

exports.default = _default;