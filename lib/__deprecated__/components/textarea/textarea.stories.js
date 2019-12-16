"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _storybookState = require("@sambego/storybook-state");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _textarea = _interopRequireDefault(require("./textarea"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_textarea.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /textarea(?!spec)/);
var store = new _storybookState.Store({
  value: ''
});

var handleChange = function handleChange(_ref) {
  var value = _ref.target.value;
  store.set({
    value: value
  });
};

var rangeOptions = {
  range: true,
  min: 0,
  max: 300,
  step: 1
};
(0, _react2.storiesOf)('__deprecated__/Textarea', module).addParameters({
  info: {
    propTablesExclude: [_storybookState.State]
  }
}).add('classic', function () {
  var alignBinary = _optionsHelper.default.alignBinary;
  var warnOverLimit = (0, _addonKnobs.boolean)('warnOverLimit', _textarea.default.defaultProps.warnOverLimit);
  var labelInline = (0, _addonKnobs.boolean)('labelInline', false);
  var fieldHelpInline = (0, _addonKnobs.boolean)('fieldHelpInline', false);
  var expandable = (0, _addonKnobs.boolean)('expandable', _textarea.default.defaultProps.expandable);
  var characterLimit = (0, _addonKnobs.number)('characterLimit', 50, rangeOptions);
  var enforceCharacterLimit = characterLimit ? (0, _addonKnobs.boolean)('enforceCharacterLimit', _textarea.default.defaultProps.enforceCharacterLimit) : undefined;
  var inputWidth = (0, _addonKnobs.number)('inputWidth', 0, rangeOptions);
  var labelWidth = labelInline ? (0, _addonKnobs.number)('labelWidth', 0, rangeOptions) : undefined;
  var cols = (0, _addonKnobs.number)('cols', 0, rangeOptions);
  var rows = (0, _addonKnobs.number)('rows', 0, rangeOptions);
  var label = (0, _addonKnobs.text)('label', 'Example Textarea');
  var labelHelp = (0, _addonKnobs.text)('labelHelp', 'This text provides more information for the label.');
  var fieldHelp = (0, _addonKnobs.text)('fieldHelp', 'This text provides help for the input.');
  var labelAlign = labelInline ? (0, _addonKnobs.select)('labelAlign', alignBinary, alignBinary[0]) : undefined;
  return _react.default.createElement(_storybookState.State, {
    store: store
  }, _react.default.createElement(_textarea.default, {
    warnOverLimit: warnOverLimit,
    labelInline: labelInline,
    labelAlign: labelAlign,
    enforceCharacterLimit: enforceCharacterLimit,
    characterLimit: String(characterLimit),
    labelWidth: labelWidth,
    cols: cols,
    fieldHelpInline: fieldHelpInline,
    expandable: expandable,
    label: label,
    labelHelp: labelHelp,
    rows: rows,
    fieldHelp: fieldHelp,
    inputWidth: inputWidth,
    onChange: handleChange
  }));
}, {
  info: {
    text: _documentation.info
  },
  notes: {
    markdown: _documentation.notes
  },
  themeSelector: _themeSelectors.classicThemeSelector
});