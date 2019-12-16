"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement(_storybookInfo.StoryHeader, null, "Switch Component Validations"), _react.default.createElement("p", null, "Check then uncheck, or tab over, the first switch to show an error icon."), _react.default.createElement("p", null, "Check then uncheck, or tab over, the second switch to show a warning icon."), _react.default.createElement("p", null, "Check then uncheck, or tab over, the third switch to show an info icon."));

var _default = info;
exports.default = _default;