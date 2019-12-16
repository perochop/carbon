"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _i18nJs = _interopRequireDefault(require("i18n-js"));

require("react-day-picker/lib/style.css");

var _moment = _interopRequireDefault(require("react-day-picker/moment"));

var _reactDayPicker = _interopRequireDefault(require("react-day-picker"));

var _browser = _interopRequireDefault(require("../../../utils/helpers/browser/browser"));

var _date = _interopRequireDefault(require("../../../utils/helpers/date/date"));

var _portal = _interopRequireDefault(require("../../../components/portal/portal"));

var _navbar = _interopRequireDefault(require("./navbar"));

var _weekday = _interopRequireDefault(require("./weekday"));

var _dayPicker = _interopRequireDefault(require("./day-picker.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DatePicker = function DatePicker(props) {
  var window = _browser.default.getWindow();

  var _useState = (0, _react.useState)(function () {
    return getContainerPosition(window, props.inputElement);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      containerPosition = _useState2[0],
      setContainerPosition = _useState2[1];

  var _useState3 = (0, _react.useState)(isoFormattedValueString(props.inputDate)),
      _useState4 = _slicedToArray(_useState3, 2),
      currentInputDate = _useState4[0],
      setCurrentInputDate = _useState4[1];

  var containerProps = {
    style: containerPosition
  };
  var datepicker = (0, _react.useRef)(null);
  var datePickerProps = {
    disabledDays: getDisabledDays(props.minDate, props.maxDate),
    enableOutsideDays: true,
    fixedWeeks: true,
    initialMonth: props.selectedDate,
    inline: true,
    locale: _i18nJs.default.locale,
    localeUtils: _moment.default,
    navbarElement: _react.default.createElement(_navbar.default, null),
    onDayClick: handleDayClick,
    selectedDays: [props.selectedDate],
    weekdayElement: function weekdayElement(weekdayElementProps) {
      var className = weekdayElementProps.className,
          weekday = weekdayElementProps.weekday,
          localeUtils = weekdayElementProps.localeUtils;
      var weekdayLong = localeUtils.formatWeekdayLong(weekday);
      var weekdayShort = weekdayLong.substring(0, 3);
      return _react.default.createElement(_weekday.default, {
        className: className,
        title: weekdayLong
      }, weekdayShort);
    }
  };
  (0, _react.useEffect)(function () {
    if (hasComponentUpdated()) {
      var updatedDate = isoFormattedValueString(props.inputDate);
      datepicker.current.showMonth(_date.default.stringToDate(updatedDate));
      setCurrentInputDate(updatedDate);
    }
  }, [props.inputDate, currentInputDate, containerPosition]);

  function handleDayClick(selectedDate, modifiers) {
    if (!modifiers.disabled) {
      props.handleDateSelect(selectedDate);
    }
  }

  function hasComponentUpdated() {
    var propDate = isoFormattedValueString(props.inputDate);
    return props.inputDate && currentDateHasChanged(currentInputDate, propDate);
  }

  return _react.default.createElement(_portal.default, {
    onReposition: function onReposition() {
      return setContainerPosition(getContainerPosition(window, props.inputElement));
    }
  }, _react.default.createElement(_dayPicker.default, null, _react.default.createElement(_reactDayPicker.default, _extends({}, datePickerProps, {
    containerProps: containerProps,
    ref: datepicker
  }))));
};

DatePicker.propTypes = {
  /** Minimum possible date */
  minDate: _propTypes.default.string,

  /** Maximum possible date */
  maxDate: _propTypes.default.string,

  /* The string value in the date input */
  inputDate: _propTypes.default.string,

  /** Element that the DatePicker will be displayed under */
  inputElement: _propTypes.default.object.isRequired,

  /** Currently selected date */
  selectedDate: _propTypes.default.object,

  /** Callback to set selected date */
  handleDateSelect: _propTypes.default.func
};

function currentDateHasChanged(currentDate, newDate) {
  return currentDate !== newDate;
}

function isoFormattedValueString(valueToFormat) {
  return _date.default.formatValue(valueToFormat);
}
/**
 * Returns the disabled array of days specified by props maxDate and minDate
 */


function getDisabledDays(minDate, maxDate) {
  var days = [];

  if (!minDate && !maxDate) {
    return null;
  }

  if (minDate) {
    days.push({
      before: _date.default.stringToDate(minDate)
    });
  }

  if (maxDate) {
    days.push({
      after: _date.default.stringToDate(maxDate)
    });
  }

  return days;
}
/**
 * Returns the style for the DayPicker container
 */


function getContainerPosition(window, input) {
  var inputRect = input.getBoundingClientRect();
  var offsetY = window.pageYOffset;
  return {
    left: inputRect.left,
    top: inputRect.bottom + offsetY
  };
}

var _default = DatePicker;
exports.default = _default;