"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _date = _interopRequireDefault(require("../date/date.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  & ", " {\n      width: auto;\n     display: inline-block;\n     vertical-align: ", ";\n  }\n\n  & ", ":first-child {\n    margin-right: 15px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDateRange = _styledComponents.default.div(_templateObject(), _date.default, function (_ref) {
  var labelsInline = _ref.labelsInline;
  return labelsInline ? 'top' : 'bottom';
}, _date.default);

var _default = StyledDateRange;
exports.default = _default;