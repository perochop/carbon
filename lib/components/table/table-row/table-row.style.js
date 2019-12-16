"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tableCell = _interopRequireDefault(require("../table-cell/table-cell.style"));

var _tableHeader = _interopRequireDefault(require("../table-header/table-header.style"));

var _tableRowClassic = require("./table-row-classic.style");

var _tableRowModern = require("./table-row-modern.style");

var _base = _interopRequireDefault(require("../../../style/themes/base"));

var _icon = _interopRequireDefault(require("../../icon/icon.style"));

var _checkbox = _interopRequireDefault(require("../../../__experimental__/components/checkbox/checkbox.style"));

var _styleHelper = require("../../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        ", " {\n          background-color: ", ";\n          border-top: ", ";\n          border-bottom: ", ";\n\n          &:first-child {\n            border-left: ", ";\n          }\n\n          &:last-child {\n            border-right: ", ";\n          }\n        }\n      }\n\n      &&&&& {\n        ", "\n      }\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n      user-select: none;\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    ", " {\n      cursor: move;\n      cursor: grab;\n    }\n\n    .custom-drag-layer && ", " {\n      cursor: move;\n      cursor: grabbing;\n    }\n\n    ", "\n\n    ", "\n    \n    ", " {\n      ", "\n    }\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["1px solid ", " !important"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      &&&& {\n        ", " {\n          ", "\n          position: relative;\n    \n          &:before {\n            content: \"\";\n            height: 1px;\n            left: 0;\n            position: absolute;\n            top: -1px;\n            width: 100%;\n          }\n        }\n    \n        &:hover {\n          ", " {\n            background-color: ", ";\n          }\n        }\n      }\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    ", "\n\n    ", "\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      &&&&,\n      &&&&:nth-child(odd),\n      &&&&:hover {\n        ", " {\n          ", " \n        }\n      }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      ", ":first-child,\n      ", ":first-child {\n        &:not(['data-component=selectable-cell']) {\n          ", ";\n        }\n      }\n\n      ", ":first-child {\n        width: 18px;\n      }\n\n      ", " {\n        height: 15px;\n        padding-top: 0;\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Current version of react-dnd used in DragAndDrop is incompatible
 * with styled-components, this can be uodated once the issue is fixed
 */
var StyledTableRow = _styledComponents.default.tr(_templateObject(), applyRowStyling);

function applyRowStyling(_ref) {
  var isPassive = _ref.isPassive,
      isSelected = _ref.isSelected,
      theme = _ref.theme;
  return (0, _styledComponents.css)(_templateObject2(), (0, _styleHelper.isClassic)(theme) ? (0, _tableRowClassic.applyClassicRowStyling)(isPassive, isSelected) : (0, _tableRowModern.applyModernRowStyling)(isPassive, theme), selectableRowStyling, highlightRowStyling, selectedRowStyling, dragRowStyling);
}

function selectableRowStyling(_ref2) {
  var isSelectable = _ref2.isSelectable,
      theme = _ref2.theme;
  return (0, _styledComponents.css)(_templateObject3(), isSelectable && (0, _styledComponents.css)(_templateObject4(), _tableCell.default, _tableHeader.default, (0, _styleHelper.isClassic)(theme) ? 'padding-left: 15px' : '', _tableCell.default, _checkbox.default));
}

function selectedRowStyling(_ref3) {
  var isSelected = _ref3.isSelected,
      theme = _ref3.theme;
  return (0, _styledComponents.css)(_templateObject5(), isSelected && (0, _styledComponents.css)(_templateObject6(), _tableCell.default, (0, _styleHelper.isClassic)(theme) ? (0, _tableRowClassic.applyClassicSelectedStyling)() : (0, _tableRowModern.applyModernSelectedStyling)(theme)));
}

function highlightRowStyling(_ref4) {
  var isClickable = _ref4.isClickable,
      isHighlighted = _ref4.isHighlighted,
      theme = _ref4.theme;
  var table = theme.table;
  return (0, _styledComponents.css)(_templateObject7(), isClickable && 'cursor: pointer;', isHighlighted && (0, _styledComponents.css)(_templateObject8(), _tableCell.default, (0, _styleHelper.isClassic)(theme) ? (0, _tableRowClassic.applyClassicHighlightStyling)() : (0, _tableRowModern.applyModernSelectedStyling)(theme), _tableCell.default, (0, _styleHelper.isClassic)(theme) ? '#D0E3FA' : table.selected));
}

function dragRowStyling(_ref5) {
  var isDragged = _ref5.isDragged,
      isDragging = _ref5.isDragging,
      theme = _ref5.theme,
      isDraggedElementOver = _ref5.isDraggedElementOver,
      inDeadZone = _ref5.inDeadZone;
  var border = (0, _styledComponents.css)(_templateObject9(), theme.table.header);
  return (0, _styledComponents.css)(_templateObject10(), _icon.default, _icon.default, isDragging && (0, _styledComponents.css)(_templateObject11()), isDragged && (0, _styledComponents.css)(_templateObject12(), inDeadZone && isDraggedElementOver, _tableCell.default, theme.table.dragging, border, border, border, border, (0, _styleHelper.isClassic)(theme) && (0, _tableRowClassic.applyClassicDraggedStyling)()), _tableCell.default, (0, _tableRowModern.applyModernDropTargetStyling)());
}

StyledTableRow.propTypes = {
  theme: _propTypes.default.object
};
StyledTableRow.defaultProps = {
  theme: _base.default
};
var _default = StyledTableRow;
exports.default = _default;