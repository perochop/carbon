"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.pointerSideMargin = exports.pointerSize = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper/options-helper"));

var _inputSizes = _interopRequireDefault(require("../../__experimental__/components/input/input-sizes.style"));

var _tooltip = require("./tooltip.utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    border-top: ", ";\n    border-right: ", ";\n    border-bottom: ", ";\n    border-left: ", ";\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n          border-", "-color: ", ";\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      ", "\n\n      &:before {\n        ", "\n\n        ", "\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n\n    &:before {\n      position: absolute;\n      content: \"\";\n      width: 0;\n      height: 0;\n    }\n\n    ", "\n\n    ", "\n  "]);

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

var pointerSize = 7;
exports.pointerSize = pointerSize;
var pointerSideMargin = 8;
exports.pointerSideMargin = pointerSideMargin;
var pointerDistances = {
  right: "left: -".concat(pointerSize + 0.5, "px;"),
  left: 'right: 0;',
  bottom: "top: -".concat(pointerSize + 0.5, "px;"),
  top: 'bottom: 0;'
};
var pointerCenterAlignments = {
  horizontalCenter: "left: calc(50% - ".concat(pointerSize, "px);"),
  verticalCenter: "top: calc(50% - ".concat(pointerSize, "px);")
};

var StyledTooltipPointer = _styledComponents.default.span(_templateObject(), function (_ref) {
  var pointerAlign = _ref.align,
      position = _ref.position,
      theme = _ref.theme,
      type = _ref.type,
      size = _ref.size,
      isPartOfInput = _ref.isPartOfInput;
  return (0, _styledComponents.css)(_templateObject2(), !(0, _tooltip.hasTheSameOrientation)(position, pointerAlign) && (0, _styledComponents.css)(_templateObject3(), getPointerPosition(position, pointerAlign, isPartOfInput, size), getPointerBorderStyles(position, theme), type === 'error' && (0, _styledComponents.css)(_templateObject4(), position, theme.colors.error)), pointerDistances[position]);
});

function getPointerPosition(tooltipPosition, pointerAlign, isPartOfInput, size) {
  if ((0, _tooltip.isVertical)(tooltipPosition) && pointerAlign === 'center') {
    return pointerCenterAlignments.horizontalCenter;
  }

  if ((0, _tooltip.isHorizontal)(tooltipPosition) && pointerAlign === 'center') {
    return pointerCenterAlignments.verticalCenter;
  }

  return getPointerAlignments(isPartOfInput, size)[pointerAlign];
}

function getPointerAlignments(isPartOfInput, size) {
  var horizontalSizeOffset = isPartOfInput && size ? _inputSizes.default[size].tooltipHorizontalOffset : 0;
  var verticalSizeOffset = isPartOfInput && size ? _inputSizes.default[size].tooltipVerticalOffset : 0;
  var horizontalSideMargin = pointerSideMargin + horizontalSizeOffset;
  var verticalSideMargin = pointerSideMargin + verticalSizeOffset;
  return {
    left: "left: ".concat(horizontalSideMargin, "px;"),
    right: "right: ".concat(2 * pointerSize + horizontalSideMargin, "px;"),
    top: "top: ".concat(verticalSideMargin, "px"),
    bottom: "bottom: ".concat(2 * pointerSize + verticalSideMargin, "px;")
  };
}

function getPointerBorderStyles(position, theme) {
  var oppositeDirection = (0, _tooltip.getOppositeDirection)(position);
  var defaultStyle = "".concat(pointerSize, "px solid transparent");
  var oppositeDirectionStyle = 'none';
  var currentDirectionStyle = "".concat(pointerSize + 1, "px solid ").concat(theme.colors.black);
  var borderStyles = {
    top: defaultStyle,
    right: defaultStyle,
    bottom: defaultStyle,
    left: defaultStyle
  };
  borderStyles[position] = currentDirectionStyle;
  borderStyles[oppositeDirection] = oppositeDirectionStyle;
  return (0, _styledComponents.css)(_templateObject5(), borderStyles.top, borderStyles.right, borderStyles.bottom, borderStyles.left);
}

StyledTooltipPointer.defaultProps = {
  theme: _base.default
};
StyledTooltipPointer.propTypes = {
  align: _propTypes.default.oneOf(_optionsHelper.default.alignAroundEdges),
  position: _propTypes.default.oneOf(_optionsHelper.default.positions),
  theme: _propTypes.default.object,
  type: _propTypes.default.string,
  size: _propTypes.default.oneOf(_optionsHelper.default.sizesRestricted)
};
var _default = StyledTooltipPointer;
exports.default = _default;