"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "Tile component"), _react.default.createElement(_storybookInfo.StoryHeader, null, " Implementation"), _react.default.createElement(_storybookInfo.StoryCode, null, 'import Tile from "carbon-react/lib/components/tile"'), _react.default.createElement("p", null, "To create a Tile, render a Tile component containing the child content you wish to be displayed inside the Tile."), _react.default.createElement(_storybookInfo.StoryCodeBlock, null, '<Checkbox name="myCheckbox" />', '<Tile>', '  <Content title="Test Title One">', '    Test Body One', '  </Content>', '  <Content title="Test Title Two">', '    Test Body Two', '  </Content>', '  <Content title="Test Title Three">', '    Test Body Three', '  </Content>', '</Tile>'), _react.default.createElement("p", null, "Any child wrapped by a Tile component can be passed an optional `width` prop - this is a percent value, dictating the width of the child element within the tile. It will not have any effect if the Tile orientation is set to `vertical`."));

var _default = info;
exports.default = _default;