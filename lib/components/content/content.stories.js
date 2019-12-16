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

var _content = _interopRequireDefault(require("./content.js"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_content.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /content(?!spec)/);

function makeStory(name, themeSelector) {
  var component = function component() {
    var children = (0, _addonKnobs.text)('children', 'An example of some content.');
    var title = (0, _addonKnobs.text)('title', 'Content Component');
    var knobAs = (0, _addonKnobs.select)('as', _optionsHelper.default.themesBinary, _content.default.defaultProps.as);
    var inline = (0, _addonKnobs.boolean)('inline', _content.default.defaultProps.inline);
    var align = (0, _addonKnobs.select)('align', _optionsHelper.default.alignFull, _content.default.defaultProps.align);
    var titleWidth = inline ? (0, _addonKnobs.text)('titleWidth', '') : undefined;
    var bodyFullWidth = (0, _addonKnobs.boolean)('bodyFullWidth', _content.default.defaultProps.bodyFullWidth);
    return _react.default.createElement(_content.default, {
      title: title,
      as: knobAs,
      inline: inline,
      align: align,
      titleWidth: titleWidth,
      bodyFullWidth: bodyFullWidth
    }, children);
  };

  var metadata = {
    themeSelector: themeSelector,
    notes: {
      markdown: _documentation.default
    }
  };
  return [name, component, metadata];
}

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Content', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));