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
  var data = _taggedTemplateLiteral(["\n    ", " {\n      color: #8099A4;\n    }\n\n    :focus ", ",\n    :hover ", " {\n      color: #8099A4;\n      outline: none;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: none;\n  color: ", ";\n  cursor: default;\n  border: none;\n  outline: none;\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 14px;\n  padding: 0;\n  position: relative;\n  margin-bottom: 0;\n  margin-left: 8px;\n  margin-top: 0;\n  padding: 1px;\n  text-decoration: none;\n\n  ", "\n\n  &:focus,\n  &:hover {\n    color: ", ";\n    text-decoration: none;\n  }\n\n  &:focus ", " {\n    outline: ", ";\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHelp = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.help.color;
}, function (_ref2) {
  var href = _ref2.href;
  return href && (0, _styledComponents.css)(_templateObject2());
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.help.hover;
}, _icon.default, function (_ref4) {
  var theme = _ref4.theme;
  return "2px solid ".concat(theme.colors.focus);
}, function (_ref5) {
  var theme = _ref5.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject3(), _icon.default, _icon.default, _icon.default);
});

StyledHelp.defaultProps = {
  theme: _base.default
};
var _default = StyledHelp;
exports.default = _default;