"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _number = _interopRequireDefault(require("./number"));

var _notes = _interopRequireDefault(require("./notes.md"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_number.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /number(?!spec)/);
(0, _react2.storiesOf)('__deprecated__/Number Input', module).add('classic', function () {
  var inputWidth = (0, _addonKnobs.text)('inputWidth', '');
  var timeToDisappear = (0, _addonKnobs.number)('timeToDisappear', 0);
  var fieldHelp = (0, _addonKnobs.text)('fieldHelp', 'This text provides help for the input.');
  var fieldHelpInline = (0, _addonKnobs.boolean)('fieldHelpInline', false);
  var label = (0, _addonKnobs.text)('label', 'Example NumberInput');
  var labelInline = label ? (0, _addonKnobs.boolean)('labelInline', false) : undefined;
  var labelWidth = labelInline ? (0, _addonKnobs.text)('labelWidth', '') : undefined;
  var labelAlign = labelInline ? (0, _addonKnobs.select)('labelAlign', _optionsHelper.default.alignBinary, _optionsHelper.default.alignBinary[0]) : undefined;
  var labelHelp = (0, _addonKnobs.text)('LabelHelp', 'This text provides more information for the label.');
  return _react.default.createElement(_number.default, {
    inputWidth: inputWidth,
    timeToDisappear: timeToDisappear,
    fieldHelp: fieldHelp,
    fieldHelpInline: fieldHelpInline,
    label: label,
    labelInline: labelInline,
    labelWidth: labelWidth,
    labelAlign: labelAlign,
    labelHelp: labelHelp
  });
}, {
  info: {
    text: _react.default.createElement("div", null, _react.default.createElement("p", null, "A number widget."), _react.default.createElement("p", null, "It only allows entering of a whole number with an optional minus sign."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "In your file"), _react.default.createElement(_storybookInfo.StoryCode, {
      padded: true
    }, 'import Number from "carbon-react/lib/components/number";'), _react.default.createElement("p", null, "To render a Number:"), _react.default.createElement(_storybookInfo.StoryCode, {
      padded: true
    }, '<Number name="myNumber" />'))
  },
  notes: {
    markdown: _notes.default
  },
  themeSelector: _themeSelectors.classicThemeSelector
});