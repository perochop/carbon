"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _storybookState = require("@sambego/storybook-state");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _switch = _interopRequireDefault(require("./switch"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_switch.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /switch(?!spec)/);
var store = new _storybookState.Store({
  value: false
});

var handleChange = function handleChange(event) {
  store.set({
    value: !store.get('value')
  });
  (0, _addonActions.action)('click')(event);
};

var numberConfig = {
  range: true,
  min: 0,
  max: 150,
  step: 1
};
(0, _react2.storiesOf)('__deprecated__/Switch', module).addParameters({
  info: {
    propTablesExclude: [_storybookState.State]
  }
}).add('classic', function () {
  var fieldHelp = (0, _addonKnobs.text)('fieldHelp', 'This text provides help for the input.');
  var fieldHelpInline = (0, _addonKnobs.boolean)('fieldHelpInline', false);
  var label = (0, _addonKnobs.text)('label', 'Example Switch');
  var labelHelp = (0, _addonKnobs.text)('labelHelp', 'This text provides more information for the label.');
  var labelInline = label ? (0, _addonKnobs.boolean)('labelInline', false) : undefined;
  var labelAlign = labelInline ? (0, _addonKnobs.select)('labelAlign', _optionsHelper.default.alignBinary) : undefined;
  var labelWidth = labelInline ? (0, _addonKnobs.number)('labelWidth', 0, numberConfig) : undefined;
  var inputWidth = (0, _addonKnobs.number)('inputWidth', 0, numberConfig);
  var reverse = (0, _addonKnobs.boolean)('reverse', _switch.default.defaultProps.reverse);
  var loading = (0, _addonKnobs.boolean)('loading', false);
  var children = (0, _addonKnobs.text)('children');
  return _react.default.createElement(_storybookState.State, {
    store: store
  }, _react.default.createElement(_switch.default, {
    onChange: handleChange,
    fieldHelp: fieldHelp,
    label: label,
    labelHelp: labelHelp,
    reverse: reverse,
    labelInline: labelInline,
    labelWidth: labelWidth,
    labelAlign: labelAlign,
    inputWidth: inputWidth,
    fieldHelpInline: fieldHelpInline,
    loading: loading
  }, children));
}, {
  info: {
    text: _documentation.info
  },
  notes: {
    markdown: _documentation.notes
  },
  themeSelector: _themeSelectors.classicThemeSelector
});