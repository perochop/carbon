"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _icon = _interopRequireDefault(require("../icon/icon.style"));

var _styleHelper = require("../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    ", ":focus {\n      outline: solid 2px ", ";\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    ", ":focus {\n      outline: none;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 1px;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: 8px;\n  border: 0;\n  outline: none;\n\n  ", ":before {\n    color: ", ";\n  }\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ValidationIconStyle = _styledComponents.default.div(_templateObject(), _icon.default, function (_ref) {
  var validationType = _ref.validationType,
      theme = _ref.theme;
  return theme.colors[validationType];
}, function (_ref2) {
  var theme = _ref2.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject2(), _icon.default);
}, function (_ref3) {
  var theme = _ref3.theme;
  return !(0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject3(), _icon.default, theme.colors.focus);
});

ValidationIconStyle.defaultProps = {
  validationType: 'error',
  theme: _base.default
};
var _default = ValidationIconStyle;
exports.default = _default;