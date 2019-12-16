"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("../../../style/themes/base"));

var _input = _interopRequireDefault(require("../input/input.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  resize: none;\n  min-height: 40px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTextarea = (0, _styledComponents.default)(_input.default)(_templateObject());
StyledTextarea.defaultProps = {
  theme: _base.default
};
StyledTextarea.propTypes = {
  disabled: _propTypes.default.bool
};
var _default = StyledTextarea;
exports.default = _default;