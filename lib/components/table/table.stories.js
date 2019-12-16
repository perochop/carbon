"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _storybookState = require("@sambego/storybook-state");

var _addonKnobs = require("@storybook/addon-knobs");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _documentation = require("./documentation");

var _tableStoryWrapper = _interopRequireDefault(require("./table-story-helpers/table-story-wrapper.component"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper/options-helper"));

var _ = require(".");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_tableStoryWrapper.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /table\.component(?!spec)/);

var commonKnobs = function commonKnobs() {
  var paginate = (0, _addonKnobs.boolean)('paginate', false);
  var showPageSizeSelection = paginate && (0, _addonKnobs.boolean)('showPageSizeSelection', false);
  var selectable = (0, _addonKnobs.boolean)('selectable', false);
  var highlightable = (0, _addonKnobs.boolean)('highlightable', false);
  return {
    sortOrder: (0, _addonKnobs.select)('sortOrder', ['', 'asc', 'desc'], ''),
    sortColumn: (0, _addonKnobs.select)('sortColumn', ['', 'name', 'code'], ''),
    highlightable: highlightable,
    selectable: selectable,
    isPassiveData: !highlightable && !selectable ? (0, _addonKnobs.boolean)('isPassiveData', false) : undefined,
    shrink: (0, _addonKnobs.boolean)('shrink', false),
    caption: (0, _addonKnobs.text)('caption', 'Country and Country Codes'),
    totalRecords: (0, _addonKnobs.number)('totalRecords', 50),
    paginate: paginate,
    showPageSizeSelection: showPageSizeSelection
  };
};

var classicKnobs = function classicKnobs() {
  return {
    theme: (0, _addonKnobs.select)('theme', [_optionsHelper.default.tableThemes[0], _optionsHelper.default.tableThemes[1]], _.Table.defaultProps.theme)
  };
};

var dlsKnobs = function dlsKnobs() {
  return {
    theme: (0, _addonKnobs.select)('theme', [_optionsHelper.default.tableThemes[0], _optionsHelper.default.tableThemes[1], _optionsHelper.default.tableThemes[2]], _.Table.defaultProps.theme),
    size: (0, _addonKnobs.select)('size', _optionsHelper.default.tableSizes, _.Table.defaultProps.size),
    isZebra: (0, _addonKnobs.boolean)('zebra striping', false)
  };
};

var inputKnobs = function inputKnobs() {
  return {
    inputType: (0, _addonKnobs.select)('input type', [_optionsHelper.default.inputTypes[0], _optionsHelper.default.inputTypes[1], _optionsHelper.default.inputTypes[2]], _optionsHelper.default.inputTypes[0])
  };
};

(0, _react2.storiesOf)('Table', module).addParameters({
  info: {
    text: _documentation.info,
    propTablesExclude: [_storybookState.State]
  },
  notes: {
    markdown: _documentation.notes
  }
}).add('classic', function () {
  var tableProps = _objectSpread({}, commonKnobs(), {}, classicKnobs());

  return _react.default.createElement(_tableStoryWrapper.default, tableProps);
}, {
  themeSelector: _themeSelectors.classicThemeSelector
}).add('default', function () {
  var tableProps = _objectSpread({}, commonKnobs(), {}, dlsKnobs());

  return _react.default.createElement(_tableStoryWrapper.default, tableProps);
}, {
  themeSelector: _themeSelectors.dlsThemeSelector
}).add('classic with inputs', function () {
  var tableProps = _objectSpread({}, commonKnobs(), {}, classicKnobs(), {}, inputKnobs());

  return _react.default.createElement(_tableStoryWrapper.default, tableProps);
}, {
  themeSelector: _themeSelectors.classicThemeSelector
}).add('default with inputs', function () {
  var tableProps = _objectSpread({}, commonKnobs(), {}, dlsKnobs(), {}, inputKnobs());

  return _react.default.createElement(_tableStoryWrapper.default, tableProps);
}, {
  themeSelector: _themeSelectors.dlsThemeSelector
});