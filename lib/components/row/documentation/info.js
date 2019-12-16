"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "Row Component "), _react.default.createElement("p", null, "A row widget. Sets up a basic column-based UI layout."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "Import the component:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import { Row, Column } from "carbon-react/lib/components/row"'), _react.default.createElement("p", null, "To render the Row:"), _react.default.createElement(_storybookInfo.StoryCodeBlock, null, '<Row>', '<Column>Column1</Column>', '<Column>Column2</Column>', '</Row>'), _react.default.createElement("p", null, "A Rows child must be of type Column."));

var _default = info;
exports.default = _default;