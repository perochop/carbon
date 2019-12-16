"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _storybookState = require("@sambego/storybook-state");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _tabs = require("./tabs.component");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _docgenInfo2 = _interopRequireDefault(require("./docgenInfo.json"));

var _storiesOf$addParamet, _storiesOf$addParamet2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_tabs.Tabs.__docgenInfo = (0, _docgenInfo.default)(_docgenInfo2.default, /tabs\.component(?!spec)/);
_tabs.Tab.__docgenInfo = (0, _docgenInfo.default)(_docgenInfo2.default, /tab\.component(?!spec)/);
var store = new _storybookState.Store({
  selectedTabId: 'tab-1'
});

var checkIfSelected = function checkIfSelected(tabId) {
  if (tabId === store.get('selectedTabId')) {
    return true;
  }

  return false;
};

function makeStory(name, themeSelector) {
  var component = function component() {
    var selectOption = ['top', 'left'];
    var align = (0, _addonKnobs.select)('align', _optionsHelper.default.alignBinary, _tabs.Tabs.defaultProps.align);
    var position = (0, _addonKnobs.select)('position', selectOption, _tabs.Tabs.defaultProps.position);
    return _react.default.createElement(_storybookState.State, {
      store: store
    }, _react.default.createElement(_tabs.Tabs, {
      align: align,
      position: position
    }, _react.default.createElement(_tabs.Tab, {
      tabId: "tab-1",
      title: "Tab 1",
      key: "tab-1",
      isTabSelected: checkIfSelected('tab-1')
    }, "Content for tab 1"), _react.default.createElement(_tabs.Tab, {
      tabId: "tab-2",
      title: "Tab 2",
      key: "tab-2",
      isTabSelected: checkIfSelected('tab-2')
    }, "Content for tab 2"), _react.default.createElement(_tabs.Tab, {
      tabId: "tab-3",
      title: "Tab 3",
      key: "tab-3",
      isTabSelected: checkIfSelected('tab-3')
    }, "Content for tab 3"), _react.default.createElement(_tabs.Tab, {
      tabId: "tab-4",
      title: "Tab 4",
      key: "tab-4",
      isTabSelected: checkIfSelected('tab-4')
    }, "Content for tab 4"), _react.default.createElement(_tabs.Tab, {
      tabId: "tab-5",
      title: "Tab 5",
      key: "tab-5",
      isTabSelected: checkIfSelected('tab-5')
    }, "Content for tab 5")));
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: _documentation.info
    },
    notes: {
      markdown: _documentation.notes
    }
  };
  return [name, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (0, _react2.storiesOf)('Tabs', module).addParameters({
  info: {
    propTablesExclude: [_storybookState.State]
  }
})).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));