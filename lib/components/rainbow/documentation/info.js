"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var code = "\nlet myImmutableData = Immutable.fromJS([\n  { \n    y: 30,\n    name: \"First Bit\",\n    label: \"label for first bit\",\n    tooltip: \"more info about this bit\",\n    color: \"#000\"\n  }, {\n    y: 70,\n    name: \"Second Bit\",\n    label: \"label for second bit\",\n    tooltip: \"more info about this bit\"\n  }\n ]);\n";

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "Rainbow Component "), _react.default.createElement("p", null, "A rainbow chart using the Highcharts API."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "Import the component:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "import Rainbow from ", '"carbon-react/lib/components/rainbow"'), _react.default.createElement("p", null, "Note that the Rainbow component expects that you already have the Highcharts library loaded. This may be true in case of some projects, which already have that library available for their legacy code. In other cases, you would need to import Highcharts before importing Rainbow:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, "import ", "'react-highcharts/dist/bundle/highcharts';"), _react.default.createElement("p", null, "To render the Rainbow:"), _react.default.createElement(_storybookInfo.StoryCodeBlock, null, code), _react.default.createElement(_storybookInfo.StoryCode, null, '<Rainbow title="My Chart" data={ myImmutableData } />'));

var _default = info;
exports.default = _default;