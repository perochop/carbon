"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FieldLineStyle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _base = _interopRequireDefault(require("../../../style/themes/base"));

var _styleHelper = require("../../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  & + & {\n    margin-top: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormFieldStyle = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) ? '10px' : '16px';
});

FormFieldStyle.defaultProps = {
  theme: _base.default
};

var FieldLineStyle = _styledComponents.default.div(_templateObject2(), function (_ref2) {
  var inline = _ref2.inline;

  if (inline) {
    return "\n        display: flex;\n      ";
  }

  return 'display: block;';
});

exports.FieldLineStyle = FieldLineStyle;
var _default = FormFieldStyle;
exports.default = _default;