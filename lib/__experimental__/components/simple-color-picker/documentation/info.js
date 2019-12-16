"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "Simple Color Picker"), _react.default.createElement("p", null, "A component that displays squares with color samples that you can choose from."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "Import the component:"), _react.default.createElement(_storybookInfo.StoryCodeBlock, {
  padded: true
}, // eslint-disable-next-line max-len
'import { SimpleColorPicker, SimpleColor } from "carbon-react/lib/__experimental__/components/simple-color-picker"'), _react.default.createElement("p", null, "To render the SimpleColorPicker:"), _react.default.createElement(_storybookInfo.StoryCodeBlock, {
  padded: true
}, '<SimpleColorPicker name="colorPicker" legend="Pick a colour" onChange={ onChange }>', "  <SimpleColor color='#00A376' aria-label='green' defaultChecked />", "  <SimpleColor color='#0073C1' aria-label='blue' />", '</SimpleColorPicker>'));

var _default = info;
exports.default = _default;