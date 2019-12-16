"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _storybookState = require("@sambego/storybook-state");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _documentation = require("./documentation");

var _ = _interopRequireDefault(require("."));

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /date\.component(?!spec)/);
var store = new _storybookState.Store({
  value: _.default.defaultProps.value
});

var setValue = function setValue(ev) {
  store.set({
    value: ev.target.value
  });
  (0, _addonActions.action)('onChange')(ev);
};

(0, _react2.storiesOf)('__deprecated__/Date Input', module).addDecorator((0, _storybookState.StateDecorator)(store)).add('classic', function () {
  var autoFocus = (0, _addonKnobs.boolean)('autoFocus', true);
  var disabled = (0, _addonKnobs.boolean)('disabled', false);
  var minDate = (0, _addonKnobs.text)('minDate', '');
  var maxDate = (0, _addonKnobs.text)('maxDate', '');
  var readOnly = (0, _addonKnobs.boolean)('readOnly', false);
  var label = (0, _addonKnobs.text)('label', 'Example DateInput');
  var labelWidth = (0, _addonKnobs.number)('labelWidth', 0);
  var labelHelp = (0, _addonKnobs.text)('labelHelp', 'This text provides more information for the label.');
  var fieldHelp = (0, _addonKnobs.text)('fieldHelp', 'This text provides help for the input.');
  var fieldHelpInline = (0, _addonKnobs.boolean)('fieldHelpInline', false);
  var labelInline = (0, _addonKnobs.boolean)('labelInline', false);
  var inputWidth = labelInline ? (0, _addonKnobs.number)('inputWidth', 0, {
    range: true,
    min: 0,
    max: 50,
    step: 1
  }) : undefined;
  var labelAlign = labelInline ? (0, _addonKnobs.select)('labelAlign', _optionsHelper.default.alignBinary, _optionsHelper.default.alignBinary[0]) : undefined;
  return _react.default.createElement(_.default, {
    autoFocus: autoFocus,
    disabled: disabled,
    minDate: minDate,
    maxDate: maxDate,
    readOnly: readOnly,
    label: label,
    labelInline: labelInline,
    labelWidth: labelWidth,
    labelAlign: labelAlign,
    labelHelp: labelHelp,
    inputWidth: inputWidth,
    fieldHelp: fieldHelp,
    fieldHelpInline: fieldHelpInline,
    value: store.get('value'),
    onChange: setValue
  });
}, {
  info: {
    text: _documentation.info,
    propTablesExclude: [_storybookState.State]
  },
  notes: {
    markdown: _documentation.notes
  },
  themeSelector: _themeSelectors.classicThemeSelector
});