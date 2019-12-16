"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _splitButton = _interopRequireDefault(require("./split-button.component"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _button = _interopRequireDefault(require("../button"));

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_splitButton.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /split-button\.component(?!spec)/);

var getIconKnobs = function getIconKnobs() {
  var defaultPosition = _button.default.defaultProps.iconPosition;
  var hasIcon = (0, _addonKnobs.boolean)('has icon', false);
  return {
    iconType: hasIcon ? (0, _addonKnobs.select)('iconType', [].concat(_toConsumableArray(_optionsHelper.default.icons), ['']), '') : undefined,
    iconPosition: hasIcon ? (0, _addonKnobs.select)('iconPosition', _toConsumableArray(_optionsHelper.default.buttonIconPositions), defaultPosition) : undefined
  };
};

var getKnobs = function getKnobs(isClassic) {
  var as, buttonType, size;

  if (isClassic) {
    as = (0, _addonKnobs.select)('as', _optionsHelper.default.themesBinary, _button.default.defaultProps.as);
  } else {
    buttonType = (0, _addonKnobs.select)('buttonType', _optionsHelper.default.themesBinary, _button.default.defaultProps.as);
    size = (0, _addonKnobs.select)('size', _optionsHelper.default.sizesRestricted, _button.default.defaultProps.size);
  }

  return {
    as: as,
    buttonType: buttonType,
    dataElement: (0, _addonKnobs.text)('data-element'),
    dataRole: (0, _addonKnobs.text)('data-role'),
    disabled: (0, _addonKnobs.boolean)('disabled', _button.default.defaultProps.disabled),
    onClick: function onClick(ev) {
      return (0, _addonActions.action)('click')(ev);
    },
    size: size,
    align: (0, _addonKnobs.select)('align', _optionsHelper.default.alignBinary, _splitButton.default.defaultProps.align),
    textContent: (0, _addonKnobs.text)('text', 'Example Split Button'),
    subtext: size === _optionsHelper.default.sizesRestricted[2] ? (0, _addonKnobs.text)('subtext', _button.default.defaultProps.subtext) : undefined
  };
};

(0, _react2.storiesOf)('Split Button', module).add('default', function () {
  var props = getKnobs();

  var buttonType = props.buttonType,
      dataElement = props.dataElement,
      dataRole = props.dataRole,
      textContent = props.textContent,
      subtext = props.subtext,
      menuButtonProps = _objectWithoutProperties(props, ["buttonType", "dataElement", "dataRole", "textContent", "subtext"]);

  return _react.default.createElement(_splitButton.default, _extends({
    buttonType: buttonType,
    "data-element": dataElement,
    "data-role": dataRole,
    text: textContent,
    subtext: subtext
  }, getIconKnobs(), menuButtonProps), _react.default.createElement(_button.default, menuButtonProps, "Example Button"), _react.default.createElement(_button.default, menuButtonProps, "Example Button with long text"), _react.default.createElement(_button.default, menuButtonProps, "Short"));
}, {
  themeSelector: _themeSelectors.dlsThemeSelector,
  info: {
    text: _documentation.info,
    propTablesExclude: [_button.default]
  },
  notes: {
    markdown: _documentation.notes
  }
}).add('classic', function () {
  var props = getKnobs(true);
  var as = props.as,
      dataElement = props.dataElement,
      dataRole = props.dataRole,
      disabled = props.disabled,
      onClick = props.onClick,
      textContent = props.textContent;
  return _react.default.createElement(_splitButton.default, _extends({
    as: as,
    "data-element": dataElement,
    "data-role": dataRole,
    disabled: disabled,
    onClick: onClick,
    text: textContent
  }, props), _react.default.createElement(_button.default, {
    onClick: onClick
  }, "Example Button"), _react.default.createElement(_button.default, {
    onClick: onClick
  }, "Example Button"), _react.default.createElement(_button.default, {
    onClick: onClick
  }, "Example Button"));
}, {
  themeSelector: _themeSelectors.classicThemeSelector,
  info: {
    text: _documentation.info,
    propTablesExclude: [_button.default]
  },
  notes: {
    markdown: _documentation.notes
  }
});