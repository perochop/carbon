"use strict";

require("core-js/modules/es.array.concat");

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

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _inputPresentation = _interopRequireDefault(require("../../../__experimental__/components/input/input-presentation.style"));

var _input = _interopRequireDefault(require("../../../__experimental__/components/input/input.style"));

var _tableSizesStyle = _interopRequireDefault(require("../table-sizes.style.js"));

var _styleHelper = require("../../../utils/helpers/style-helper");

var _icon = _interopRequireDefault(require("../../icon/icon.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 18px;\n\n    .icon-delete:before {\n      cursor: pointer;\n      color: ", ";\n      font-size: 16px;\n      line-height: 15px;\n      margin-left: 1px;\n    }\n\n    .icon-delete:hover:before {\n      color: #C7384F;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      background-color: ", ";\n      border-width: 0;\n      border-bottom: 1px solid ", ";\n      font-size: 13px;\n      overflow: visible;\n      padding: 8px;\n      text-align: ", ";\n      vertical-align: middle;\n      white-space: nowrap;\n\n      > .common-input {\n        margin-bottom: -4px;\n        margin-left: -6px;\n        margin-right: -6px;\n        margin-top: -4px;\n      }\n      \n      ", "\n\n      ", "\n    "]);

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

var StyledTableCell = _styledComponents.default.td(_templateObject(), function (_ref) {
  var action = _ref.action,
      align = _ref.align,
      theme = _ref.theme,
      size = _ref.size,
      isTextArea = _ref.isTextArea,
      isDate = _ref.isDate;
  var colors = theme.colors,
      table = theme.table;
  return (0, _styledComponents.css)(_templateObject2(), table.primary, table.secondary, align, action && applyActionStyling(colors), !(0, _styleHelper.isClassic)(theme) && size ? applyModernPresentationStyling(size, isTextArea, isDate) : '');
});

function applyActionStyling(colors) {
  return (0, _styledComponents.css)(_templateObject3(), colors.border);
}

function applyModernPresentationStyling(size, isTextArea, isDate) {
  var _tableSizes$size = _tableSizesStyle.default[size],
      inputHeight = _tableSizes$size.inputHeight,
      fontSize = _tableSizes$size.fontSize,
      paddingSize = _tableSizes$size.paddingSize;
  return "\n    && ".concat(_inputPresentation.default, " {\n      min-height: ").concat(inputHeight, "px;\n      padding-left: ").concat(paddingSize, ";\n      padding-right: ").concat(paddingSize, ";\n      position: relative;\n      ").concat(size === 'large' && isDate ? 'width: 150px;' : '', "\n      ").concat(additionalPresentationStyling(isTextArea, inputHeight), "\n    }\n    ").concat(applyModernInputStyling(isTextArea, inputHeight, fontSize), "\n  ");
}

function additionalPresentationStyling(isTextArea, inputHeight) {
  if (isTextArea) {
    return "\n      height: ".concat(inputHeight * 3, "px;\n      margin-top: 4px;\n      margin-bottom: 4px; \n    ");
  }

  return "\n    height: ".concat(inputHeight, "px;\n  ");
}

function applyModernInputStyling(isTextArea, inputHeight, fontSize) {
  if (isTextArea) {
    return "\n      textarea {\n        font-size: ".concat(fontSize, ";\n        overflow: auto;\n        resize: none;\n        flex-grow: 1;\n        height: auto !important;\n        padding-top: 5px;\n        padding-bottom: 5px;\n      }\n    ");
  }

  return "\n    && ".concat(_input.default, " {\n      font-size: ").concat(fontSize, ";\n      height: ").concat(inputHeight, "px;\n      padding-top: 0px;\n      padding-bottom: 0px;\n    }\n    \n    && ").concat(_icon.default, " {\n      font-size: 13px;\n    }\n  ");
}

StyledTableCell.propTypes = {
  /** Defines the cell type to be an action - used for the delete cell. */
  action: _propTypes.default.bool,

  /** Defines the alignment of the cell (eg "left", "center" or "right"). */
  align: _propTypes.default.oneOf(_optionsHelper.default.alignFull),

  /** Defines the height of a cell used to size an input for example */
  size: _propTypes.default.oneOf(_optionsHelper.default.tableSizes),

  /** Used to toggle the input wrapper height. */
  isTextArea: _propTypes.default.bool
};
StyledTableCell.defaultProps = {
  theme: _base.default,
  align: 'left'
};
var _default = StyledTableCell;
exports.default = _default;