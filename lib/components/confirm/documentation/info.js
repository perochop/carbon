"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var code = "<Confirm\n  title='Are you sure?'\n  onConfirm={ customConfirmHandler }\n  onCancel={ customCancelHandler }\n  open={ false }\n  This is the content message\n</Confirm>";

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "Confirm component"), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import Confirm from \'carbon-react/lib/components/confirm\';'), _react.default.createElement("p", null, "To render a Confirm:"), _react.default.createElement(_storybookInfo.StoryCodeBlock, null, code), _react.default.createElement("p", null, "Confirm must receive a prop of ", _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'open={ true }'), " to open the confirm dialog."), _react.default.createElement("p", null, "You need to provide a custom cancel/confirm event handlers to handle these events via buttons. "));

var _default = info;
exports.default = _default;