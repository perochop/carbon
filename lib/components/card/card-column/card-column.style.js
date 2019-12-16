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

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  text-align: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledCardColumn = _styledComponents.default.div(_templateObject(), function (_ref) {
  var align = _ref.align;
  return align;
});

StyledCardColumn.propTypes = {
  align: _propTypes.default.oneOf(_optionsHelper.default.alignFull),
  theme: _propTypes.default.object
};
StyledCardColumn.defaultProps = {
  align: 'center',
  theme: _base.default
};
var _default = StyledCardColumn;
exports.default = _default;