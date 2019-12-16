"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _checkbox = _interopRequireDefault(require("./checkbox"));

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_checkbox.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /checkbox(?!spec)/);
(0, _react2.storiesOf)('__deprecated__/Checkbox', module).add('classic', function () {
  var reverse = (0, _addonKnobs.boolean)('reverse', _checkbox.default.defaultProps.reverse);
  var fieldHelpInline = (0, _addonKnobs.boolean)('fieldHelpInline', false);
  var label = (0, _addonKnobs.text)('label', 'Example Checkbox');
  var labelHelp = (0, _addonKnobs.text)('labelHelp', 'This text provides more information for the label.');
  var inputWidth = (0, _addonKnobs.number)('inputWidth', 0, {
    range: true,
    min: 0,
    max: 50,
    step: 1
  });
  var fieldHelp = (0, _addonKnobs.text)('fieldHelp', 'This text provides help for the input.');
  var labelInline = (0, _addonKnobs.boolean)('labelInline', false);
  var labelWidth = labelInline ? (0, _addonKnobs.number)('labelWidth', 0, {
    range: true,
    min: 0,
    max: 50,
    step: 1
  }) : undefined;
  var labelAlign = labelInline ? (0, _addonKnobs.select)('labelAlign', _optionsHelper.default.alignBinary, _optionsHelper.default.alignBinary[0]) : undefined;
  return _react.default.createElement(_checkbox.default, {
    fieldHelpInline: fieldHelpInline,
    reverse: reverse,
    label: label,
    labelInline: labelInline,
    labelWidth: labelWidth,
    labelAlign: labelAlign,
    labelHelp: labelHelp,
    inputWidth: inputWidth,
    fieldHelp: fieldHelp
  });
}, {
  info: {
    text: _documentation.info
  },
  notes: {
    markdown: _documentation.notes
  },
  themeSelector: _themeSelectors.classicThemeSelector
});