"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var ItemTargetHelper = {
  /**
   * Helper method for when drag and drop is enabled for
   * items grouped together vertically e.g. a list, or
   * a table.
   */
  onHoverUpDown: function onHoverUpDown(props, monitor, component) {
    var item = monitor.getItem();
    var dragIndex = item.index;
    var hoverIndex = props.index; // Don't replace items with themselves

    if (dragIndex === hoverIndex) {
      return;
    }

    var newOffsetDiff = monitor.getDifferenceFromInitialOffset(); // prevents flickering

    if (item.offsetDiffY && Math.abs(item.offsetDiffY - newOffsetDiff.y) <= 1) {
      component.setState({
        inDeadZone: true
      });
      return;
    } // Time to actually perform the action


    var onDrag = props.onDrag || component.context.dragAndDropOnDrag;
    onDrag(dragIndex, hoverIndex); // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.

    item.index = hoverIndex;
    item.offsetDiffY = newOffsetDiff.y;
  }
};
var _default = ItemTargetHelper;
exports.default = _default;