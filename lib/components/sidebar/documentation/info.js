"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, " Sidebar Component "), _react.default.createElement("p", null, "A sidebar overlaid at the right or left of a page."), _react.default.createElement(_storybookInfo.StoryHeader, null, " Implementation"), _react.default.createElement("p", null, "Import the component:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "import ", '{ Sidebar }', " from ", '"carbon-react/lib/components/sidebar"'), _react.default.createElement("p", null, "or"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "import ", '{ Sidebar, SidebarHeader }', " from ", '"carbon-react/lib/components/sidebar"'), _react.default.createElement("p", null, "To render the Sidebar:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, " ", '<Sidebar onCancel={ closeSidebar } open={ false }/>'), _react.default.createElement("p", null, "Side bar is positioned on the right hand screen of the window by default. To position the sidebar on the left hand side pass ", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "position=", "'left'"), "to the component."), _react.default.createElement("p", null, "The background behind the sidebar is disabled by default. To allow the user to interact with all the UI pass", ' ', _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "enableBackgroundUI= ", '{ true }'), " to the component."));

var _default = info;
exports.default = _default;