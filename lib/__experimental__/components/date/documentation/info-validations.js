"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement(_storybookInfo.StoryHeader, null, "Date Input Component Validations"), _react.default.createElement("p", null, "Select 01/04/2019 to display additional error message."), _react.default.createElement("p", null, "Select 02/04/2019 to display a warning message."), _react.default.createElement("p", null, "Select 03/04/2019 to display an info message."));

var _default = info;
exports.default = _default;