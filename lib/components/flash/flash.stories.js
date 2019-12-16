"use strict";

require("core-js/modules/es.object.get-own-property-descriptor");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _storybookState = require("@sambego/storybook-state");

var _styledComponents = require("styled-components");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _notes = _interopRequireDefault(require("./documentation/notes.md"));

var _Info = _interopRequireDefault(require("./documentation/Info"));

var _flash = _interopRequireWildcard(require("./flash.component"));

var _button = _interopRequireDefault(require("../button/button.component"));

var _classic = _interopRequireDefault(require("../../style/themes/classic"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_flash.FlashWithoutHOC.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /flash\.component(?!spec)/);
var store = new _storybookState.Store({
  open: false
});

var handleClick = function handleClick() {
  store.set({
    open: false
  });
  (0, _addonActions.action)('cancel')();
};

var openHandler = function openHandler() {
  store.set({
    open: true
  });
  (0, _addonActions.action)('open')();
};

(0, _react2.storiesOf)('Flash', module).add('classic', function () {
  var message = (0, _addonKnobs.text)('message', 'This is a flash message');
  var id = (0, _addonKnobs.text)('id', 'classic-flash');
  var timeout = (0, _addonKnobs.number)('timeout', 0);
  var as = (0, _addonKnobs.select)('as', _optionsHelper.default.colors, _optionsHelper.default.colors[0]);
  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: _classic.default
  }, _react.default.createElement("div", null, _react.default.createElement(_button.default, {
    onClick: openHandler
  }, "Open Flash"), _react.default.createElement(_storybookState.State, {
    store: store
  }, _react.default.createElement(_flash.default, {
    open: store.get('open'),
    as: as,
    message: message,
    id: id,
    timeout: timeout >= 0 ? timeout : undefined,
    onDismiss: handleClick
  }))));
}, {
  themeSelector: _themeSelectors.classicThemeSelector,
  notes: {
    markdown: _notes.default
  },
  knobs: {
    escapeHTML: false
  },
  info: {
    text: _Info.default,
    propTables: [_flash.FlashWithoutHOC, _button.default],
    propTablesExclude: [_storybookState.State, _styledComponents.ThemeProvider, _button.default, _flash.default]
  }
}).add('default', function () {
  var message = (0, _addonKnobs.text)('message', 'This is a flash message');
  var id = (0, _addonKnobs.text)('id', 'default-flash');
  var timeout = (0, _addonKnobs.number)('timeout', 0);
  var as = (0, _addonKnobs.select)('as', _optionsHelper.default.toast, _optionsHelper.default.toast[0]);
  return _react.default.createElement("div", null, _react.default.createElement(_button.default, {
    onClick: openHandler
  }, "Open Flash"), _react.default.createElement(_storybookState.State, {
    store: store
  }, _react.default.createElement(_flash.default, {
    open: store.get('open'),
    as: as,
    id: id,
    message: message,
    timeout: timeout >= 0 ? timeout : undefined,
    onDismiss: handleClick
  })));
}, {
  themeSelector: _themeSelectors.dlsThemeSelector,
  notes: {
    markdown: _notes.default
  },
  knobs: {
    escapeHTML: false
  },
  info: {
    text: _Info.default,
    propTables: [_flash.FlashWithoutHOC, _button.default],
    propTablesExclude: [_storybookState.State, _styledComponents.ThemeProvider, _button.default, _flash.default]
  }
});