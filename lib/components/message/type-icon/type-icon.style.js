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

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _typeIconClassic = _interopRequireDefault(require("./type-icon-classic.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: transparent;\n    span {\n      &:before {\n        color: ", ";\n      }\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  line-height: 100%;\n  min-width: 30px;\n  text-align: center;\n  span {\n    &:before {\n      color: ", ";\n    }\n  }\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TypeIconStyle = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      variant = _ref.variant;
  return theme.colors[variant];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white;
}, function (_ref3) {
  var theme = _ref3.theme,
      transparent = _ref3.transparent,
      variant = _ref3.variant;
  return transparent && (0, _styledComponents.css)(_templateObject2(), theme.colors[variant]);
}, _typeIconClassic.default);

TypeIconStyle.defaultProps = {
  variant: 'info',
  roundedCorners: true,
  theme: _base.default,
  transparent: false
};
TypeIconStyle.propTypes = {
  variant: _propTypes.default.oneOf(_optionsHelper.default.colors),
  border: _propTypes.default.bool,
  roundedCorners: _propTypes.default.bool,
  transparent: _propTypes.default.bool
};
var _default = TypeIconStyle;
exports.default = _default;