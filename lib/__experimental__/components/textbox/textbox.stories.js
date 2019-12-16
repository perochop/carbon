"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _storybookState = require("@sambego/storybook-state");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _documentation = require("./documentation");

var _ = _interopRequireWildcard(require("."));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

var _storiesOf$add$add$ad, _storiesOf$add$add$ad2, _storiesOf$add$add, _storiesOf$add, _storiesOf;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_.OriginalTextbox.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /textbox\.component(?!spec)/); // set the display name so the story source makes sense

_.default.displayName = 'Textbox';
var defaultStoryPropsConfig = {
  inputWidthEnabled: true
};

function makeStory(name, themeSelector) {
  var component = function component() {
    return _react.default.createElement(_.default, _extends({
      placeholder: (0, _addonKnobs.text)('placeholder')
    }, getCommonTextboxStoryProps()));
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: _documentation.info,
      propTables: [_.OriginalTextbox],
      propTablesExclude: [_storybookState.State, _.default]
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

function makeMultipleStory(name, themeSelector) {
  var component = function component() {
    return [_react.default.createElement(_.default, _extends({
      placeholder: (0, _addonKnobs.text)('placeholder'),
      key: "0"
    }, getCommonTextboxStoryProps())), _react.default.createElement(_.default, _extends({
      placeholder: (0, _addonKnobs.text)('placeholder'),
      key: "1"
    }, getCommonTextboxStoryProps()))];
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: _documentation.info,
      propTables: [_.OriginalTextbox],
      propTablesExclude: [_storybookState.State, _.default]
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

function makeValidationsStory(name, themeSelector) {
  var store = new _storybookState.Store({
    value: ''
  });

  var setValue = function setValue(ev) {
    store.set({
      value: ev.target.value
    });
  };

  var component = function component() {
    return _react.default.createElement(_storybookState.State, {
      store: store
    }, _react.default.createElement(_.default, {
      placeholder: (0, _addonKnobs.text)('placeholder'),
      name: "textbox",
      warnings: [warningValidator],
      validations: [errorValidator],
      info: [lengthValidator],
      onChange: setValue
    }));
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      source: false,
      text: _documentation.infoValidations,
      propTablesExclude: [_storybookState.State, _.default]
    }
  };
  return [name, component, metadata];
}

(_storiesOf$add$add$ad = (_storiesOf$add$add$ad2 = (_storiesOf$add$add = (_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Experimental/Textbox', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)))).add.apply(_storiesOf$add$add, _toConsumableArray(makeMultipleStory('multiple', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add$add$ad2, _toConsumableArray(makeValidationsStory('validations', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add$add$ad, _toConsumableArray(makeValidationsStory('validations classic', _themeSelectors.classicThemeSelector)));

function getCommonTextboxStoryProps() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultStoryPropsConfig;
  var percentageRange = {
    range: true,
    min: 0,
    max: 100,
    step: 1
  };
  var disabled = (0, _addonKnobs.boolean)('disabled', false);
  var readOnly = (0, _addonKnobs.boolean)('readOnly', false);
  var fieldHelp = (0, _addonKnobs.text)('fieldHelp');
  var label = (0, _addonKnobs.text)('label');
  var labelHelp = label ? (0, _addonKnobs.text)('labelHelp') : undefined;
  var labelInline = label ? (0, _addonKnobs.boolean)('labelInline', false) : undefined;
  var labelWidth = labelInline ? (0, _addonKnobs.number)('labelWidth', 30, percentageRange) : undefined;
  var inputWidth = labelInline && config.inputWidthEnabled ? (0, _addonKnobs.number)('inputWidth', 70, percentageRange) : undefined;
  var labelAlign = labelInline ? (0, _addonKnobs.select)('labelAlign', _optionsHelper.default.alignBinary) : undefined;
  var size = (0, _addonKnobs.select)('size', _optionsHelper.default.sizesRestricted, 'medium');
  return {
    disabled: disabled,
    readOnly: readOnly,
    inputWidth: inputWidth,
    fieldHelp: fieldHelp,
    label: label,
    labelHelp: labelHelp,
    labelInline: labelInline,
    labelWidth: labelWidth,
    labelAlign: labelAlign,
    size: size
  };
}

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
    return reject(Error('This value should be longer than 12 characters'));
  });
}

var _default = getCommonTextboxStoryProps;
exports.default = _default;