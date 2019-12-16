"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

var _checkbox = _interopRequireDefault(require("./checkbox.style"));

var _checkableInput = _interopRequireDefault(require("../checkable-input/checkable-input.component"));

var _checkboxSvg = _interopRequireDefault(require("./checkbox-svg.component"));

var _withValidation = _interopRequireDefault(require("../../../components/validations/with-validation.hoc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Checkbox = function Checkbox(_ref) {
  var id = _ref.id,
      label = _ref.label,
      onChange = _ref.onChange,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["id", "label", "onChange", "value"]);

  var inputProps = _objectSpread({}, props, {
    inputId: id,
    inputLabel: label,
    inputValue: value,
    inputType: 'checkbox',
    reverse: !props.reverse
  });

  return _react.default.createElement(_checkbox.default, _extends({}, (0, _tags.default)('checkbox', props), props), _react.default.createElement(_checkableInput.default, _extends({}, inputProps, {
    onChange: onChange,
    labelInline: true
  }), _react.default.createElement(_checkboxSvg.default, null)));
};

Checkbox.propTypes = {
  /** Set the value of the checkbox */
  checked: _propTypes.default.bool,

  /** Toggles disabling of input */
  disabled: _propTypes.default.bool,

  /** Displays fieldHelp inline with the checkbox */
  fieldHelpInline: _propTypes.default.bool,

  /** Unique Identifier for the input. Will use a randomly generated GUID if none is provided */
  id: _propTypes.default.string,

  /** Sets percentage-based input width */
  inputWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** The content of the label for the input */
  label: _propTypes.default.string,

  /** Sets label alignment - accepted values: 'left' (default), 'right' */
  labelAlign: _propTypes.default.string,

  /** Sets percentage-based label width */
  labelWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** Accepts a callback function which can be used to update parent state on change */
  onChange: _propTypes.default.func,

  /** Reverses label and checkbox display */
  reverse: _propTypes.default.bool,

  /**
   * Set the size of the checkbox to 'small' (16x16 - default) or 'large' (24x24).
   * No effect when using Classic theme.
   */
  size: _propTypes.default.string,

  /** the value of the checkbox, passed on form submit */
  value: _propTypes.default.string
};
Checkbox.defaultProps = {
  reverse: false
};

var _default = (0, _withValidation.default)(Checkbox);

exports.default = _default;