"use strict";

require("core-js/modules/es.array.filter");

require("core-js/modules/es.object.assign");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _storybookState = require("@sambego/storybook-state");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _notes = _interopRequireDefault(require("./documentation/notes.md"));

var _Info = _interopRequireDefault(require("./documentation/Info"));

var _dropdownFilterAjax = _interopRequireDefault(require("./dropdown-filter-ajax"));

var _xhrMock = require("../../../../demo/xhr-mock");

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_dropdownFilterAjax.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /dropdown-filter-ajax(?!spec)/);
var store = new _storybookState.Store({
  value: '',
  visibleValue: ''
});
(0, _xhrMock.enableMock)(); // Shared Props

var onChange = function onChange(evt) {
  store.set({
    visibleValue: evt.target.visibleValue,
    value: evt.target.visibleValue
  });
  (0, _addonActions.action)('change')(evt);
};

var defaultKnobs = function defaultKnobs() {
  var labelInline = (0, _addonKnobs.boolean)('labelInline');
  return {
    autoFocus: (0, _addonKnobs.boolean)('autoFocus'),
    cacheVisibleValue: (0, _addonKnobs.boolean)('cacheVisibleValue'),
    disabled: (0, _addonKnobs.boolean)('disabled'),
    readOnly: (0, _addonKnobs.boolean)('readOnly'),
    timeToDisappear: (0, _addonKnobs.number)('timeToDisappear'),
    label: (0, _addonKnobs.text)('label', 'Dropdown Label'),
    labelInline: labelInline,
    labelWidth: labelInline ? (0, _addonKnobs.text)('labelWidth') : undefined,
    labelAlign: labelInline ? (0, _addonKnobs.select)('labelAlign', _optionsHelper.default.alignBinary) : undefined,
    labelHelp: (0, _addonKnobs.text)('labelHelp', 'This is help text'),
    inputWidth: (0, _addonKnobs.text)('inputWidth'),
    fieldHelp: (0, _addonKnobs.text)('fieldHelp', 'This is field help text'),
    fieldHelpInline: (0, _addonKnobs.boolean)('fieldHelpInline'),
    suggest: (0, _addonKnobs.boolean)('suggest'),
    freetext: (0, _addonKnobs.boolean)('freetext'),
    path: (0, _addonKnobs.text)('path', '/countries'),
    acceptHeader: (0, _addonKnobs.text)('acceptHeader', _dropdownFilterAjax.default.defaultProps.acceptHeader),
    rowsPerRequest: (0, _addonKnobs.number)('rowsPerRequest', _dropdownFilterAjax.default.defaultProps.rowsPerRequest),
    dataRequestTimeout: (0, _addonKnobs.number)('dataRequestTimeout', _dropdownFilterAjax.default.defaultProps.dataRequestTimeout)
  };
};

(0, _react2.storiesOf)('__deprecated__/DropdownFilterAjax', module).addParameters({
  info: {
    propTablesExclude: [_storybookState.State]
  }
}).add('classic', function () {
  var props = defaultKnobs();
  return _react.default.createElement(_storybookState.State, {
    store: store
  }, _react.default.createElement(_dropdownFilterAjax.default, _extends({}, props, {
    getCustomHeaders: function getCustomHeaders() {
      return {};
    },
    onChange: onChange
  })));
}, {
  info: {
    text: _Info.default
  },
  notes: {
    markdown: _notes.default
  },
  themeSelector: _themeSelectors.classicThemeSelector
}).add('withCreate', function () {
  var props = defaultKnobs();

  var create = function create(evt, component) {
    return component.state.filter;
  };

  var createText = (0, _addonKnobs.text)('createText');
  var createIconType = (0, _addonKnobs.select)('createIconType', _optionsHelper.default.icons, _optionsHelper.default.icons[0]);
  return _react.default.createElement(_storybookState.State, {
    store: store
  }, _react.default.createElement(_dropdownFilterAjax.default, _extends({}, props, {
    create: create,
    createText: createText,
    createIconType: createIconType,
    getCustomHeaders: function getCustomHeaders() {
      return {};
    },
    onChange: onChange
  })));
}, {
  info: {
    text: _Info.default
  },
  notes: {
    markdown: _notes.default
  },
  knobs: {
    escapeHTML: false
  },
  themeSelector: _themeSelectors.classicThemeSelector
});