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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    cursor: not-allowed;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    text-align: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: transparent;\n  border: none;\n  color: ", ";\n  flex-grow: 1;\n  font-size: ", ";\n  outline: none;\n  width: 30px;\n  \n  ", "\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  ", "\n\n  &:invalid, &:required {\n    box-shadow: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledInput = _styledComponents.default.input(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.text.color;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.text.size;
}, function (_ref3) {
  var align = _ref3.align;
  return align && (0, _styledComponents.css)(_templateObject2(), align);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.text.placeholder;
}, function (_ref5) {
  var disabled = _ref5.disabled,
      theme = _ref5.theme;
  return disabled && (0, _styledComponents.css)(_templateObject3(), theme.disabled.disabled);
});

StyledInput.defaultProps = {
  theme: _base.default
};
StyledInput.propTypes = {
  disabled: _propTypes.default.bool
};
var _default = StyledInput;
exports.default = _default;