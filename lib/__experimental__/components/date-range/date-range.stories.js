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

var _documentation = require("./documentation");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _dateRange = _interopRequireDefault(require("./date-range.component"));

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_dateRange.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /date-range\.component(?!spec)/);
var store = new _storybookState.Store({
  value: ['2016-10-01', '2016-10-30']
});

var handleChange = function handleChange(evt) {
  var newValue = [evt.target.value[0].rawValue, evt.target.value[1].rawValue];
  store.set({
    value: newValue
  });
  (0, _addonActions.action)('changed')(evt.target.value);
};

function makeStory(name, themeSelector) {
  var component = function component() {
    var startLabel = (0, _addonKnobs.text)('startLabel', '');
    var endLabel = (0, _addonKnobs.text)('endLabel', '');
    var startMessage = (0, _addonKnobs.text)('startMessage', 'Start date must not be later than the end date');
    var endMessage = (0, _addonKnobs.text)('endMessage', 'End date cannot be earlier than the start date');
    var labelsInline = startLabel || endLabel ? (0, _addonKnobs.boolean)('labelsInline', false) : undefined;
    return _react.default.createElement(_storybookState.State, {
      store: store
    }, _react.default.createElement(_dateRange.default, {
      onChange: handleChange,
      endLabel: endLabel,
      value: store.get('value'),
      startLabel: startLabel,
      startMessage: startMessage,
      endMessage: endMessage,
      labelsInline: labelsInline,
      onBlur: function onBlur(ev) {
        return (0, _addonActions.action)('blur')(ev);
      }
    }));
  };

  var metadata = {
    themeSelector: themeSelector,
    notes: {
      markdown: _documentation.notes
    },
    info: {
      text: _documentation.info,
      propTablesExclude: [_storybookState.State]
    }
  };
  return [name, component, metadata];
}

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Experimental/Date Range', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));