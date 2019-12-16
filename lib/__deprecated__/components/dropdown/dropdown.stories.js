"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _storybookState = require("@sambego/storybook-state");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _immutable = _interopRequireDefault(require("../../../utils/helpers/immutable/immutable"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _notes = _interopRequireDefault(require("./documentation/notes.md"));

var _Info = _interopRequireDefault(require("./documentation/Info"));

var _dropdown = _interopRequireDefault(require("./dropdown"));

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dropdown.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /dropdown(?!spec)/);
var store = new _storybookState.Store({
  value: ''
});

var handleChange = function handleChange(evt) {
  store.set({
    value: evt.target.value
  });
  (0, _addonActions.action)('change')(evt);
};

(0, _react2.storiesOf)('__deprecated__/Dropdown', module).addParameters({
  info: {
    propTablesExclude: [_storybookState.State]
  }
}).add('classic', function () {
  var autoFocus = (0, _addonKnobs.boolean)('autoFocus', false);
  var cacheVisibleValue = (0, _addonKnobs.boolean)('cacheVisibleValue', true);
  var disabled = (0, _addonKnobs.boolean)('disabled', false);
  var readOnly = (0, _addonKnobs.boolean)('readOnly', false);
  var timeToDisappear = (0, _addonKnobs.number)('timeToDisappear', 0);
  var label = (0, _addonKnobs.text)('label', 'Dropdown Label');
  var labelInline = (0, _addonKnobs.boolean)('labelInline', false);
  var labelWidth = labelInline ? (0, _addonKnobs.text)('labelWidth', '') : undefined;
  var labelAlign = labelInline ? (0, _addonKnobs.select)('labelAlign', _optionsHelper.default.alignBinary) : undefined;
  var labelHelp = (0, _addonKnobs.text)('labelHelp', 'This is help text');
  var inputWidth = (0, _addonKnobs.text)('inputWidth', '');
  var fieldHelp = (0, _addonKnobs.text)('fieldHelp', 'This is field help text');
  var fieldHelpInline = (0, _addonKnobs.boolean)('fieldHelpInline', false);

  var options = _immutable.default.parseJSON([{
    id: 1,
    name: 'Orange'
  }, {
    id: 2,
    name: 'Blue'
  }]);

  return _react.default.createElement(_storybookState.State, {
    store: store
  }, _react.default.createElement(_dropdown.default, {
    autoFocus: autoFocus,
    cacheVisibleValue: cacheVisibleValue,
    disabled: disabled,
    readOnly: readOnly,
    timeToDisappear: timeToDisappear,
    label: label,
    labelInline: labelInline,
    labelWidth: labelWidth,
    labelAlign: labelAlign,
    labelHelp: labelHelp,
    inputWidth: inputWidth,
    fieldHelp: fieldHelp,
    fieldHelpInline: fieldHelpInline,
    options: options,
    onChange: handleChange,
    value: store.get('value')
  }));
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