"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _storybookState = require("@sambego/storybook-state");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _form = _interopRequireDefault(require("../../__deprecated__/components/form"));

var _textbox = _interopRequireDefault(require("../../__experimental__/components/textbox"));

var _buttonToggleGroup = _interopRequireDefault(require("../button-toggle-group"));

var _buttonToggle = _interopRequireDefault(require("../button-toggle"));

var _select = require("../../__experimental__/components/select");

var _presence = _interopRequireDefault(require("../../utils/validations/presence"));

var _row = require("../row");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _textarea = _interopRequireDefault(require("../../__experimental__/components/textarea"));

var _storiesOf$addParamet, _storiesOf$addParamet2, _storiesOf$addParamet3, _storiesOf$addParamet4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var presenceStore = new _storybookState.Store({
  value: ''
});
var asyncStore = new _storybookState.Store({
  value: ''
});
var legacyStore = new _storybookState.Store({
  value: ''
});
var warningStore = new _storybookState.Store({
  value: ''
});
var infoStore = new _storybookState.Store({
  value: ''
});
var allStore = new _storybookState.Store({
  value: ''
});
var buttonToggleGroupStore = new _storybookState.Store({
  value: ''
});

var promiseValidator = function promiseValidator(value) {
  return new Promise(function (resolve, reject) {
    if (value) {
      resolve();
    } else {
      reject(new Error('This field is required!'));
    }
  });
};

var warningValidator = function warningValidator(value) {
  return new Promise(function (resolve, reject) {
    if (value.includes('warning')) {
      resolve();
    } else {
      reject(new Error('This value must include the word "warning"!'));
    }
  });
};

var infoValidator = function infoValidator(value) {
  return new Promise(function (resolve, reject) {
    if (value === 'valid') {
      resolve();
    } else {
      reject(new Error('You must select "Blue"!'));
    }
  });
};

var asyncValidator = function asyncValidator(value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (value.includes('valid')) {
        resolve();
      } else {
        reject(new Error('This value must include the word "valid"!'));
      }
    }, 2000);
  });
};

