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

var _documentation = _interopRequireDefault(require("./documentation"));

var _help = _interopRequireDefault(require("./help.component"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_help.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /help\.component(?!spec)/);

function makeStory(name, themeSelector) {
  var component = function component() {
    var children = (0, _addonKnobs.text)('children', 'This is help text');
    var tooltipPosition = children ? (0, _addonKnobs.select)('tooltipPosition', _optionsHelper.default.positions, _help.default.defaultProps.tooltipPosition) : undefined;
    var tooltipAlign = children ? (0, _addonKnobs.select)('tooltipAlign', _optionsHelper.default.alignAroundEdges, _help.default.defaultProps.tooltipAlign) : undefined;
    var href = (0, _addonKnobs.text)('href', '');
    return _react.default.createElement(_help.default, {
      tooltipPosition: tooltipPosition,
      tooltipAlign: tooltipAlign,
      href: href
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

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Help', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));