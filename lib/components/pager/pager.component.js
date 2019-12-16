"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.number.constructor");

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

var _immutable = _interopRequireDefault(require("immutable"));

var _pagerNavigation = _interopRequireDefault(require("./pager-navigation.component"));

var _pager = require("./pager.styles");

var _dropdown = _interopRequireDefault(require("../../__deprecated__/components/dropdown"));

var _themes = require("../../style/themes");

var _styleHelper = require("../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Pager = function Pager(props) {
  var _useState = (0, _react.useState)(props.currentPage),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = (0, _react.useState)(_themes.THEMES.classic),
      _useState4 = _slicedToArray(_useState3, 2),
      currentTheme = _useState4[0],
      setCurrentTheme = _useState4[1];

  (0, _react.useEffect)(function () {
    setCurrentPage(props.currentPage);
  }, [props.currentPage]);
  /** Term used to describe table data */

  var descriptor = _i18nJs.default.t('pager.records', {
    count: Number(props.totalRecords),
    defaultValue: (0, _styleHelper.isClassic)(currentTheme) ? ' records' : ' items'
  });

  function sizeSelector() {
    return _react.default.createElement(_dropdown.default, {
      options: props.pageSizeSelectionOptions,
      value: props.pageSize,
      onChange: function onChange(ev) {
        props.onPagination('1', ev.target.value, 'size');
      },
      "data-element": "page-select"
    });
  }

  function pageSizeOptions() {
    var elem = _react.default.createElement(_pager.PagerSizeOptionsInnerStyles, null, "Show ", sizeSelector(), " ", descriptor);

    return props.showPageSizeSelection ? elem : null;
  }

  return _react.default.createElement(_pager.PagerContainerStyles, {
    "data-component": "pager"
  }, _react.default.createElement(_pager.PagerSizeOptionsStyles, null, pageSizeOptions()), _react.default.createElement(_pagerNavigation.default, _extends({}, props, {
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    setCurrentThemeName: setCurrentTheme
  })), _react.default.createElement(_pager.PagerSummaryStyles, null, props.totalRecords, " ", descriptor));
};

Pager.propTypes = {
  /** Current visible page */
  currentPage: _propTypes.default.string.isRequired,

  /** Total number of records */
  totalRecords: _propTypes.default.number.isRequired,

  /** Function called when pager changes (PageSize, Current Page) */
  onPagination: _propTypes.default.func.isRequired,

  /** Pagination page size */
  pageSize: _propTypes.default.string,

  /** Should the page size selection dropdown be shown */
  showPageSizeSelection: _propTypes.default.bool,

  /** Set of page size options */
  pageSizeSelectionOptions: _propTypes.default.object,

  /** Current theme */
  theme: _propTypes.default.object
};
Pager.defaultProps = {
  pageSize: '10',
  showPageSizeSelection: false,
  pageSizeSelectionOptions: _immutable.default.fromJS([{
    id: '10',
    name: 10
  }, {
    id: '25',
    name: 25
  }, {
    id: '50',
    name: 50
  }])
};
var _default = Pager;
exports.default = _default;