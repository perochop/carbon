"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formField = _interopRequireWildcard(require("./form-field.style"));

var _label = _interopRequireDefault(require("../label"));

var _fieldHelp = _interopRequireDefault(require("../field-help"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FormField = function FormField(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      fieldHelp = _ref.fieldHelp,
      fieldHelpInline = _ref.fieldHelpInline,
      hasError = _ref.hasError,
      hasWarning = _ref.hasWarning,
      hasInfo = _ref.hasInfo,
      helpId = _ref.helpId,
      helpTag = _ref.helpTag,
      helpTabIndex = _ref.helpTabIndex,
      label = _ref.label,
      labelId = _ref.labelId,
      labelAlign = _ref.labelAlign,
      labelHelp = _ref.labelHelp,
      labelHelpIcon = _ref.labelHelpIcon,
      labelInline = _ref.labelInline,
      labelWidth = _ref.labelWidth,
      name = _ref.name,
      id = _ref.id,
      reverse = _ref.reverse,
      size = _ref.size,
      childOfForm = _ref.childOfForm,
      isOptional = _ref.isOptional,
      readOnly = _ref.readOnly,
      tooltipMessage = _ref.tooltipMessage,
      useValidationIcon = _ref.useValidationIcon,
      props = _objectWithoutProperties(_ref, ["children", "disabled", "fieldHelp", "fieldHelpInline", "hasError", "hasWarning", "hasInfo", "helpId", "helpTag", "helpTabIndex", "label", "labelId", "labelAlign", "labelHelp", "labelHelpIcon", "labelInline", "labelWidth", "name", "id", "reverse", "size", "childOfForm", "isOptional", "readOnly", "tooltipMessage", "useValidationIcon"]);

  return _react.default.createElement(_formField.default, (0, _tags.default)(props['data-component'], props), _react.default.createElement(_formField.FieldLineStyle, {
    inline: labelInline
  }, reverse && children, label && _react.default.createElement(_label.default, {
    labelId: labelId,
    align: labelAlign,
    disabled: disabled,
    readOnly: readOnly,
    hasError: hasError,
    hasWarning: hasWarning,
    hasInfo: hasInfo,
    help: labelHelp,
    helpId: helpId,
    helpTag: helpTag,
    helpTabIndex: helpTabIndex,
    htmlFor: id,
    helpIcon: labelHelpIcon,
    inline: labelInline,
    inputSize: size,
    width: labelWidth,
    childOfForm: childOfForm,
    optional: isOptional,
    tooltipMessage: tooltipMessage,
    useValidationIcon: useValidationIcon
  }, label), fieldHelp && fieldHelpInline && _react.default.createElement(_fieldHelp.default, {
    labelInline: labelInline,
    labelWidth: labelWidth
  }, fieldHelp), !reverse && children), fieldHelp && !fieldHelpInline && _react.default.createElement(_fieldHelp.default, {
    labelInline: labelInline,
    labelWidth: labelWidth
  }, fieldHelp));
};

FormField.defaultProps = {
  size: 'medium'
};
FormField.propTypes = {
  children: _propTypes.default.node,
  childOfForm: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  'data-component': _propTypes.default.string,
  fieldHelp: _propTypes.default.node,
  fieldHelpInline: _propTypes.default.bool,
  hasError: _propTypes.default.bool,
  hasWarning: _propTypes.default.bool,
  helpId: _propTypes.default.string,
  hasInfo: _propTypes.default.bool,
  helpTag: _propTypes.default.string,
  helpTabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  id: _propTypes.default.string.isRequired,
  name: _propTypes.default.string,
  isOptional: _propTypes.default.bool,
  label: _propTypes.default.node,
  labelId: _propTypes.default.string,
  labelAlign: _propTypes.default.oneOf(_optionsHelper.default.alignBinary),
  labelHelp: _propTypes.default.node,
  labelHelpIcon: _propTypes.default.string,
  labelInline: _propTypes.default.bool,
  labelWidth: _propTypes.default.number,
  readOnly: _propTypes.default.bool,
  reverse: _propTypes.default.bool,
  size: _propTypes.default.oneOf(_optionsHelper.default.sizesRestricted),
  tooltipMessage: _propTypes.default.string,
  useValidationIcon: _propTypes.default.bool
};
var _default = FormField;
exports.default = _default;