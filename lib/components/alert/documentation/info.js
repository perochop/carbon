"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "Alert component"), _react.default.createElement("p", null, "This component extends Dialog component"), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "Import the component:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "import Alert from ", '"carbon-react/lib/components/alert"'), _react.default.createElement("p", null, "To render the Alert"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, '<Alert onCancel={ customEventHandler } open={ false } />'), _react.default.createElement("p", null, "The component rendering the Alert must pass down a prop of", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "open"), "in order to open the alert."), _react.default.createElement("p", null, "You need to provide a custom cancel event handler to handle a close event."));

var _default = info;
exports.default = _default;