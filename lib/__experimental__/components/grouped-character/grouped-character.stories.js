"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _storybookState = require("@sambego/storybook-state");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _groupedCharacter = _interopRequireDefault(require("./grouped-character.component"));

var _textbox = _interopRequireDefault(require("../textbox/textbox.stories"));

var _textbox2 = require("../textbox");

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

var _storiesOf$addParamet, _storiesOf$addParamet2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_groupedCharacter.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /grouped-character\.component(?!spec)/);
var groupedCharacterStore = new _storybookState.Store({
  value: ''
});

var onChange = function onChange(ev) {
  groupedCharacterStore.set({
    value: ev.target.value.rawValue
  });
  (0, _addonActions.action)('change')(ev);
};

function makeStory(name, themeSelector) {
  var component = function component() {
    var groups = (0, _addonKnobs.object)('groups', [2, 2, 4]);
    var separator = (0, _addonKnobs.text)('separator', '-');
    return _react.default.createElement(_storybookState.State, {
      store: groupedCharacterStore
    }, _react.default.createElement(_groupedCharacter.default, _extends({}, (0, _textbox.default)(), {
      groups: groups,
      separator: separator,
      value: groupedCharacterStore.get('value'),
      onChange: onChange
    })));
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (0, _react2.storiesOf)('Experimental/GroupedCharacter', module).addParameters({
  info: {
    text: _documentation.info,
    propTables: [_textbox2.OriginalTextbox],
    propTablesExclude: [_storybookState.State]
  },
  knobs: {
    escapeHTML: false
  }
})).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));