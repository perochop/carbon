"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _notes = _interopRequireDefault(require("./notes.md"));

var _animatedMenuButton = _interopRequireDefault(require("./animated-menu-button"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _row = require("../row/row");

var _link = _interopRequireDefault(require("../link"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$addParamet, _storiesOf$addParamet2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

_animatedMenuButton.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /animated-menu-button(?!spec)/);

var Container = _styledComponents.default.div(_templateObject());

var Wrapper = function Wrapper(_ref) {
  var direction = _ref.direction,
      label = _ref.label,
      size = _ref.size,
      children = _ref.children;

  if (direction === _optionsHelper.default.alignBinary[0]) {
    return _react.default.createElement(Container, null, _react.default.createElement(_animatedMenuButton.default, {
      direction: direction,
      label: label,
      size: size
    }, children));
  }

  return _react.default.createElement(_animatedMenuButton.default, {
    direction: direction,
    label: label,
    size: size
  }, children);
};

Wrapper.propTypes = _objectSpread({}, _animatedMenuButton.default.propTypes);
Wrapper.displayName = 'AnimatedMenuButton';

function makeStory(name, themeSelector) {
  var component = function component() {
    var direction = (0, _addonKnobs.select)('direction', _optionsHelper.default.alignBinary, _optionsHelper.default.alignBinary[1]);
    var label = (0, _addonKnobs.text)('label', '');
    var size = (0, _addonKnobs.select)('size', _optionsHelper.default.sizesFull, _optionsHelper.default.sizesFull[3]);
    return _react.default.createElement(Wrapper, {
      direction: direction,
      label: label,
      size: size
    }, _react.default.createElement(_row.Row, null, _react.default.createElement("div", null, _react.default.createElement("h2", null, "1st Category"), _react.default.createElement("p", null, _react.default.createElement(_link.default, null, "First Option")), _react.default.createElement("p", null, _react.default.createElement(_link.default, null, "Another Option"))), _react.default.createElement("div", null, _react.default.createElement("h2", null, "2nd Category"), _react.default.createElement("p", null, _react.default.createElement(_link.default, null, "First Option")), _react.default.createElement("p", null, _react.default.createElement(_link.default, null, "Another Option"))), _react.default.createElement("div", null, _react.default.createElement("h2", null, "3rd Category"), _react.default.createElement("p", null, _react.default.createElement(_link.default, null, "First Option")), _react.default.createElement("p", null, _react.default.createElement(_link.default, null, "Another Option")))));
  };

  var metadata = {
    themeSelector: themeSelector,
    notes: {
      markdown: _notes.default
    }
  };
  return [name, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (0, _react2.storiesOf)('Animated Menu Button', module).addParameters({
  info: {
    propTablesExclude: [_row.Row, _link.default, Wrapper],
    propTables: [_animatedMenuButton.default]
  }
})).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));