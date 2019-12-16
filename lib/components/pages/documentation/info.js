"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = _react.default.createElement("div", null, _react.default.createElement("p", null, "A Pages component."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "In your file"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import pages from "carbon-react/lib/components/pages.component"'), _react.default.createElement("p", null, "To render a Pages:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, '<Pages pageIndex="0"><Page></Page></Pages>'), _react.default.createElement("p", null, "Additionally you can pass optional props to the Pages component"));

var _default = Info;
exports.default = _default;