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

var _stepSequence = _interopRequireDefault(require("./step-sequence.component"));

var _stepSequenceItem = _interopRequireDefault(require("./step-sequence-item/step-sequence-item.component"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_stepSequence.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /step-sequence\.component(?!spec)/);
_stepSequenceItem.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /step-sequence-item\.component(?!spec)/);

function makeStory(name, themeSelector) {
  var component = function component() {
    var orientation = (0, _addonKnobs.select)('orientation', _optionsHelper.default.orientation, _stepSequence.default.defaultProps.orientation);
    return _react.default.createElement(_stepSequence.default, {
      orientation: orientation
    }, _react.default.createElement(_stepSequenceItem.default, {
      "aria-label": "Step 1 of 5",
      hiddenCompleteLabel: "Complete",
      hiddenCurrentLabel: "Current",
      indicator: "1",
      status: "complete"
    }, "Name"), _react.default.createElement(_stepSequenceItem.default, {
      "aria-label": "Step 2 of 5",
      hiddenCompleteLabel: "Complete",
      hiddenCurrentLabel: "Current",
      indicator: "2",
      status: "complete"
    }, "Delivery Address"), _react.default.createElement(_stepSequenceItem.default, {
      "aria-label": "Step 3 of 5",
      hiddenCompleteLabel: "Complete",
      hiddenCurrentLabel: "Current",
      indicator: "3",
      status: "current"
    }, "Delivery Details"), _react.default.createElement(_stepSequenceItem.default, {
      "aria-label": "Step 4 of 5",
      hiddenCompleteLabel: "Complete",
      hiddenCurrentLabel: "Current",
      indicator: "4",
      status: "incomplete"
    }, "Payment"), _react.default.createElement(_stepSequenceItem.default, {
      "aria-label": "Step 5 of 5",
      hiddenCompleteLabel: "Complete",
      hiddenCurrentLabel: "Current",
      indicator: "5",
      status: "incomplete"
    }, "Confirm"));
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Step Sequence', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));