"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _storybookState = require("@sambego/storybook-state");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _documentation = require("./documentation");

var _decimal = _interopRequireDefault(require("./decimal.js"));

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_decimal.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /decimal(?!spec)/);
var store = new _storybookState.Store({
  value: '0'
});

var handleChange = function handleChange(event) {
  (0, _addonActions.action)('changed')(event);
  store.set({
    value: event.target.value
  });
};

(0, _react2.storiesOf)('__deprecated__/Decimal', module).addParameters({
  info: {
    propTablesExclude: [_storybookState.State]
  }
}).add('classic', function () {
  var align = (0, _addonKnobs.select)('align', _optionsHelper.default.alignBinary, _decimal.default.defaultProps.align);
  var precision = (0, _addonKnobs.number)('precision', _decimal.default.defaultProps.precision, {
    range: true,
    min: 0,
    max: 20,
    step: 1
  });
  var timeToDisappear = (0, _addonKnobs.number)('timeToDisappear', 0, {
    range: true,
    min: 0,
    max: 150,
    step: 10
  });
  var label = (0, _addonKnobs.text)('label', 'Example Decimal');
  var labelHelp = (0, _addonKnobs.text)('labelHelp', 'This text provides more information for the label.');
  var inputWidth = (0, _addonKnobs.number)('inputWidth', 0, {
    range: true,
    min: 0,
    max: 150,
    step: 10
  });
  var fieldHelp = (0, _addonKnobs.text)('fieldHelp', 'This text provides help for the input.');
  var fieldHelpInline = (0, _addonKnobs.boolean)('fieldHelpInline', false);
  var labelInline = (0, _addonKnobs.boolean)('labelInline', false);
  var labelWidth = labelInline ? (0, _addonKnobs.number)('labelWidth', 0, {
    range: true,
    min: 0,
    max: 150,
    step: 10
  }) : undefined;
  var labelAlign = labelInline ? (0, _addonKnobs.select)('labelAlign', _optionsHelper.default.alignBinary, _optionsHelper.default.alignBinary[0]) : undefined;
  return _react.default.createElement(_storybookState.State, {
    store: store
  }, _react.default.createElement(_decimal.default, {
    onChange: handleChange,
    align: align,
    precision: precision,
    timeToDisappear: timeToDisappear,
    label: label,
    labelHelp: labelHelp,
    inputWidth: inputWidth,
    fieldHelp: fieldHelp,
    fieldHelpInline: fieldHelpInline,
    labelInline: labelInline,
    labelWidth: labelWidth,
    labelAlign: labelAlign,
    value: store.get('value')
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