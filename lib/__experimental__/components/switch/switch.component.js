"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BaseSwitch = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

var _switch = _interopRequireDefault(require("./switch.style"));

var _checkableInput = _interopRequireDefault(require("../checkable-input"));

var _switchSlider = _interopRequireDefault(require("./switch-slider.component"));

var _withValidation = _interopRequireDefault(require("../../../components/validations/with-validation.hoc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Switch = function Switch(_ref) {
  var id = _ref.id,
      label = _ref.label,
      onChange = _ref.onChange,
      value = _ref.value,
      checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      disabled = _ref.disabled,
      loading = _ref.loading,
      reverse = _ref.reverse,
      props = _objectWithoutProperties(_ref, ["id", "label", "onChange", "value", "checked", "defaultChecked", "disabled", "loading", "reverse"]);

  var isControlled = checked !== undefined;

  var _useState = (0, _react.useState)(defaultChecked || false),
      _useState2 = _slicedToArray(_useState, 2),
      checkedInternal = _useState2[0],
      setCheckedInternal = _useState2[1];

  var onChangeInternal = (0, _react.useCallback)(function (e) {
    setCheckedInternal(e.target.checked);
    onChange(e);
  }, [setCheckedInternal, onChange]);

  var switchProps = _objectSpread({}, props, {
    disabled: disabled || loading,
    checked: isControlled ? checked : checkedInternal,
    reverse: !reverse // switched to preserve backward compatibility

  });

  var inputProps = _objectSpread({}, switchProps, {
    onChange: isControlled ? onChange : onChangeInternal,
    inputId: id,
    inputLabel: label,
    inputValue: value,
    inputType: 'checkbox',
    reverse: !reverse // switched to preserve backward compatibility

  });

  return _react.default.createElement(_switch.default, _extends({}, (0, _tags.default)('Switch', props), switchProps), _react.default.createElement(_checkableInput.default, inputProps, _react.default.createElement(_switchSlider.default, _extends({}, switchProps, {
    loading: loading
  }))));
};

exports.BaseSwitch = Switch;
Switch.propTypes = {
  /** Set the value of the Switch if component is meant to be used as controlled */
  checked: _propTypes.default.bool,

  /** Set the default value of the Switch if component is meant to be used as uncontrolled */
  defaultChecked: _propTypes.default.bool,

  /** Toggles disabling of input */
  disabled: _propTypes.default.bool,

  /** Displays additional information below the input to provide help to the user. */
  fieldHelp: _propTypes.default.string,

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

  /** Help text */
  labelHelp: _propTypes.default.string,

  /** Displays label inline with the Switch */
  labelInline: _propTypes.default.bool,

  /** Sets percentage-based label width */
  labelWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** Prop to indicate that an error has occurred */
  hasError: _propTypes.default.bool,

  /** Prop to indicate that a warning has occurred */
  hasWarning: _propTypes.default.bool,

  /** Prop to indicate additional information  */
  hasInfo: _propTypes.default.bool,

  /** Override tab index on the validation and help icon */
  helpTabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** Triggers loading animation */
  loading: _propTypes.default.bool,

  /** Accepts a callback function which can be used to update parent state on change */
  onChange: _propTypes.default.func,

  /** Reverses label and Switch display */
  reverse: _propTypes.default.bool,

  /**
   * Set the size of the Switch to 'small' (16x16 - default) or 'large' (24x24).
   * No effect when using Classic theme.
   */
  size: _propTypes.default.string,

  /** the value of the checkbox, passed on form submit */
  value: _propTypes.default.string.isRequired
};
Switch.defaultProps = {
  labelInline: false,
  reverse: true,
  hasError: false,
  hasWarning: false,
  hasInfo: false,
  helpTabIndex: 0
};

var _default = (0, _withValidation.default)(Switch);

exports.default = _default;