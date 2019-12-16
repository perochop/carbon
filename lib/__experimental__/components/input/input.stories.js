"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _storybookState = require("@sambego/storybook-state");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _info = _interopRequireDefault(require("./documentation/info"));

var _checkbox = require("../checkbox");

var _decimal = _interopRequireDefault(require("../decimal"));

var _groupedCharacter = _interopRequireDefault(require("../grouped-character"));

var _number = _interopRequireDefault(require("../number"));

var _date = _interopRequireDefault(require("../date"));

var _radioButton = require("../radio-button");

var _select = require("../select");

var _switch = _interopRequireDefault(require("../switch"));

var _textarea = _interopRequireDefault(require("../textarea"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var store = new _storybookState.Store({
  numberInputValue: '',
  groupedCharacterValue: '',
  checkboxChecked: false,
  dateValue: '2009-12-12',
  switchValue: ''
});

var getCommonKnobs = function getCommonKnobs() {
  var percentageRange = {
    range: true,
    min: 0,
    max: 100,
    step: 1
  };
  var labelInline = (0, _addonKnobs.boolean)('labelInline', false);
  var labelWidth = labelInline ? (0, _addonKnobs.number)('labelWidth', 30, percentageRange) : undefined;
  var inputWidth = labelInline ? (0, _addonKnobs.number)('inputWidth', 70, percentageRange) : undefined;
  var labelAlign = labelInline ? (0, _addonKnobs.select)('labelAlign', _optionsHelper.default.alignBinary) : undefined;
  return {
    labelInline: labelInline,
    labelWidth: labelWidth,
    inputWidth: inputWidth,
    labelAlign: labelAlign,
    disabled: (0, _addonKnobs.boolean)('disabled', false),
    readOnly: (0, _addonKnobs.boolean)('readOnly', false),
    size: (0, _addonKnobs.select)('size', _optionsHelper.default.sizesRestricted, 'medium')
  };
};

var InputIntegration = function InputIntegration() {
  var commonKnobs = getCommonKnobs();
  var disableFieldHelp = (0, _addonKnobs.boolean)('disable fieldHelp', false);
  var disableLabelWidth = (0, _addonKnobs.boolean)('disable labelWidth (checkable inputs)', false);
  var reverse = (0, _addonKnobs.boolean)('reverse (checkable inputs)', true);
  var fieldHelpInline = disableFieldHelp ? '' : (0, _addonKnobs.boolean)('fieldHelpInline (checkable inputs)', false);
  return _react.default.createElement(_storybookState.State, {
    store: store
  }, function (state) {
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_decimal.default, _extends({
      id: "decimal",
      label: "Decimal Component",
      fieldHelp: disableFieldHelp ? '' : 'Decimal component fieldHelp'
    }, commonKnobs)), _react.default.createElement(_number.default, _extends({
      id: "number",
      label: "Number Input Component",
      onChange: function onChange(ev) {
        return store.set({
          numberInputValue: ev.target.value
        });
      },
      fieldHelp: disableFieldHelp ? '' : 'Number Input component fieldHelp',
      value: state.numberInputValue
    }, commonKnobs)), _react.default.createElement(_groupedCharacter.default, _extends({
      id: "grouped-character",
      label: "Grouped Character Component",
      separator: "-",
      groups: [2, 2, 4],
      onChange: function onChange(ev) {
        return store.set({
          groupedCharacterValue: ev.target.value.rawValue
        });
      },
      fieldHelp: disableFieldHelp ? '' : 'Grouped Character Component fieldHelp',
      value: state.groupedCharacterValue
    }, commonKnobs)), _react.default.createElement(_select.Select, _extends({
      ariaLabel: "singleSelect",
      label: "Select Validation",
      fieldHelp: disableFieldHelp ? '' : 'Select Component fieldHelp'
    }, commonKnobs), _react.default.createElement(_select.Option, {
      key: "option1",
      text: "Option 1",
      value: "option1"
    }), _react.default.createElement(_select.Option, {
      key: "option2",
      text: "Option 2",
      value: "option2"
    }), _react.default.createElement(_select.Option, {
      key: "option3",
      text: "Option 3",
      value: "option3"
    })), _react.default.createElement(_textarea.default, _extends({
      name: "textarea",
      label: "Textarea Validation",
      labelHelp: "Textarea labelHelp",
      fieldHelp: disableFieldHelp ? '' : 'Textarea fieldHelp'
    }, commonKnobs)), _react.default.createElement(_checkbox.Checkbox, _extends({
      id: "checkbox",
      name: "my-checkbox",
      label: "Checkbox label",
      labelHelp: "Checkbox label help",
      fieldHelp: disableFieldHelp ? '' : 'Checkbox field help',
      value: "checkbox-val",
      reverse: reverse,
      fieldHelpInline: fieldHelpInline,
      onChange: function onChange(ev) {
        return store.set({
          checkboxChecked: ev.target.checked
        });
      },
      checked: state.checkboxChecked
    }, commonKnobs, {
      inputWidth: undefined,
      labelWidth: disableLabelWidth ? undefined : commonKnobs.labelWidth
    })), _react.default.createElement(_radioButton.RadioButtonGroup, {
      name: "radio-button-group",
      legend: "Please select an option",
      onChange: function onChange(ev) {
        return store.set({
          dateValue: ev.target.value
        });
      }
    }, [1, 2, 3].map(function (num) {
      return _react.default.createElement(_radioButton.RadioButton, _extends({
        key: "radio".concat(num),
        label: "Radio ".concat(num),
        labelHelp: "Radio ".concat(num, " label help"),
        fieldHelp: disableFieldHelp ? '' : "Radio ".concat(num, " field help"),
        value: "radio".concat(num),
        reverse: reverse,
        fieldHelpInline: fieldHelpInline
      }, commonKnobs, {
        inputWidth: undefined,
        labelWidth: disableLabelWidth ? undefined : commonKnobs.labelWidth,
        size: commonKnobs.size === 'medium' ? 'small' : commonKnobs.size
      }));
    })), _react.default.createElement(_switch.default, _extends({
      name: "switch",
      label: "Switch Validation",
      fieldHelp: disableFieldHelp ? '' : 'Switch field help',
      reverse: reverse,
      fieldHelpInline: fieldHelpInline,
      value: state.switchValue
    }, commonKnobs, {
      inputWidth: undefined,
      labelWidth: disableLabelWidth ? undefined : commonKnobs.labelWidth
    })), _react.default.createElement(_date.default, _extends({
      id: "date",
      name: "my-date",
      label: "Date label",
      labelHelp: "Date label help",
      fieldHelp: disableFieldHelp ? '' : 'Date field help',
      onChange: function onChange(ev) {
        return store.set({
          dateValue: ev.target.value.rawValue
        });
      },
      value: state.dateValue
    }, commonKnobs)));
  });
};

function makeStory(name, themeSelector, component) {
  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: _info.default,
      source: false,
      propTablesExclude: [_storybookState.State]
    }
  };
  return [name, component, metadata];
}

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Experimental/Input Integration', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector, InputIntegration)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector, InputIntegration)));