"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = _react.default.createElement("div", null, _react.default.createElement("p", null, "An Icon widget."), _react.default.createElement(_storybookInfo.StoryHeader, null, "How to use an Icon in a component:"), _react.default.createElement("p", null, "In your file"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import Icon from "carbon-react/lib/components/icon";'), _react.default.createElement("p", null, "To render an Icon:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, '<Icon type="foo" />'), _react.default.createElement("p", null, "'type' is a required prop"), _react.default.createElement("p", null, "This widget follows the ", _react.default.createElement("a", {
  href: "https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html#stateless-function-components"
}, "Stateless Functional Component"), " pattern."));

var _default = Info;
exports.default = _default;