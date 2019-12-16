"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _ = _interopRequireDefault(require("."));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper/options-helper"));

var _documentation = require("./documentation");

var _classic = _interopRequireDefault(require("../../style/themes/classic"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 50px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// This is for storybook example only
var StyledToastStory = (0, _styledComponents.default)(_.default)(_templateObject());
StyledToastStory.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /toast\.component(?!spec)/);
(0, _react2.storiesOf)('Toast', module).addParameters({
  knobs: {
    escapeHTML: false
  },
  notes: {
    markdown: _documentation.notes
  },
  info: {
    text: _documentation.info,
    propTables: [StyledToastStory],
    propTablesExclude: [_styledComponents.ThemeProvider, StyledToastStory]
  }
}).add('classic', function () {
  var variant = (0, _addonKnobs.select)('as', _optionsHelper.default.colors, _optionsHelper.default.colors[2]);
  var children = (0, _addonKnobs.text)('children', 'Talkie\'s the name, toasting\'s the game. Anyone like any toast?');
  var id = (0, _addonKnobs.text)('id', 'classic-toast');
  var open = (0, _addonKnobs.boolean)('open', true);
  var onDismiss = (0, _addonKnobs.boolean)('onDismiss', true);

  var handleChange = function handleChange() {
    (0, _addonActions.action)('clicked')();
  };

  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: _classic.default
  }, _react.default.createElement(StyledToastStory, {
    variant: variant,
    id: id,
    open: open,
    onDismiss: onDismiss ? handleChange : undefined
  }, children));
}, {
  themeSelector: _themeSelectors.classicThemeSelector
}).add('default', function () {
  var variant = (0, _addonKnobs.select)('variant', _optionsHelper.default.toast, _optionsHelper.default.toast[0]);
  var children = (0, _addonKnobs.text)('children', 'Talkie\'s the name, toasting\'s the game. Anyone like any toast?');
  var open = (0, _addonKnobs.boolean)('open', true);
  var id = (0, _addonKnobs.text)('id', 'default-toast');
  var onDismiss = (0, _addonKnobs.boolean)('onDismiss', true);
  var onDismissClick = onDismiss ? function (evt) {
    (0, _addonActions.action)('click')(evt);
  } : undefined;
  return _react.default.createElement(StyledToastStory, {
    variant: variant,
    id: id,
    open: open,
    onDismiss: onDismissClick
  }, children);
}, {
  themeSelector: _themeSelectors.dlsThemeSelector
});