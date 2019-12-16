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

var _inputPresentation = _interopRequireDefault(require("../input/input-presentation.style"));

var _dateClassic = _interopRequireDefault(require("./date-classic.style"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _validationIcon = _interopRequireDefault(require("../../../components/validations/validation-icon.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: inline-block;\n  ", "{\n      margin-left: 0;\n    }\n  & ", " {\n    flex: none;\n    width: ", ";\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var datePickerWidth = {
  large: '140px',
  medium: '135px',
  small: '120px'
};

var StyledDateInput = _styledComponents.default.div(_templateObject(), _validationIcon.default, _inputPresentation.default, function (_ref) {
  var size = _ref.size;
  return size ? datePickerWidth[size] : '135px';
}, _dateClassic.default);

StyledDateInput.propTypes = {
  size: _propTypes.default.oneOf(_optionsHelper.default.sizesRestricted)
};
StyledDateInput.defaultProps = {
  theme: _base.default
};
var _default = StyledDateInput;
exports.default = _default;