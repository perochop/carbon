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

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      background-color: ", ";\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    animation: ", " 1s infinite ease-in-out both;\n    background-color: ", ";\n    display: inline-block;\n    height: ", ";\n    width: ", ";\n    margin-right: ", ";\n\n    ", "\n\n    &:nth-of-type(1) {\n      animation-delay: 0s;\n    }\n\n    &:nth-of-type(2) {\n      animation-delay: 0.2s;\n    }\n\n    &:nth-of-type(3) {\n      animation-delay: 0.4s;\n      margin-right: 0px;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0%, 80%, 100% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  40% {\n    opacity: 1;\n    transform: scale(1);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var loaderAnimation = (0, _styledComponents.keyframes)(_templateObject());

var StyledLoaderSquare = _styledComponents.default.div(_templateObject2(), function (_ref) {
  var theme = _ref.theme,
      size = _ref.size,
      isInsideButton = _ref.isInsideButton,
      isActive = _ref.isActive;
  return (0, _styledComponents.css)(_templateObject3(), loaderAnimation, theme.colors.primary, size === 'large' ? '16px' : '8px', size === 'large' ? '16px' : '8px', size === 'large' ? '10px' : '6px', isInsideButton && (0, _styledComponents.css)(_templateObject4(), isActive ? theme.colors.white : theme.colors.border));
});

StyledLoaderSquare.defaultProps = {
  theme: _base.default,
  size: 'small',
  isInsideButton: false,
  isActive: true
};
StyledLoaderSquare.propTypes = {
  size: _propTypes.default.oneOf(_optionsHelper.default.sizesBinary),
  isInsideButton: _propTypes.default.bool,
  isActive: _propTypes.default.bool
};
var _default = StyledLoaderSquare;
exports.default = _default;