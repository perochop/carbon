"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icon = _interopRequireDefault(require("../icon"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _iconClassic = _interopRequireDefault(require("./icon-classic.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  cursor: pointer;\n  margin-top: -8px;\n  right: 40px;\n  top: 53px;\n  z-index: 1002;\n  position: fixed;\n  display: block;\n  \n  &::before {\n    font-size: 24px;\n  }\n  \n  &:hover {\n    color: ", ";\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledIcon = (0, _styledComponents.default)(_icon.default)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.border;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.icon.onLightBackgroundHover;
}, _iconClassic.default);
StyledIcon.defaultProps = {
  theme: _base.default
};
var _default = StyledIcon;
exports.default = _default;