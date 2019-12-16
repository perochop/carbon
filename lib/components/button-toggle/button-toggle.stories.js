"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

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

var _buttonToggle = _interopRequireDefault(require("./button-toggle.component"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_buttonToggle.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /button-toggle\.component(?!spec)/);

function makeStory(name, themeSelector) {
  var component = function component() {
    var children = (0, _addonKnobs.text)('children', 'Option');
    var buttonIcon = (0, _addonKnobs.select)('buttonIcon', [null].concat(_toConsumableArray(_optionsHelper.default.icons)));
    var buttonIconSize = (0, _addonKnobs.select)('buttonIconSize', _optionsHelper.default.sizesBinary, _buttonToggle.default.defaultProps.buttonIconSize);
    var size = (0, _addonKnobs.select)('size', _optionsHelper.default.sizesBinary, _buttonToggle.default.defaultProps.size);
    var disabled = (0, _addonKnobs.boolean)('disabled', false);
    var grouped = (0, _addonKnobs.boolean)('grouped', false);

    var onChange = function onChange(ev) {
      (0, _addonActions.action)('onChange')(ev);
    };

    return [_react.default.createElement(_buttonToggle.default, {
      name: "new-button-toggle",
      size: size,
      buttonIcon: buttonIcon,
      buttonIconSize: buttonIconSize,
      disabled: disabled,
      grouped: grouped,
      onChange: onChange,
      key: "button-toggle-1"
    }, children), _react.default.createElement(_buttonToggle.default, {
      name: "new-button-toggle",
      size: size,
      buttonIcon: buttonIcon,
      buttonIconSize: buttonIconSize,
      disabled: disabled,
      grouped: grouped,
      onChange: onChange,
      key: "button-toggle-2"
    }, children), _react.default.createElement(_buttonToggle.default, {
      name: "new-button-toggle",
      size: size,
      buttonIcon: buttonIcon,
      buttonIconSize: buttonIconSize,
      disabled: disabled,
      grouped: grouped,
      onChange: onChange,
      key: "button-toggle-3"
    }, children)];
  };

  var metadata = {
    themeSelector: themeSelector,
    notes: {
      markdown: _documentation.default
    }
  };
  return [name, component, metadata];
}

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Button Toggle', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));