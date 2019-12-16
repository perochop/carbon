"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var infoValidations = _react.default.createElement("div", null, _react.default.createElement(_storybookInfo.StoryHeader, null, "Radio Button Component Validations"), _react.default.createElement("p", null, "Click on the first radio button to see an error icon."), _react.default.createElement("p", null, "Click on the second radio button to see a warning icon."), _react.default.createElement("p", null, "Click on the third radio button to see an info icon."));

var _default = infoValidations;
exports.default = _default;