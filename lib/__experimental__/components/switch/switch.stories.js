"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

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

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _storybookState = require("@sambego/storybook-state");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _switch = _interopRequireWildcard(require("./switch.component"));

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

var _storiesOf$addParamet, _storiesOf$addParamet2, _storiesOf$addParamet3, _storiesOf$addParamet4;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_switch.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /switch\.component(?!spec)/);
var formStore = new _storybookState.Store({
  checked: false
});
var stores = {};
var validationTypes = ['cookies', 't&cs', 'info'];
validationTypes.forEach(function (type) {
  stores[type] = new _storybookState.Store({
    checked: false,
    forceUpdateTriggerToggle: false
  });
});

function switchWrapper(wrapperProps) {
  return _react.default.createElement(_storybookState.State, {
    store: wrapperProps.store
  }, _react.default.createElement(_switch.default, _extends({
    onChange: handleChange(),
    name: "switch"
  }, wrapperProps)));
}

function makeStory(name, themeSelector, component) {
  var metadata = {
    themeSelector: themeSelector,
    knobs: {
      escapeHTML: false
    },
    info: {
      text: name.search('validations') !== -1 ? _documentation.infoValidations : _documentation.info
    },
    notes: {
      markdown: _documentation.notes
    }
  };
  return [name, component, metadata];
}

var switchClassic = function switchClassic() {
  return switchWrapper(_objectSpread({}, commonKnobs(), {
    store: formStore
  }));
};

var switchComponent = function switchComponent() {
  return switchWrapper(_objectSpread({}, commonKnobs(), {}, dlsKnobs(), {
    store: formStore
  }));
};

var validationGroupedKnobs = function validationGroupedKnobs(type, themeName) {
  var group = "".concat(type, " switch");
  return {
    key: type,
    label: (0, _addonKnobs.text)("".concat(type, " label"), "Accept ".concat(type), group),
    labelHelp: (0, _addonKnobs.text)("".concat(type, " labelHelp"), "Switch off and on ".concat(type, " component."), group),
    disabled: (0, _addonKnobs.boolean)("".concat(type, " disabled"), false, group),
    size: themeName !== 'classic' ? (0, _addonKnobs.select)("".concat(type, " size"), _optionsHelper.default.sizesBinary, 'small', group) : undefined,
    fieldHelp: (0, _addonKnobs.text)("".concat(type, " fieldHelp"), 'This text provides help for the input', group),
    fieldHelpInline: (0, _addonKnobs.boolean)("".concat(type, " fieldHelpInline"), false, group),
    labelInline: (0, _addonKnobs.boolean)("".concat(type, " labelInline"), false, group),
    loading: (0, _addonKnobs.boolean)("".concat(type, " loading"), false, group),
    inputWidth: (0, _addonKnobs.number)("".concat(type, " inputWidth"), 0, {
      range: true,
      min: 0,
      max: 100,
      step: 1
    }, group),
    labelWidth: (0, _addonKnobs.number)("".concat(type, " labelWidth"), 0, {
      range: true,
      min: 0,
      max: 100,
      step: 1
    }, group),
    labelAlign: (0, _addonKnobs.select)("".concat(type, " labelAlign"), _optionsHelper.default.alignBinary, _optionsHelper.default.alignBinary[0], group),
    reverse: (0, _addonKnobs.boolean)("".concat(type, " reverse"), _switch.BaseSwitch.defaultProps.reverse, group)
  };
};

var validationKnobs = function validationKnobs(type, themeName) {
  return _objectSpread({}, validationGroupedKnobs(type, themeName), {
    name: "switch-".concat(type),
    value: type,
    store: stores[type],
    onChange: handleChange(stores[type]),
    validations: testValidation('valid'),
    warnings: testValidation('warn'),
    info: testValidation('info'),
    unblockValidation: true,
    useValidationIcon: true
  });
};

var switchComponentValidation = function switchComponentValidation(themeName) {
  return function () {
    return validationTypes.map(function (type) {
      return switchWrapper(_objectSpread({}, validationKnobs(type, themeName)));
    });
  };
};

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (_storiesOf$addParamet3 = (_storiesOf$addParamet4 = (0, _react2.storiesOf)('Experimental/Switch', module).addParameters({
  info: {
    text: _documentation.info,
    propTablesExclude: [_storybookState.State]
  }
})).add.apply(_storiesOf$addParamet4, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector, switchComponent)))).add.apply(_storiesOf$addParamet3, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector, switchClassic)))).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeStory('validations', _themeSelectors.dlsThemeSelector, switchComponentValidation())))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeStory('validations classic', _themeSelectors.classicThemeSelector, switchComponentValidation('classic'))));

function handleChange() {
  var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : formStore;
  return function (ev) {
    var checked = ev.target.checked;
    store.set({
      checked: checked,
      forceUpdateTriggerToggle: checked
    });
    (0, _addonActions.action)('checked')(checked);
  };
}

function commonKnobs() {
  return {
    fieldHelp: (0, _addonKnobs.text)('fieldHelp', 'This text provides help for the input.'),
    fieldHelpInline: (0, _addonKnobs.boolean)('fieldHelpInline', false),
    label: (0, _addonKnobs.text)('label', 'Switch on this component?'),
    labelHelp: (0, _addonKnobs.text)('labelHelp', 'Switch off and on this component.'),
    labelInline: (0, _addonKnobs.boolean)('labelInline', false),
    loading: (0, _addonKnobs.boolean)('loading', false),
    inputWidth: (0, _addonKnobs.number)('inputWidth', 0, {
      range: true,
      min: 0,
      max: 100,
      step: 1
    }),
    labelWidth: (0, _addonKnobs.number)('labelWidth', 0, {
      range: true,
      min: 0,
      max: 100,
      step: 1
    }),
    labelAlign: (0, _addonKnobs.select)('labelAlign', _optionsHelper.default.alignBinary, _optionsHelper.default.alignBinary[0]),
    reverse: (0, _addonKnobs.boolean)('reverse', _switch.BaseSwitch.defaultProps.reverse),
    value: (0, _addonKnobs.text)('value', 'test-value')
  };
}

function dlsKnobs() {
  return {
    disabled: (0, _addonKnobs.boolean)('disabled', false),
    size: (0, _addonKnobs.select)('size', _optionsHelper.default.sizesBinary, 'small')
  };
}

function testValidation(type) {
  return function (value, _ref) {
    var checked = _ref.checked;
    return new Promise(function (resolve, reject) {
      if (type === 'valid' && value === 'cookies' && !checked) {
        reject(new Error('Show error!'));
      } else if (type === 'warn' && value === 't&cs' && !checked) {
        reject(new Error('Show warning!'));
      } else if (type === 'info' && value === 'info' && !checked) {
        reject(new Error('Show info!'));
      } else {
        resolve();
      }
    });
  };
}