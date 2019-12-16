"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.fill");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _pill = _interopRequireDefault(require("./pill.component"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _styleHelper = require("../../utils/helpers/style-helper");

var _classic = _interopRequireDefault(require("../../style/themes/classic"));

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_pill.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /pill\.component(?!spec)/);

var getStatusKnobs = function getStatusKnobs() {
  var pillRole = (0, _addonKnobs.select)('pillRole', _toConsumableArray(_optionsHelper.default.pillRoles), 'tag');
  return {
    pillRole: pillRole,
    colorVariant: pillRole === 'status' ? (0, _addonKnobs.select)('colorVariant', [].concat(_toConsumableArray(_optionsHelper.default.pillColors), [_optionsHelper.default.colors[7]]), _optionsHelper.default.pillColors[0]) : null
  };
};

var getKnobs = function getKnobs(theme) {
  var knobs = {
    children: (0, _addonKnobs.text)('children', 'Pill'),
    fill: (0, _addonKnobs.boolean)('fill', _pill.default.defaultProps.fill),
    onDelete: (0, _addonKnobs.boolean)('onDelete', false),
    theme: theme,
    size: (0, _addonKnobs.select)('size', _optionsHelper.default.pillSizesRestricted, _pill.default.defaultProps.size)
  };

  if (theme && (0, _styleHelper.isClassic)(theme)) {
    knobs.as = (0, _addonKnobs.select)('as', [].concat(_toConsumableArray(_optionsHelper.default.colors), ['disabled']), _pill.default.defaultProps.as);
  } else {
    Object.assign(knobs, getStatusKnobs());
  }

  return knobs;
};

(0, _react2.storiesOf)('Pill', module).add('classic', function () {
  var _getKnobs = getKnobs(_classic.default),
      children = _getKnobs.children,
      as = _getKnobs.as,
      fill = _getKnobs.fill,
      onDelete = _getKnobs.onDelete,
      size = _getKnobs.size;

  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: _classic.default
  }, _react.default.createElement(_pill.default, {
    as: as,
    fill: fill,
    onDelete: onDelete ? (0, _addonActions.action)('delete') : null,
    size: size
  }, children));
}, {
  themeSelector: _themeSelectors.classicThemeSelector,
  info: {
    Pill: _pill.default,
    text: _documentation.Info,
    propTablesExclude: [_styledComponents.ThemeProvider]
  },
  notes: {
    markdown: _documentation.notes
  },
  knobs: {
    escapeHTML: false
  }
}).add('default', function () {
  var _getKnobs2 = getKnobs(),
      children = _getKnobs2.children,
      colorVariant = _getKnobs2.colorVariant,
      fill = _getKnobs2.fill,
      onDelete = _getKnobs2.onDelete,
      pillRole = _getKnobs2.pillRole,
      size = _getKnobs2.size;

  return _react.default.createElement(_pill.default, {
    colorVariant: colorVariant,
    fill: fill,
    onDelete: onDelete ? (0, _addonActions.action)('delete') : null,
    pillRole: pillRole,
    size: size
  }, children);
}, {
  themeSelector: _themeSelectors.dlsThemeSelector,
  info: {
    Pill: _pill.default,
    text: _documentation.Info
  },
  notes: {
    markdown: _documentation.notes
  },
  knobs: {
    escapeHTML: false
  }
});