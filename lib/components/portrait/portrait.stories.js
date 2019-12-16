"use strict";

require("core-js/modules/es.object.assign");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _styledComponents = require("styled-components");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _portrait = _interopRequireDefault(require("./portrait.component"));

var _documentation = require("./documentation");

var _classic = _interopRequireDefault(require("../../style/themes/classic"));

var _medium = _interopRequireDefault(require("../../style/themes/medium"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_portrait.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /portrait\.component(?!spec)/);

function commonKnobs() {
  var source = (0, _addonKnobs.select)('source', ['src', 'gravatar'], 'src');
  return {
    alt: (0, _addonKnobs.text)('alt', _portrait.default.defaultProps.alt),
    darkBackground: (0, _addonKnobs.boolean)('darkBackground', _portrait.default.defaultProps.darkBackground),
    gravatar: source === 'gravatar' ? (0, _addonKnobs.text)('gravatar') : undefined,
    src: source === 'src' ? (0, _addonKnobs.text)('src') : undefined,
    initials: (0, _addonKnobs.text)('initials', 'AZ')
  };
}

function classicKnobs() {
  return {
    size: (0, _addonKnobs.select)('size', _optionsHelper.default.sizesFull, 'medium'),
    shape: (0, _addonKnobs.select)('shape', _optionsHelper.default.shapesVaried, 'standard')
  };
}

function dlsKnobs() {
  return {
    size: (0, _addonKnobs.select)('size', _optionsHelper.default.sizesPortrait, 'M'),
    shape: (0, _addonKnobs.select)('shape', _optionsHelper.default.shapesPortrait, 'square')
  };
}

(0, _react2.storiesOf)('Portrait', module).add('classic', function () {
  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: _classic.default
  }, _react.default.createElement(_portrait.default, _extends({}, commonKnobs(), classicKnobs())));
}, {
  themeSelector: _themeSelectors.classicThemeSelector,
  info: {
    text: _documentation.info,
    propTablesExclude: [_styledComponents.ThemeProvider]
  },
  notes: {
    markdown: _documentation.notes
  },
  knobs: {
    escapeHTML: false
  }
}).add('default', function () {
  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: _medium.default
  }, _react.default.createElement(_portrait.default, _extends({}, commonKnobs(), dlsKnobs())));
}, {
  themeSelector: _themeSelectors.dlsThemeSelector,
  info: {
    text: _documentation.info,
    propTablesExclude: [_styledComponents.ThemeProvider]
  },
  notes: {
    markdown: _documentation.notes
  },
  knobs: {
    escapeHTML: false
  }
});