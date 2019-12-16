"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _styledComponents = require("styled-components");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _documentation = require("./documentation");

var _ = _interopRequireDefault(require("."));

var _classic = _interopRequireDefault(require("../../style/themes/classic"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /icon(?!spec)/);

function commonKnobs() {
  var tooltipMessage = (0, _addonKnobs.text)('tooltipMessage', '');
  return {
    tooltipMessage: tooltipMessage,
    type: (0, _addonKnobs.select)('type', _optionsHelper.default.icons, 'add'),
    tooltipPosition: tooltipMessage ? (0, _addonKnobs.select)('tooltipPosition', _optionsHelper.default.positions, 'top') : undefined,
    tooltipAlign: tooltipMessage ? (0, _addonKnobs.select)('tooltipAlign', _optionsHelper.default.alignAroundEdges, 'top') : undefined
  };
}

function classicKnobs() {
  var bgTheme = (0, _addonKnobs.select)('bgTheme', [].concat(_toConsumableArray(_optionsHelper.default.colors), ['']), '');
  return {
    bgTheme: bgTheme,
    bgSize: bgTheme !== '' ? (0, _addonKnobs.select)('bgSize', _optionsHelper.default.sizesRestricted, _.default.defaultProps.bgSize) : undefined,
    bgShape: bgTheme !== '' ? (0, _addonKnobs.select)('bgShape', _optionsHelper.default.shapes, _optionsHelper.default.shapes[0]) : undefined
  };
}

function dlsKnobs() {
  var bgTheme = (0, _addonKnobs.select)('bgTheme', _toConsumableArray(_optionsHelper.default.iconBackgrounds), 'none');
  var fontSize = (0, _addonKnobs.select)('fontSize', _optionsHelper.default.sizesBinary, _.default.defaultProps.fontSize);
  var canSizeBg = bgTheme !== 'none' && fontSize !== ' large';
  return {
    bgTheme: bgTheme,
    fontSize: fontSize,
    bgSize: canSizeBg ? (0, _addonKnobs.select)('bgSize', _optionsHelper.default.sizesRestricted, _.default.defaultProps.bgSize) : undefined,
    bgShape: bgTheme !== 'none' ? (0, _addonKnobs.select)('bgShape', _optionsHelper.default.shapes, _optionsHelper.default.shapes[0]) : undefined,
    iconColor: bgTheme === 'none' ? (0, _addonKnobs.select)('iconColor', _toConsumableArray(_optionsHelper.default.iconColors), _optionsHelper.default.iconColors[0]) : undefined,
    disabled: (0, _addonKnobs.boolean)('disabled', _.default.defaultProps.disabled)
  };
}

(0, _react2.storiesOf)('Icon', module).add('classic', function () {
  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: _classic.default
  }, _react.default.createElement(_.default, _extends({}, commonKnobs(), classicKnobs())));
}, {
  themeSelector: _themeSelectors.classicThemeSelector,
  info: {
    text: _documentation.Info
  },
  notes: {
    markdown: _documentation.notes
  },
  knobs: {
    escapeHTML: false
  }
}).add('default', function () {
  var props = dlsKnobs();
  if (props.iconColor === 'on-dark-background') props.bgTheme = 'info';
  return _react.default.createElement(_.default, _extends({}, commonKnobs(), props));
}, {
  themeSelector: _themeSelectors.dlsThemeSelector,
  info: {
    text: _documentation.Info
  },
  notes: {
    markdown: _documentation.notes
  },
  knobs: {
    escapeHTML: false
  }
});