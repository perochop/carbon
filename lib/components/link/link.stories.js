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

var _documentation = require("./documentation");

var _link = _interopRequireDefault(require("./link.component"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_link.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /link\.component(?!spec)/);

function makeStory(name, themeSelector) {
  var component = function component() {
    var children = (0, _addonKnobs.text)('children', 'Link');
    var disabled = (0, _addonKnobs.boolean)('disabled', false);
    var href = (0, _addonKnobs.text)('href');
    var icon = (0, _addonKnobs.select)('icon', [''].concat(_toConsumableArray(_optionsHelper.default.icons)), '');
    var iconAlign = (0, _addonKnobs.select)('iconAlign', _optionsHelper.default.alignBinary, _link.default.defaultProps.iconAlign);
    var tabbable = (0, _addonKnobs.boolean)('tabbable', _link.default.defaultProps.tabbable);
    var to = (0, _addonKnobs.text)('to', '');
    var tooltipMessage = icon ? (0, _addonKnobs.text)('tooltipMessage', '') : undefined;
    var tooltipPosition = tooltipMessage ? (0, _addonKnobs.select)('tooltipPosition', _optionsHelper.default.positions, _optionsHelper.default.positions[0]) : undefined;
    var tooltipAlign = tooltipMessage ? (0, _addonKnobs.select)('tooltipAlign', _optionsHelper.default.alignAroundEdges, _optionsHelper.default.alignAroundEdges[0]) : undefined;
    var hasOnClick = (0, _addonKnobs.boolean)('onClick', false);
    var onClick = hasOnClick ? (0, _addonActions.action)('click') : undefined;
    return _react.default.createElement(_link.default, {
      disabled: disabled,
      href: href,
      icon: icon,
      iconAlign: iconAlign,
      tabbable: tabbable,
      to: to,
      tooltipMessage: tooltipMessage,
      tooltipPosition: tooltipPosition,
      tooltipAlign: tooltipAlign,
      onClick: onClick
    }, children);
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: _documentation.Info
    },
    notes: {
      markdown: _documentation.notes
    },
    knobs: {
      escapeHTML: false
    }
  };
  return [name, component, metadata];
}

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Link', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));