"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _messageClassicThemeColors = _interopRequireDefault(require("./message-classic-theme-colors"));

var _styleHelper = require("../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    border: none;\n    background-color: ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(_ref) {
  var theme = _ref.theme,
      variant = _ref.variant;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject(), _messageClassicThemeColors.default[variant].backgroundColor, function (_ref2) {
    var roundedCorners = _ref2.roundedCorners,
        border = _ref2.border;
    return roundedCorners && border ? '3px;' : '0px;';
  }, function (_ref3) {
    var border = _ref3.border;
    return border && (0, _styledComponents.css)(_templateObject2(), _messageClassicThemeColors.default[variant].borderColor);
  }, function (_ref4) {
    var transparent = _ref4.transparent;
    return transparent && (0, _styledComponents.css)(_templateObject3(), _messageClassicThemeColors.default.transparent.backgroundColor);
  });
};

exports.default = _default;