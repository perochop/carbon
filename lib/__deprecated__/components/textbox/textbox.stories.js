"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _storybookState = require("@sambego/storybook-state");

var _addonKnobs = require("@storybook/addon-knobs");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _textbox = _interopRequireDefault(require("./textbox"));

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_textbox.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /textbox(?!spec)/);

var getIconKnobs = function getIconKnobs() {
  var hasIcon = (0, _addonKnobs.boolean)('has icon', false);
  return {
    icon: hasIcon ? (0, _addonKnobs.select)('iconType', [].concat(_toConsumableArray(_optionsHelper.default.icons), ['']), '') : undefined
  };
};

var store = new _storybookState.Store({
  value: ''
});

var handleChange = function handleChange(_ref) {
  var value = _ref.target.value;
  store.set({
    value: value
  });
};

(0, _react2.storiesOf)('__deprecated__/Textbox', module).addParameters({
  info: {
    propTablesExclude: [_storybookState.State],
    text: _documentation.info
  },
  notes: {
    markdown: _documentation.notes
  },
  themeSelector: _themeSelectors.classicThemeSelector
}).add('classic', function () {
  var rangeOptions = {
    range: true,
    min: 0,
    max: 300,
    setp: 1
  };
  var fieldHelpInline = (0, _addonKnobs.boolean)('fieldHelpInline', false);
  var label = (0, _addonKnobs.text)('label', 'Example Textbox');
  var labelInline = label ? (0, _addonKnobs.boolean)('labelInline', false) : undefined;
  var inputWidth = (0, _addonKnobs.number)('inputWidth', 0, rangeOptions);
  var labelWidth = labelInline ? (0, _addonKnobs.number)('labelWidth', 0, rangeOptions) : undefined;
  var labelHelp = (0, _addonKnobs.text)('labelHelp', 'This text provides more information for the label.');
  var fieldHelp = (0, _addonKnobs.text)('fieldHelp', 'This text provides help for the input.');
  var labelAlign = labelInline ? (0, _addonKnobs.select)('labelAlign', _optionsHelper.default.alignBinary, _optionsHelper.default.alignBinary[0]) : undefined;
  return _react.default.createElement(_storybookState.State, {
    store: store
  }, _react.default.createElement(_textbox.default, _extends({
    labelInline: labelInline,
    labelAlign: labelAlign,
    labelWidth: labelWidth,
    fieldHelpInline: fieldHelpInline,
    label: label,
    labelHelp: labelHelp,
    fieldHelp: fieldHelp,
    inputWidth: inputWidth,
    onChange: handleChange
  }, getIconKnobs())));
});