"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _storybookState = require("@sambego/storybook-state");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _documentation = _interopRequireDefault(require("./documentation"));

var _buttonToggle = _interopRequireDefault(require("../button-toggle/button-toggle.component"));

var _buttonToggleGroup = _interopRequireDefault(require("./button-toggle-group.component"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$addParamet, _storiesOf$addParamet2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_buttonToggleGroup.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /button-toggle-group\.component(?!spec)/);

var handleGroupChangeFactory = function handleGroupChangeFactory(store) {
  return function (event) {
    var value = event.target.value;
    store.set({
      value: value
    });
    (0, _addonActions.action)('onChange')(value);
  };
};

var radioToggleGroupStore = new _storybookState.Store({
  value: 'Bar'
});

function makeStory(storyName, themeSelector) {
  var component = function component() {
    var label = (0, _addonKnobs.text)('label', 'Example ButtonToggleGroup');
    var labelInline = (0, _addonKnobs.boolean)('labelInline', false);
    var labelWidth = labelInline ? (0, _addonKnobs.number)('labelWidth', 30, _addonKnobs.percentageRange) : undefined;
    var labelAlign = labelInline ? (0, _addonKnobs.select)('labelAlign', _optionsHelper.default.alignBinary, _optionsHelper.default.alignBinary[0]) : undefined;
    var labelHelp = (0, _addonKnobs.text)('labelHelp', 'This text provides more information for the label.');
    var inputWidth = labelInline ? (0, _addonKnobs.number)('inputWidth', 70, _addonKnobs.percentageRange) : undefined;
    var fieldHelp = (0, _addonKnobs.text)('fieldHelp', 'This text provides help for the input.');
    var fieldHelpInline = (0, _addonKnobs.boolean)('fieldHelpInline', false);

    function renderButtons() {
      var buttonNames = ['Foo', 'Bar', 'Baz'];
      return buttonNames.map(function (name) {
        return _react.default.createElement(_buttonToggle.default, {
          name: "button-toggle-group",
          id: name.toLowerCase(),
          key: name,
          value: name
        }, name);
      });
    }

    return _react.default.createElement(_storybookState.State, {
      store: radioToggleGroupStore
    }, _react.default.createElement(_buttonToggleGroup.default, {
      label: label,
      labelInline: labelInline,
      labelWidth: labelWidth,
      labelAlign: labelAlign,
      labelHelp: labelHelp,
      inputWidth: inputWidth,
      fieldHelp: fieldHelp,
      fieldHelpInline: fieldHelpInline,
      name: "button-toggle-group",
      onChange: handleGroupChangeFactory(radioToggleGroupStore)
    }, renderButtons()));
  };

  var metadata = {
    themeSelector: themeSelector,
    notes: {
      markdown: _documentation.default
    }
  };
  return [storyName, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (0, _react2.storiesOf)('Button Toggle Group', module).addParameters({
  info: {
    propTablesExclude: [_buttonToggle.default],
    propTables: [_buttonToggleGroup.default]
  }
})).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));