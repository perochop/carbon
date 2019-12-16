"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _storybookState = require("@sambego/storybook-state");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _pager = _interopRequireDefault(require("./pager.component"));

var _documentation = require("./documentation");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper/options-helper"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_pager.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /pager-navigation\.component(?!spec)/);
var store = new _storybookState.Store({
  currentPage: '1',
  pageSize: _pager.default.defaultProps.pageSize
});

var handlePagination = function handlePagination(newPage, pageSize, type) {
  if (type === 'size') {
    store.set({
      pageSize: pageSize,
      currentPage: newPage
    });
  } else {
    store.set({
      currentPage: newPage
    });
  }
};

var TableComponent = function TableComponent(_ref) {
  var propDefinitions = _ref.propDefinitions;
  // Custom TableComponent for displaying pageSizeSelectionOptions correctly
  // Can remove when no longer using Immutable
  var props = propDefinitions.map(function (_ref2) {
    var property = _ref2.property,
        propType = _ref2.propType,
        required = _ref2.required,
        description = _ref2.description,
        defaultValue = _ref2.defaultValue;
    var adjustedDefaultValue = property === 'pageSizeSelectionOptions' ? '10, 25, 50' : defaultValue;
    return _react.default.createElement("tr", {
      key: property
    }, _react.default.createElement("td", null, property), _react.default.createElement("td", null, propType.name), _react.default.createElement("td", null, required ? 'yes' : '-'), _react.default.createElement("td", {
      style: {
        color: 'rgb(34, 34, 170)'
      }
    }, adjustedDefaultValue || '-'), _react.default.createElement("td", null, description));
  });
  return _react.default.createElement("table", {
    className: "info-table"
  }, _react.default.createElement("thead", null, _react.default.createElement("tr", {
    style: {
      textAlign: 'left'
    }
  }, _react.default.createElement("th", null, "property"), _react.default.createElement("th", null, "propType"), _react.default.createElement("th", null, "required"), _react.default.createElement("th", null, "default"), _react.default.createElement("th", null, "description"))), _react.default.createElement("tbody", null, props));
};

TableComponent.propTypes = {
  propDefinitions: _propTypes.default.array
};

function makeStory(name, themeSelector) {
  var component = function component() {
    var totalRecords = (0, _addonKnobs.number)('totalRecords', 100);
    var pageSize = (0, _addonKnobs.select)('pageSize', _optionsHelper.default.pageSizes, _pager.default.defaultProps.pageSize);
    var showPageSizeSelection = (0, _addonKnobs.boolean)('showPageSizeSelection', _pager.default.defaultProps.showPageSizeSelection);
    store.set({
      pageSize: pageSize
    });
    return _react.default.createElement(_storybookState.State, {
      store: store
    }, _react.default.createElement(_pager.default, {
      currentPage: store.get('currentPage'),
      pageSize: store.get('pageSize'),
      showPageSizeSelection: showPageSizeSelection,
      totalRecords: totalRecords,
      onPagination: handlePagination
    }));
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      propTables: [_pager.default],
      propTablesExclude: [_storybookState.State],
      TableComponent: TableComponent,
      text: _documentation.Info
    },
    notes: {
      markdown: _documentation.notes
    }
  };
  return [name, component, metadata];
}

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Pager', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));