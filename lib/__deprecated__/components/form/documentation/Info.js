"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = _react.default.createElement("div", null, _react.default.createElement("p", null, "A Form widget."), _react.default.createElement(_storybookInfo.StoryHeader, null, "How to use a Form in a component:"), _react.default.createElement("p", null, "In your file"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import Form from "carbon-react/lib/components/form";'), _react.default.createElement("p", null, "To render a Form:"), _react.default.createElement(_storybookInfo.StoryCodeBlock, null, '<Form>', '  <Textbox />', '  <Textbox />', '  <Date />', '</Form>'), _react.default.createElement("p", null, "Form provides the ability to hook into the form handle submission method."), _react.default.createElement("p", null, "Passing ", _react.default.createElement(_storybookInfo.StoryCode, null, "afterFormValidation"), " or ", _react.default.createElement(_storybookInfo.StoryCode, null, "beforeFormValidation"), " lets you add custom logic and ", _react.default.createElement(_storybookInfo.StoryCode, null, "ev.preventDefault()"), "."));

var _default = Info;
exports.default = _default;