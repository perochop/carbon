"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _withDrag = _interopRequireDefault(require("../../drag-and-drop/with-drag"));

var _icon = _interopRequireDefault(require("../../icon"));

var _styleHelper = require("../../../utils/helpers/style-helper");

var _draggableTableCell = _interopRequireDefault(require("./draggable-table-cell.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a draggable table cell using WithDrag.
 *
 */
var DraggableTableCell = function DraggableTableCell(props) {
  var _canDrag = props.canDrag !== false;

  var theme = _react.default.useContext(_styledComponents.ThemeContext) || props.theme;
  /**
   * Note: the <div> wrapper is required, otherwise ReactDnD throws an error:
   * "Only native element nodes can now be passed to ReactDnD connectors."
   */

  var icon = _react.default.createElement("div", null, _react.default.createElement(_icon.default, {
    type: (0, _styleHelper.isClassic)(theme) ? 'drag_vertical' : 'drag'
  }));

  var iconWithDrag = _react.default.createElement(_withDrag.default, {
    identifier: props.identifier,
    draggableNode: props.draggableNode,
    canDrag: function canDrag() {
      return _canDrag;
    }
  }, _canDrag ? icon : _react.default.createElement("span", null));

  return _react.default.createElement(_draggableTableCell.default, {
    className: "draggable-table-cell"
  }, iconWithDrag);
};

DraggableTableCell.propTypes = {
  /** Theme to use when rendering the DraggableTableCell */
  theme: _propTypes.default.object,

  /** used to associate WithDrags and WithDrops */
  identifier: _propTypes.default.string,

  /** A function that returns the dom node used as the ghost layer when dragging */
  draggableNode: _propTypes.default.func,

  /** used to specify whether the dragging is currently allowed */
  canDrag: _propTypes.default.bool
};
var _default = DraggableTableCell;
exports.default = _default;