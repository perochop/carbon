"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = _react.default.createElement("div", null, _react.default.createElement("p", null, "A Flash widget."), _react.default.createElement(_storybookInfo.StoryHeader, null, "How to use the Flash component:"), _react.default.createElement("p", null, "Flash is rendered in two sections: a ventral message 'flash', and a dorsal coloured 'slider'."), _react.default.createElement("p", null, "In your file"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import Flash from "carbon-react/lib/components/flash";'), _react.default.createElement("p", null, "To render a Flash, setup open and cancel handlers in your view to trigger the message on and off:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, '<Flash open={ openStatus } onDismiss={ myOnDismiss } message="Alert!" />'), _react.default.createElement("p", null, "By default, the flash renders with a clickable close icon that hooks up with the onDismiss unction."), _react.default.createElement("p", null, "To instead have the flash disappear after a given time period, pass a prop of timeout in milliseconds."), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, '<Flash open={ openStatus } onDismiss={ myOnDismiss } message="Alert!" timeout={ 2000 }/>'), _react.default.createElement("p", null, "The flash message can be formatted in the following ways:"), _react.default.createElement("ul", null, _react.default.createElement("li", null, 'A string: "Alert"'), _react.default.createElement("li", null, 'An array: ["Message One", "Message Two"]'), _react.default.createElement("li", null, "An object with description: ", _react.default.createElement(_storybookInfo.StoryCode, null, '{ description: "My description" }')), _react.default.createElement("li", null, _react.default.createElement("span", null, "An object of key/value pairs:"), _react.default.createElement(_storybookInfo.StoryCode, null, '{ first_name: "is required", last_name: "is required" }')), _react.default.createElement("li", null, "An object with description and nested key/value pairs:")), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, '{ description: { first_name: "is required", last_name: "is required" } }'), _react.default.createElement("p", null, "If a message is too long, it can be proxied to a dialog by adding 'more' in your description."), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'let message = "This is too long ::more:: This sentence is proxied to a dialog."'));

var _default = Info;
exports.default = _default;