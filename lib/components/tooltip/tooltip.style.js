"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTooltipWrapper = exports.StyledTooltipInner = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper/options-helper"));

var _tooltip = require("./tooltip.utils");

var _styleHelper = require("../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  bottom: auto;\n  right: auto;\n  max-width: 300px;\n  position: relative;\n  animation: ", " 0.2s linear;\n  z-index: 1003;\n  text-align: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      font-weight: 700;\n      padding: 10px 15px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      background-color: ", ";\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    color: ", ";\n    display: inline-block;\n    padding: 12px 16px;\n    text-align: center;\n    max-width: 300px;\n    word-break: normal;\n    white-space: pre-wrap;\n\n    ", "\n\n    ", "\n  "]);

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

var StyledTooltipInner = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      type = _ref.type;
  return (0, _styledComponents.css)(_templateObject2(), theme.colors.black, theme.colors.white, type === 'error' && (0, _styledComponents.css)(_templateObject3(), theme.colors.error), (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject4()));
});

exports.StyledTooltipInner = StyledTooltipInner;
StyledTooltipInner.defaultProps = {
  theme: _base.default
};
StyledTooltipInner.propTypes = {
  theme: _propTypes.default.object,
  type: _propTypes.default.string
};
var fadeIn = (0, _styledComponents.keyframes)(_templateObject5());

var StyledTooltipWrapper = _styledComponents.default.div(_templateObject6(), fadeIn, function (_ref2) {
  var align = _ref2.align,
      position = _ref2.position;
  return getTextAlignment(position, align);
});

exports.StyledTooltipWrapper = StyledTooltipWrapper;
StyledTooltipWrapper.propTypes = {
  align: _propTypes.default.oneOf(_optionsHelper.default.alignAroundEdges),
  position: _propTypes.default.oneOf(_optionsHelper.default.positions)
};

function getTextAlignment(position, align) {
  var textAlignment = 'center';

  if ((0, _tooltip.isHorizontal)(position)) {
    textAlignment = position;
  }

  if ((0, _tooltip.isHorizontal)(align)) {
    textAlignment = align;
  }

  return textAlignment;
}