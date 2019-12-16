"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = _react.default.createElement("div", null, _react.default.createElement("p", null, "A dropdown widget."), _react.default.createElement(_storybookInfo.StoryHeader, null, "How to use a dropdown in a component:"), _react.default.createElement("p", null, "In your file"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import Dropdown from "carbon-react/lib/components/dropdown";'), _react.default.createElement("p", null, "To render a Dropdown:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, '<Dropdown name="foo" options={ foo } onChange={ myChangeHandler } />'), _react.default.createElement("p", null, "The developer should pass data to the store as JSON. e.g."), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'foo: [{ id: 1, name: "Foo" }, { id: 2, name: "Bar" }]'));

var _default = Info;
exports.default = _default;