function makeBasicStory(name, themeSelector) {
  var component = function component() {
    return _react.default.createElement(_form.default, null, _react.default.createElement(_row.Row, null, _react.default.createElement(_row.Column, null, _react.default.createElement(_storybookState.State, {
      store: presenceStore
    }, _react.default.createElement(_textbox.default, {
      label: "Presence Validator",
      validations: promiseValidator,
      onChange: function onChange(ev) {
        return presenceStore.set({
          value: ev.target.value
        });
      },
      fieldHelp: "This example uses a promise based validator to check for presence.",
      labelInline: (0, _addonKnobs.boolean)('labelInline'),
      size: (0, _addonKnobs.select)('size', _optionsHelper.default.sizesRestricted)
    }))), _react.default.createElement(_row.Column, null, _react.default.createElement(_storybookState.State, {
      store: asyncStore
    }, _react.default.createElement(_textbox.default, {
      label: "Async Validator",
      validations: asyncValidator,
      onChange: function onChange(ev) {
        return asyncStore.set({
          value: ev.target.value
        });
      },
      fieldHelp: "This async validator will pause for 2 seconds before it validates. It requires a value of \"valid\" to pass.",
      labelInline: (0, _addonKnobs.boolean)('labelInline'),
      size: (0, _addonKnobs.select)('size', _optionsHelper.default.sizesRestricted)
    })))), _react.default.createElement(_row.Row, null, _react.default.createElement(_row.Column, null, _react.default.createElement(_storybookState.State, {
      store: infoStore
    }, _react.default.createElement(_select.Select, {
      label: "Info",
      info: infoValidator,
      onChange: function onChange(ev) {
        return infoStore.set({
          value: ev.target.value[0].optionValue
        });
      },
      fieldHelp: "This example uses an info validator, these do not block form submission and are not flagged by the form.",
      labelInline: (0, _addonKnobs.boolean)('labelInline'),
      size: (0, _addonKnobs.select)('size', _optionsHelper.default.sizesRestricted)
    }, _react.default.createElement(_select.Option, {
      text: "Blue",
      value: "valid"
    }), _react.default.createElement(_select.Option, {
      text: "Red",
      value: "invalid1"
    }), _react.default.createElement(_select.Option, {
      text: "White",
      value: "invalid2"
    })))), _react.default.createElement(_row.Column, null, _react.default.createElement(_storybookState.State, {
      store: warningStore
    }, _react.default.createElement(_textbox.default, {
      label: "Warning",
      warnings: warningValidator,
      onChange: function onChange(ev) {
        return warningStore.set({
          value: ev.target.value
        });
      },
      fieldHelp: "This example uses a warning validator, these do not block form submission.",
      labelInline: (0, _addonKnobs.boolean)('labelInline'),
      size: (0, _addonKnobs.select)('size', _optionsHelper.default.sizesRestricted)
    })))), _react.default.createElement(_row.Row, null, _react.default.createElement(_row.Column, null, _react.default.createElement(_storybookState.State, {
      store: legacyStore
    }, _react.default.createElement(_textbox.default, {
      label: "Legacy Validation",
      validations: [new _presence.default()],
      onChange: function onChange(ev) {
        return legacyStore.set({
          value: ev.target.value
        });
      },
      fieldHelp: "This example uses a deprecated validator in the form of a class instance.",
      labelInline: (0, _addonKnobs.boolean)('labelInline'),
      size: (0, _addonKnobs.select)('size', _optionsHelper.default.sizesRestricted)
    }))), _react.default.createElement(_row.Column, null, _react.default.createElement(_storybookState.State, {
      store: allStore
    }, _react.default.createElement(_textbox.default, {
      label: "All Validations",
      validations: [promiseValidator, asyncValidator],
      warnings: warningValidator,
      info: infoValidator,
      onChange: function onChange(ev) {
        return allStore.set({
          value: ev.target.value
        });
      },
      fieldHelp: "This example uses all of the validations above! It will fail fast, reporting any failing validations without waiting for asynchronous ones to complete.",
      labelInline: (0, _addonKnobs.boolean)('labelInline'),
      size: (0, _addonKnobs.select)('size', _optionsHelper.default.sizesRestricted)
    })))));
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

function makeButtonToggleGroupStory(name, themeSelector) {
  var component = function component() {
    var test = function test(value) {
      return new Promise(function (resolve, reject) {
        if (value === 'baz') return resolve(true);
        return reject(Error('Baz is required!'));
      });
    };

    return _react.default.createElement(_form.default, {
      onSubmit: handleSubmit
    }, _react.default.createElement(_storybookState.State, {
      store: buttonToggleGroupStore
    }, _react.default.createElement(_buttonToggleGroup.default, {
      label: "ButtonToggle Validation",
      labelHelp: "Returns error unless \"Baz\" value selected",
      fieldHelp: "Click save to run validation",
      validations: test
    }, ['foo', 'bar', 'baz'].map(function (value) {
      return _react.default.createElement(_buttonToggle.default, {
        name: "button-toggle-group",
        value: value,
        onChange: handleChange,
        key: "button-toggle-validation-".concat(value)
      }, value);
    }))));
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (_storiesOf$addParamet3 = (_storiesOf$addParamet4 = (0, _react2.storiesOf)('Validations', module).addParameters({
  info: {
    propTablesExclude: [_buttonToggle.default, _buttonToggleGroup.default, _row.Column, _row.Row, _form.default, _textbox.default, _storybookState.State, _textarea.default]
  }
})).add.apply(_storiesOf$addParamet4, _toConsumableArray(makeBasicStory('Basic', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet3, _toConsumableArray(makeBasicStory('Basic classic', _themeSelectors.classicThemeSelector)))).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeButtonToggleGroupStory('ButtonToggleGroup', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeButtonToggleGroupStory('ButtonToggleGroup classic', _themeSelectors.classicThemeSelector)));

function handleSubmit(ev) {
  ev.preventDefault();
  (0, _addonActions.action)('submit')();
}

function handleChange(ev) {
  (0, _addonActions.action)('change')();
  buttonToggleGroupStore.set({
    value: ev.target.value
  });
}