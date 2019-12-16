"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, " ShowEditPod Component "), _react.default.createElement("p", null, "Presents and edits a set of content that\u2019s grouped together visually (in one pre-configured component)."), _react.default.createElement(_storybookInfo.StoryHeader, null, " Implementation"), _react.default.createElement("p", null, "Import the component:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "import ShowEditPod from ", '"carbon-react/lib/components/show-edit-pod"'));

var _default = info;
exports.default = _default;