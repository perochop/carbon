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

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _storybookState = require("@sambego/storybook-state");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _ = require(".");

var _documentation = _interopRequireDefault(require("./documentation"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

var _docgenInfo2 = _interopRequireDefault(require("./docgenInfo.json"));

var _storiesOf$addParamet, _storiesOf$addParamet2, _storiesOf$addParamet3, _storiesOf$addParamet4, _storiesOf$addParamet5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_.Select.__docgenInfo = (0, _docgenInfo.default)(_docgenInfo2.default, /select\.component(?!spec)/);
_.Option.__docgenInfo = (0, _docgenInfo.default)(_docgenInfo2.default, /option\.component(?!spec)/);
var singleSelectStore = new _storybookState.Store({
  value: ''
});
var multiSelectStore = new _storybookState.Store({
  value: []
});

var commonKnobs = function commonKnobs(store) {
  var enableMultiSelect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var filterable = (0, _addonKnobs.boolean)('filterable', _.Select.defaultProps.filterable);
  var typeAhead = filterable && (0, _addonKnobs.boolean)('typeAhead', _.Select.defaultProps.typeAhead);
  var label = (0, _addonKnobs.text)('label', '');
  var isLoopable = (0, _addonKnobs.boolean)('isLoopable', false);
  var preventFocusAutoOpen = (0, _addonKnobs.boolean)('preventFocusAutoOpen', false);
  var knobs = {
    disabled: (0, _addonKnobs.boolean)('disabled', false),
    onBlur: function onBlur(ev) {
      return (0, _addonActions.action)('blur')(ev);
    },
    onKeyDown: function onKeyDown(ev) {
      return (0, _addonActions.action)('keyDown')(ev);
    },
    onChange: function onChange(ev) {
      var optionsObjects = ev.target.value;
      var value = optionsObjects.map(function (optionObject) {
        return optionObject.optionValue;
      });

      if (!enableMultiSelect) {
        value = value[0];
      }

      store.set({
        value: value
      });
      (0, _addonActions.action)('change')(ev);
    },
    placeholder: (0, _addonKnobs.text)('placeholder', ''),
    readOnly: (0, _addonKnobs.boolean)('readOnly', false),
    size: (0, _addonKnobs.select)('size', _optionsHelper.default.sizesRestricted, _optionsHelper.default.sizesRestricted[1]),
    filterable: filterable,
    typeAhead: typeAhead,
    label: label,
    isLoopable: isLoopable,
    preventFocusAutoOpen: preventFocusAutoOpen
  };

  if (label.length) {
    knobs.labelAlign = (0, _addonKnobs.select)('labelAlign', _optionsHelper.default.alignBinary, _optionsHelper.default.alignBinary[0]);
    knobs.labelInline = (0, _addonKnobs.boolean)('labelInline', false);
  }

  return knobs;
};

var selectOptionsLabels = ['Amber', 'Black', 'Blue', 'Brown', 'Green', 'Orange', 'Pink', 'Purple', 'Red', 'White', 'Yellow'];
var selectOptions = selectOptionsLabels.map(function (label, index) {
  return _react.default.createElement(_.Option, {
    key: label,
    text: label,
    value: String(index + 1)
  });
});

function validator(value, errorValue, errorMessage) {
  return new Promise(function (resolve, reject) {
    if (value === errorValue) {
      reject(new Error(errorMessage));
    } else {
      resolve();
    }
  });
}

var selectValidation = function selectValidation(value) {
  return validator(value, '2', '"Black" cannot be selected!');
};

var selectWarning = function selectWarning(value) {
  return validator(value, '3', 'Selecting "Blue" is not recommended');
};

var selectInfo = function selectInfo(value) {
  return validator(value, '4', 'You have selected "Brown"');
};

function makeStory(name, themeSelector) {
  var component = function component() {
    return _react.default.createElement(_storybookState.State, {
      store: singleSelectStore
    }, _react.default.createElement(_.Select, _extends({
      ariaLabel: "singleSelect"
    }, commonKnobs(singleSelectStore)), selectOptions));
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

function makeMultipleStory(name, themeSelector) {
  var component = function component() {
    return _react.default.createElement(_storybookState.State, {
      store: multiSelectStore
    }, _react.default.createElement(_.Select, _extends({
      ariaLabel: "multiSelect",
      enableMultiSelect: true
    }, commonKnobs(multiSelectStore, true)), selectOptions));
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

function makeValidationsStory(name, themeSelector) {
  var component = function component() {
    return _react.default.createElement(_storybookState.State, {
      store: singleSelectStore
    }, _react.default.createElement(_.Select, _extends({
      ariaLabel: "singleSelect"
    }, commonKnobs(singleSelectStore), {
      validations: [selectValidation],
      warnings: [selectWarning],
      info: [selectInfo]
    }), selectOptions));
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: _documentation.default,
      source: false,
      propTablesExclude: [_.Select, _.Option]
    }
  };
  return [name, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (_storiesOf$addParamet3 = (_storiesOf$addParamet4 = (_storiesOf$addParamet5 = (0, _react2.storiesOf)('Experimental/Select', module).addParameters({
  info: {
    propTablesExclude: [_storybookState.State]
  },
  knobs: {
    escapeHTML: false
  }
})).add.apply(_storiesOf$addParamet5, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet4, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)))).add.apply(_storiesOf$addParamet3, _toConsumableArray(makeMultipleStory('multiple', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeValidationsStory('validations', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeValidationsStory('validations classic', _themeSelectors.classicThemeSelector)));