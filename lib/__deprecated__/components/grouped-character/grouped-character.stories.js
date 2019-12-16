"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _groupedCharacter = _interopRequireDefault(require("./grouped-character"));

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_groupedCharacter.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /grouped-character(?!spec)/);
(0, _react2.storiesOf)('__deprecated__/GroupedCharacter', module).add('classic', function () {
  var inputWidth = (0, _addonKnobs.text)('inputWidth', '');
  var separator = (0, _addonKnobs.text)('separator', _groupedCharacter.default.defaultProps.separator);
  var label = (0, _addonKnobs.text)('label', 'Example Grouped Character');
  var labelInline = (0, _addonKnobs.boolean)('labelInline', false);
  var labelWidth = labelInline ? (0, _addonKnobs.text)('labelWidth', '') : undefined;
  var labelAlign = labelInline ? (0, _addonKnobs.select)('labelAlign', _optionsHelper.default.alignBinary, _optionsHelper.default.alignBinary[0]) : undefined;
  var labelHelp = (0, _addonKnobs.text)('labelHelp', 'More information for the label');
  var fieldHelp = (0, _addonKnobs.text)('fieldHelp', 'More information for the input');
  var fieldHelpInline = (0, _addonKnobs.boolean)('fieldHelpInline', true);
  return _react.default.createElement(_groupedCharacter.default, {
    inputWidth: inputWidth,
    separator: separator,
    groups: [2, 2, 2, 2],
    label: label,
    labelInline: labelInline,
    labelWidth: labelWidth,
    labelAlign: labelAlign,
    labelHelp: labelHelp,
    fieldHelp: fieldHelp,
    fieldHelpInline: fieldHelpInline,
    onChange: function onChange(evt) {
      (0, _addonActions.action)('change')(evt);
    }
  });
}, {
  knobs: {
    escapeHTML: false
  },
  themeSelector: _themeSelectors.classicThemeSelector
});