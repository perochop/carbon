"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = _react.default.createElement("div", null, _react.default.createElement("p", null, "A link widget."), _react.default.createElement(_storybookInfo.StoryHeader, null, "How to use a Link in a component:"), _react.default.createElement("p", null, "In your file:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import Link from "carbon-react/lib/components/link";'), _react.default.createElement("p", null, "To render the Link:"), _react.default.createElement(_storybookInfo.StoryCode, null, '<Link href="foo">Main Page</Link>'), _react.default.createElement("p", null, "For additional properties specific to this component, see propTypes."));

var _default = Info;
exports.default = _default;