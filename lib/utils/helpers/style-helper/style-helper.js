"use strict";

require("core-js/modules/es.function.name");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isClassic = isClassic;

var _themes = require("../../../style/themes");

// eslint-disable-next-line import/prefer-default-export
function isClassic(_ref) {
  var name = _ref.name;
  return name === _themes.THEMES.classic;
}