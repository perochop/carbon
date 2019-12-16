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

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _stepSequenceItem = _interopRequireDefault(require("./step-sequence-item.component"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper/options-helper"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function makeStory(name, themeSelector) {
  var component = function component() {
    var indicator = (0, _addonKnobs.text)('indicator', '1');
    var status = (0, _addonKnobs.select)('status', _optionsHelper.default.steps, _stepSequenceItem.default.defaultProps.status);
    var hiddenCompleteLabel = (0, _addonKnobs.text)('hiddenCompleteLabel');
    var hiddenCurrentLabel = (0, _addonKnobs.text)('hiddenCurrentLabel');
    var ariaLabel = (0, _addonKnobs.text)('ariaLabel', 'Step 1 of 5');
    var children = (0, _addonKnobs.text)('children', 'Step Label');
    return _react.default.createElement(_stepSequenceItem.default, {
      "aria-label": ariaLabel,
      indicator: indicator,
      status: status,
      hiddenCompleteLabel: hiddenCompleteLabel,
      hiddenCurrentLabel: hiddenCurrentLabel
    }, children);
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Step Sequence Item', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));