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

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _ = _interopRequireDefault(require("."));

var _button = _interopRequireDefault(require("../button"));

var _spinner = _interopRequireDefault(require("../../__deprecated__/components/spinner"));

var _documentation = require("./documentation");

var _documentation2 = require("../../__deprecated__/components/spinner/documentation");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$add$add$ad, _storiesOf$add$add, _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /loader\.component(?!spec)/);
_spinner.default.__docgenInfo = (0, _docgenInfo.default)(require('../../__deprecated__/components/spinner/docgenInfo.json'), /spinner\.component(?!spec)/);
var styles = {
  textAlign: 'left'
};

function makeStory(name, themeSelector) {
  var component = function component() {
    var size = (0, _addonKnobs.select)('size', _optionsHelper.default.sizesBinary, _.default.defaultProps.size);
    var isInsideButton = (0, _addonKnobs.boolean)('isInsideButton', false);
    var isActive = isInsideButton ? (0, _addonKnobs.boolean)('isActive', _.default.defaultProps.isActive) : undefined;

    if (isInsideButton) {
      return _react.default.createElement(_button.default, {
        buttonType: "primary",
        disabled: !isActive
      }, _react.default.createElement(_.default, {
        size: size,
        isInsideButton: isInsideButton,
        isActive: isActive
      }));
    }

    return _react.default.createElement(_.default, {
      size: size,
      style: styles
    });
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: _documentation.info,
      propTablesExclude: [_button.default]
    },
    notes: {
      markdown: _documentation.notes
    }
  };
  return [name, component, metadata];
}

function makeLegacySpinnerStory(name, themeSelector) {
  var component = function component() {
    var type = (0, _addonKnobs.select)('as', _optionsHelper.default.colors, _spinner.default.defaultProps.as);
    var size = (0, _addonKnobs.select)('size', _optionsHelper.default.sizesFull, _spinner.default.defaultProps.size);
    return _react.default.createElement(_spinner.default, {
      as: type,
      size: size
    });
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: _documentation2.infoSpinner
    },
    notes: {
      markdown: _documentation2.notesSpinner
    }
  };
  return [name, component, metadata];
}

(_storiesOf$add$add$ad = (_storiesOf$add$add = (_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Loader', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)))).add.apply(_storiesOf$add$add, _toConsumableArray(makeLegacySpinnerStory('legacy spinner', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add$add$ad, _toConsumableArray(makeLegacySpinnerStory('legacy spinner classic', _themeSelectors.classicThemeSelector)));