"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = _react.default.createElement("div", null, _react.default.createElement("p", null, "A Button component."), _react.default.createElement(_storybookInfo.StoryHeader, null, "How to use the Button component:"), _react.default.createElement("p", null, 'Button is rendered as one of "primary", "secondary", "tertiary", "destructive", "darkBacground"'), _react.default.createElement("p", null, "In your file"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import Button from "carbon-react/lib/components/button";'), _react.default.createElement("p", null, "To render a Button:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, '<Button>Save</Button>'), _react.default.createElement("p", null, 'By default, the Button renders as with the color and size variants of "secondary" and "medium" size'), _react.default.createElement("p", null, "To instead have the Button render with a different color and/or size variant, pass in a value to the relevant prop as below."), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, '<Button as="primary" size="large" />'), _react.default.createElement("p", null, "The Button can also be rendered with the following:"), _react.default.createElement("ul", null, _react.default.createElement("li", null, 'with a "subtext" string, only if the size is set to large'), _react.default.createElement("li", null, 'disabled by passing a boolean to the "disabled" prop'), _react.default.createElement("li", null, 'with a child Icon component when the "iconType" and "iconPosition" props are passed in:', _react.default.createElement("ul", null, _react.default.createElement("li", null, 'setting the position to "before" will render the Icon before the Button text'), _react.default.createElement("li", null, 'setting the position to "after" will render the Icon after the Button text')))));

var _default = Info;
exports.default = _default;