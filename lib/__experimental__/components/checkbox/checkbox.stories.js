"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.function.name");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.search");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _storybookState = require("@sambego/storybook-state");

var _form = _interopRequireDefault(require("../form"));

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _ = require(".");

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

var _text = _interopRequireDefault(require("../../../utils/helpers/text"));

var _storiesOf$add$add$ad, _storiesOf$add$add, _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_.Checkbox.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /checkbox\.component(?!spec)/);

function testValidator(value, props) {
  return new Promise(function (resolve, reject) {
    if (['required', 'mandatory'].indexOf(value) !== -1 && !props.checked) {
      reject(new Error('This checkbox is required!'));
    } else if (props.name === 'checkbox-group' && value === '0') {
      reject(new Error('This checkbox is required!'));
    } else {
      resolve();
    }
  });
}

function testWarning(value, props) {
  return new Promise(function (resolve, reject) {
    if (['warning', 'alert'].indexOf(value) !== -1 && !props.checked) {
      reject(new Error('Show warning!'));
    } else if (props.name === 'checkbox-group' && value === '1') {
      reject(new Error('Show warning!'));
    } else {
      resolve();
    }
  });
}

function testInfo(value, props) {
  return new Promise(function (resolve, reject) {
    if (['info', 'example'].indexOf(value) !== -1 && !props.checked) {
      reject(new Error('Show this information'));
    } else if (props.name === 'checkbox-group' && value === '2') {
      reject(new Error('Show this information'));
    } else {
      resolve();
    }
  });
}

var checkboxes = {
  default: {},
  required: {},
  warning: {},
  info: {},
  optional: {},
  one: {},
  two: {},
  three: {}
};
var checkboxKeys = Object.keys(checkboxes);
checkboxKeys.forEach(function (id) {
  checkboxes[id] = {
    store: new _storybookState.Store({
      checked: false,
      forceUpdateTriggerToggle: false
    })
  };
});
var formCheckbox = checkboxKeys.filter(function (name) {
  return ['required', 'warning', 'info', 'optional'].indexOf(name) !== -1;
});
var groupCheckbox = checkboxKeys.filter(function (name) {
  return ['one', 'two', 'three'].indexOf(name) !== -1;
});
var groupStore = new _storybookState.Store({
  value: '0',
  mandatory: false,
  alert: false,
  example: false,
  one: false,
  two: false,
  three: false
});

function defaultKnobs(type) {
  var knobGroup = "Checkbox ".concat(type);

  var nameWithGroup = function nameWithGroup(name) {
    return type === 'default' ? name : "".concat(_text.default.titleCase(type), " ").concat(name);
  };

  var label = "".concat((0, _addonKnobs.text)(nameWithGroup('label'), 'Example Checkbox', knobGroup), " (").concat(type, ")");
  return {
    disabled: (0, _addonKnobs.boolean)(nameWithGroup('disabled'), false, knobGroup),
    fieldHelp: (0, _addonKnobs.text)(nameWithGroup('fieldHelp'), 'This text provides help for the input.', knobGroup),
    fieldHelpInline: (0, _addonKnobs.boolean)(nameWithGroup('fieldHelpInline'), false, knobGroup),
    reverse: (0, _addonKnobs.boolean)(nameWithGroup('reverse'), false, knobGroup),
    label: label,
    labelHelp: (0, _addonKnobs.text)(nameWithGroup('labelHelp'), 'This text provides more information for the label.', knobGroup),
    inputWidth: (0, _addonKnobs.number)(nameWithGroup('inputWidth'), 0, {
      range: true,
      min: 0,
      max: 100,
      step: 1
    }, knobGroup),
    labelWidth: (0, _addonKnobs.number)(nameWithGroup('labelWidth'), 0, {
      range: true,
      min: 0,
      max: 100,
      step: 1
    }, knobGroup),
    labelAlign: (0, _addonKnobs.select)(nameWithGroup('labelAlign'), _optionsHelper.default.alignBinary, _optionsHelper.default.alignBinary[0], knobGroup),
    size: (0, _addonKnobs.select)(nameWithGroup('size'), _optionsHelper.default.sizesBinary, 'small', knobGroup),
    value: (0, _addonKnobs.text)(nameWithGroup('value'), type, knobGroup)
  };
}

