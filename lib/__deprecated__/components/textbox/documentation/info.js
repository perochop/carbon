"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "Textbox component"), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement(_storybookInfo.StoryCodeBlock, null, "import Textbox from ", '"carbon-react/lib/components/textbox"'), _react.default.createElement("p", null, "To render a", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "Textbox")), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, '<Textbox name="myTextbox" />'));

var _default = info;
exports.default = _default;