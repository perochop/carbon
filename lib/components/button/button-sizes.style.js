"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var text = _ref.text;
  return {
    small: "\n    font-size: ".concat(text.size, ";\n    height: 32px;\n    padding-left: 16px;\n    padding-right: 16px;\n  "),
    medium: "\n    font-size: ".concat(text.size, ";\n    height: 40px;\n    padding-left: 24px;\n    padding-right: 24px;\n  "),
    large: "\n    font-size: 16px;\n    height: 48px;\n    padding-left: 32px;\n    padding-right: 32px;\n  "
  };
};

exports.default = _default;