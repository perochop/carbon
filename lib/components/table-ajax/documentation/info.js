"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "Table Ajax component"), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement(_storybookInfo.StoryCodeBlock, null, 'import Table from "carbon-react/lib/components/table-ajax"', 'import { TableRow, TableCell, TableHeader } from "carbon-react/lib/components/table"'), _react.default.createElement("p", null, "To render a", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, " ", 'Table', " "), "please see the", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, " ", 'Table', " "), "component"), _react.default.createElement("p", null, _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, " ", 'Table', " "), "requires a", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, " ", 'path', " "), "to be provided"));

var _default = info;
exports.default = _default;