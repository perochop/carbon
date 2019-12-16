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

var _ = _interopRequireDefault(require("."));

var _textbox = _interopRequireDefault(require("../../__experimental__/components/textbox"));

var _decimal = _interopRequireDefault(require("../../__experimental__/components/decimal"));

var _select = require("../../__experimental__/components/select");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$addParamet, _storiesOf$addParamet2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /inline-inputs\.component(?!spec)/);
var singleSelectStore = new _storybookState.Store({
  decimalValue: '0.00',
  selectValue: '1'
});

var handleDecimalChange = function handleDecimalChange(ev) {
  singleSelectStore.set({
    decimalValue: ev.target.value.rawValue
  });
};

var handleSelectChange = function handleSelectChange(ev) {
  singleSelectStore.set({
    selectValue: ev.target.value[0].optionValue
  });
};

function makeStory(name, themeSelector) {
  var component = function component() {
    var label = (0, _addonKnobs.text)('label', 'Inline Inputs');
    return _react.default.createElement(_storybookState.State, {
      store: singleSelectStore
    }, function (state) {
      return _react.default.createElement(_.default, {
        label: label
      }, _react.default.createElement(_textbox.default, null), _react.default.createElement(_decimal.default, {
        value: state.decimalValue,
        onChange: handleDecimalChange
      }), _react.default.createElement(_select.Select, {
        value: state.selectValue,
        onChange: handleSelectChange
      }, _react.default.createElement(_select.Option, {
        text: "Amber",
        value: "1"
      }), _react.default.createElement(_select.Option, {
        text: "Black",
        value: "2"
      }), _react.default.createElement(_select.Option, {
        text: "Blue",
        value: "3"
      }), _react.default.createElement(_select.Option, {
        text: "Brown",
        value: "4"
      }), _react.default.createElement(_select.Option, {
        text: "Green",
        value: "5"
      }), _react.default.createElement(_select.Option, {
        text: "Orange",
        value: "6"
      }), _react.default.createElement(_select.Option, {
        text: "Pink",
        value: "7"
      }), _react.default.createElement(_select.Option, {
        text: "Purple",
        value: "8"
      }), _react.default.createElement(_select.Option, {
        text: "Red",
        value: "9"
      }), _react.default.createElement(_select.Option, {
        text: "White",
        value: "10"
      }), _react.default.createElement(_select.Option, {
        text: "Yellow",
        value: "11"
      })));
    });
  };

  var metadata = {
    themeSelector: themeSelector,
    knobs: {
      escapeHTML: false
    }
  };
  return [name, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (0, _react2.storiesOf)('InlineInputs', module).addParameters({
  info: {
    propTables: [_.default],
    propTablesExclude: [_storybookState.State]
  }
})).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));