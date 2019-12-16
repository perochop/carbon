"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = _react.default.createElement("div", null, _react.default.createElement(_storybookInfo.StoryHeader, null, "How to use the ActionPopover component"), _react.default.createElement("p", null, "Import the component"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import {ActionPopover, ActionPopoverItem, ActionPopoverDivider} from ', '"carbon-react/lib/components/action-popover";'), _react.default.createElement("p", null, "See the story source for an example on how to define a ActionPopover"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "ActionPopoverItem's can be disabled"), _react.default.createElement("li", null, "Use ActionPopoverDivider to display a divider"), _react.default.createElement("li", null, "ActionPopover and ActionPopoverItem have extensive keyboard support", _react.default.createElement("ul", null, _react.default.createElement("li", null, "ActionPopover", _react.default.createElement("ul", null, _react.default.createElement("li", null, "DownArrow, Space, Enter opens the menu and selects the first item"), _react.default.createElement("li", null, "UpArrow opens the menu and selects the last item"))), _react.default.createElement("li", null, "ActionPopoverItem", _react.default.createElement("ul", null, _react.default.createElement("li", null, "Enter calls the onClick handler, closes the menu and focuses ActionPopover unless Item is disabled"), _react.default.createElement("li", null, "Tab closes the menu and focuses the next focusable element"), _react.default.createElement("li", null, "Shift+Tab closes the menu and focuses the previous focusable element, ", _react.default.createElement("em", null, "not ActionPopover")), _react.default.createElement("li", null, "Escape closes the menu and focuses the ActionPopover"), _react.default.createElement("li", null, "DownArrow focuses the next Item, or the first Item if focus is already at the end of the menu"), _react.default.createElement("li", null, "UpArrow focuses the previous Item, or the last Item if focus is already at the start of the menu"), _react.default.createElement("li", null, "Home focuses the first Item"), _react.default.createElement("li", null, "End focuses the last Item"), _react.default.createElement("li", null, "Space does nothing"), _react.default.createElement("li", null, "a-z selects the next item in the list starting with that letter, wrapping around to the start if required")))))));

var _default = Info;
exports.default = _default;