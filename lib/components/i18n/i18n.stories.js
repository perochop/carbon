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

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _documentation = require("./documentation");

var _i18n = _interopRequireDefault(require("./i18n"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_i18n.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /i18n\.js(?!spec)/); // eslint-disable-next-line dot-notation

_i18nJs.default.translations.en['my'] = {
  example: '# My __example__ translation.'
};

function makeStory(name, themeSelector) {
  var component = function component() {
    var markdown = (0, _addonKnobs.boolean)('markdown', true);
    var inline = markdown ? (0, _addonKnobs.boolean)('inline', _i18n.default.defaultProps.inline) : undefined;
    var scope = (0, _addonKnobs.text)('scope', 'my.example');
    return _react.default.createElement(_i18n.default, {
      markdown: markdown,
      inline: inline,
      scope: scope
    });
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

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('I18nComponent', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));