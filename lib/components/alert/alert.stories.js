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

var _storybookState = require("@sambego/storybook-state");

var _addonActions = require("@storybook/addon-actions");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _button = _interopRequireDefault(require("../button"));

var _ = _interopRequireDefault(require("."));

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$addParamet, _storiesOf$addParamet2, _storiesOf$addParamet3, _storiesOf$addParamet4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /alert\.component(?!spec)/);
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

function makeStory(name, themeSelector) {
  var component = function component() {
    var title = (0, _addonKnobs.text)('title', 'Attention');
    var subtitle = (0, _addonKnobs.text)('subtitle', '');
    var children = (0, _addonKnobs.text)('children', 'This is an example of a alert.');
    var enableBackgroundUI = (0, _addonKnobs.boolean)('enableBackgroundUI', false);
    var disableEscKey = (0, _addonKnobs.boolean)('disableEscKey', false);
    var ariaRole = (0, _addonKnobs.text)('ariaRole', 'dialog');
    var height = (0, _addonKnobs.text)('height', '');
    var showCloseIcon = (0, _addonKnobs.boolean)('showCloseIcon', true);
    var size = (0, _addonKnobs.select)('size', _optionsHelper.default.sizesFull, _.default.defaultProps.size);
    var stickyFormFooter = (0, _addonKnobs.boolean)('stickyFormFooter', false);
    var open = (0, _addonKnobs.boolean)('open', false);
    return _react.default.createElement(_.default, {
      onCancel: handleCancel,
      title: title,
      enableBackgroundUI: enableBackgroundUI,
      disableEscKey: disableEscKey,
      ariaRole: ariaRole,
      height: height,
      showCloseIcon: showCloseIcon,
      size: size,
      stickyFormFooter: stickyFormFooter,
      subtitle: subtitle,
      open: open
    }, children);
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

function makeButtonStory(name, themeSelector) {
  var component = function component() {
    var title = (0, _addonKnobs.text)('title', 'Attention');
    var subtitle = (0, _addonKnobs.text)('subtitle', '');
    var children = (0, _addonKnobs.text)('children', 'This is an example of a alert.');
    var enableBackgroundUI = (0, _addonKnobs.boolean)('enableBackgroundUI', false);
    var disableEscKey = (0, _addonKnobs.boolean)('disableEscKey', false);
    var ariaRole = (0, _addonKnobs.text)('ariaRole', 'dialog');
    var height = (0, _addonKnobs.text)('height', '');
    var showCloseIcon = (0, _addonKnobs.boolean)('showCloseIcon', true);
    var size = (0, _addonKnobs.select)('size', _optionsHelper.default.sizesFull, _.default.defaultProps.size);
    var stickyFormFooter = (0, _addonKnobs.boolean)('stickyFormFooter', false);
    return _react.default.createElement(_storybookState.State, {
      store: store
    }, _react.default.createElement(_button.default, {
      key: "button",
      onClick: handleOpen
    }, "Open Preview"), _react.default.createElement(_.default, {
      key: "alert",
      onCancel: handleCancel,
      title: title,
      enableBackgroundUI: enableBackgroundUI,
      disableEscKey: disableEscKey,
      ariaRole: ariaRole,
      height: height,
      showCloseIcon: showCloseIcon,
      size: size,
      stickyFormFooter: stickyFormFooter,
      subtitle: subtitle,
      open: store.get('open')
    }, children));
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (_storiesOf$addParamet3 = (_storiesOf$addParamet4 = (0, _react2.storiesOf)('Alert', module).addParameters({
  info: {
    text: _documentation.info,
    propTablesExclude: [_storybookState.State, _button.default]
  },
  notes: {
    markdown: _documentation.notes
  }
})).add.apply(_storiesOf$addParamet4, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet3, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)))).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeButtonStory('with button', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeButtonStory('with button classic', _themeSelectors.classicThemeSelector)));