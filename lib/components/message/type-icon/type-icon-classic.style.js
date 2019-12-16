"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _messageClassicThemeColors = _interopRequireDefault(require("../message-classic-theme-colors"));

var _styleHelper = require("../../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    span {\n      &:before {\n        color: ", ";\n      }\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-radius: ", ";\n  background-color: ", ";\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(_ref) {
  var theme = _ref.theme,
      variant = _ref.variant,
      roundedCorners = _ref.roundedCorners;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject(), roundedCorners ? '3px 0 0 3px' : '0px', _messageClassicThemeColors.default[variant].main, function (_ref2) {
    var transparent = _ref2.transparent;
    return transparent && (0, _styledComponents.css)(_templateObject2(), _messageClassicThemeColors.default.transparent.backgroundColor, _messageClassicThemeColors.default[variant].main);
  });
};

exports.default = _default;