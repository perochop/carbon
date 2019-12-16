"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement(_storybookInfo.StoryHeader, null, "Textarea Component"), _react.default.createElement("p", null, "Captures more than one line of text."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "import Textarea from ", 'carbon-react/lib/components/textarea'), _react.default.createElement("p", null, "To render a Textarea:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, '<Textarea name="myTextarea" />'));

var _default = info;
exports.default = _default;