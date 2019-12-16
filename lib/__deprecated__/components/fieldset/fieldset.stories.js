"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _notes = _interopRequireDefault(require("./documentation/notes.md"));

var _fieldset = _interopRequireDefault(require("./fieldset"));

var _textbox = _interopRequireDefault(require("../textbox"));

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_fieldset.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /fieldset(?!spec)/);
(0, _react2.storiesOf)('__deprecated__/Fieldset', module).addParameters({
  info: {
    propTablesExclude: [_textbox.default]
  }
}).add('classic', function () {
  var legend = (0, _addonKnobs.text)('legend', '');
  return _react.default.createElement(_fieldset.default, {
    legend: legend
  }, _react.default.createElement(_textbox.default, {
    label: "First Name",
    labelInline: true,
    labelAlign: "right"
  }), _react.default.createElement(_textbox.default, {
    label: "Last Name",
    labelInline: true,
    labelAlign: "right"
  }), _react.default.createElement(_textbox.default, {
    label: "Address",
    labelInline: true,
    labelAlign: "right"
  }), _react.default.createElement(_textbox.default, {
    label: "City",
    labelInline: true,
    labelAlign: "right"
  }), _react.default.createElement(_textbox.default, {
    label: "Country",
    labelInline: true,
    labelAlign: "right"
  }), _react.default.createElement(_textbox.default, {
    label: "Telephone",
    labelInline: true,
    labelAlign: "right"
  }));
}, {
  notes: {
    markdown: _notes.default
  },
  knobs: {
    escapeHTML: false
  },
  themeSelector: _themeSelectors.classicThemeSelector
});