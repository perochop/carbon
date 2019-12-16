"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledInternalTableWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tableClassicStyle = require("./table-classic.style.js");

var _tableModernStyle = require("./table-modern.style.js");

var _tableRow = _interopRequireDefault(require("./table-row/table-row.style"));

var _link = _interopRequireDefault(require("../link/link.style"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _styleHelper = require("../../utils/helpers/style-helper");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _tableCellStyle = _interopRequireDefault(require("./table-cell/table-cell.style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    ", " {\n      border-radius: 0;\n    }\n    \n    ", " {\n      left: -25px;\n      position: absolute;\n      top: -1px;\n      width: 25px;\n\n      align-items: center;\n      background-color: ", ";\n      border: 1px solid ", ";\n      border-right: none;\n      border-radius: 25px 0 0 25px;\n      box-sizing: content-box;\n      color: ", ";\n      display: flex;\n      height: 100%;\n      justify-content: center;\n\n      &:hover {\n        background-color: #19475A;\n        color: ", ";\n        display: flex;\n        height: 100%;\n        justify-content: center;\n\n        &:hover {\n          background-color: #19475A;\n          color: ", ";\n        }\n    \n        &:first-child {\n          height: 19px;\n          margin-right: -4px;\n          z-index: 3;\n        }\n      }\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  border-radius: 0px;\n  overflow: visible;\n  position: relative;\n  \n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-collapse: separate;\n  border-radius: 0px;\n  border-spacing: 0;\n  min-width: 100%;\n  table-layout: fixed;\n  width: auto;\n  word-break: break-all;\n  \n  ", "\n\n  & caption {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    width: 1px;\n    position: absolute;\n    top: -99999px;\n  }\n\n  ", ":last-child ", " {\n    border-bottom-color: transparent;\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTable = _styledComponents.default.table(_templateObject(), function (props) {
  if ((0, _styleHelper.isClassic)(props.theme)) return (0, _tableClassicStyle.applyClassicTableStyling)(props);
  return (0, _tableModernStyle.applyModernTableStyling)(props);
}, _tableRow.default, _tableCellStyle.default, function (_ref) {
  var paginate = _ref.paginate;
  return paginate && applyPaginationStyle;
});

function applyPaginationStyle() {
  return (0, _styledComponents.css)(_templateObject2());
}

var StyledInternalTableWrapper = _styledComponents.default.div(_templateObject3(), styleInternalWrapper, function (_ref2) {
  var onConfigure = _ref2.onConfigure,
      theme = _ref2.theme;
  return onConfigure && (0, _styledComponents.css)(_templateObject4(), StyledTable, _link.default, theme.table.header, theme.table.secondary, theme.colors.white, theme.colors.white, theme.colors.white);
});

exports.StyledInternalTableWrapper = StyledInternalTableWrapper;

function styleInternalWrapper(props) {
  if ((0, _styleHelper.isClassic)(props.theme)) return (0, _tableClassicStyle.applyClassicInternalStyling)();
  return (0, _tableModernStyle.applyModernInternalStyling)(props);
}

StyledTable.propTypes = {
  /** Toggles the type variations of the table */
  tableType: _propTypes.default.oneOf(_optionsHelper.default.tableThemes),

  /** Toggles the zebra striping for the table rows */
  isZebra: _propTypes.default.bool
};
StyledTable.defaultProps = {
  theme: _base.default,
  size: 'medium'
};
StyledInternalTableWrapper.propTypes = {
  /** The height for the Table Wrapper */
  minHeight: _propTypes.default.string
};
StyledInternalTableWrapper.defaultProps = {
  theme: _base.default,
  size: 'medium'
};
var _default = StyledTable;
exports.default = _default;