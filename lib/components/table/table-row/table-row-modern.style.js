"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyModernRowStyling = applyModernRowStyling;
exports.applyModernSelectedStyling = applyModernSelectedStyling;
exports.applyModernDropTargetStyling = applyModernDropTargetStyling;

var _styledComponents = require("styled-components");

var _tableCell = _interopRequireDefault(require("../table-cell/table-cell.style"));

var _tableHeader = _interopRequireDefault(require("../table-header/table-header.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    border-top: ", ";\n\n    &:first-child {\n      border-left: ", ";\n    }\n\n    &:last-child {\n      border-right: ", ";\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      &:hover {\n        ", " {\n          background-color: ", ";\n        }\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["   \n    ", " {\n      background-color: ", ";\n    }\n\n    ", " {\n      padding: 10px 8px;\n    }\n\n    .custom-drag-layer && {\n      background-color: ", ";\n      display: block;\n\n      ", " {\n        background-color: ", ";\n        border: none;\n      }\n    }\n\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function applyModernRowStyling(isPassive, _ref) {
  var colors = _ref.colors,
      table = _ref.table;
  return (0, _styledComponents.css)(_templateObject(), _tableCell.default, colors.white, _tableHeader.default, table.dragging, _tableCell.default, table.dragging, !isPassive && (0, _styledComponents.css)(_templateObject2(), _tableCell.default, table.primary));
}

function applyModernSelectedStyling(_ref2) {
  var table = _ref2.table;
  return "\n    background-color: ".concat(table.selected, ";\n    border-bottom-color: ").concat(table.selected, ";\n  ");
}

function applyModernDropTargetStyling() {
  var border = '1px solid transparent';
  return (0, _styledComponents.css)(_templateObject3(), border, border, border);
}