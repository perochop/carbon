"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _ = _interopRequireDefault(require("."));

var _content = _interopRequireDefault(require("../content"));

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _storiesOf$addParamet;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /tile\.component(?!spec)/);

function makeStory(name, themeSelector) {
  var component = function component() {
    var percentageOpts = {
      range: true,
      min: 0,
      max: 100,
      step: 1
    };
    var tileProps = {
      as: (0, _addonKnobs.select)('as', _optionsHelper.default.tileThemes, _.default.defaultProps.as, 'Tile'),
      orientation: (0, _addonKnobs.select)('orientation', _optionsHelper.default.orientation, _.default.defaultProps.orientation, 'Tile'),
      padding: (0, _addonKnobs.select)('padding', _optionsHelper.default.sizesTile, _.default.defaultProps.padding, 'Tile'),
      pixelWidth: (0, _addonKnobs.number)('pixelWidth', 0, _objectSpread({}, percentageOpts, {
        max: 2000
      }), 'Tile'),
      width: (0, _addonKnobs.number)('width', 0, percentageOpts, 'Tile')
    };
    var contentOneProps = {
      key: 'one',
      children: (0, _addonKnobs.text)('contentOneChildren', 'Test Body One', 'TileContent One'),
      title: (0, _addonKnobs.text)('contentOneTitle', 'Test Title One', 'TileContent One'),
      width: (0, _addonKnobs.number)('contentOneWidth', 0, percentageOpts, 'TileContent One')
    };
    var contentTwoProps = {
      key: 'two',
      children: (0, _addonKnobs.text)('contentTwoChildren', 'Test Body Two', 'TileContent Two'),
      title: (0, _addonKnobs.text)('contentTwoTitle', 'Test Title Two', 'TileContent Two'),
      width: (0, _addonKnobs.number)('contentTwoWidth', 0, percentageOpts, 'TileContent Two')
    };
    var contentThreeProps = {
      key: 'three',
      children: (0, _addonKnobs.text)('contentThreeChildren', 'Test Body Three', 'TileContent Three'),
      title: (0, _addonKnobs.text)('contentThreeTitle', 'Test Title Three', 'TileContent Three'),
      width: (0, _addonKnobs.number)('contentThreeWidth', 0, percentageOpts, 'TileContent Three')
    };
    var tileContent = [contentOneProps.children ? _react.default.createElement(_content.default, contentOneProps) : undefined, contentTwoProps.children ? _react.default.createElement(_content.default, contentTwoProps) : undefined, contentThreeProps.children ? _react.default.createElement(_content.default, contentThreeProps) : undefined];
    return _react.default.createElement(_.default, tileProps, tileContent);
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

(_storiesOf$addParamet = (0, _react2.storiesOf)('Tile', module).addParameters({
  info: {
    propTablesExclude: [_content.default],
    text: _documentation.info
  },
  knobs: {
    escapeHTML: false
  },
  notes: {
    markdown: _documentation.notes
  }
})).add.apply(_storiesOf$addParamet, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)));