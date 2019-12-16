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

var _addonKnobs = require("@storybook/addon-knobs");

var _storybookState = require("@sambego/storybook-state");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _xhrMock = require("../../../demo/xhr-mock");

var _tableAjax = require("./table-ajax");

var _button = _interopRequireDefault(require("../button"));

var _multiActionButton = _interopRequireDefault(require("../multi-action-button"));

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$addParamet, _storiesOf$addParamet2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_tableAjax.TableAjax.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /table-ajax(?!spec)/);
var store = new _storybookState.Store({
  sortOrder: 'asc',
  sortedColumn: '',
  currentPage: '1',
  countryList: [],
  children: undefined
});

var buildRows = function buildRows() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_tableAjax.TableRow, {
    key: "header",
    as: "header"
  }, _react.default.createElement(_tableAjax.TableHeader, {
    sortable: true,
    name: "name",
    scope: "col"
  }, "Country"), _react.default.createElement(_tableAjax.TableHeader, {
    scope: "col"
  }, "Code")), store.get('countryList').map(function (row) {
    return _react.default.createElement(_tableAjax.TableRow, {
      key: row.id,
      uniqueID: row.id
    }, _react.default.createElement(_tableAjax.TableCell, null, row.name), _react.default.createElement(_tableAjax.TableCell, null, row.value));
  }));
};

var handleChange = function handleChange(data) {
  store.set({
    countryList: data.data[0].items
  });
  setTimeout(function () {
    store.set({
      children: buildRows()
    });
  }, 500);
};

function makeStory(name, themeSelector) {
  var component = function component() {
    (0, _xhrMock.enableMock)();
    var pageSize = (0, _addonKnobs.text)('pageSize', '5');
    var paginate = (0, _addonKnobs.boolean)('paginate', _tableAjax.TableAjax.defaultProps.paginate);
    var customHeaders = (0, _addonKnobs.object)('customHeaders', {
      Accept: 'application/json'
    });
    return _react.default.createElement(_storybookState.State, {
      store: store
    }, _react.default.createElement(_tableAjax.TableAjax, {
      actions: {
        delete: {
          icon: 'bin'
        },
        settings: {
          icon: 'settings'
        }
      },
      actionToolbarChildren: function actionToolbarChildren(context) {
        return [_react.default.createElement(_button.default, {
          disabled: context.disabled,
          key: "single-action"
        }, "Test Action"), _react.default.createElement(_multiActionButton.default, {
          text: "Actions",
          disabled: context.disabled,
          key: "multi-actions"
        }, _react.default.createElement(_button.default, null, "foo"), _react.default.createElement(_button.default, null, "bar"), _react.default.createElement(_button.default, null, "qux"))];
      },
      path: "/countries",
      pageSize: pageSize,
      paginate: paginate,
      getCustomHeaders: function getCustomHeaders() {
        return customHeaders;
      },
      onChange: function onChange(data) {
        return handleChange(data);
      }
    }));
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (0, _react2.storiesOf)('Table Ajax', module).addParameters({
  info: {
    text: _documentation.info,
    propTablesExclude: [_storybookState.State]
  },
  notes: {
    markdown: _documentation.notes
  },
  knobs: {
    escapeHTML: false
  }
})).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));