"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _storybookState = require("@sambego/storybook-state");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _ = require(".");

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

var _storiesOf$addParamet, _storiesOf$addParamet2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_.SimpleColorPicker.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /simple-color-picker\.component(?!spec)/);
var store = new _storybookState.Store({
  selectedColor: null
});

var onChange = function onChange(e) {
  var value = e.target.value;
  store.set({
    selectedColor: value
  });
  (0, _addonActions.action)("Selected - ".concat(value))(e);
};

function makeStory(storyName, themeSelector) {
  var component = function component() {
    var name = (0, _addonKnobs.text)('name', 'basicPicker');
    var legend = (0, _addonKnobs.text)('legend', 'Pick a colour');
    var demoColors = [{
      color: '#00A376',
      label: 'green'
    }, {
      color: '#0073C1',
      label: 'blue'
    }, {
      color: '#582C83',
      label: 'purple'
    }, {
      color: '#E96400',
      label: 'orange'
    }, {
      color: '#99ADB6',
      label: 'gray'
    }, {
      color: '#C7384F',
      label: 'flush mahogany'
    }, {
      color: '#004500',
      label: 'dark green'
    }, {
      color: '#FFB500',
      label: 'yellow'
    }, {
      color: '#335C6D',
      label: 'dark blue'
    }, {
      color: '#00DC00',
      label: 'light blue'
    }];
    var availableColors = (0, _addonKnobs.array)('availableColors', demoColors, '/');
    return _react.default.createElement(_storybookState.State, {
      store: store
    }, _react.default.createElement(_.SimpleColorPicker, {
      name: name,
      legend: legend,
      onChange: onChange,
      onBlur: function onBlur(ev) {
        return (0, _addonActions.action)('Blur')(ev);
      }
    }, availableColors.map(function (_ref) {
      var color = _ref.color,
          label = _ref.label;
      return _react.default.createElement(_.SimpleColor, {
        value: color,
        key: color,
        "aria-label": label,
        id: color,
        defaultChecked: color === '#582C83'
      });
    })));
  };

  var metadata = {
    themeSelector: themeSelector,
    notes: {
      markdown: _documentation.notes
    },
    knobs: {
      escapeHTML: false
    }
  };
  return [storyName, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (0, _react2.storiesOf)('Experimental/Simple Color Picker', module).addParameters({
  info: {
    propTablesExclude: [_storybookState.State],
    text: _documentation.info
  }
})).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));