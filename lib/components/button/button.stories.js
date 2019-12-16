"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

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

var _addonActions = require("@storybook/addon-actions");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _documentation = require("./documentation");

var _ = _interopRequireDefault(require("."));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$add$add$ad, _storiesOf$add$add, _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /button\.component(?!spec)/);

var getIconKnobs = function getIconKnobs() {
  var defaultPosition = _.default.defaultProps.iconPosition;
  var hasIcon = (0, _addonKnobs.boolean)('has icon', false);
  return {
    iconType: hasIcon ? (0, _addonKnobs.select)('iconType', [].concat(_toConsumableArray(_optionsHelper.default.icons), ['']), '') : undefined,
    iconPosition: hasIcon ? (0, _addonKnobs.select)('iconPosition', _toConsumableArray(_optionsHelper.default.buttonIconPositions), defaultPosition) : undefined
  };
};

var getKnobs = function getKnobs(isClassic) {
  var size = (0, _addonKnobs.select)('size', _optionsHelper.default.sizesRestricted, _.default.defaultProps.size);
  var classicProps = {},
      buttonType;

  if (isClassic) {
    classicProps = {
      theme: (0, _addonKnobs.select)('theme', _optionsHelper.default.buttonColors, _.default.defaultProps.theme),
      as: (0, _addonKnobs.select)('as', _optionsHelper.default.themesBinary, _.default.defaultProps.as),
      href: (0, _addonKnobs.text)('href'),
      to: (0, _addonKnobs.text)('to')
    };
  } else {
    buttonType = (0, _addonKnobs.select)('buttonType', _optionsHelper.default.buttonTypes, _.default.defaultProps.as);
  }

  return _objectSpread({
    buttonType: buttonType,
    children: (0, _addonKnobs.text)('children', 'Example Button'),
    disabled: (0, _addonKnobs.boolean)('disabled', _.default.defaultProps.disabled),
    onClick: function onClick(ev) {
      return (0, _addonActions.action)('click')(ev);
    },
    size: size,
    subtext: size === _optionsHelper.default.sizesRestricted[2] ? (0, _addonKnobs.text)('subtext', _.default.defaultProps.subtext) : undefined
  }, classicProps, {}, getIconKnobs());
};

function makeStory(name, themeSelector, isClassic, infotext) {
  var component = function component() {
    var props = getKnobs(isClassic);
    var children = props.children; // eslint-disable-line react/prop-types

    return _react.default.createElement(_.default, props, children);
  };

  var metadata = {
    info: {
      text: infotext
    },
    notes: {
      markdown: _documentation.notes
    },
    themeSelector: themeSelector,
    knobs: {
      escapeHTML: false
    }
  };
  return [name, component, metadata];
}

function makeSiblingStory(name, themeSelector, isClassic) {
  var component = function component() {
    var props = getKnobs(isClassic);
    var children = props.children; // eslint-disable-line react/prop-types

    return _react.default.createElement("div", null, _react.default.createElement(_.default, props, children), _react.default.createElement(_.default, props, children));
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

(_storiesOf$add$add$ad = (_storiesOf$add$add = (_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Button', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector, false, _documentation.Info)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector, true, _documentation.InfoClassic)))).add.apply(_storiesOf$add$add, _toConsumableArray(makeSiblingStory('as a sibling', _themeSelectors.dlsThemeSelector, false)))).add.apply(_storiesOf$add$add$ad, _toConsumableArray(makeSiblingStory('as a sibling classic', _themeSelectors.classicThemeSelector, true)));