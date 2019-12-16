"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "Loader component."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "Import the component:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import Loader from "carbon-react/lib/components/loader"'), _react.default.createElement("p", null, "You can pass a ", _react.default.createElement(_storybookInfo.StoryCode, null, " ", 'size', " "), " property to adjust the size of the loader. Small is the default value."), _react.default.createElement("p", null, "You can set ", _react.default.createElement(_storybookInfo.StoryCode, null, " ", 'isInsideButton', " "), " property to ", _react.default.createElement(_storybookInfo.StoryCode, null, " ", 'true', " "), " to apply white color and use the component inside a button."));

var _default = info;
exports.default = _default;