"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "Radio Button Component"), _react.default.createElement("p", null, "A radio button widget. Selects one option from a longer list."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "Import the component:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "import Radio Button from ", '"carbon-react/lib/components/radio-button"'), _react.default.createElement("p", null, "To render the radiobutton:"), _react.default.createElement(_storybookInfo.StoryCodeBlock, null, '<RadioButton name="frequency" value="weekly" label="Weekly"/>', '<RadioButton name="frequency" value="2weekly" label="2 Weekly"/>', '<RadioButton name="frequency" value="4weekly" label="4 Weekly"/>', '<RadioButton name="frequency" value="monthly" label="Monthly"/>'), _react.default.createElement("p", null, "For additional properties specific to this component, see propTypes."));

var _default = info;
exports.default = _default;