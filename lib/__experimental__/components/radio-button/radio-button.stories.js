"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.search");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _storybookState = require("@sambego/storybook-state");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _ = require(".");

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

var _storiesOf$addParamet, _storiesOf$addParamet2, _storiesOf$addParamet3, _storiesOf$addParamet4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_.RadioButtonGroup.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /radio-button-group\.component(?!spec)/);
_.PrivateRadioButton.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /radio-button\.component.(?!spec)/);
var radioToggleGroupStore = new _storybookState.Store({
  value: null
});
var validationRadioToggleGroupStore = new _storybookState.Store({
  value: null
});

var handleGroupChangeFactory = function handleGroupChangeFactory(store) {
  return function (event) {
    var value = event.target.value;
    store.set({
      value: value
    });
    (0, _addonActions.action)('onChange')(value);
  };
};

function makeStory(name, themeSelector, component) {
  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: name.search('validations') !== -1 ? _documentation.infoValidations : _documentation.info,
      excludedPropTypes: ['children']
    },
    notes: {
      markdown: _documentation.notes
    },
    knobs: {
      escapeHTML: false
    }
  };
  return [name, component, metadata];
}

var groupedKnobs = function groupedKnobs(type, themeName) {
  return {
    key: type,
    label: (0, _addonKnobs.text)("".concat(type, " label"), "Example ".concat(type, " radio button"), type),
    labelHelp: (0, _addonKnobs.text)("".concat(type, " labelHelp"), 'This text provides more information for the label.', type),
    value: (0, _addonKnobs.text)("".concat(type, " value"), type, type),
    disabled: (0, _addonKnobs.boolean)("".concat(type, " disabled"), false, type),
    reverse: (0, _addonKnobs.boolean)("".concat(type, " reverse"), false, type),
    size: themeName === 'classic' ? undefined : (0, _addonKnobs.select)("".concat(type, " size"), _optionsHelper.default.sizesBinary, 'small', type),
    fieldHelp: (0, _addonKnobs.text)("".concat(type, " fieldHelp"), 'This text provides help for the input.', type),
    fieldHelpInline: (0, _addonKnobs.boolean)("".concat(type, " fieldHelpInline"), false, type),
    inputWidth: (0, _addonKnobs.number)("".concat(type, " inputWidth"), 0, {
      range: true,
      min: 0,
      max: 100,
      step: 1
    }, type),
    labelWidth: (0, _addonKnobs.number)("".concat(type, " labelWidth"), 0, {
      range: true,
      min: 0,
      max: 100,
      step: 1
    }, type),
    labelAlign: (0, _addonKnobs.select)("".concat(type, " labelAlign"), _optionsHelper.default.alignBinary, _optionsHelper.default.alignBinary[0], type)
  };
};

var radioComponent = function radioComponent(themeName) {
  return function () {
    var labelHelp = (0, _addonKnobs.text)('labelHelp', 'Group label helper');
    return _react.default.createElement(_storybookState.State, {
      store: radioToggleGroupStore
    }, _react.default.createElement(_.RadioButtonGroup, {
      labelHelp: labelHelp,
      name: "frequency",
      legend: (0, _addonKnobs.text)('groupLabel', 'Please select a frequency from the options below'),
      onChange: handleGroupChangeFactory(radioToggleGroupStore)
    }, _react.default.createElement(_.RadioButton, _extends({
      id: "input-1"
    }, groupedKnobs('weekly', themeName))), _react.default.createElement(_.RadioButton, groupedKnobs('monthly', themeName)), _react.default.createElement(_.RadioButton // id prop intentionally left off here, to demonstrate automatic GUID generation
    , groupedKnobs('yearly', themeName))));
  };
};

var radioComponentWithValidation = function radioComponentWithValidation(themeName) {
  return function () {
    var validationTypes = ['error', 'warning', 'info'];
    var legend = (0, _addonKnobs.text)('legend', 'Are you coming to the event?');
    var labelHelp = (0, _addonKnobs.text)('labelHelp', 'Group label helper');

    function testValidation(type) {
      return function (value) {
        return new Promise(function (resolve, reject) {
          if (type === 'valid' && value === 'error') {
            reject(new Error('An error has occurred!'));
          }

          if (type === 'warn' && value === 'warning') {
            reject(new Error('Watch out!'));
          }

          if (type === 'info' && value === 'info') {
            reject(new Error('Let me tell you this...'));
          }

          resolve();
        });
      };
    }

    return _react.default.createElement(_storybookState.State, {
      store: validationRadioToggleGroupStore
    }, _react.default.createElement(_.RadioButtonGroup, {
      name: (0, _addonKnobs.text)('name', 'Group Name'),
      legend: legend,
      labelHelp: labelHelp,
      validations: testValidation('valid'),
      warnings: testValidation('warn'),
      info: testValidation('info'),
      onChange: handleGroupChangeFactory(validationRadioToggleGroupStore)
    }, validationTypes.map(function (vType) {
      return _react.default.createElement(_.RadioButton, _extends({}, groupedKnobs(vType, themeName), {
        id: "id-".concat(vType)
      }));
    })));
  };
};

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (_storiesOf$addParamet3 = (_storiesOf$addParamet4 = (0, _react2.storiesOf)('Experimental/RadioButton', module).addParameters({
  info: {
    propTablesExclude: [_storybookState.State]
  }
})).add.apply(_storiesOf$addParamet4, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector, radioComponent())))).add.apply(_storiesOf$addParamet3, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector, radioComponent('classic'))))).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeStory('validations', _themeSelectors.dlsThemeSelector, radioComponentWithValidation())))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeStory('validations classic', _themeSelectors.classicThemeSelector, radioComponentWithValidation('classic'))));