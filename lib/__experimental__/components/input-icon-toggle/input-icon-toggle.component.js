"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icon = _interopRequireDefault(require("../../../components/icon"));

var _inputIconToggle = _interopRequireDefault(require("./input-icon-toggle.style"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _validationIcon = _interopRequireDefault(require("../../../components/validations/validation-icon.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InputIconToggle = function InputIconToggle(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      size = _ref.size,
      type = _ref.inputIcon,
      tooltipMessage = _ref.tooltipMessage,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["children", "disabled", "readOnly", "size", "inputIcon", "tooltipMessage", "onClick"]);

  if (disabled || readOnly) return null;

  if (hasFailedValidation(props)) {
    return _react.default.createElement(_validationIcon.default, {
      type: type,
      tooltipMessage: tooltipMessage,
      size: size,
      isPartOfInput: true,
      onClick: onClick
    });
  }

  return _react.default.createElement(_inputIconToggle.default, {
    key: "label-icon",
    type: type,
    size: size,
    onClick: onClick
  }, children || _react.default.createElement(_icon.default, {
    type: type
  }));
};

function hasFailedValidation(_ref2) {
  var hasError = _ref2.hasError,
      hasWarning = _ref2.hasWarning,
      hasInfo = _ref2.hasInfo;
  return hasError || hasWarning || hasInfo;
}

InputIconToggle.propTypes = {
  children: _propTypes.default.node,
  // can override the icon
  disabled: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  inputIcon: _propTypes.default.string,
  size: _propTypes.default.oneOf(_optionsHelper.default.sizesRestricted),
  tooltipMessage: _propTypes.default.string
};
var _default = InputIconToggle;
exports.default = _default;