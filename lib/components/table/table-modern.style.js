"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyModernTableStyling = applyModernTableStyling;
exports.applyModernInternalStyling = applyModernInternalStyling;

var _styledComponents = require("styled-components");

var _tableCell = _interopRequireDefault(require("./table-cell/table-cell.style"));

var _tableHeader = _interopRequireDefault(require("./table-header/table-header.style"));

var _tableRow = _interopRequireDefault(require("./table-row/table-row.style"));

var _tableSizes = _interopRequireDefault(require("./table-sizes.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", " {\n      background-color: ", ";\n    }\n\n    ", " {\n      background-color: ", ";\n      ", "\n      color: ", ";\n        \n      a:link,\n      a:visited,\n      a:hover,\n      a:active {\n        color: ", ";\n      }\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    & ", " {\n      height: ", ";\n      ", ", ", " {\n        font-size: ", ";\n        padding-left: ", ";\n        padding-right: ", ";\n      }\n\n      ", "\n      &:hover ", " {\n        background-color: ", ";\n      }\n    }\n    ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-color: transparent;\n    border: 1px solid ", ";  \n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function convertTableType(type) {
  if (['primary', 'secondary', 'tertiary'].includes(type)) return type;
  if (type === 'transparent') return 'tertiary';
  if (type === 'light') return 'secondary';
  return 'primary';
}

function applyModernInternalStyling(_ref) {
  var tableType = _ref.tableType,
      theme = _ref.theme;
  var type = convertTableType(tableType);
  return (0, _styledComponents.css)(_templateObject(), type === 'tertiary' ? 'transparent' : theme.table.secondary);
}

function applyModernTableStyling(_ref2) {
  var tableType = _ref2.tableType,
      theme = _ref2.theme,
      isZebra = _ref2.isZebra,
      size = _ref2.size;
  var type = convertTableType(tableType);
  var table = theme.table;
  var _tableSizes$size = _tableSizes.default[size],
      height = _tableSizes$size.height,
      fontSize = _tableSizes$size.fontSize,
      paddingSize = _tableSizes$size.paddingSize;
  return (0, _styledComponents.css)(_templateObject2(), type === 'tertiary' ? 'transparent' : theme.colors.white, _tableRow.default, height, _tableCell.default, _tableHeader.default, fontSize, paddingSize, paddingSize, isZebra && "\n        &:nth-child(2n) {\n          ".concat(_tableCell.default, " {\n            background-color: ").concat(table.zebra, ";\n          }\n        }\n        :hover ").concat(_tableCell.default, " {\n          background-color: ").concat(table.primary, ";\n        }\n      "), _tableCell.default, table.primary, type !== 'primary' && additionalThemeStyling(type, theme));
}

function additionalThemeStyling(type, _ref3) {
  var text = _ref3.text,
      table = _ref3.table,
      colors = _ref3.colors;
  return (0, _styledComponents.css)(_templateObject3(), type === 'tertiary' ? 'border-color: transparent;' : '', _tableCell.default, colors.white, _tableHeader.default, type === 'secondary' ? table.secondary : 'transparent', type === 'tertiary' ? 'border-left-color: transparent;' : '', text.color, text.color);
}