"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _tableCell = _interopRequireDefault(require("../table-cell/table-cell.style"));

var _icon = _interopRequireDefault(require("../../icon/icon.style"));

var _base = _interopRequireDefault(require("../../../style/themes/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n  width: 21px;  \n  user-select: none;\n\n  ", ":first-child {\n    padding-left: 0;\n  }\n\n  ", " {\n    cursor: move;\n    cursor: grab;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDraggableTableCell = (0, _styledComponents.default)(_tableCell.default)(_templateObject(), _tableCell.default, _icon.default);
StyledDraggableTableCell.defaultProps = {
  theme: _base.default
};
var _default = StyledDraggableTableCell;
exports.default = _default;