"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var legacyInfo = _react.default.createElement("div", null, _react.default.createElement("p", null, "Legacy Switch component"), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "Import the component:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "import Switch from ", '"carbon-react/lib/components/switch"'), _react.default.createElement("p", null, "This component is disabled when ", _react.default.createElement(_storybookInfo.StoryCode, null, "loading"), " is set to ", _react.default.createElement(_storybookInfo.StoryCode, null, "true")));

var _default = legacyInfo;
exports.default = _default;