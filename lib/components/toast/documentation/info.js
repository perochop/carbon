"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "Toast"), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "Import the component"), _react.default.createElement(_storybookInfo.StoryCode, null, "import Toast from ", "'carbon-react/lib/components/toast'"), _react.default.createElement("p", null, " Additionally you can pass optional props to the Toast component"), _react.default.createElement("p", null, _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, " ", 'as'), " Customizes the appearence of the toast changing the colour (see the ", "'iconColorSets'", " for possible values)."));

var _default = info;
exports.default = _default;