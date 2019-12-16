"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _lodash = require("lodash");

var _date = _interopRequireDefault(require("../date"));

var _dateRange = _interopRequireDefault(require("../../../utils/validations/date-range"));

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

var _dateRange2 = _interopRequireDefault(require("./date-range.style"));

var _date2 = _interopRequireDefault(require("../../../utils/helpers/date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DateRange =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DateRange, _React$Component);

  function DateRange() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DateRange);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateRange)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "today", _date2.default.todayFormatted('YYYY-MM-DD'));

    _defineProperty(_assertThisInitialized(_this), "isControlled", _this.props.value !== undefined);

    _defineProperty(_assertThisInitialized(_this), "startDateInputRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "endDateInputRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "isBlurBlocked", true);

    _defineProperty(_assertThisInitialized(_this), "state", {
      forceUpdateTriggerToggle: false,
      startDateValue: {
        formattedValue: _date2.default.formatDateToCurrentLocale(_this.startDate),
        rawValue: _date2.default.formatValue(_this.startDate || _this.today)
      },
      endDateValue: {
        formattedValue: _date2.default.formatDateToCurrentLocale(_this.endDate),
        rawValue: _date2.default.formatValue(_this.endDate || _this.today)
      }
      /** onChange function -triggers validations on both fields and updates opposing field when one changed. */

    });

    _defineProperty(_assertThisInitialized(_this), "_onChange", function (changedDate, ev) {
      _this.setState(_defineProperty({}, "".concat(changedDate, "Value"), _objectSpread({}, ev.target.value)), function () {
        if (_this.props.onChange) {
          var event = _this.buildCustomEvent();

          _this.props.onChange(event);
        }
      });

      _this.setState(function (prevState) {
        return {
          forceUpdateTriggerToggle: !prevState.forceUpdateTriggerToggle
        };
      }, _this.blockBlur());
    });

    _defineProperty(_assertThisInitialized(_this), "_onBlur", function () {
      if (_this.isBlurBlocked()) {
        return;
      }

      if (_this.props.onBlur) {
        var event = _this.buildCustomEvent();

        _this.props.onBlur(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isBlurBlocked", function () {
      var startBlocked = _this.startDateInputRef.current.isBlurBlocked || _this.startDateInputRef.current.inputFocusedViaPicker;
      var endBlocked = _this.endDateInputRef.current.isBlurBlocked || _this.endDateInputRef.current.inputFocusedViaPicker;
      return startBlocked || endBlocked;
    });

    _defineProperty(_assertThisInitialized(_this), "buildCustomEvent", function () {
      var _this$state = _this.state,
          startDateValue = _this$state.startDateValue,
          endDateValue = _this$state.endDateValue;
      var _this$props = _this.props,
          name = _this$props.name,
          id = _this$props.id;
      return {
        target: _objectSpread({}, name && {
          name: name
        }, {}, id && {
          id: id
        }, {
          value: [startDateValue, endDateValue]
        })
      };
    });

    _defineProperty(_assertThisInitialized(_this), "focusStart", function () {
      _this.blockBlur('start');

      _this.endDateInputRef.current.closeDatePicker();
    });

    _defineProperty(_assertThisInitialized(_this), "focusEnd", function () {
      _this.blockBlur('end');

      _this.startDateInputRef.current.closeDatePicker();
    });

    _defineProperty(_assertThisInitialized(_this), "blockBlur", function (id) {
      if (id === 'start') {
        _this.startDateInputRef.current.isBlurBlocked = true;
        _this.startDateInputRef.current.inputFocusedViaPicker = true;
      } else if (id === 'end') {
        _this.endDateInputRef.current.isBlurBlocked = true;
        _this.endDateInputRef.current.inputFocusedViaPicker = true;
      }
    });

    return _this;
  }

  _createClass(DateRange, [{
    key: "startDateProps",
    value: function startDateProps() {
      return this.dateProps('start', [new _dateRange.default({
        endDate: this.state.endDateValue.rawValue,
        messageText: this.startMessage
      })]);
    }
  }, {
    key: "endDateProps",
    value: function endDateProps() {
      return this.dateProps('end', [new _dateRange.default({
        startDate: this.state.startDateValue.rawValue,
        messageText: this.endMessage
      })]);
    }
  }, {
    key: "dateProps",
    value: function dateProps(propsKey, defaultValidations) {
      var dateProps = this.props["".concat(propsKey, "DateProps")] || {};
      var props = (0, _lodash.assign)({}, {
        label: this.props["".concat(propsKey, "Label")],
        labelInline: this.props.labelsInline,
        onChange: this._onChange.bind(null, "".concat(propsKey, "Date")),
        onBlur: this._onBlur.bind(null),
        value: this.state["".concat(propsKey, "DateValue")].rawValue
      }, dateProps);
      props.className = dateProps.className;
      props.forceUpdateTriggerToggle = this.state.forceUpdateTriggerToggle;
      props.validations = defaultValidations.concat(dateProps.validations || []);
      return props;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_dateRange2.default, _extends({}, (0, _tags.default)('date-range', this.props), {
        labelsInline: this.props.labelsInline
      }), _react.default.createElement(_date.default, _extends({}, this.startDateProps(), {
        onFocus: this.focusStart,
        "data-element": "start-date",
        ref: this.startDateInputRef,
        isDateRange: true
      })), _react.default.createElement(_date.default, _extends({}, this.endDateProps(), {
        onFocus: this.focusEnd,
        "data-element": "end-date",
        ref: this.endDateInputRef,
        isDateRange: true
      })));
    }
  }, {
    key: "startDate",

    /** The startDate value */
    get: function get() {
      var value = this.isControlled ? this.props.value : this.props.defaultValue;

      if (this.props.startDateProps && this.props.startDateProps.value) {
        return this.props.startDateProps.value;
      }

      return value ? value[0] : undefined;
    }
    /** The endDate value */

  }, {
    key: "endDate",
    get: function get() {
      var value = this.isControlled ? this.props.value : this.props.defaultValue;

      if (this.props.endDateProps && this.props.endDateProps.value) {
        return this.props.endDateProps.value;
      }

      return value ? value[1] : undefined;
    }
    /** The error message for the start message. */

  }, {
    key: "startMessage",
    get: function get() {
      return this.props.startMessage || _i18nJs.default.t('errors.messages.date_range', {
        defaultValue: 'Start date must not be later than the end date'
      });
    }
    /** The error message for the end message. */

  }, {
    key: "endMessage",
    get: function get() {
      return this.props.endMessage || _i18nJs.default.t('errors.messages.date_range', {
        defaultValue: 'End date cannot be earlier than the start date'
      });
    }
    /** Handle focus on start date field */

  }]);

  return DateRange;
}(_react.default.Component);

