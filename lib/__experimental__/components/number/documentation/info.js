"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = _react.default.createElement("div", null, _react.default.createElement(_storybookInfo.StoryHeader, null, "Number Input"), _react.default.createElement("p", null, "Capture whole numbers - without a decimal point."), _react.default.createElement("p", null, "All propTypes are inherited from the Textbox component."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "In your file"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import Number from "carbon-react/lib/components/number";'), _react.default.createElement("p", null, "To render a Number:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, '<Number name="myNumber" />'));

var _default = Info;
exports.default = _default;