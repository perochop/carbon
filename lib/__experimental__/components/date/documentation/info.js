"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement(_storybookInfo.StoryHeader, null, "Date Input Component"), _react.default.createElement("p", null, "Captures a single date."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement(_storybookInfo.StoryCode, null, 'import DateInput from \'carbon-react/lib/components/Date\';'), _react.default.createElement("p", null, "To render a Date Input"), _react.default.createElement(_storybookInfo.StoryCode, null, '<Date name="myDate" />'));

var _default = info;
exports.default = _default;