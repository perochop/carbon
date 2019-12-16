"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = _react.default.createElement("div", null, _react.default.createElement("p", null, "A Pill component."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "In your file"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import Pill from "carbon-react/lib/components/pill.component"'), _react.default.createElement("p", null, "To render a Pill:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, '<Pill as="warning">My warning text</Pill>'), _react.default.createElement("p", null, "Additionally you can pass optional props to the Pill component"), _react.default.createElement("p", null, "\u2013 as: Customizes the appearence of the pill changing the colour (see the iconColorSets for possible values)."));

var _default = Info;
exports.default = _default;