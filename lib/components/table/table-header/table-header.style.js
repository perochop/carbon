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

var _base = _interopRequireDefault(require("../../../style/themes/base"));

var _styleHelper = require("../../../utils/helpers/style-helper");

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _tableSizes = _interopRequireDefault(require("../table-sizes.style"));

var _icon = _interopRequireDefault(require("../../icon/icon.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n\n    &:hover {\n      background-color: ", ";\n    }\n\n    ", " {\n      color: ", ";\n    }\n\n    a {\n      &:link,\n      &:visited,\n      &:hover,\n      &:active {\n        color: ", ";\n        text-decoration: none;\n      }\n\n      span {\n        float: ", ";\n      \n        .carbon-icon__svg--sort-down,\n        .carbon-icon__svg--sort-up {\n          height: 11px;\n          width: 10px;\n        }\n      }\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["width: ", "px;"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      background-color: ", ";\n      border-width: 0;\n      border-bottom: 1px solid ", ";\n      border-left: 1px solid ", ";\n      box-sizing: border-box;\n      color: ", ";\n      font-weight: 700;\n      ", "\n      outline: medium none;\n      padding: 0 8px;\n      position: relative;\n      text-align: ", ";\n      text-overflow: ellipsis;\n      user-select: none;\n      vertical-align: middle;\n      white-space: nowrap;\n\n      &:first-child {\n        border-left: none;\n      }\n\n      ", "\n\n      ", "\n    "]);

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

var StyledTableHeader = _styledComponents.default.th(_templateObject(), function (_ref) {
  var align = _ref.align,
      sortable = _ref.sortable,
      theme = _ref.theme,
      width = _ref.width;
  var table = theme.table,
      colors = theme.colors;
  return (0, _styledComponents.css)(_templateObject2(), table.header, table.secondary, colors.border, colors.white, (0, _styleHelper.isClassic)(theme) ? "height: ".concat(_tableSizes.default.medium.height, ";") : '', align, width && (0, _styledComponents.css)(_templateObject3(), width), sortable && applySortableStyling(align, colors, table));
});

function applySortableStyling(align, colors, table) {
  return (0, _styledComponents.css)(_templateObject4(), table.tertiary, _icon.default, colors.white, colors.white, align === 'right' ? 'left' : 'right');
}

StyledTableHeader.propTypes = {
  /** Sets the alignment from the content */
  align: _propTypes.default.oneOf(_optionsHelper.default.alignFull),

  /** Toggles whether column is sortable */
  sortable: _propTypes.default.bool,

  /** Width to set column to. */
  width: _propTypes.default.string
};
StyledTableHeader.defaultProps = {
  theme: _base.default,
  align: 'left'
};
var _default = StyledTableHeader;
exports.default = _default;