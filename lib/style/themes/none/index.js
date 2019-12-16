"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _noneTheme = _interopRequireDefault(require("./none-theme.config"));

var _base = require("../base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _base.mergeWithBase)(_noneTheme.default);

exports.default = _default;