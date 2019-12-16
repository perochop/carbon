"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.function.name");

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
exports.default = void 0;

var _addonKnobs = require("@storybook/addon-knobs");

var _react = _interopRequireWildcard(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _storybookState = require("@sambego/storybook-state");

var _countries = _interopRequireDefault(require("../../../../demo/data/countries"));

var _button = _interopRequireDefault(require("../../button"));

var _multiActionButton = _interopRequireDefault(require("../../multi-action-button"));

var _ = require("..");

var _textarea = _interopRequireDefault(require("../../../__experimental__/components/textarea"));

var _textbox = _interopRequireDefault(require("../../../__experimental__/components/textbox"));

var _date = _interopRequireDefault(require("../../../__experimental__/components/date"));

var _textbox2 = _interopRequireDefault(require("../../../__experimental__/components/textbox/textbox.stories"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper/options-helper"));

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

var store = new _storybookState.Store({
  sortOrder: 'asc',
  sortedColumn: 'name',
  currentPage: '1',
  children: undefined
});

var handleChange = function handleChange(e, tableOptions) {
  var sortOrder = tableOptions.sortOrder,
      sortedColumn = tableOptions.sortedColumn,
      currentPage = tableOptions.currentPage;
  store.set({
    sortOrder: sortOrder,
    sortedColumn: sortedColumn,
    currentPage: currentPage
  });
  (0, _addonActions.action)('change')(e, tableOptions);
};

var handleToolbarAction = function handleToolbarAction() {
  (0, _addonActions.action)('toolbar action')();
};

var recordsForActivePage = function recordsForActivePage(start, end) {
  var records = _countries.default;

  if (store.get('sortOrder') === 'desc' && store.get('sortedColumn').length) {
    records = records.reverse();
  }

  return records.slice(start, end).toJS();
};

var getActiveRows = function getActiveRows(pageSize, totalRecords) {
  var currentPage = store.get('currentPage');
  var candidateIndex = pageSize * currentPage;
  var endIndex = candidateIndex <= totalRecords ? candidateIndex : totalRecords;
  var remainder = endIndex % pageSize;
  var currentPageSize = endIndex === totalRecords && remainder !== 0 ? endIndex % pageSize : pageSize;
  var startIndex = endIndex - currentPageSize;
  return recordsForActivePage(startIndex, endIndex);
};

var pickInput = function pickInput(name) {
  var inputTypes = _optionsHelper.default.inputTypes;

  switch (name) {
    case inputTypes[1]:
      return _react.default.createElement(_textarea.default, _textbox2.default);

    case inputTypes[2]:
      return _react.default.createElement(_date.default, _textbox2.default);

    default:
      return _react.default.createElement(_textbox.default, _textbox2.default);
  }
};

var buildRows = function buildRows(_ref) {
  var pageSize = _ref.pageSize,
      totalRecords = _ref.totalRecords,
      inputType = _ref.inputType,
      size = _ref.size;
  var rowsCountries = getActiveRows(pageSize, totalRecords);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_.TableRow, {
    key: "header",
    as: "header",
    uniqueID: "header"
  }, _react.default.createElement(_.TableHeader, {
    sortable: true,
    name: "name",
    scope: "col"
  }, "Country"), _react.default.createElement(_.TableHeader, {
    sortable: true,
    scope: "col",
    name: "code",
    width: "200"
  }, "Code")), rowsCountries.map(function (row) {
    var cellContent = _react.default.createElement(_.TableCell, null, row.name);

    if (inputType) {
      cellContent = _react.default.createElement(_.TableCell, {
        size: size
      }, pickInput(inputType));
    }

    return _react.default.createElement(_.TableRow, {
      key: row.id,
      uniqueID: row.id
    }, cellContent, _react.default.createElement(_.TableCell, null, row.value));
  }));
};

var calculateCurrentPage = function calculateCurrentPage(_ref2) {
  var totalRecords = _ref2.totalRecords,
      pageSize = _ref2.pageSize,
      paginate = _ref2.paginate;
  var pages = totalRecords / pageSize;
  var maxValidPage = pageSize && paginate ? Math.max(Math.ceil(pages), 1) : '1';
  var isCurrentPageValid = store.get('currentPage') <= pages;
  return isCurrentPageValid ? store.get('currentPage') : maxValidPage;
};

var Wrapper = function Wrapper(props) {
  var _useState = (0, _react.useState)('10'),
      _useState2 = _slicedToArray(_useState, 2),
      pageSize = _useState2[0],
      setPageSize = _useState2[1];

  var tableProps = _objectSpread({}, props);

  tableProps.pageSize = tableProps.showPageSizeSelection ? pageSize : (0, _addonKnobs.text)('pageSize', '5');
  store.set({
    currentPage: calculateCurrentPage(tableProps)
  });
  store.set({
    sortOrder: tableProps.sortOrder
  });
  store.set({
    sortedColumn: tableProps.sortColumn
  });
  return _react.default.createElement(_storybookState.State, {
    store: store,
    parseState: function parseState(state) {
      return _objectSpread({}, state, {
        children: buildRows(tableProps)
      });
    }
  }, _react.default.createElement(_.Table, _extends({
    actionToolbarChildren: function actionToolbarChildren(context) {
      return [_react.default.createElement(_button.default, {
        disabled: context.disabled,
        key: "single-action",
        onClick: handleToolbarAction
      }, "Test Action"), _react.default.createElement(_multiActionButton.default, {
        text: "Actions",
        disabled: context.disabled,
        key: "multi-actions"
      }, _react.default.createElement(_button.default, {
        onClick: handleToolbarAction
      }, "foo"), _react.default.createElement(_button.default, {
        onClick: handleToolbarAction
      }, "bar"), _react.default.createElement(_button.default, {
        onClick: handleToolbarAction
      }, "qux"))];
    },
    path: "/countries",
    actions: {
      delete: {
        icon: 'bin',
        onClick: handleToolbarAction
      },
      settings: {
        icon: 'settings',
        onClick: handleToolbarAction
      }
    }
  }, tableProps, {
    onChange: handleChange,
    sortOrder: store.sortOrder,
    sortedColumn: store.sortedColumn,
    onPageSizeChange: function onPageSizeChange(size) {
      return setPageSize(size);
    }
  })));
};

var _default = Wrapper;
exports.default = _default;