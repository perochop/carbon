"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = _react.default.createElement("div", null, _react.default.createElement("p", null, "A widget for internationalisation of text."), _react.default.createElement(_storybookInfo.StoryHeader, null, "How to use an I18n component:"), _react.default.createElement("p", null, "In your file:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import I18n from "carbon-react/lib/components/i18n";'), _react.default.createElement("p", null, "To render the message:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, '<I18n scope="foo" />'), _react.default.createElement("p", null, "For additional properties specific to this component, see propTypes."));

var _default = Info;
exports.default = _default;