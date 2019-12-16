"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "Split Button component"), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "Import the component:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "import SplitButton from ", '"react-carbon/lib/components/split-button"'), _react.default.createElement("p", null, "To render a SplitButton (developer can add any buttons to dropdown):"), _react.default.createElement(_storybookInfo.StoryCodeBlock, null, '<SplitButton text="Main Button" onClick={ clickHandler }>', '  <Button onClick="buttonClickHandler1">Button name 1</Button>', '  <Button onClick="buttonClickHandler2">Button name 2</Button>', '</SplitButton>'));

var _default = info;
exports.default = _default;