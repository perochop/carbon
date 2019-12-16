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

var _addonActions = require("@storybook/addon-actions");

var _storybookState = require("@sambego/storybook-state");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _ = require(".");

var _button = _interopRequireDefault(require("../button"));

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _docgenInfo2 = _interopRequireDefault(require("./docgenInfo.json"));

var _storiesOf$addParamet, _storiesOf$addParamet2, _storiesOf$addParamet3, _storiesOf$addParamet4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_.Sidebar.__docgenInfo = (0, _docgenInfo.default)(_docgenInfo2.default, /sidebar\.component(?!spec)/);
_.SidebarHeader.__docgenInfo = (0, _docgenInfo.default)(_docgenInfo2.default, /sidebar-header\.component(?!spec)/);
var store = new _storybookState.Store({
  open: false
});

var onCancel = function onCancel() {
  store.set({
    open: false
  });
  (0, _addonActions.action)('cancel')();
};

var openSidebar = function openSidebar() {
  store.set({
    open: true
  });
};

function makeStory(name, themeSelector) {
  var component = function component() {
    var enableBackgroundUI = (0, _addonKnobs.boolean)('enableBackgroundUI', _.Sidebar.defaultProps.enableBackgroundUI);
    var position = (0, _addonKnobs.select)('position', _optionsHelper.default.alignBinary, _.Sidebar.defaultProps.position);
    var size = (0, _addonKnobs.select)('size', _optionsHelper.default.sizesFull, _.Sidebar.defaultProps.size);
    var open = (0, _addonKnobs.boolean)('open', _.Sidebar.defaultProps.open);
    return _react.default.createElement(_.Sidebar, {
      enableBackgroundUI: enableBackgroundUI,
      open: open,
      position: position,
      size: size,
      onCancel: onCancel
    }, _react.default.createElement(_.SidebarHeader, null, "Header Content"), "Main Content");
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

function makeButtonStory(name, themeSelector) {
  var component = function component() {
    var enableBackgroundUI = (0, _addonKnobs.boolean)('enableBackgroundUI', _.Sidebar.defaultProps.enableBackgroundUI);
    var position = (0, _addonKnobs.select)('position', _optionsHelper.default.alignBinary, _.Sidebar.defaultProps.position);
    var size = (0, _addonKnobs.select)('size', _optionsHelper.default.sizesFull, _.Sidebar.defaultProps.size);
    return _react.default.createElement(_storybookState.State, {
      store: store
    }, _react.default.createElement(_button.default, {
      onClick: openSidebar
    }, "Open sidebar"), _react.default.createElement(_.Sidebar, {
      enableBackgroundUI: enableBackgroundUI,
      open: store.get('open'),
      position: position,
      size: size,
      onCancel: onCancel
    }, _react.default.createElement(_.SidebarHeader, null, "Header Content"), "Main Content"));
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (_storiesOf$addParamet3 = (_storiesOf$addParamet4 = (0, _react2.storiesOf)('Sidebar', module).addParameters({
  info: {
    propTablesExclude: [_button.default, _storybookState.State],
    text: _documentation.info
  },
  notes: {
    markdown: _documentation.notes
  }
})).add.apply(_storiesOf$addParamet4, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet3, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)))).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeButtonStory('with button', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeButtonStory('with button classic', _themeSelectors.classicThemeSelector)));