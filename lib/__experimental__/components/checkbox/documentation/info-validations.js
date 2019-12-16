"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement(_storybookInfo.StoryHeader, null, "Checkbox Component Validations"), _react.default.createElement("strong", null, "In Form"), _react.default.createElement("p", null, "Check then uncheck the first checkbox to show an ", _react.default.createElement("strong", null, "error"), " icon."), _react.default.createElement("p", null, "Check then uncheck the second checkbox to show a ", _react.default.createElement("strong", null, "warning"), " icon."), _react.default.createElement("p", null, "Check then uncheck the third checkbox to show an ", _react.default.createElement("strong", null, "info"), " icon."), _react.default.createElement("strong", null, "In Group"), _react.default.createElement("p", null, "Check only one checkbox to show a ", _react.default.createElement("strong", null, "warning"), " icon."), _react.default.createElement("p", null, "Check only two checkboxes to show an ", _react.default.createElement("strong", null, "info"), " icon."), _react.default.createElement("p", null, "Check then uncheck all checkboxes to show an ", _react.default.createElement("strong", null, "error"), " icon."));

var _default = info;
exports.default = _default;