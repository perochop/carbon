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

var _preview = _interopRequireDefault(require("./preview.component"));

var _documentation = _interopRequireDefault(require("./documentation"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_preview.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /preview\.component(?!spec)/);

function makeStory(name, themeSelector) {
  var component = function component() {
    var children = (0, _addonKnobs.text)('children', 'Text rendered as children component.');
    var height = (0, _addonKnobs.text)('height');
    var lines = (0, _addonKnobs.number)('lines', _preview.default.defaultProps.lines);
    var loading = (0, _addonKnobs.boolean)('loading', true);
    var width = (0, _addonKnobs.text)('width');
    return _react.default.createElement(_preview.default, {
      height: height,
      lines: lines,
      loading: loading,
      width: width
    }, children);
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: _documentation.default,
      propTables: [_preview.default]
    }
  };
  return [name, component, metadata];
}

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Preview', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));