"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require("..");

var _default = function _default(palette) {
  var atOpacity = palette.atOpacity,
      baseWithOpacity = atOpacity(palette.productBlue);
  return {
    name: _.THEMES.medium,
    colors: {
      base: palette.productBlue,
      primary: palette.productBlueShade(3),
      secondary: palette.productBlueShade(23),
      tertiary: palette.productBlueShade(43),
      whiteMix: palette.productBlueTint(90),
      withOpacity: baseWithOpacity(0.55),
      hoveredTabKeyline: palette.productBlueTint(30),
      disabled: palette.productBlueTint(40)
    }
  };
};

exports.default = _default;