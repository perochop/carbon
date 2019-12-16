"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "Spinner component."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "Import the component:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "i", 'mport Spinner from "carbon-react/lib/components/spinner"'), _react.default.createElement("p", null, "You can pass a ", _react.default.createElement(_storybookInfo.StoryCode, null, " ", 'size', " "), " property to adjust the size of the spinner"), _react.default.createElement("p", null, "The default is medium"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'options: extra-small, small, medium-small, medium, medium-large, large and extra-large'));

var _default = info;
exports.default = _default;