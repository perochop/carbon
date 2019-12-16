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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      margin-left: calc(", "% + 6px);\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    color: #335c6d;\n    margin-left: 6px;\n    margin-right: 6px;\n    margin-top: 5px;\n\n    ", "\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin-left: ", "%;\n    padding-left: 0;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  margin-top: 8px;\n  white-space: pre-wrap;\n  width: 100%;\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FieldHelpStyle = _styledComponents.default.span(_templateObject(), function (_ref) {
  var labelInline = _ref.labelInline,
      labelWidth = _ref.labelWidth;
  return labelInline && (0, _styledComponents.css)(_templateObject2(), labelWidth);
}, function (_ref2) {
  var labelInline = _ref2.labelInline,
      labelWidth = _ref2.labelWidth,
      theme = _ref2.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject3(), labelInline && (0, _styledComponents.css)(_templateObject4(), labelWidth));
});

FieldHelpStyle.defaultProps = {
  labelWidth: 30,
  theme: _base.default
};
FieldHelpStyle.propTypes = {
  labelWidth: _propTypes.default.number,
  labelInline: _propTypes.default.bool
};
var _default = FieldHelpStyle;
exports.default = _default;