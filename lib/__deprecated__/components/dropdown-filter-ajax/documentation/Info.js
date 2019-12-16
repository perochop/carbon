"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = _react.default.createElement("div", null, _react.default.createElement("p", null, "A dropdown filter widget using ajax."), _react.default.createElement(_storybookInfo.StoryHeader, null, "How to use a dropdown in a component:"), _react.default.createElement("p", null, "In your file"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import DropdownFilterAjax from "carbon-react/lib/components/dropdown-filter-ajax";'), _react.default.createElement("p", null, "To render a DropdownFilterAjax:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, '<DropdownFilter name="foo" path="/foo" onChange={ myChangeHandler } />'), _react.default.createElement("p", null, "In 'suggest' mode, the dropdown only shows once a filter term has been entered."), _react.default.createElement("p", null, "You can define a function using the 'create' prop, which allows you to trigger events to create new items."), _react.default.createElement("p", null, "You can define the number of rows returned by the ajax request using the property rowsPerRequest."));

var _default = Info;
exports.default = _default;