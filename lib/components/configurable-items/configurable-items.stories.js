"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _storybookState = require("@sambego/storybook-state");

var _addonActions = require("@storybook/addon-actions");

var _lodash = require("lodash");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _documentation = _interopRequireDefault(require("./documentation"));

var _ = require(".");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var ConfigurableItemsWrapper = function ConfigurableItemsWrapper(props) {
  return _react.default.createElement(_.ConfigurableItems, props);
};

ConfigurableItemsWrapper.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /configurable-items\.component(?!spec)/);
_.ConfigurableItemRow.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /configurable-item-row\.component(?!spec)/);
var defaultConfigurableItemsData = [{
  enabled: true,
  locked: true,
  name: 'test 1',
  key: '1'
}, {
  enabled: true,
  locked: false,
  name: 'test 2',
  key: '2'
}, {
  enabled: false,
  locked: false,
  name: 'test 3',
  key: '3'
}];
var store = new _storybookState.Store({
  configurableItemsData: (0, _lodash.cloneDeep)(defaultConfigurableItemsData)
});

var handleDrag = function handleDrag(draggedIndex, hoveredIndex) {
  var configurableItemsData = store.get('configurableItemsData');
  var draggedItem = configurableItemsData[draggedIndex];
  configurableItemsData[draggedIndex] = configurableItemsData[hoveredIndex];
  configurableItemsData[hoveredIndex] = draggedItem;
  store.set('configurableItemsData', configurableItemsData);
  (0, _addonActions.action)('dragged')();
};

var handleChange = function handleChange(rowIndex) {
  var configurableItemsData = store.get('configurableItemsData');
  configurableItemsData[rowIndex].enabled = !configurableItemsData[rowIndex].enabled;
  store.set({
    configurableItemsData: configurableItemsData
  });
  (0, _addonActions.action)('changed')();
};

var handleSave = function handleSave(event) {
  event.persist();
  (0, _addonActions.action)('saved')();
};

var handleReset = function handleReset() {
  store.set({
    configurableItemsData: (0, _lodash.cloneDeep)(defaultConfigurableItemsData)
  });
  (0, _addonActions.action)('reset')();
};

var rows = function rows(data) {
  return data.map(function (column, rowIndex) {
    return _react.default.createElement(_.ConfigurableItemRow, {
      enabled: column.enabled,
      key: column.key,
      locked: column.locked,
      name: column.name,
      rowIndex: rowIndex,
      onChange: function onChange() {
        return handleChange(rowIndex);
      }
    });
  });
};

function makeStory(name, themeSelector) {
  var component = function component() {
    return _react.default.createElement(ConfigurableItemsWrapper, {
      onDrag: handleDrag,
      onCancel: (0, _addonActions.action)('canceled'),
      onReset: handleReset,
      onSave: handleSave
    }, _react.default.createElement(_storybookState.State, {
      store: store
    }, function (state) {
      return [rows(state.configurableItemsData)];
    }));
  };

  var metadata = {
    themeSelector: themeSelector,
    notes: {
      markdown: _documentation.default
    },
    info: {
      propTablesExclude: [_storybookState.State]
    }
  };
  return [name, component, metadata];
}

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Configurable Items', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));