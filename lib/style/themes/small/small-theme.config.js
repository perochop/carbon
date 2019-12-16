"use strict";

require("core-js/modules/es.string.small");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require("..");

var _default = function _default(palette) {
  return {
    name: _.THEMES.small,
    colors: {
      base: palette.productGreen,
      primary: palette.productGreenShade(21),
      secondary: palette.productGreenShade(41),
      tertiary: palette.productGreenShade(61),
      whiteMix: palette.productGreenTint(90),
      hoveredTabKeyline: palette.productGreenTint(30),
      disabled: palette.productGreenTint(40)
    }
  };
};

exports.default = _default;