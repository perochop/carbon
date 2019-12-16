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

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _documentation = _interopRequireDefault(require("./documentation"));

var _menuList = require("./menu-list");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _docgenInfo2 = _interopRequireDefault(require("./docgenInfo.json"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_menuList.MenuList.__docgenInfo = (0, _docgenInfo.default)(_docgenInfo2.default, /menu-list\.js(?!spec)/);
_menuList.MenuListItem.__docgenInfo = (0, _docgenInfo.default)(_docgenInfo2.default, /menu-list-item\.js(?!spec)/);

function makeStory(name, themeSelector) {
  var component = function component() {
    var title = (0, _addonKnobs.text)('title', '');
    var collapsible = title ? (0, _addonKnobs.boolean)('collapsible', true) : undefined;
    var filterPlaceholder = (0, _addonKnobs.text)('filterPlaceholder', '');
    var initiallyOpen = (0, _addonKnobs.boolean)('initiallyOpen', true);
    var filter = (0, _addonKnobs.boolean)('filter', true);
    return _react.default.createElement(_menuList.MenuList, {
      title: title,
      collapsible: collapsible,
      filterPlaceholder: filterPlaceholder,
      initiallyOpen: initiallyOpen
    }, _react.default.createElement(_menuList.MenuListItem, null, "Menu Item One"), _react.default.createElement(_menuList.MenuListItem, null, _react.default.createElement(_menuList.MenuList, {
      title: "Menu Item Two",
      filter: filter
    }, _react.default.createElement(_menuList.MenuListItem, {
      name: "First Sub Item"
    }, "First Sub Item"), _react.default.createElement(_menuList.MenuListItem, {
      name: "Second Sub Item"
    }, "Second Sub Item"), _react.default.createElement(_menuList.MenuListItem, {
      name: "Third Sub Item"
    }, "Third Sub Item"))), _react.default.createElement(_menuList.MenuListItem, null, "Menu Item Three"), _react.default.createElement(_menuList.MenuListItem, null, "Menu Item Four"));
  };

  var metadata = {
    themeSelector: themeSelector,
    notes: {
      markdown: _documentation.default
    },
    knobs: {
      escapeHTML: false
    }
  };
  return [name, component, metadata];
}

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('MenuList', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));