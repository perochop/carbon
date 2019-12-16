"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement(_storybookInfo.StoryHeader, null, "Decimal Input"), _react.default.createElement("p", null, "Captures a number with a decimal point, or a currency value."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement(_storybookInfo.StoryCode, null, 'import Decimal from \'carbon-react/lib/components/decimal\';'), _react.default.createElement("p", null, "To render a Decimal"), _react.default.createElement(_storybookInfo.StoryCode, null, '<Decimal name="myDecimal" />'));

var _default = info;
exports.default = _default;