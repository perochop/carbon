"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.number.is-integer");

require("core-js/modules/es.number.is-nan");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.constructor");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _invariant = _interopRequireDefault(require("invariant"));

var _decimal = _interopRequireDefault(require("./decimal.style"));

var _textbox = _interopRequireDefault(require("../textbox"));

var _i18n = _interopRequireDefault(require("../../../utils/helpers/i18n"));

var _events = _interopRequireDefault(require("../../../utils/helpers/events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var Decimal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Decimal, _React$Component);

  function Decimal(props) {
    var _this;

    _classCallCheck(this, Decimal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Decimal).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "defaultValue", _this.props.allowEmptyValue ? '' : '0.00');

    _defineProperty(_assertThisInitialized(_this), "startAnimation", function () {
      if (!_this.props.readOnly) {
        _this.setState({
          isAnimating: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "stopAnimation", function () {
      return _this.setState({
        isAnimating: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "callOnChange", function () {
      if (_this.props.onChange) {
        _this.props.onChange(_this.createEvent());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (ev) {
      var value = ev.target.value;

      _this.setState({
        value: _this.toStandardDecimal(value),
        visibleValue: value
      }, function () {
        _this.callOnChange();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPaste", function (ev) {
      var value = _this.replace(ev);

      var isValid = _this.isValidDecimal(value);

      if (!isValid) {
        ev.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyPress", function (ev) {
      // We're checking to see if the proposed change is valid, if not we block the user input
      if (!_this.isValidKeyPress(ev)) {
        ev.preventDefault();
      }

      if (_this.props.onKeyPress) {
        _this.props.onKeyPress(ev);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isValidKeyPress", function (ev) {
      var _I18nHelper$format = _i18n.default.format(),
          delimiter = _I18nHelper$format.delimiter,
          separator = _I18nHelper$format.separator;

      if (_events.default.isNumberKey(ev) || ev.key === delimiter || ev.key === separator || _events.default.isDeletingKey(ev)) {
        return _this.isValidDecimal(_this.replace(ev));
      }

      if (ev.ctrlKey || ev.metaKey) {
        // user is doing some browser related task, we don't want to interfere with that.
        // Command is metaKey in Safari, but ctrlKey in all other browsers
        // Windows key is metaKey also
        // we do want to check paste, we do that onPaste
        return true;
      }

      if (_events.default.isMinusKey(ev) && ev.target.selectionStart === 0) {
        // user is entering a negative symbol at the start of the number
        return true;
      }

      _this.startAnimation();

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      var shouldCallOnChange = false;

      _this.setState(function (_ref) {
        var value = _ref.value,
            visibleValue = _ref.visibleValue;

        if (!visibleValue || visibleValue === '-') {
          shouldCallOnChange = value !== _this.defaultValue;
          return {
            value: _this.defaultValue,
            visibleValue: _this.formatValue(_this.defaultValue)
          };
        }

        return {
          visibleValue: _this.formatValue(value)
        };
      }, function () {
        if (shouldCallOnChange) {
          _this.callOnChange();
        }

        if (_this.props.onBlur) {
          _this.props.onBlur(_this.createEvent());
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "createEvent", function () {
      var standardVisible = _this.toStandardDecimal(_this.state.visibleValue);

      var formattedValue = _this.isNaN(standardVisible) ? _this.state.visibleValue : _this.formatValue(standardVisible);
      return {
        target: {
          name: _this.props.name,
          id: _this.props.id,
          value: {
            rawValue: _this.state.value,
            formattedValue: formattedValue
          }
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "isNaN", function (value) {
      return Number.isNaN(Number(value));
    });

    _defineProperty(_assertThisInitialized(_this), "isValidDecimal", function (value) {
      var precision = _this.props.precision;

      var format = _i18n.default.format();

      var delimiter = "\\".concat(format.delimiter);
      var separator = "\\".concat(format.separator);
      var validDecimalMatcher = new RegExp("^[-]?[\\d".concat(delimiter, "]*[").concat(separator, "]?\\d{0,").concat(precision, "}?$"));
      var isValid = validDecimalMatcher.test(value);

      if (!isValid) {
        _this.startAnimation();
      }

      return isValid;
    });

    _defineProperty(_assertThisInitialized(_this), "getSafeValueProp", function (isInitialValue) {
      var _this$props = _this.props,
          value = _this$props.value,
          allowEmptyValue = _this$props.allowEmptyValue; // We're intentionally preventing the use of number values to help prevent any unintentional rounding issues

      (0, _invariant.default)(typeof value === 'string', 'Decimal `value` prop must be a string');

      if (isInitialValue && !allowEmptyValue) {
        (0, _invariant.default)(value !== '', 'Decimal `value` must not be an empty string. Please use `allowEmptyValue` or `0.00`');
      }

      return value;
    });

    _defineProperty(_assertThisInitialized(_this), "getSafePrecisionProp", function () {
      var precision = _this.props.precision;
      var lessThanOrEqual = precision <= Decimal.maxPrecision;
      var positive = precision >= 0;
      var isNumber = Number.isInteger(precision);
      (0, _invariant.default)(isNumber, 'Decimal `precision` prop should be a number');
      (0, _invariant.default)(lessThanOrEqual, 'Decimal `precision` prop cannot be greater than %s', Decimal.maxPrecision);
      (0, _invariant.default)(positive, 'Decimal `precision` prop cannot be negative');
      return precision;
    });

    _defineProperty(_assertThisInitialized(_this), "removeDelimiters", function (value) {
      var format = _i18n.default.format();

      var delimiter = "\\".concat(format.delimiter);
      var delimiterMatcher = new RegExp("[".concat(delimiter, "]*"), 'g');
      var noDelimiters = value.replace(delimiterMatcher, '');
      return noDelimiters;
    });

    _defineProperty(_assertThisInitialized(_this), "formatValue", function (value) {
      (0, _invariant.default)(!_this.isNaN(value), "The supplied decimal (".concat(value, ") is not a number"));

      if (value === '') {
        return value;
      }

      return _i18n.default.formatDecimal(value, _this.getSafePrecisionProp());
    });

    _defineProperty(_assertThisInitialized(_this), "replace", function (ev) {
      var _ev$target = ev.target,
          selectionStart = _ev$target.selectionStart,
          selectionEnd = _ev$target.selectionEnd,
          value = _ev$target.value,
          clipboardData = ev.clipboardData,
          type = ev.type;
      var change = ev.key;

      if (type === 'paste') {
        change = clipboardData.getData('text/plain');
      }

      if (_events.default.isDeletingKey(ev)) {
        change = '';
      }

      return value.substring(0, selectionStart) + change + value.substring(selectionEnd);
    });

    _defineProperty(_assertThisInitialized(_this), "toStandardDecimal", function (i18nValue) {
      var withoutDelimiters = _this.removeDelimiters(i18nValue);

      var _I18nHelper$format2 = _i18n.default.format(),
          separator = _I18nHelper$format2.separator;

      return withoutDelimiters.replace(new RegExp("\\".concat(separator), 'g'), '.');
    });

    var isControlled = _this.isControlled();

    var _value = isControlled ? _this.getSafeValueProp(true) : _this.props.defaultValue || _this.defaultValue;

    _this.state = {
      value: _value,
      visibleValue: _this.formatValue(_value),
      isControlled: isControlled,
      isAnimating: false
    };
    return _this;
  }

  _createClass(Decimal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var message = 'Input elements should not switch from uncontrolled to controlled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input element for the lifetime of the component';
      var isControlled = this.isControlled();
      (0, _invariant.default)(this.state.isControlled === isControlled, message);

      if (isControlled) {
        var valueProp = this.getSafeValueProp();

        if (valueProp !== prevState.value) {
          var safeVisibleValue = valueProp === '-' ? this.formatValue(this.defaultValue) : this.formatValue(valueProp);
          this.setState({
            value: valueProp,
            visibleValue: safeVisibleValue
          });
        }
      }

      if (prevProps.precision !== this.props.precision) {
        this.setState(function (localPreviousState) {
          var visibleValue = _this2.formatValue(localPreviousState.value);

          return {
            value: _this2.toStandardDecimal(visibleValue),
            visibleValue: visibleValue
          };
        }, function () {
          _this2.callOnChange();
        });
      }
    }
  }, {
    key: "isControlled",

    /**
     * Determine if the component is controlled at the time of call
     */
    value: function isControlled() {
      return this.props.value !== undefined;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          name = _this$props2.name,
          defaultValue = _this$props2.defaultValue,
          rest = _objectWithoutProperties(_this$props2, ["name", "defaultValue"]);

      return _react.default.createElement(_decimal.default, {
        isAnimating: this.state.isAnimating,
        onAnimationEnd: this.stopAnimation
      }, _react.default.createElement(_textbox.default, _extends({}, rest, {
        onKeyPress: this.onKeyPress,
        onChange: this.onChange,
        onPaste: this.onPaste,
        onBlur: this.onBlur,
        value: this.state.visibleValue,
        "data-component": "decimal"
      })), _react.default.createElement("input", {
        name: name,
        value: this.toStandardDecimal(this.state.visibleValue),
        type: "hidden",
        "data-component": "hidden-input"
      }));
    }
  }]);

  return Decimal;
}(_react.default.Component);

_defineProperty(Decimal, "maxPrecision", 15);

Decimal.propTypes = {
  /**
   * The default value alignment on the input
   */
  align: _propTypes.default.string,

  /**
   * The decimal precision of the value in the input
   */
  precision: _propTypes.default.number,

  /**
   * The width of the input as a percentage
   */
  inputWidth: _propTypes.default.number,

  /**
   * If true, the component will be read-only
   */
  readOnly: _propTypes.default.bool,

  /**
   * The default value of the input if it's meant to be used as an uncontrolled component
   */
  defaultValue: _propTypes.default.string,

  /**
   * The value of the input if it's used as a controlled component
   */
  value: _propTypes.default.string,

  /**
   * Handler for change event if input is meant to be used as a controlled component
   */
  onChange: _propTypes.default.func,

  /**
   * Handler for blur event
   */
  onBlur: _propTypes.default.func,

  /**
   * Handler for key press event
   */
  onKeyPress: _propTypes.default.func,

  /**
   * The input name
   */
  name: _propTypes.default.string,

  /**
   * The input id
   */
  id: _propTypes.default.string,

  /**
   * Allow an empty value instead of defaulting to 0.00
   */
  allowEmptyValue: _propTypes.default.bool
};
Decimal.defaultProps = {
  align: 'right',
  precision: 2,
  allowEmptyValue: false
};
var _default = Decimal;
exports.default = _default;