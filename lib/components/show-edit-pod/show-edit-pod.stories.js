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

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _showEditPod = _interopRequireDefault(require("./show-edit-pod"));

var _content = _interopRequireDefault(require("../content"));

var _textbox = _interopRequireDefault(require("../../__deprecated__/components/textbox"));

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$addParamet, _storiesOf$addParamet2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_showEditPod.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /show-edit-pod\.js(?!spec)/);
var store = new _storybookState.Store({
  editing: false
});

var onEdit = function onEdit() {
  store.set({
    editing: true
  });
  (0, _addonActions.action)('edit')();
};

var onCancel = function onCancel() {
  store.set({
    editing: false
  });
  (0, _addonActions.action)('cancel')();
};

var onDelete = function onDelete() {
  store.set({
    editing: false
  });
  (0, _addonActions.action)('delete')();
};

var afterFormValidation = function afterFormValidation() {
  (0, _addonActions.action)('afterFormValidation')();
};

function makeStory(name, themeSelector) {
  var component = function component() {
    var asTheme = (0, _addonKnobs.select)('as', _optionsHelper.default.themesFull, _showEditPod.default.defaultProps.as);
    var border = (0, _addonKnobs.boolean)('border', _showEditPod.default.defaultProps.border);
    var buttonAlign = (0, _addonKnobs.select)('buttonAlign', _optionsHelper.default.alignBinary, _showEditPod.default.defaultProps.buttonAlign);
    var cancel = (0, _addonKnobs.boolean)('cancel', _showEditPod.default.defaultProps.cancel);
    var cancelText = cancel ? (0, _addonKnobs.text)('cancelText', 'Cancel') : undefined;
    var deleteText = (0, _addonKnobs.text)('deleteText', 'Delete');
    var saveText = (0, _addonKnobs.text)('saveText', 'Save');
    var saving = (0, _addonKnobs.boolean)('saving', _showEditPod.default.defaultProps.saving);
    var title = (0, _addonKnobs.text)('title', 'Person');
    var transitionName = (0, _addonKnobs.text)('transitionName', _showEditPod.default.defaultProps.transitionName);
    var validateOnMount = (0, _addonKnobs.boolean)('validateOnMount', _showEditPod.default.defaultProps.validateOnMount);
    var editFields = [_react.default.createElement(_textbox.default, {
      key: "edit_first_name",
      label: "First Name",
      value: "Alan"
    }), _react.default.createElement(_textbox.default, {
      key: "edit_second_name",
      label: "Second Name",
      value: "Smith"
    }), _react.default.createElement(_textbox.default, {
      key: "edit_telephone",
      label: "Telephone",
      value: "000 000 0000"
    })];
    return _react.default.createElement(_storybookState.State, {
      store: store
    }, _react.default.createElement(_showEditPod.default, {
      as: asTheme,
      border: border,
      buttonAlign: buttonAlign,
      cancel: cancel,
      cancelText: cancelText,
      deleteText: deleteText,
      onDelete: onDelete,
      onCancel: onCancel,
      onEdit: onEdit,
      saveText: saveText,
      saving: saving,
      title: title,
      transitionName: transitionName,
      validateOnMount: validateOnMount,
      editFields: editFields,
      afterFormValidation: afterFormValidation
    }, _react.default.createElement(_content.default, {
      key: "first_name",
      title: "First Name"
    }, "Alan"), _react.default.createElement(_content.default, {
      key: "second_name",
      title: "Last Name"
    }, "Smith"), _react.default.createElement(_content.default, {
      key: "telephone",
      title: "Telephone"
    }, "000 000 0000")));
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (0, _react2.storiesOf)('ShowEditPod', module).addParameters({
  info: {
    propTablesExclude: [_content.default, _storybookState.State],
    text: _documentation.info
  },
  notes: {
    markdown: _documentation.notes
  }
})).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));