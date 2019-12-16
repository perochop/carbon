"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _button = _interopRequireDefault(require("../button/button.style"));

var _splitButtonClassic = require("./split-button-classic.style");

var _base = _interopRequireDefault(require("../../style/themes/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n  \n  & > ", " {\n    margin: 0;\n\n    &:focus {\n      border: 3px solid ", ";\n      outline: none;\n      margin: -1px;\n    }\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSplitButton = _styledComponents.default.div(_templateObject(), _button.default, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.focus;
}, _splitButtonClassic.getMainSplitButtonClassicStyles);

StyledSplitButton.defaultProps = {
  theme: _base.default
};
var _default = StyledSplitButton;
exports.default = _default;