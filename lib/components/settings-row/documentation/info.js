"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var code = "\n<SettingsRow title=\"My Setting\" description=\"My description\">\n  <Checkbox label=\"Enable my setting\" />\n  <span>Other content to go with input</span>\n</SettingsRow>";

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, " Settings Row Component "), _react.default.createElement("p", null, " SettingsRow implements our UX design for settings pages."), _react.default.createElement("p", null, "It accepts a ", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "title"), " string to be displayed at the top left of the row. The", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "description"), " property accepts a string or JSX object to support flexible layout of elements (e.g. Links, bolded text, paragraphs) in the header column under the title. The default divider line at the bottom of the row may be disabled by setting ", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'divider={ false }', "."), "All children are rendered in the input column to the right of the header column."), _react.default.createElement(_storybookInfo.StoryHeader, null, " Implementation"), _react.default.createElement("p", null, "Import the component:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "import SettingsRow from ", '"carbon-react/lib/components/settings-row"'), _react.default.createElement("p", null, "To render the SettingsRow:"), _react.default.createElement(_storybookInfo.StoryCodeBlock, null, code));

var _default = info;
exports.default = _default;