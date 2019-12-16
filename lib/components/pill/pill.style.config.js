"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(require("../../style/themes/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colors = _base.default.colors,
    pill = _base.default.pill;

var _default = function _default(theme) {
  return {
    status: {
      neutral: {
        color: pill.neutral,
        buttonFocus: pill.neutralBackgroundFocus
      },
      negative: {
        color: colors.error,
        buttonFocus: pill.errorButtonFocus
      },
      warning: {
        color: pill.warning,
        buttonFocus: pill.warningButtonFocus
      },
      positive: {
        color: colors.secondary,
        buttonFocus: colors.tertiary
      }
    },
    tag: {
      primary: {
        color: theme.colors.primary,
        buttonFocus: theme.colors.secondary
      }
    },
    hoverColor: colors.white,
    boxShadow: colors.focus
  };
};

exports.default = _default;