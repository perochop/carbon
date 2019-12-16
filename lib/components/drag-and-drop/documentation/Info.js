"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = _react.default.createElement("div", null, _react.default.createElement("p", null, "A draggable context component"), _react.default.createElement(_storybookInfo.StoryHeader, null, "How to use a draggable context in a component:"), _react.default.createElement("p", null, "In your file"), _react.default.createElement(_storybookInfo.StoryCodeBlock, null, 'import {', '  DraggableContext,', '  WithDrop,', '  WithDrag', '} from "carbon-react/lib/components/drag-and-drop";'), _react.default.createElement("p", null, "A draggable context is used to define an area in the page where drag and drop can be used."), _react.default.createElement("p", null, "You also need to use WithDrop and WithDrag:"), _react.default.createElement(_storybookInfo.StoryCodeBlock, null, '<DraggableContext onDrag={ onItemMoved }>', '  <ol>', '    {items.map((item, index) => {', '      return (', '        <WithDrop index={ index }>', '          <li>', '            <WithDrag><span>{ item.content }</span></WithDrag>', '          </li>', '        </WithDrop>', '      );', '    })}', '  </ol>', '</DraggableContext>'));

var _default = Info;
exports.default = _default;