"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyClassicDraggedStyling = applyClassicDraggedStyling;
exports.applyClassicRowStyling = applyClassicRowStyling;
exports.applyClassicSelectedStyling = applyClassicSelectedStyling;
exports.applyClassicHighlightStyling = applyClassicHighlightStyling;

var _styledComponents = require("styled-components");

var _tableCell = _interopRequireDefault(require("../table-cell/table-cell.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    ", " {\n      background-color: #F2F4F5;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    border-color: #E7F1FC;\n    &:hover .common-input__input {\n      border-color: #E7F1FC;\n    }\n    &:nth-child(2n+1) {\n      ", " {\n        background-color: #ffffff;\n      }\n    }\n\n    .custom-drag-layer && {\n      background-color: #E6EBED;\n      display: block;\n\n      ", " {\n        background-color: #E6EBED;\n        border: none;\n      }\n    }\n\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function applyClassicRowStyling(isPassive, isSelected) {
  return (0, _styledComponents.css)(_templateObject(), _tableCell.default, _tableCell.default, !(isPassive || isSelected) && "\n      &:hover {\n        ".concat(_tableCell.default, " {\n          background-color: #E7F1FC;\n        }\n      }\n    "));
}

function applyClassicSelectedStyling() {
  return "\n    background-color: #1573E6;\n    border-bottom-color: #255BC7;\n    color: #ffffff;\n\n    &:before {\n      background-color: #255BC7;\n    }\n  ";
}

function applyClassicHighlightStyling() {
  return "\n    background-color: #D0E3FA;\n    border-bottom-color: #1573E6;\n\n    &:before {\n      background-color: #1573E6;\n    }\n  ";
}
/**
 * Note: `StyledTableRow` is supplied as parameter
 * instead of being `import`ed, to avoid a dependency cycle
 * between `table-row.style.js` and `table-row-classic.style.js`.
 */


function applyClassicDraggedStyling() {
  return (0, _styledComponents.css)(_templateObject2(), _tableCell.default);
}