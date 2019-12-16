"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement(_storybookInfo.StoryHeader, null, "Date Range Component"), _react.default.createElement("p", null, "Captures a start and end date."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement(_storybookInfo.StoryCode, null, 'import DateRange from \'carbon-react/lib/components/DateRange\';'), _react.default.createElement("p", null, "To render a Date Range"), _react.default.createElement(_storybookInfo.StoryCode, null, '<DateRange name="myDateRange" />'));

var _default = info;
exports.default = _default;