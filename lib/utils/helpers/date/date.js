"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.regexp.replace");

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _moment = _interopRequireDefault(require("moment"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * DateHelper used to encapsulate the date parsing library into a single helper
 */
var DateHelper = {
  /**
   * Sanitizes all valid date separators ( . - 'whitespace' ) replacing them
   * with a slash
   *
   * This allows us to compare against one separator in the i18n string. DD/MM/YYYY
   *
   * @method sanitizeDateInput
   * @return {String} sanitized input
   */
  sanitizeDateInput: function sanitizeDateInput(value) {
    if (!value) {
      return '';
    }

    return value.replace(/[-.\s]/g, '/').toLowerCase();
  },

  /**
   * Determins if date is valid
   *
   * @param {String} value - value to validate
   * @param {Object} options Override Moment JS options
   * @return {Boolean}
   */
  isValidDate: function isValidDate(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return DateHelper._parseDate(value, options).isValid();
  },

  /**
   * Formats the given value to a specified format
   *
   * @method formatValue
   * @param {String} val current value
   * @param {String} formatTo Desired format
   * @param {Object} options Override Moment JS options
   * @return {String} formatted date
   */
  formatValue: function formatValue(value, formatTo) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var date = DateHelper._parseDate(value, options);

    return date.isValid() ? date.format(formatTo) : value;
  },

  /**
   * Convert a value such as '2017-08-23' into a Javascript Date object
   *
   * @method stringToDate
   * @param {String} value current value e.g. 2017-08-23
   * @return {Oject} The Date object
   */
  stringToDate: function stringToDate(value) {
    return (0, _moment.default)(value).toDate();
  },

  /**
   * Formats the given date string to the specified format
   * Moment will not format the standard Javascript Date string format
   *
   * @method formatDateString
   * @param {String} value current value e.g. Wed Aug 23 2017 12:00:00 GMT+0100 (BST)
   * @param {String} formatTo Desired format e.g. YYYY-MM-DD
   * @return {String} formatted date
   */
  formatDateString: function formatDateString(value, formatTo) {
    return (0, _moment.default)(new Date(value).getTime()).format(formatTo);
  },

  /**
   * Returns todays date formatted
   *
   * @param {String} format - format of date
   * @return {Moment}
   */
  todayFormatted: function todayFormatted(format) {
    return (0, _moment.default)().format(format);
  },

  /**
   * Returns an array of days of the week by locale minfied
   * Mo, Tu, We, Th, Fr, Sa, Su
   *
   * @param {String} locale - defaulted to I18n.locale
   * @return {Array}
   */
  weekdaysMinified: function weekdaysMinified() {
    return _moment.default.localeData(_i18nJs.default.locale)._weekdaysMin;
  },

  /**
   * @param {String} value - the date to test
   * @param {Number} limit - the upper and lower bounds
   * @param {String} units - defaulted to days
   * @return {Boolean}
   */
  withinRange: function withinRange(value, limit, units) {
    var momentValue = DateHelper._parseDate(value),
        today = (0, _moment.default)();

    var difference = Math.abs(today.diff(momentValue, units));
    return difference < limit;
  },

  /**
   * Default options to pass to moment js
   *
   * @private
   * formats - given accepted formats
   * locale - current locale
   * strict - moment js strict mode
   * sanitize - should value be sanitized before parsing
   */
  _defaultMomentOptions: function _defaultMomentOptions() {
    return {
      formats: DateHelper._dateFormats(),
      locale: _i18nJs.default.locale,
      strict: true,
      sanitize: true
    };
  },

  /**
   * Large set of default date formats for if a
   * i18n is not supplied
   *
   * @private
   */
  _defaultDateFormats: function _defaultDateFormats() {
    return ['DDMMYYYY', 'DDMMYY', 'DD/MM/YYYY', 'DD/MM/YY', 'MMDDYYYY', 'MMDDYY', 'MM/DD/YYYY', 'MM/DD/YY', 'DDMMM', 'DD/MMM', 'DDMM', 'DD/MM', 'YYYYMMDD', 'YYYY/MM/DD', 'D/MM/YYYY', 'D/M/YYYY', 'D/MM/YY', 'D/M/YY', 'DD/M/YYYY', 'DD/M/YY', 'DD/M/YY', 'D/MMM/YYYY', 'DD/MMM/YYYY', 'DD/MMM/YY', 'D/MMMM/YYYY', 'DD/MMMM/YYYY', 'DD/MMMM/YY', 'MMM/YYYY', 'MMM/YY', 'MMMM/YYYY', 'MMMM/YY', 'Do/MMM/YYYY', 'Do/MMM/YY', 'Do/M/YYYY', 'Do/M/YY', 'Do/MM/YYYY', 'Do/MM/YY', 'Do/MMMM/YYYY', 'Do/MMMM/YY', 'MMMM/Do/YYYY', 'MMMM/Do/YY', 'MMMM/Do', 'MMM/Do/YYYY', 'MMM/Do/YY', 'MMM/Do', 'Do/MMM', 'D/MMM', 'D/MM', 'D/M', 'Do/MMMM', 'Do/MM', 'Do/M', 'D/MMMM', 'DD/MMMM', 'DD/MMM', 'DD/M', 'MMM', 'MMMM', 'DD', 'Do', 'D'];
  },

  /**
   * Parses date into moment
   * Note when sanitizing dates formats must contain '/' for separators
   *
   * @private
   * @param {String} value - value to parse
   * @param {Object} options Override Moment JS options
   * @return {Moment}
   */
  _parseDate: function _parseDate(value, options) {
    var opts = (0, _lodash.merge)(DateHelper._defaultMomentOptions(), options);
    var val = opts.sanitize ? DateHelper.sanitizeDateInput(value) : value;
    return (0, _moment.default)(val, opts.formats, opts.locale, opts.strict);
  },

  /**
  * Formats valid for entry
  *
  * @private
  * @method validFormats
  * @return {Array} formatted date strings
  */
  _dateFormats: function _dateFormats() {
    return _i18nJs.default.t('date.formats.inputs', {
      defaultValue: DateHelper._defaultDateFormats()
    });
  }
};
var _default = DateHelper;
exports.default = _default;