function makeStory(name, themeSelector, component) {
  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: name.search('validations') !== -1 ? _documentation.infoValidations : _documentation.info,
      propTablesExclude: [_storybookState.State],
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

function handleChange(ev, id) {
  var checked = ev.target.checked;
  checkboxes[id].store.set({
    checked: checked,
    forceUpdateTriggerToggle: !checked
  });
  (0, _addonActions.action)('change')("checked: ".concat(checked));
}

function handleGroupChange(ev, id) {
  var _groupStore$set;

  var checked = ev.target.checked;
  var count = Number(groupStore.get('value'));
  var value = checked ? count + 1 : count - 1;
  groupStore.set((_groupStore$set = {
    value: value.toString()
  }, _defineProperty(_groupStore$set, id, checked), _defineProperty(_groupStore$set, "forceUpdateTriggerToggle", checked), _groupStore$set));
}

function handleSubmit(ev) {
  ev.preventDefault();
  (0, _addonActions.action)('submit')();
}

var checkboxComponent = function checkboxComponent() {
  return _react.default.createElement(_storybookState.State, {
    store: checkboxes.default.store
  }, _react.default.createElement(_.Checkbox, _extends({
    onChange: function onChange(ev) {
      return handleChange(ev, 'default');
    }
  }, defaultKnobs('default'))));
};

var checkboxGroupComponent = function checkboxGroupComponent() {
  return _react.default.createElement("div", null, _react.default.createElement("h3", null, "In Form"), _react.default.createElement(_form.default, {
    onSubmit: handleSubmit
  }, formCheckbox.map(function (type) {
    return _react.default.createElement(_storybookState.State, {
      store: checkboxes[type].store,
      key: "check-state-".concat(type)
    }, _react.default.createElement(_.Checkbox, _extends({
      id: "checkbox",
      key: "checkbox-input-".concat(type),
      validations: testValidator,
      warnings: testWarning,
      info: testInfo,
      onChange: function onChange(ev) {
        return handleChange(ev, type);
      },
      name: "my-checkbox-".concat(type),
      unblockValidation: true
    }, defaultKnobs(type))));
  })), _react.default.createElement("h3", null, "In Group"), _react.default.createElement(_storybookState.State, {
    store: groupStore
  }, function (state) {
    return [_react.default.createElement(_.CheckboxGroup, {
      key: "checkbox-group",
      name: "checkbox-group",
      groupName: "checkbox-group",
      label: (0, _addonKnobs.text)('label', 'What would you choose?', 'group'),
      labelHelp: (0, _addonKnobs.text)('labelHelp', 'Some helpful information', 'group'),
      validations: testValidator,
      warnings: testWarning,
      info: testInfo,
      value: state.value
    }, groupCheckbox.map(function (id) {
      return _react.default.createElement(_.Checkbox, _extends({
        checked: state[id],
        name: "checkbox-input-".concat(id),
        key: "checkbox-input-".concat(id),
        onChange: function onChange(ev) {
          return handleGroupChange(ev, id);
        },
        labelHelp: (0, _addonKnobs.text)("".concat(_text.default.titleCase(id), " labelHelp"), '', "Checkbox ".concat(id))
      }, defaultKnobs(id)));
    }))];
  }));
};

(_storiesOf$add$add$ad = (_storiesOf$add$add = (_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Experimental/Checkbox', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector, checkboxComponent)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector, checkboxComponent)))).add.apply(_storiesOf$add$add, _toConsumableArray(makeStory('validations', _themeSelectors.dlsThemeSelector, checkboxGroupComponent)))).add.apply(_storiesOf$add$add$ad, _toConsumableArray(makeStory('validations classic', _themeSelectors.classicThemeSelector, checkboxGroupComponent)));