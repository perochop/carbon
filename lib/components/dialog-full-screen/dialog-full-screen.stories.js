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

var _addonActions = require("@storybook/addon-actions");

var _storybookState = require("@sambego/storybook-state");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _documentation = require("./documentation");

var _ = _interopRequireDefault(require("."));

var _button = _interopRequireDefault(require("../button"));

var _form = _interopRequireDefault(require("../../__deprecated__/components/form"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$addParamet, _storiesOf$addParamet2, _storiesOf$addParamet3, _storiesOf$addParamet4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /dialog-full-screen(?!spec)/);
var store = new _storybookState.Store({
  open: false
});

var handleCancel = function handleCancel() {
  store.set({
    open: false
  });
  (0, _addonActions.action)('cancel')();
};

var handleOpen = function handleOpen() {
  store.set({
    open: true
  });
  (0, _addonActions.action)('open')();
};

var handleClick = function handleClick(evt) {
  (0, _addonActions.action)('click')(evt);
};

function makeStory(name, themeSelector) {
  var component = function component() {
    var title = (0, _addonKnobs.text)('title', 'Example Dialog');
    var subtitle = (0, _addonKnobs.text)('subtitle', 'Example Subtitle');
    var children = (0, _addonKnobs.text)('children', 'Text Content');
    var enableBackgroundUI = (0, _addonKnobs.boolean)('enableBackgroundUI', false);
    var disableEscKey = (0, _addonKnobs.boolean)('disableEscKey', false);
    var ariaRole = (0, _addonKnobs.text)('ariaRole', 'dialog');
    return _react.default.createElement("div", null, _react.default.createElement(_button.default, {
      onClick: handleOpen
    }, "Open Preview"), _react.default.createElement(_storybookState.State, {
      store: store
    }, _react.default.createElement(_.default, {
      open: store.get('open'),
      onCancel: handleCancel,
      title: title,
      subtitle: subtitle,
      enableBackgroundUI: enableBackgroundUI,
      disableEscKey: disableEscKey,
      ariaRole: ariaRole,
      onClick: handleClick
    }, children)));
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

function makeStickyFooterStory(name, themeSelector) {
  var component = function component() {
    var title = (0, _addonKnobs.text)('title', 'Example Dialog');
    var subtitle = (0, _addonKnobs.text)('subtitle', 'Example Subtitle');
    var children = (0, _addonKnobs.text)('children', 'Text Content');
    var enableBackgroundUI = (0, _addonKnobs.boolean)('enableBackgroundUI', false);
    var disableEscKey = (0, _addonKnobs.boolean)('disableEscKey', false);
    var ariaRole = (0, _addonKnobs.text)('ariaRole', 'dialog');
    var formHeight = (0, _addonKnobs.text)('form height', '2000px');
    return _react.default.createElement("div", null, _react.default.createElement(_button.default, {
      onClick: handleOpen
    }, "Open Preview"), _react.default.createElement(_storybookState.State, {
      store: store
    }, _react.default.createElement(_.default, {
      open: store.get('open'),
      onCancel: handleCancel,
      title: title,
      subtitle: subtitle,
      enableBackgroundUI: enableBackgroundUI,
      disableEscKey: disableEscKey,
      ariaRole: ariaRole,
      onClick: handleClick
    }, _react.default.createElement(_form.default, {
      stickyFooter: true
    }, children, _react.default.createElement("div", {
      style: {
        height: formHeight
      }
    })))));
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (_storiesOf$addParamet3 = (_storiesOf$addParamet4 = (0, _react2.storiesOf)('Dialog Full Screen', module).addParameters({
  info: {
    propTablesExclude: [_button.default, _storybookState.State],
    text: _documentation.info
  },
  notes: {
    markdown: _documentation.notes
  },
  knobs: {
    escapeHTML: false
  }
})).add.apply(_storiesOf$addParamet4, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet3, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)))).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeStickyFooterStory('with sticky footer', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeStickyFooterStory('with sticky footer classic', _themeSelectors.classicThemeSelector)));