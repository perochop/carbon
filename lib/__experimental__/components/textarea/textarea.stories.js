"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

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

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _ = _interopRequireDefault(require("."));

var _documentation = require("./documentation");

var _textarea = require("./textarea.component");

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

var _storiesOf$addParamet, _storiesOf$addParamet2, _storiesOf$addParamet3, _storiesOf$addParamet4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_textarea.OriginalTextarea.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /textarea\.component(?!spec)/);
var store = new _storybookState.Store({
  value: ''
});

var handleChange = function handleChange(_ref) {
  var value = _ref.target.value;
  store.set({
    value: value
  });
};

var rangeOptions = {
  range: true,
  min: 0,
  max: 300,
  step: 1
};
var percentageRange = {
  range: true,
  min: 0,
  max: 100,
  step: 1
};

function makeStory(name, themeSelector) {
  var component = function component() {
    var expandable = (0, _addonKnobs.boolean)('expandable', _.default.defaultProps.expandable);
    var cols = (0, _addonKnobs.number)('cols', 0, rangeOptions);
    var rows = (0, _addonKnobs.number)('rows', 0, rangeOptions);
    var disabled = (0, _addonKnobs.boolean)('disabled', false);
    var readOnly = (0, _addonKnobs.boolean)('readOnly', false);
    var placeholder = (0, _addonKnobs.text)('placeholder', '');
    var fieldHelp = (0, _addonKnobs.text)('fieldHelp', '');
    var characterLimit = (0, _addonKnobs.text)('characterLimit', '');
    var inputWidth = (0, _addonKnobs.number)('inputWidth', 100, percentageRange);
    var warnOverLimit = characterLimit ? (0, _addonKnobs.boolean)('warnOverLimit', _.default.defaultProps.warnOverLimit) : undefined;
    var enforceCharacterLimit = characterLimit ? (0, _addonKnobs.boolean)('enforceCharacterLimit', _.default.defaultProps.enforceCharacterLimit) : undefined;
    var label = (0, _addonKnobs.text)('label', '');
    var labelHelp = label ? (0, _addonKnobs.text)('labelHelp', '') : undefined;
    var labelInline = label ? (0, _addonKnobs.boolean)('labelInline', false) : undefined;
    var labelWidth = labelInline ? (0, _addonKnobs.number)('labelWidth', 30, percentageRange) : undefined;
    var labelAlign = labelInline ? (0, _addonKnobs.select)('labelAlign', _optionsHelper.default.alignBinary) : undefined;
    return _react.default.createElement(_storybookState.State, {
      store: store
    }, _react.default.createElement(_.default, {
      name: "textarea",
      onChange: handleChange,
      warnOverLimit: warnOverLimit,
      expandable: expandable,
      characterLimit: characterLimit,
      enforceCharacterLimit: enforceCharacterLimit,
      cols: cols,
      rows: rows,
      disabled: disabled,
      readOnly: readOnly,
      placeholder: placeholder,
      fieldHelp: fieldHelp,
      label: label,
      labelHelp: labelHelp,
      labelInline: labelInline,
      labelWidth: labelWidth,
      inputWidth: inputWidth,
      labelAlign: labelAlign
    }));
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: _documentation.info,
      propTables: [_textarea.OriginalTextarea],
      propTablesExclude: [_.default]
    },
    notes: {
      markdown: _documentation.notes
    }
  };
  return [name, component, metadata];
}

function makeValidationsStory(name, themeSelector) {
  var component = function component() {
    return _react.default.createElement(_storybookState.State, {
      store: store
    }, _react.default.createElement(_.default, {
      name: "textarea",
      label: "Textarea Validation",
      labelHelp: "Returns an error when the field is empty",
      fieldHelp: "Validates on blur",
      onChange: function onChange(ev) {
        return store.set({
          value: ev.target.value
        });
      },
      warnings: warningValidator,
      validations: errorValidator,
      info: lengthValidator
    }));
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: _documentation.infoValidations,
      source: false,
      propTablesExclude: [_.default]
    }
  };
  return [name, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (_storiesOf$addParamet3 = (_storiesOf$addParamet4 = (0, _react2.storiesOf)('Experimental/Textarea', module).addParameters({
  info: {
    propTablesExclude: [_storybookState.State]
  }
})).add.apply(_storiesOf$addParamet4, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet3, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)))).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeValidationsStory('validations', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeValidationsStory('validations classic', _themeSelectors.classicThemeSelector)));

function errorValidator(value) {
  return new Promise(function (resolve, reject) {
    if (!value.includes('error')) {
      resolve();
    } else {
      reject(new Error('This value must not include the word "error"!'));
    }
  });
}

function warningValidator(value) {
  return new Promise(function (resolve, reject) {
    if (!value.includes('warning')) {
      resolve();
    } else {
      reject(new Error('This value must not include the word "warning"!'));
    }
  });
}

function lengthValidator(value) {
  return new Promise(function (resolve, reject) {
    if (value.length > 12) return resolve(true);
    return reject(Error('Message should be longer than 12 characters'));
  });
}