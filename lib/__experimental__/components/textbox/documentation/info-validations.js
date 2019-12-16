"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement(_storybookInfo.StoryHeader, null, "Textbox Component Validations"), _react.default.createElement("p", null, "Type \"error\" to show an error message."), _react.default.createElement("p", null, "Type \"warning\" to show a warning message."), _react.default.createElement("p", null, "Type at least 12 characters to hide the info message."));

var _default = info;
exports.default = _default;