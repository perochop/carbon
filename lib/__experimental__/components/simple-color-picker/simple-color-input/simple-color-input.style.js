"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _base = _interopRequireDefault(require("../../../../style/themes/base"));

var _input = require("../../input");

var _colorSampleBox = _interopRequireDefault(require("../color-sample-box/color-sample-box.style"));

var _simpleColorInputClassic = _interopRequireDefault(require("./simple-color-input-classic.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  opacity: 0;\n  height: 56px;\n  width: 56px;\n  margin: 0;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &:focus + ", " {\n    box-shadow: inset 0px 0px 0px 3px ", ";\n    border: 2px solid ", ";\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSimpleColorInput = (0, _styledComponents.default)(_input.Input)(_templateObject(), _colorSampleBox.default, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.focus;
}, _simpleColorInputClassic.default);
StyledSimpleColorInput.defaultProps = {
  theme: _base.default
};
var _default = StyledSimpleColorInput;
exports.default = _default;