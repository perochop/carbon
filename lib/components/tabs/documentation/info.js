"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "Tabs component"), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "Import the component:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import { Tabs, Tab } from "carbon-react/lib/components/tabs"'), _react.default.createElement("p", null, "To render Tabs component:"), _react.default.createElement(_storybookInfo.StoryCodeBlock, null, '<Tabs>', '  <Tab title="Title 1" tabId="uniqueId1">', '    <Textbox />', '    <Textbox />', '  </Tab>', '  <Tab title="Title 2" tabId="uniqueId2">', '    <Date />', '  <Textbox />', '  </Tab>', '</Tabs>'), _react.default.createElement("p", null, "Optionally, you can pass", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "renderHiddenTabs"), "prop to the Tabs."), _react.default.createElement("p", null, "By default this is set to", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "true"), "and therefore all tabs will be rendered."), _react.default.createElement("p", null, "The selected tab will have a class of", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "selected"), "and all other tabs will have a class of", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "hidden"), "which sets their display to", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "none"), "."), _react.default.createElement("p", null, "Setting", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "renderHiddenTabs"), " to false will add a small performance improvement as all previously hidden tabs will not be rendered to the page."), _react.default.createElement("p", null, "If you are using the tab component within a form all tabs should be rendered so that form validation can work correctly."), _react.default.createElement("p", null, "The tabs widget also allows you to select a tab on page load. By default this is set to the first tab. To set a different tab on page load pass a tabId to the selectedTabId prop as shown in the example below."), _react.default.createElement("p", null, "To render a Tabs Widget with Options:"), _react.default.createElement(_storybookInfo.StoryCodeBlock, null, '<Tabs renderHiddenTabs={ false } selectedTabId="uniqueId2" >', '  <Tab title="Title 1" tabId="uniqueId1">', '    <Textbox />', '    <Textbox />', '  </Tab>', '  <Tab title="Title 2" tabId="uniqueId2">', '    <Date />', '    <Textbox />', '  </Tab>', '</Tabs>'));

var _default = info;
exports.default = _default;