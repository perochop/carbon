"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "Preview Component"), _react.default.createElement("p", null, "Applies a preview loading state animation."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "Import the component:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "import Preview from ", '"react-carbon/lib/components/preview"'), _react.default.createElement("p", null, "You can set the custom height for the preview line by setting ", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "height"), " prop (e.g. 20px)."), _react.default.createElement("p", null, "You can also set the width of the component by setting ", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "width"), " prop (e.g. 50%)."));

var _default = info;
exports.default = _default;