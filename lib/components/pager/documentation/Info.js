"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = _react.default.createElement("div", null, _react.default.createElement("p", null, "A Pager widget."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "In your file"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import Pager from "carbon-react/lib/components/pager";'), _react.default.createElement("p", null, "To render a Pager:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, '<Pager currentPage="1" totalRecords="100" onPagination={ function(){} } />'));

var _default = Info;
exports.default = _default;