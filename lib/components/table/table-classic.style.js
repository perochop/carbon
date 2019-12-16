"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyClassicInternalStyling = applyClassicInternalStyling;
exports.applyClassicTableStyling = applyClassicTableStyling;

var _styledComponents = require("styled-components");

var _tableHeader = _interopRequireDefault(require("./table-header/table-header.style"));

var _tableRow = _interopRequireDefault(require("./table-row/table-row.style"));

var _tableCell = _interopRequireDefault(require("./table-cell/table-cell.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: #ffffff;\n\n    .table__spinner {\n      height: 8px;\n      width: 8px;\n      margin-bottom: -4px;\n    }\n\n    ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-color: #F2F4F5;\n    border: 1px solid #CCD6DA;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function applyClassicInternalStyling() {
  return (0, _styledComponents.css)(_templateObject());
}

function applyClassicTableStyling(props) {
  return (0, _styledComponents.css)(_templateObject2(), props.tableType === 'secondary' && "\n      ".concat(_tableHeader.default, " {\n        background-color: #CCD6DA;\n        color: #003349;\n        \n        a:link,\n        a:visited,\n        a:hover,\n        a:active {\n          color: #003349;\n        }\n      }\n\n      ").concat(_tableRow.default, " {        \n        ").concat(_tableCell.default, " {\n          background-color: #ffffff;\n        }\n\n        &:hover ").concat(_tableCell.default, " {\n          background-color: #E7F1FC;\n        }\n      } \n    "));
}