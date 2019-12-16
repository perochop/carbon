"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sidebarHeaderClassic = _interopRequireDefault(require("./sidebar-header-classic.style"));

var _base = _interopRequireDefault(require("../../../style/themes/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  box-shadow: inset 0 -1px 0 0 ", ";\n  box-sizing: content-box;\n  position: relative;\n  padding: 27px 32px 32px 32px;\n  top: -27px;\n  margin-left: -32px;\n  width: 100%;\n  color: ", ";\n  transition: all 0.2s ease;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SidebarHeaderStyle = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.disabled.border;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.text.color;
}, _sidebarHeaderClassic.default);

SidebarHeaderStyle.defaultProps = {
  theme: _base.default
};
var _default = SidebarHeaderStyle;
exports.default = _default;