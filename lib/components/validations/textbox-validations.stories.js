"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _storybookState = require("@sambego/storybook-state");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _row = require("../row");

var _textbox = _interopRequireDefault(require("../../__experimental__/components/textbox"));

var _decimal = _interopRequireDefault(require("../../__experimental__/components/decimal"));

var _number = _interopRequireDefault(require("../../__experimental__/components/number"));

var _groupedCharacter = _interopRequireDefault(require("../../__experimental__/components/grouped-character"));

var _button = _interopRequireDefault(require("../button"));

var _storybookInfo = require("../../../.storybook/style/storybook-info.styles");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _storiesOf$addParamet, _storiesOf$addParamet2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var decimalStore = new _storybookState.Store({
  value: '0.00'
});
var numberInputStore = new _storybookState.Store({
  value: ''
});
var groupedCharacterStore = new _storybookState.Store({
  value: ''
});

var getStoryProps = function getStoryProps() {
  return {
    disabled: (0, _addonKnobs.boolean)('disabled', false),
    readOnly: (0, _addonKnobs.boolean)('readOnly', false),
    size: (0, _addonKnobs.select)('size', _optionsHelper.default.sizesRestricted, 'medium')
  };
};

function makeStory(name, themeSelector) {
  var component = function component() {
    var storyProps = getStoryProps();
    return _react.default.createElement("div", null, _react.default.createElement(_row.Row, null, _react.default.createElement(_row.Column, null, _react.default.createElement(_storybookState.State, {
      store: decimalStore
    }, _react.default.createElement(_decimal.default, _extends({
      label: "Decimal Component",
      validations: numberErrorValidator,
      warnings: numberWarningValidator,
      info: numberInfoValidator,
      onChange: function onChange(ev) {
        return decimalStore.set({
          value: ev.target.value.rawValue
        });
      },
      fieldHelp: "Error: number lesser than \"11.0\", Warning: number equals \"12.0\", Info: number equals \"13.0\""
    }, storyProps)))), _react.default.createElement(_row.Column, null, _react.default.createElement(_storybookState.State, {
      store: numberInputStore
    }, _react.default.createElement(_number.default, _extends({
      label: "Number Input Component",
      validations: numberErrorValidator,
      warnings: numberWarningValidator,
      info: numberInfoValidator,
      onChange: function onChange(ev) {
        return numberInputStore.set({
          value: ev.target.value
        });
      },
      fieldHelp: "Error: number lesser than \"11\", Warning: number equals \"12\", Info: number equals \"13\""
    }, storyProps))))), _react.default.createElement(_row.Row, null, _react.default.createElement(_row.Column, null, _react.default.createElement(_storybookState.State, {
      store: groupedCharacterStore
    }, _react.default.createElement(_groupedCharacter.default, _extends({
      label: "Grouped Character Component",
      separator: "-",
      groups: [2, 2, 4],
      validations: groupedCharacterErrorValidator,
      warnings: groupedCharacterWarningValidator,
      info: groupedCharacterInfoValidator,
      onChange: function onChange(ev) {
        return groupedCharacterStore.set({
          value: ev.target.value
        });
      },
      fieldHelp: "Error: incomplete field, Warning: includes \"ab\", Info: includes \"%\""
    }, storyProps))))), _react.default.createElement(_row.Row, null, _react.default.createElement(_row.Column, null, _react.default.createElement(_button.default, {
      onClick: triggerErrors
    }, "Trigger Errors"), _react.default.createElement(_button.default, {
      onClick: triggerWarnings
    }, "Trigger Warnings"), _react.default.createElement(_button.default, {
      onClick: triggerInfo
    }, "Trigger Info"))));
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (0, _react2.storiesOf)('Validations', module).addParameters({
  info: {
    text: _react.default.createElement(_storybookInfo.StoryHeader, null, "Validations for simple Textbox based Components"),
    propTablesExclude: [_button.default, _row.Column, _row.Row, _textbox.default, _storybookState.State, _decimal.default, _number.default, _groupedCharacter.default],
    source: false
  }
})).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeStory('textbox based', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeStory('textbox based classic', _themeSelectors.classicThemeSelector)));

function numberErrorValidator(value) {
  return new Promise(function (resolve, reject) {
    if (value > 11) {
      resolve();
    } else {
      reject(new Error('The number must be greater than 11!'));
    }
  });
}

function numberWarningValidator(value) {
  return new Promise(function (resolve, reject) {
    // eslint-disable-next-line
    if (value != 12) {
      resolve();
    } else {
      reject(new Error('The number cannot be 12!'));
    }
  });
}

function numberInfoValidator(value) {
  return new Promise(function (resolve, reject) {
    // eslint-disable-next-line
    if (value != 13) {
      resolve();
    } else {
      reject(new Error('Number "13" is not recommended'));
    }
  });
}

function groupedCharacterErrorValidator(value) {
  return new Promise(function (resolve, reject) {
    if (value.length === 8) {
      resolve();
    } else {
      reject(new Error('Incomplete field!'));
    }
  });
}

function groupedCharacterWarningValidator(value) {
  return new Promise(function (resolve, reject) {
    if (!value.includes('ab')) {
      resolve();
    } else {
      reject(new Error('Must not include "ab"!'));
    }
  });
}

function groupedCharacterInfoValidator(value) {
  return new Promise(function (resolve, reject) {
    if (!value.includes('%')) {
      resolve();
    } else {
      reject(new Error('Usage of "%" character is not recommended'));
    }
  });
}

function triggerErrors() {
  numberInputStore.set({
    value: '10'
  });
  decimalStore.set({
    value: '10'
  });
  groupedCharacterStore.set({
    value: '123456'
  });
}

function triggerWarnings() {
  numberInputStore.set({
    value: '12'
  });
  decimalStore.set({
    value: '12'
  });
  groupedCharacterStore.set({
    value: '123456ab'
  });
}

function triggerInfo() {
  numberInputStore.set({
    value: '13'
  });
  decimalStore.set({
    value: '13'
  });
  groupedCharacterStore.set({
    value: '1234567%'
  });
}