"use strict";

require("core-js/modules/es.object.assign");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Replaces today date with specified in the argument of the "set" method.
 * Ensures that the UTC time is returned regardless of the local time.
 */
jest.mock('../utils/helpers/date', function () {
  var _DateHelper = jest.requireActual('../utils/helpers/date');

  return {
    __esModule: true,
    default: function () {
      var mockTodayDate = '1-1-2019';
      var isoDateFormat = 'YYYY-MM-DD';
      var MockedDateHelper = Object.assign({}, _DateHelper.default);

      MockedDateHelper._parseDate = function (value, options) {
        return _DateHelper.default._parseDate(value, options).utc();
      };

      MockedDateHelper.stringToDate = function (value) {
        return (0, _moment.default)(value).utc().toDate();
      };

      MockedDateHelper.todayFormatted = function () {
        var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : isoDateFormat;
        return (0, _moment.default)(mockTodayDate).utc().format(format);
      };

      MockedDateHelper.formatDateString = function (value) {
        var formatTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isoDateFormat;
        return (0, _moment.default)(new Date(value).getTime()).utc().format(formatTo);
      };

      return MockedDateHelper;
    }()
  };
});