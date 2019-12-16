"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require("..");

var _default = function _default(palette) {
  return {
    name: _.THEMES.classic,
    colors: {
      base: palette.productGreen,
      primary: palette.productGreenShade(21),
      secondary: palette.productGreenShade(41),
      tertiary: palette.productGreenShade(61),
      // generic
      baseBlue: '#255BC7',
      greyDarkBlue50: '#8099a4',
      warning: palette.gold
    },
    disabled: {
      text: palette.slate,
      input: '#1e499f',
      disabled: '#b3c2c8',
      border: '#4d7080'
    }
  };
};

exports.default = _default;