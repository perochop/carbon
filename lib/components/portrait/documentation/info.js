"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "Portrait Component"), _react.default.createElement("p", null, "Represents a person with their initials or an avatar."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "Import the component:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "import Portrait from ", '"react-carbon/lib/components/portrait"'), _react.default.createElement("p", null, "To render a portrait:"), _react.default.createElement(_storybookInfo.StoryCode, null, '<Portrait src="/my-image" alt="my image">'), _react.default.createElement("p", null, "To render a gravatar portrait:"), _react.default.createElement(_storybookInfo.StoryCode, null, '<Portrait gravatar="mygrav@email.com" />'), _react.default.createElement("p", null, "Portrait will be rendered if you pass a prop of", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "src"), " or", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "gravatar"), "as a source for portrait image."), _react.default.createElement("p", null, "To render Portrait without an image, pass only ", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "initials"), " prop."), _react.default.createElement("p", null, "You can pass a ", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "size"), " property to adjust the size of the portrait. The default value is medium."));

var _default = info;
exports.default = _default;