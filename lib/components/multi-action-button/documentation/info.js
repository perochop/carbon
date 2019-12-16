"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "A MultiActionButton widget."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "In your file:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import MultiActionButton from "carbon-react/lib/components/multi-action-button";'), _react.default.createElement("p", null, "To render a MultiActionButton (developer can add any buttons to dropdown):"), _react.default.createElement(_storybookInfo.StoryCodeBlock, null, '<MultiActionButton text="Main Text">', '  <Button onClick="buttonClickHandler1">Button name 1</Button>', '  <Button onClick="buttonClickHandler2">Button name 2</Button>', '</MultiActionButton>'));

var _default = info;
exports.default = _default;