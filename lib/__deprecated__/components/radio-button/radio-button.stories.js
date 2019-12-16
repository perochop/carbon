"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _radioButton = _interopRequireDefault(require("./radio-button"));

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_radioButton.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /radio-button(?!spec)/);
(0, _react2.storiesOf)('__deprecated__/Radio Button', module).add('classic', function () {
  var fieldHelp = (0, _addonKnobs.text)('fieldHelp', 'Additional information below the input.');
  var fieldHelpInline = (0, _addonKnobs.boolean)('fieldHelpInline', _radioButton.default.defaultProps.fieldHelpInline);
  var label = (0, _addonKnobs.text)('label', 'Example RadioButton');
  var labelInline = (0, _addonKnobs.boolean)('labelInline', false);
  var labelWidth = labelInline ? (0, _addonKnobs.text)('labelWidth', '') : undefined;
  var labelAlign = labelInline ? (0, _addonKnobs.select)('labelAlign', _optionsHelper.default.alignBinary, 'left') : undefined;
  var labelHelp = (0, _addonKnobs.text)('labelHelp', 'Example label help text');
  var inputWidth = (0, _addonKnobs.text)('inputWidth', '');
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_radioButton.default, {
    key: "first-button",
    fieldHelp: fieldHelp,
    fieldHelpInline: fieldHelpInline,
    inputWidth: inputWidth,
    label: label,
    labelAlign: labelAlign,
    labelHelp: labelHelp,
    labelInline: labelInline,
    labelWidth: labelWidth,
    name: "radio-buttons-example"
  }), _react.default.createElement(_radioButton.default, {
    key: "second-button",
    fieldHelp: fieldHelp,
    fieldHelpInline: fieldHelpInline,
    inputWidth: inputWidth,
    label: label,
    labelAlign: labelAlign,
    labelHelp: labelHelp,
    labelInline: labelInline,
    labelWidth: labelWidth,
    name: "radio-buttons-example"
  }));
}, {
  notes: {
    markdown: _documentation.notes
  },
  info: {
    text: _documentation.info,
    propTablesExclude: [_react.default.Fragment]
  },
  themeSelector: _themeSelectors.classicThemeSelector
});