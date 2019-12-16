"use strict";

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.number.is-nan");

require("core-js/modules/es.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _pager = require("./pager.styles");

var _icon = _interopRequireDefault(require("../icon"));

var _number = _interopRequireDefault(require("../../__deprecated__/components/number"));

var _number2 = _interopRequireDefault(require("../../__experimental__/components/number"));

var _events = _interopRequireDefault(require("../../utils/helpers/events"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _styleHelper = require("../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PagerNavigation = function PagerNavigation(props) {
  var theme = props.theme,
      setCurrentThemeName = props.setCurrentThemeName,
      setCurrentPage = props.setCurrentPage,
      onPagination = props.onPagination;
  setCurrentThemeName(theme);

  var updatePageFromInput = function updatePageFromInput(ev) {
    var newPage = Math.abs(Number(ev.target.value));
    if (Number(newPage) === 0 || Number.isNaN(newPage)) newPage = '1';else if (newPage > maxPages()) newPage = String(maxPages());
    onPagination(String(newPage), props.pageSize, 'input');
    setCurrentPage(String(newPage));
  };

  function maxPages() {
    var totalRecordsCount = props.totalRecords >= 0 ? props.totalRecords : 0;

    if (props.pageSize && props.pageSize !== '0' && totalRecordsCount > 0) {
      return Math.ceil(totalRecordsCount / props.pageSize);
    }

    return 1;
  }

  function navArrowChange(step) {
    var newPage = String(Number(props.currentPage) + step);
    var desc = step === 1 ? 'next' : 'previous';
    onPagination(newPage, props.pageSize, desc);
  }

  function navArrow(step) {
    var arrowProps = {
      'data-element': 'next-page',
      type: 'dropdown'
    };

    function disabled() {
      if (maxPages() === 1) {
        return true;
      }

      if (step === -1) {
        return props.currentPage === '1';
      }

      return props.currentPage === String(maxPages());
    }

    return _react.default.createElement(_pager.PagerButtonWrapperStyles, {
      disabled: disabled(),
      next: step === 1
    }, _react.default.createElement(_icon.default, _extends({
      onClick: function onClick() {
        if (!disabled()) {
          navArrowChange(step);
        }
      }
    }, arrowProps)));
  }

  function navLink(type) {
    var currentPage = Number(props.currentPage);
    var navLinkConfig = {
      first: {
        text: 'First',
        destination: '1'
      },
      last: {
        text: _i18nJs.default.t('pager.last', {
          defaultValue: 'Last'
        }),
        destination: String(maxPages())
      },
      next: {
        text: _i18nJs.default.t('pager.next', {
          defaultValue: 'Next'
        }),
        destination: String(currentPage + 1)
      },
      back: {
        text: _i18nJs.default.t('pager.previous', {
          defaultValue: 'Previous'
        }),
        destination: String(currentPage - 1)
      }
    };
    var _navLinkConfig$type = navLinkConfig[type],
        destination = _navLinkConfig$type.destination,
        text = _navLinkConfig$type.text;

    var clickHandler = function clickHandler() {
      onPagination(destination, props.pageSize, type);
    };

    function disabled() {
      if (maxPages() === 1) {
        return true;
      }

      if (currentPage === 1) {
        return type === 'back' || type === 'first';
      }

      if (currentPage === maxPages()) {
        return type === 'next' || type === 'last';
      }

      return false;
    }

    return _react.default.createElement(_pager.PagerLinkStyles, {
      disabled: disabled(),
      onClick: !disabled() ? clickHandler : undefined
    }, text);
  }

  function handlePageInputChange(ev) {
    setCurrentPage(ev.target.value);
  }

  function currentPageInput() {
    var currentPageInputProps = {
      value: props.currentPage,
      className: 'carbon-pager__current-page',
      'data-element': 'current-page',
      onChange: handlePageInputChange,
      onBlur: updatePageFromInput,
      onKeyUp: function onKeyUp(ev) {
        if (!_events.default.isEnterKey(ev)) {
          return false;
        }

        return updatePageFromInput(ev);
      }
    };

    if ((0, _styleHelper.isClassic)(theme)) {
      return _react.default.createElement("label", null, _react.default.createElement(_number.default, currentPageInputProps));
    }

    return _react.default.createElement("label", null, _react.default.createElement(_number2.default, currentPageInputProps));
  }

  if ((0, _styleHelper.isClassic)(theme)) {
    return _react.default.createElement(_pager.PagerNavigationStyles, null, navArrow(-1), _react.default.createElement(_pager.PagerNoSelectStyles, null, _i18nJs.default.t('pager.page_x', {
      defaultValue: 'Page '
    })), currentPageInput(), _react.default.createElement(_pager.PagerNoSelectStyles, null, _i18nJs.default.t('pager.of_y', {
      defaultValue: ' of '
    }), maxPages()), navArrow(1));
  }

  return _react.default.createElement(_pager.PagerNavigationStyles, null, navLink('first'), navLink('back'), _react.default.createElement(_pager.PagerNavInnerStyles, null, _react.default.createElement(_pager.PagerNoSelectStyles, null, _i18nJs.default.t('pager.page_x', {
    defaultValue: 'Page '
  })), currentPageInput(), _react.default.createElement(_pager.PagerNoSelectStyles, null, _i18nJs.default.t('pager.of_y', {
    defaultValue: ' of '
  }), maxPages())), navLink('next'), navLink('last'));
};

PagerNavigation.propTypes = {
  /** Current visible page */
  currentPage: _propTypes.default.string.isRequired,

  /** Total number of records */
  totalRecords: _propTypes.default.number.isRequired,

  /** Pagination page size */
  pageSize: _propTypes.default.string,

  /** Function called when pager changes (PageSize, Current Page) */
  onPagination: _propTypes.default.func.isRequired,

  /** Sets the current page being shown */
  setCurrentPage: _propTypes.default.func,

  /** Current theme */
  theme: _propTypes.default.object,

  /** Callback for the current theme name */
  setCurrentThemeName: _propTypes.default.func
};
PagerNavigation.defaultProps = {
  theme: _base.default
};

var _default = (0, _styledComponents.withTheme)(PagerNavigation);

exports.default = _default;