"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "Checkbox component"), _react.default.createElement(_storybookInfo.StoryHeader, null, " Implementation"), _react.default.createElement(_storybookInfo.StoryCode, null, 'import Checkbox from "carbon-react/lib/components/checkbox"'), _react.default.createElement("p", null, "To render a Checkbox"), _react.default.createElement(_storybookInfo.StoryCode, null, '<Checkbox name="myCheckbox" />'));

var _default = info;
exports.default = _default;