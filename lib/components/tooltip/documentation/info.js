"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "A Tooltip Widget"), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement(_storybookInfo.StoryCode, null, 'import Tooltip from "carbon-react/lib/components/tooltip"'), _react.default.createElement("p", null, "To render the Tooltip"), _react.default.createElement(_storybookInfo.StoryCodeBlock, null, '<Tooltip>', '  My Tooltip content…', '</Tooltip'), _react.default.createElement("ul", null, _react.default.createElement("li", null, "You can pass a prop of ", _react.default.createElement(_storybookInfo.StoryCode, null, "pointerAlign"), " to the component which shifts the alignment of the pointer. This defaults to ", '"center"', "."), _react.default.createElement("li", null, "You can also pass a prop of ", _react.default.createElement(_storybookInfo.StoryCode, null, "pointerPosition"), " to the component which shifts the position of the pointer. This defaults to ", '"bottom"', "."), _react.default.createElement("li", null, "The ", _react.default.createElement(_storybookInfo.StoryCode, null, "showTooltip"), " boolean prop determines whether or not to render the tooltip. If you want to implement the tooltip you must add handlers to toggle this prop.")));

var _default = info;
exports.default = _default;