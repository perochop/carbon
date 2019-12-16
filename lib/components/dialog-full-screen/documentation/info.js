"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = _react.default.createElement("div", null, _react.default.createElement("p", null, "A DialogFullScreen component"), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement(_storybookInfo.StoryCode, null, 'import DialogFullScreen from \'carbon-react/lib/components/dialog-full-screen\';'), _react.default.createElement("p", null, "To render a DialogFullScreen"), _react.default.createElement(_storybookInfo.StoryCode, null, '<DialogFullScreen onCancel={ customEventHandler } />'));

var _default = Info;
exports.default = _default;