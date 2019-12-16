"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegendContainerStyle = exports.FieldsetStyle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _formField = _interopRequireDefault(require("../form-field/form-field.style"));

var _fieldsetClassic = _interopRequireDefault(require("./fieldset-classic.style"));

var _validationIcon = _interopRequireDefault(require("../../../components/validations/validation-icon.style"));

var _icon = _interopRequireDefault(require("../../../components/icon/icon.style"));

var _checkbox = _interopRequireDefault(require("../checkbox/checkbox.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 32px;\n\n  legend {\n    font-size: 20px;\n    font-weight: 600;\n    line-height: 24px;\n\n    ", "\n  }\n\n  ", " ", ":focus {\n    outline: 2px solid #FFB500;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  margin: 0;\n  padding: 0;\n\n  &&& ", " {\n    margin-top: 0;\n    margin-bottom: -1px;\n  }\n\n  & ", " {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FieldsetStyle = _styledComponents.default.fieldset(_templateObject(), _formField.default, _checkbox.default);

exports.FieldsetStyle = FieldsetStyle;

var LegendContainerStyle = _styledComponents.default.div(_templateObject2(), _fieldsetClassic.default, _validationIcon.default, _icon.default);

exports.LegendContainerStyle = LegendContainerStyle;