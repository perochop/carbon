"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorSampleBoxClassic = _interopRequireDefault(require("./color-sample-box-classic.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid transparent;\n  background-color: ", ";\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledColorSampleBox = _styledComponents.default.div(_templateObject(), function (_ref) {
  var color = _ref.color;
  return color;
}, _colorSampleBoxClassic.default);

StyledColorSampleBox.propTypes = {
  color: _propTypes.default.string
};
var _default = StyledColorSampleBox;
exports.default = _default;