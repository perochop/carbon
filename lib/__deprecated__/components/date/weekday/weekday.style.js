"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _base = _interopRequireDefault(require("../../../../style/themes/base"));

var _weekdayClassic = _interopRequireDefault(require("./weekday-classic.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n&, &.DayPicker-Weekday {\n  border: none;\n  min-width: 40px;\n  font-weight: 800;\n  color: ", ";\n  text-transform: uppercase;\n  font-size: 12px;\n  text-align: center;\n  padding: 20px 0 5px;\n\n  ", "\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledWeekday = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.border;
}, _weekdayClassic.default);

StyledWeekday.defaultProps = {
  theme: _base.default
};
var _default = StyledWeekday;
exports.default = _default;