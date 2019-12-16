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

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _documentation = _interopRequireDefault(require("./documentation"));

var _message = _interopRequireDefault(require("./message.component"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_message.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /message\.component(?!spec)/);

function makeStory(name, themeSelector) {
  var component = function component() {
    var variant = (0, _addonKnobs.select)('type', _optionsHelper.default.messages, _message.default.defaultProps.variant);
    var open = (0, _addonKnobs.boolean)('open', _message.default.defaultProps.open);
    var title = (0, _addonKnobs.text)('title');
    var id = (0, _addonKnobs.text)('id', 'custom-id');
    var transparent = (0, _addonKnobs.boolean)('transparent', _message.default.defaultProps.transparent);
    var children = (0, _addonKnobs.text)('children', 'This is some information from the Message Component.'); // Allows onDismiss knob to be a boolean, but pass a function to component

    var onDismiss = (0, _addonKnobs.boolean)('onDismiss', true);
    var testOnDismiss = onDismiss ? function (evt) {
      (0, _addonActions.action)('click')(evt);
    } : undefined;
    return _react.default.createElement(_message.default, {
      variant: variant,
      open: open,
      title: title,
      transparent: transparent,
      onDismiss: testOnDismiss,
      id: id
    }, children);
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

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Message', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));