"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** Given a base color in hex will return its rgb values. */
var getRgbValues = function getRgbValues(baseColor) {
  return [parseInt(baseColor.substr(1, 2), 16), parseInt(baseColor.substr(3, 2), 16), parseInt(baseColor.substr(5, 2), 16)];
};

var _default = getRgbValues;
exports.default = _default;