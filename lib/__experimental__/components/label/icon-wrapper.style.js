"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _validationIcon = _interopRequireDefault(require("../../../components/validations/validation-icon.style"));

var _help = _interopRequireDefault(require("../../../components/help/help.style"));

var _base = _interopRequireDefault(require("../../../style/themes/base"));

var _styleHelper = require("../../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin: 0;\n  margin-left: 8px;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  top: -1px;\n  vertical-align: middle;\n\n  :focus{\n    outline: ", ";\n  }\n\n  ", ", ", " {\n    margin-left: 0;\n    padding: 0;\n    position: static;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconWrapperStyle = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) ? 'none' : "2px solid ".concat(theme.colors.focus);
}, _validationIcon.default, _help.default);

IconWrapperStyle.defaultProps = {
  theme: _base.default
};
var _default = IconWrapperStyle;
exports.default = _default;