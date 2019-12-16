"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = _react.default.createElement("div", null, _react.default.createElement("p", null, "A Card component."), _react.default.createElement(_storybookInfo.StoryHeader, null, "How to use the Card component:"), _react.default.createElement("p", null, "In your file"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import Card from "carbon-react/lib/components/card";'), _react.default.createElement("p", null, "To render a simple Card:"), _react.default.createElement(_storybookInfo.StoryCodeBlock, {
  padded: true
}, '<Card>', '  content', '</Card>'), _react.default.createElement("p", null, "CardRow and CardColumn components could be used to position the content."), _react.default.createElement("p", null, "CardFooter component could be used to render the Card Footer."), _react.default.createElement(_storybookInfo.StoryCodeBlock, {
  padded: true
}, '<Card>', '  <CardRow>', '    <CardColumn>content1</CardColumn>', '    <CardColumn>content2</CardColumn>', '  </CardRow>', '  <CardFooter>', '    <CardColumn>footer content 1</CardColumn>', '    <CardColumn>footer content 2</CardColumn>', '  </CardFooter>', '</Card>'));

var _default = Info;
exports.default = _default;