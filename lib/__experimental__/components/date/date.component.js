"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BaseDateInput = exports.defaultDateFormat = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _invariant = _interopRequireDefault(require("invariant"));

var _events = _interopRequireDefault(require("../../../utils/helpers/events"));

var _date = _interopRequireDefault(require("../../../utils/helpers/date"));

var _date2 = _interopRequireDefault(require("../../../utils/validations/date"));

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

var _datePicker = _interopRequireDefault(require("./date-picker.component"));

var _date3 = _interopRequireDefault(require("./date.style"));

var _textbox = _interopRequireDefault(require("../textbox"));

var _withUniqueIdProps = _interopRequireDefault(require("../../../utils/helpers/with-unique-id-props"));

var _browserTypeCheck = require("../../../utils/helpers/browser-type-check");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultDateFormat = 'DD/MM/YYYY';
exports.defaultDateFormat = defaultDateFormat;
var hiddenDateFormat = 'YYYY-MM-DD';

var BaseDateInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseDateInput, _React$Component);

  function BaseDateInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseDateInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseDateInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "isBlurBlocked", false);

    _defineProperty(_assertThisInitialized(_this), "isOpening", false);

    _defineProperty(_assertThisInitialized(_this), "inputHasFocus", _this.props.autoFocus || false);

    _defineProperty(_assertThisInitialized(_this), "isControlled", _this.props.value !== undefined);

    _defineProperty(_assertThisInitialized(_this), "initialVisibleValue", generateAdjustedValue(_this.props));

    _defineProperty(_assertThisInitialized(_this), "inputFocusedViaPicker", false);

    _defineProperty(_assertThisInitialized(_this), "isMounted", false);

    _defineProperty(_assertThisInitialized(_this), "state", {
      isDatePickerOpen: false,

      /** Date object to pass to the DatePicker */
      selectedDate: _date.default.stringToDate(isoFormattedValueString(_this.initialVisibleValue)),

      /** Displayed value, format dependent on a region */
      visibleValue: _this.initialVisibleValue,

      /** Stores last valid values to be emitted onBlur if current input is invalid */
      lastValidEventValues: {
        formattedValue: _this.initialVisibleValue,
        rawValue: isoFormattedValueString(_this.initialVisibleValue)
      }
    });

    _defineProperty(_assertThisInitialized(_this), "inputProps", function () {
      var _this$props = _this.props,
          minDate = _this$props.minDate,
          maxDate = _this$props.maxDate,
          inputProps = _objectWithoutProperties(_this$props, ["minDate", "maxDate"]);

      return inputProps;
    });

    _defineProperty(_assertThisInitialized(_this), "hasValueChanged", function (prevProps) {
      return _this.props.value && prevProps.value !== _this.props.value;
    });

    _defineProperty(_assertThisInitialized(_this), "hasValidationsChanged", function () {
      var validationsArray = _this.state.validationsArray;
      var currentValidations = concatAllValidations(_this.inputProps());

      if (validationsArray.length !== currentValidations.length) {
        return true;
      }

      if (validationsArray.some(function (val, index) {
        return val !== currentValidations[index];
      })) {
        return true;
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "handleValidationUpdate", function () {
      var inputProps = _this.inputProps();

      _this.setState({
        validationsArray: concatAllValidations(inputProps)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "assignInput", function (input) {
      _this.input = input.current;
    });

    _defineProperty(_assertThisInitialized(_this), "shouldAllowBlur", function () {
      return (0, _browserTypeCheck.isEdge)(navigator) && !_this.inputFocusedViaPicker;
    });

    _defineProperty(_assertThisInitialized(_this), "shouldBlockBlur", function () {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          readOnly = _this$props2.readOnly;
      var block = _this.isBlurBlocked || _this.inputFocusedViaPicker || _this.input === document.activeElement;

      if (disabled || readOnly || block) {
        _this.inputFocusedViaPicker = _this.input === document.activeElement; // needed to block blur properly in Edge

        if (!_this.shouldAllowBlur()) {
          return true;
        }
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      // needed to make blur work properly in Edge
      // https://stackoverflow.com/a/24695316/10894881
      setTimeout(function () {
        _this.inputHasFocus = false;

        if (_this.shouldBlockBlur()) {
          return;
        }

        _this.reformatVisibleDate();

        if (_this.props.onBlur && !_this.state.isDatePickerOpen) {
          var dateWithSlashes = _date.default.sanitizeDateInput(_this.state.visibleValue);

          var event = _this.buildCustomEvent({
            target: _this.input
          }, isoFormattedValueString(dateWithSlashes));

          _this.props.onBlur(event);
        }
      }, 0);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (ev) {
      _this.inputHasFocus = true;
      var _this$props3 = _this.props,
          disabled = _this$props3.disabled,
          readOnly = _this$props3.readOnly;
      if (disabled || readOnly) return;

      if (_this.isAutoFocused) {
        _this.isAutoFocused = false;
      } else {
        _this.openDatePicker();
      }

      if (_this.props.onFocus) {
        _this.props.onFocus(ev);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (ev) {
      if (_this.props.onKeyDown) _this.props.onKeyDown(ev);

      if (_events.default.isTabKey(ev)) {
        _this.isOpening = false;
        _this.inputFocusedViaPicker = false;

        _this.closeDatePicker();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openDatePicker", function (openedOnMount) {
      document.addEventListener('click', _this.closeDatePicker);

      if (!openedOnMount && _this.inputFocusedViaPicker) {
        _this.isBlurBlocked = true;
        return;
      }

      _this.updateSelectedDate(_this.props.value || isoFormattedValueString(_this.state.visibleValue));

      _this.setState({
        isDatePickerOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateValidEventValues", function (value) {
      if (_this.isMounted) {
        _this.setState({
          visibleValue: _date.default.formatDateToCurrentLocale(value),
          lastValidEventValues: {
            formattedValue: _date.default.formatDateToCurrentLocale(value),
            rawValue: isoFormattedValueString(value)
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "reformatVisibleDate", function () {
      var _this$state = _this.state,
          lastValidEventValues = _this$state.lastValidEventValues,
          visibleValue = _this$state.visibleValue;

      if (_date.default.isValidDate(visibleValue) || _this.canBeEmptyValues(visibleValue)) {
        _this.updateValidEventValues(visibleValue);
      } else if (!visibleValue.length) {
        _this.updateValidEventValues(lastValidEventValues.formattedValue);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeDatePicker", function () {
      if (_this.isOpening) {
        _this.isOpening = false;
        return;
      }

      document.removeEventListener('click', _this.closeDatePicker);

      _this.setState({
        isDatePickerOpen: false
      }, function () {
        _this.isBlurBlocked = false;

        if (_this.input !== document.activeElement) {
          _this.handleBlur();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDateSelect", function (selectedDate) {
      var stringDateIso = _date.default.formatDateString(selectedDate);

      _this.isBlurBlocked = true;
      _this.isOpening = false;

      _this.updateVisibleValue(stringDateIso);
    });

    _defineProperty(_assertThisInitialized(_this), "updateVisibleValue", function (date) {
      var visibleValue = _date.default.formatDateToCurrentLocale(date);

      var newDate = _this.getDateObject(date);

      _this.setState({
        selectedDate: newDate
      }, function () {
        _this.updateValidEventValues(visibleValue);

        var event = {
          target: _this.input
        };
        event.target.value = visibleValue;

        _this.emitOnChangeCallback(event, date);

        _this.focusInput();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "focusInput", function () {
      _this.inputFocusedViaPicker = true;
      _this.isOpening = false;

      _this.closeDatePicker();

      _this.input.focus();

      _this.isBlurBlocked = false;
    });

    _defineProperty(_assertThisInitialized(_this), "handleVisibleInputChange", function (ev) {
      var _this$props4 = _this.props,
          disabled = _this$props4.disabled,
          readOnly = _this$props4.readOnly;
      var value = ev.target.value.formattedValue || ev.target.value;

      var dateWithSlashes = _date.default.sanitizeDateInput(value);

      var isValidDate = _date.default.isValidDate(dateWithSlashes);

      var isoDateString;
      if (disabled || readOnly) return;
      _this.isBlurBlocked = false;

      if (isValidDate || _this.canBeEmptyValues(value)) {
        isoDateString = isoFormattedValueString(dateWithSlashes);

        _this.updateSelectedDate(isoDateString);

        _this.emitOnChangeCallback(ev, isoDateString);
      }

      _this.setState({
        visibleValue: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateSelectedDate", function (newValue) {
      var newDate = _this.getDateObject(newValue);

      _this.setState({
        selectedDate: newDate
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getDateObject", function (newValue) {
      if (!_date.default.isValidDate(newValue)) {
        return _date.default.stringToDate(_date.default.todayFormatted());
      }

      return _date.default.stringToDate(isoFormattedValueString(newValue));
    });

    _defineProperty(_assertThisInitialized(_this), "emitOnChangeCallback", function (ev, isoFormattedValue) {
      if (_this.props.onChange) {
        var event = _this.buildCustomEvent(ev, isoFormattedValue);

        _this.props.onChange(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "canBeEmptyValues", function (value) {
      return _this.props.allowEmptyValue && !value.length;
    });

    _defineProperty(_assertThisInitialized(_this), "buildCustomEvent", function (ev, isoFormattedValue) {
      var _ev$target = ev.target,
          id = _ev$target.id,
          name = _ev$target.name,
          value = _ev$target.value;
      var lastValidEventValues = _this.state.lastValidEventValues;

      var validRawValue = _date.default.isValidDate(isoFormattedValue);

      var validValues = _this.canBeEmptyValues(value) ? {
        formattedValue: '',
        rawValue: ''
      } : lastValidEventValues;
      ev.target = _objectSpread({}, name && {
        name: name
      }, {}, id && {
        id: id
      }, {
        value: _objectSpread({}, validValues, {}, validRawValue && {
          formattedValue: _date.default.formatDateToCurrentLocale(value)
        }, {}, validRawValue && {
          rawValue: isoFormattedValue
        })
      });
      return ev;
    });

    _defineProperty(_assertThisInitialized(_this), "renderDatePicker", function (dateRangeProps) {
      if (!_this.state.isDatePickerOpen) return null;
      var _this$state2 = _this.state,
          visibleValue = _this$state2.visibleValue,
          lastValidEventValues = _this$state2.lastValidEventValues;
      var inputDate = _date.default.isValidDate(visibleValue) ? visibleValue : lastValidEventValues.formattedValue;
      return _react.default.createElement("div", {
        onClick: _this.markCurrentDatepicker,
        role: "presentation"
      }, _react.default.createElement(_datePicker.default, _extends({
        inputElement: _this.input && _this.input.parentElement,
        selectedDate: _this.state.selectedDate,
        handleDateSelect: _this.handleDateSelect,
        inputDate: inputDate
      }, dateRangeProps)));
    });

    _defineProperty(_assertThisInitialized(_this), "markCurrentDatepicker", function () {
      if (_this.props.disabled || _this.props.readOnly) return;
      _this.isOpening = true;
      _this.inputFocusedViaPicker = false;
      _this.isBlurBlocked = true;

      _this.openDatePicker();
    });

    _defineProperty(_assertThisInitialized(_this), "hiddenValue", function () {
      if (_date.default.isValidDate(_this.state.visibleValue)) {
        return _date.default.formatValue(_this.state.visibleValue, hiddenDateFormat);
      }

      return _this.state.lastValidEventValues.rawValue;
    });

    _defineProperty(_assertThisInitialized(_this), "renderHiddenInput", function () {
      var props = {
        name: _this.props.name,
        type: 'hidden',
        'data-element': 'hidden-input',
        value: _this.hiddenValue()
      };
      return _react.default.createElement("input", props);
    });

    return _this;
  }

  _createClass(BaseDateInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isMounted = true;

      if (this.props.autoFocus) {
        this.isAutoFocused = true;
        this.input.focus();
        this.openDatePicker(true);
      }

      this.handleValidationUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var message = 'Input elements should not switch from uncontrolled to controlled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input element for the lifetime of the component';
      (0, _invariant.default)(this.isControlled === (this.props.value !== undefined), message);

      if (this.isControlled && !this.inputHasFocus && this.hasValueChanged(prevProps)) {
        this.updateSelectedDate(this.props.value);
      }

      if (this.hasValidationsChanged()) {
        this.handleValidationUpdate();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          minDate = _this$props5.minDate,
          maxDate = _this$props5.maxDate,
          isDateRange = _this$props5.isDateRange,
          inputProps = _objectWithoutProperties(_this$props5, ["minDate", "maxDate", "isDateRange"]);

      var events = {};
      delete inputProps.autoFocus;
      delete inputProps.defaultValue;
      delete inputProps.value;
      events = {
        onBlur: this.handleBlur,
        onChange: this.handleVisibleInputChange,
        onFocus: this.handleFocus,
        onKeyDown: this.handleKeyDown,
        onClick: this.markCurrentDatepicker
      };
      var validations = isDateRange ? concatAllValidations(inputProps) : this.state.validationsArray;
      return _react.default.createElement(_date3.default, _extends({
        role: "presentation",
        size: inputProps.size
      }, (0, _tags.default)('date', this.props)), _react.default.createElement(_textbox.default, _extends({}, inputProps, {
        validations: validations,
        inputIcon: "calendar",
        value: this.state.visibleValue,
        rawValue: isoFormattedValueString(this.state.visibleValue),
        inputRef: this.assignInput
      }, events)), this.renderHiddenInput(), this.renderDatePicker({
        minDate: minDate,
        maxDate: maxDate
      }));
    }
  }]);

  return BaseDateInput;
}(_react.default.Component);

exports.BaseDateInput = BaseDateInput;

function concatAllValidations(props) {
  if (!props.validations) props.validations = [];
  if (typeof props.validations === 'function') props.validations = [props.validations];
  return [].concat(_toConsumableArray(props.validations), _toConsumableArray(props.internalValidations));
}

function isoFormattedValueString(valueToFormat) {
  return _date.default.formatValue(valueToFormat);
}

function generateAdjustedValue(_ref) {
  var value = _ref.value,
      defaultValue = _ref.defaultValue,
      allowEmptyValue = _ref.allowEmptyValue;

  if (value !== undefined && canReturnValue(value, allowEmptyValue)) {
    return _date.default.formatDateToCurrentLocale(value);
  }

  if (canReturnValue(defaultValue, allowEmptyValue)) {
    return _date.default.formatDateToCurrentLocale(defaultValue);
  }

  return _date.default.formatDateToCurrentLocale(_date.default.todayFormatted());
}

function isValidInitialFormat(value) {
  return _date.default.isValidDate(value, {
    defaultValue: hiddenDateFormat
  });
}

function canReturnValue(value, allowEmptyValue) {
  if (!allowEmptyValue && value && value.length) {
    var message = 'The Date component must be initialised with a value in the iso (YYYY-MM-DD) format';
    (0, _invariant.default)(isValidInitialFormat(value), message);
  }

  return isValidInitialFormat(value) || allowEmptyValue && !value.length;
}

var DateInput = (0, _withUniqueIdProps.default)(BaseDateInput);
BaseDateInput.propTypes = _objectSpread({}, _textbox.default.propTypes, {
  /** Boolean to allow the input to have an empty value */
  allowEmptyValue: _propTypes.default.bool,

  /** Automatically focus on component mount */
  autoFocus: _propTypes.default.bool,

  /** Used to provide additional validations on composed components */
  internalValidations: _propTypes.default.array,

  /** Minimum possible date YYYY-MM-DD */
  minDate: _propTypes.default.string,

  /** Maximum possible date YYYY-MM-DD */
  maxDate: _propTypes.default.string,

  /** Specify a callback triggered on blur */
  onBlur: _propTypes.default.func,

  /** Specify a callback triggered on change */
  onChange: _propTypes.default.func,

  /** Specify a callback triggered on focus */
  onFocus: _propTypes.default.func,

  /** Name of the input */
  name: _propTypes.default.string,

  /** The current date YYYY-MM-DD */
  value: _propTypes.default.string,

  /** Triggers textbox validation when it's boolean value changes */
  forceUpdateTriggerToggle: _propTypes.default.bool,

  /** Temporary flag to indicate if input is part of DateRange */
  isDateRange: _propTypes.default.bool
});
BaseDateInput.defaultProps = {
  internalValidations: [new _date2.default()]
};
var _default = DateInput;
exports.default = _default;