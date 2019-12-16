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

var _documentation = require("./documentation");

var _button = _interopRequireDefault(require("../button"));

var _confirmComponent = _interopRequireDefault(require("./confirm.component.js"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_confirmComponent.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /confirm\.component(?!spec)/);
var store = new _storybookState.Store({
  open: false
});

var handleCancel = function handleCancel() {
  (0, _addonActions.action)('cancel')();
  store.set({
    open: false
  });
};

var handleOpen = function handleOpen() {
  (0, _addonActions.action)('open')();
  store.set({
    open: true
  });
};

var handleConfirm = function handleConfirm() {
  (0, _addonActions.action)('confirm')();
  store.set({
    open: false
  });
};

function makeStory(name, themeSelector) {
  var component = function component() {
    var children = (0, _addonKnobs.text)('children', 'This is an example of a confirm.');
    var title = (0, _addonKnobs.text)('title', 'Are you sure?');
    var enableBackgroundUI = (0, _addonKnobs.boolean)('enableBackgroundUI', false);
    var disableEscKey = (0, _addonKnobs.boolean)('disableEscKey', false);
    var ariaRole = (0, _addonKnobs.text)('ariaRole', _confirmComponent.default.defaultProps.ariaRole);
    var height = (0, _addonKnobs.text)('height', '');
    var subtitle = (0, _addonKnobs.text)('subtitle', '');
    var size = (0, _addonKnobs.select)('size', _optionsHelper.default.sizesFull, _confirmComponent.default.defaultProps.size);
    var showCloseIcon = (0, _addonKnobs.boolean)('showCloseIcon', _confirmComponent.default.defaultProps.showCloseIcon);
    var autoFocus = (0, _addonKnobs.boolean)('autoFocus', _confirmComponent.default.defaultProps.autoFocus);
    var confirmLabel = (0, _addonKnobs.text)('confirmLabel', '');
    var cancelLabel = (0, _addonKnobs.text)('cancelLabel', '');
    return _react.default.createElement(_storybookState.State, {
      store: store
    }, _react.default.createElement(_button.default, {
      onClick: handleOpen
    }, "Open Preview"), _react.default.createElement(_confirmComponent.default, {
      title: title,
      open: store.get('open'),
      enableBackgroundUI: enableBackgroundUI,
      disableEscKey: disableEscKey,
      ariaRole: ariaRole,
      height: height,
      subtitle: subtitle,
      size: size,
      showCloseIcon: showCloseIcon,
      autoFocus: autoFocus,
      confirmLabel: confirmLabel,
      cancelLabel: cancelLabel,
      onConfirm: handleConfirm,
      onCancel: handleCancel
    }, children));
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      propTablesExclude: [_storybookState.State, _button.default],
      text: _documentation.info
    },
    notes: {
      markdown: _documentation.notes
    }
  };
  return [name, component, metadata];
}

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Confirm', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));