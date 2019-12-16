"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var code = "\n<SimpleColorPicker\n  availableColors={[\"transparent\", \"#ff0102\", \"#34ff01\"]}\n  selectedColor=\"#34ff01\"\n  name=\"Picker\"\n/>\n";

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "Simple Color Picker"), _react.default.createElement("p", null, "A component that displays squares with color samples that you can choose from."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "Import the component:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "import SimpleColorPicker from ", '"carbon-react/lib/components/simple-color-picker"'), _react.default.createElement("p", null, "To render the SimpleColorPicker:"), _react.default.createElement(_storybookInfo.StoryCodeBlock, null, code));

var _default = info;
exports.default = _default;