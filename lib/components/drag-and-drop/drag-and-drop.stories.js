"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.array.splice");

require("core-js/modules/es.function.name");

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

var _notes = _interopRequireDefault(require("./documentation/notes.md"));

var _Info = _interopRequireDefault(require("./documentation/Info"));

var _dragAndDrop = require("./drag-and-drop");

var _table = require("../table");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$addParamet, _storiesOf$addParamet2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_dragAndDrop.DraggableContext.__docgenInfo = (0, _docgenInfo.default)(require('./draggable-context/docgenInfo.json'), /draggable-context(?!spec)/);
_dragAndDrop.WithDrag.__docgenInfo = (0, _docgenInfo.default)(require('./with-drag/docgenInfo.json'), /with-drag(?!spec)/);
_dragAndDrop.WithDrop.__docgenInfo = (0, _docgenInfo.default)(require('./with-drop/docgenInfo.json'), /with-drop(?!spec)/);
_dragAndDrop.CustomDragLayer.__docgenInfo = (0, _docgenInfo.default)(require('./custom-drag-layer/docgenInfo.json'), /custom-drag-layer(?!spec)/);
var store = new _storybookState.Store({
  dndData: [{
    id: '0',
    name: 'UK'
  }, {
    id: '1',
    name: 'Germany'
  }, {
    id: '2',
    name: 'China'
  }, {
    id: '3',
    name: 'US'
  }]
});

var handleDrag = function handleDrag(originalIndex, newIndex) {
  var dndData = store.get('dndData');
  var sortedItem = dndData.slice(originalIndex);
  dndData.splice(originalIndex, 1);
  dndData.splice(newIndex, 0, sortedItem[0]);
  store.set({
    dndData: dndData
  });
  (0, _addonActions.action)('drag')();
};

var BuildRows = function BuildRows(props) {
  return props.dndData.map(function (row, index) {
    return _react.default.createElement(_table.TableRow, {
      key: row.id,
      uniqueID: row.id,
      index: index
    }, _react.default.createElement(_table.TableCell, null, row.name));
  });
};

function makeStory(name, themeSelector) {
  var component = function component() {
    var autoScroll = (0, _addonKnobs.boolean)('autoScroll', true);
    return _react.default.createElement(_dragAndDrop.DraggableContext, {
      autoScroll: autoScroll,
      onDrag: handleDrag
    }, _react.default.createElement("div", null, _react.default.createElement(_table.Table, {
      tbody: false
    }, _react.default.createElement("thead", null, _react.default.createElement(_table.TableRow, {
      as: "header"
    }, _react.default.createElement(_table.TableHeader, null), _react.default.createElement(_table.TableHeader, null, "Country"))), _react.default.createElement("tbody", null, _react.default.createElement(_storybookState.State, {
      store: store
    }, _react.default.createElement(BuildRows, null))))));
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: _Info.default
    },
    notes: {
      markdown: _notes.default
    }
  };
  return [name, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (0, _react2.storiesOf)('DraggableContext', module).addParameters({
  info: {
    propTablesExclude: [BuildRows, _table.Table, _table.TableHeader, _table.TableRow, _table.TableCell, _storybookState.State],
    propTables: [_dragAndDrop.DraggableContext, _dragAndDrop.WithDrag, _dragAndDrop.WithDrop, _dragAndDrop.CustomDragLayer]
  }
})).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));