DateRange.propTypes = {
  /**
   * Optional label for endDate field
   * eslint is disabled because the prop is used to determine the label in the dateProps function
   */
  endLabel: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types

  /** Custom callback - receives array of startDate and endDate */
  onChange: _propTypes.default.func,

  /** Custom callback - receives array of startDate and endDate */
  onBlur: _propTypes.default.func,

  /** An array containing the value of startDate and endDate */
  value: _propTypes.default.arrayOf(_propTypes.default.string),

  /* The default value of the input if it's meant to be used as an uncontrolled component */
  defaultValue: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Optional label for startDate field
   * eslint is disabled because the prop is used to determine the label in the dateProps function
   */
  startLabel: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types

  /** Custom message for startDate field */
  startMessage: _propTypes.default.string,

  /** Custom message for endDate field */
  endMessage: _propTypes.default.string,

  /** Display labels inline */
  labelsInline: _propTypes.default.bool,

  /** Props for the child start Date component */
  startDateProps: _propTypes.default.shape(_objectSpread({}, _date.default.propTypes, {
    value: _propTypes.default.string
  })),

  /** Props for the child end Date component */
  endDateProps: _propTypes.default.shape(_objectSpread({}, _date.default.propTypes, {
    value: _propTypes.default.string
  })),

  /** An optional string prop to privide a name to the component */
  name: _propTypes.default.string,

  /** An optional string prop to privide an id to the component */
  id: _propTypes.default.string
};
var _default = DateRange;
exports.default = _default;