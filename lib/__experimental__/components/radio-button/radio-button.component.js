"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PrivateRadioButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

var _radioButton = _interopRequireDefault(require("./radio-button.style"));

var _checkableInput = _interopRequireDefault(require("../checkable-input/checkable-input.component"));

var _radioButtonSvg = _interopRequireDefault(require("./radio-button-svg.component"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RadioButton = function RadioButton(_ref) {
  var id = _ref.id,
      label = _ref.label,
      onChange = _ref.onChange,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["id", "label", "onChange", "value"]);

  var inputProps = _objectSpread({}, props, {
    helpTabIndex: 0,
    helpTag: 'span',
    inputId: id,
    inputLabel: label,
    inputValue: value,
    inputType: 'radio',

    /**
     * Invert the reverse prop, to ensure the FormField component renders the components
     * in the desired order (other elements which use FormField render their sub-components the
     * opposite way around by default)
     */
    reverse: !props.reverse
  });

  var handleChange = (0, _react.useCallback)(function (ev) {
    onChange(ev); // specifically trigger focus, as Safari doesn't focus radioButtons on click by default

    ev.target.focus();
  }, [onChange]);
  return _react.default.createElement(_radioButton.default, _extends({}, (0, _tags.default)('radio-button', props), props), _react.default.createElement(_checkableInput.default, _extends({}, inputProps, {
    onChange: handleChange
  }), _react.default.createElement(_radioButtonSvg.default, null)));
};

exports.PrivateRadioButton = RadioButton;
RadioButton.propTypes = {
  /** Set the value of the radio button */
  checked: _propTypes.default.bool,

  /** Toggles disabling of input */
  disabled: _propTypes.default.bool,

  /** Displays fieldHelp inline with the radio button */
  fieldHelpInline: _propTypes.default.bool,

  /** Unique Identifier for the input. Will use a randomly generated GUID if none is provided */
  id: _propTypes.default.string,

  /** Sets percentage-based input width */
  inputWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** The content of the label for the input */
  label: _propTypes.default.string,

  /** Sets label alignment - accepted values: 'left' (default), 'right' */
  labelAlign: _propTypes.default.oneOf(_optionsHelper.default.alignBinary),

  /** Sets percentage-based label width */
  labelWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** The name of the the RadioButton (can also be set via the 'name' prop of the RadioButtonGroup component) */
  name: _propTypes.default.string,

  /** Accepts a callback function which can be used to update parent state on change */
  onChange: _propTypes.default.func,

  /** Reverses label and radio button display */
  reverse: _propTypes.default.bool,

  /**
   * Set the size of the radio button to 'small' (16x16 - default) or 'large' (24x24).
   * No effect when using Classic theme.
   */
  size: _propTypes.default.oneOf(_optionsHelper.default.sizesBinary),

  /** the value of the Radio Button, passed on form submit */
  value: _propTypes.default.string.isRequired,
  children: function children(props, propName, componentName) {
    if (props[propName]) {
      return new Error("Forbidden prop `".concat(propName, "` supplied to `").concat(componentName, "`. ") + 'This component is meant to be used as a self-closing tag. ' + 'You should probably use the label prop instead.');
    }

    return null;
  }
};
RadioButton.defaultProps = {
  reverse: false
};

var _default = _react.default.memo(RadioButton);

exports.default = _default;