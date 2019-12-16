"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeColors = makeColors;
exports.default = void 0;

var _icon = _interopRequireDefault(require("../icon/icon.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeColors(color) {
  return "\n  color: ".concat(color, ";\n  ").concat(_icon.default, " {\n    color: ").concat(color, ";\n  }\n  ");
}

var _default = function _default(_ref, isDisabled) {
  var colors = _ref.colors,
      disabled = _ref.disabled;
  return {
    primary: "\n    background: ".concat(colors.primary, ";\n    border-color: transparent;\n    color: ").concat(colors.white, ";\n    &:hover {\n      background: ").concat(colors.secondary, ";\n    }\n\n    ").concat(isDisabled ? "\n      background: ".concat(disabled.button, ";\n      color: ").concat(disabled.text, ";\n      &:hover {\n        background: ").concat(disabled.button, ";\n        border-color: ").concat(disabled.button, ";\n        color: ").concat(disabled.text, ";\n      }\n    ") : '', "\n  "),
    secondary: "\n      background: transparent;\n      border-color: ".concat(colors.primary, ";\n      color: ").concat(colors.primary, ";\n      &:hover {\n        background: ").concat(colors.secondary, ";\n        border-color: ").concat(colors.secondary, ";\n       ").concat(makeColors(colors.white), "\n      }\n\n      ").concat(isDisabled ? "\n        border-color: ".concat(disabled.button, ";\n        color: ").concat(disabled.text, ";\n        &:hover {\n          background: transparent\n          border-color: ").concat(disabled.button, ";\n          ").concat(makeColors(disabled.text), "\n        }\n    ") : '', "\n  "),
    tertiary: "\n    background: transparent;\n    border-color: transparent;\n    color: ".concat(colors.primary, ";\n    &:hover {\n      ").concat(makeColors(colors.secondary), "\n    }\n\n    ").concat(isDisabled ? "\n      color: ".concat(disabled.text, ";\n      &:hover {\n        ").concat(makeColors(disabled.text), "\n      }\n    ") : '', "\n  "),
    destructive: "\n    background: ".concat(colors.error, ";\n    border-color: transparent;\n    color: ").concat(colors.white, ";\n    &:hover {\n      background: ").concat(colors.destructive.hover, ";\n    }\n\n    ").concat(isDisabled ? "\n      background: ".concat(disabled.button, ";\n      color: ").concat(disabled.text, ";\n      &:hover {\n        background: ").concat(disabled.button, ";\n        color: ").concat(disabled.text, ";\n      }\n    ") : '', "\n  "),
    darkBackground: "\n    background: ".concat(colors.white, ";\n    border-color: transparent;\n    color: ").concat(colors.primary, ";\n    &:hover {\n      background: ").concat(colors.secondary, ";\n      ").concat(makeColors(colors.white), "\n    }\n\n    ").concat(isDisabled ? "\n      background: ".concat(disabled.button, ";\n      color: ").concat(disabled.text, ";\n      &:hover {\n        background: ").concat(disabled.button, ";\n        ").concat(makeColors(disabled.text), "\n      }\n    ") : '', "\n  ")
  };
};

exports.default = _default;