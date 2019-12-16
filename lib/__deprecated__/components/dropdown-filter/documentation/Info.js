"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = _react.default.createElement("div", null, _react.default.createElement("p", null, "A dropdown filter widget."), _react.default.createElement(_storybookInfo.StoryHeader, null, "How to use a dropdown in a component:"), _react.default.createElement("p", null, "In your file"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import DropdownFilter from "carbon-react/lib/components/dropdown-filter";'), _react.default.createElement("p", null, "To render a DropdownFilter:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, '<DropdownFilter name="foo" options={ foo } onChange={ myChangeHandler } />'), _react.default.createElement("p", null, "The developer should pass data to the store as JSON. e.g."), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'foo: [{ id: 1, name: "Foo" }, { id: 2, name: "Bar" }]'), _react.default.createElement("p", null, "When using the component in 'suggest' mode, the dropdown only shows once a filter term has been entered."), _react.default.createElement("p", null, "In 'freetext' mode, the component mimics 'suggest', but allows write-in text values as well as list options."), _react.default.createElement("p", null, "Specify an initial write-in value with the 'visibleValue' property."), _react.default.createElement("p", null, "Setting the 'freetextName' property adds a second hidden input for the write-in value."), _react.default.createElement("p", null, "Otherwise, the 'name' property is used for the option id."), _react.default.createElement("p", null, "You can define a function for the 'create' prop, which allows you to trigger events to create new items."));

var _default = Info;
exports.default = _default;