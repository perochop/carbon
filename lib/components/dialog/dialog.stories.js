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

var _immutable = require("immutable");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _notes = _interopRequireDefault(require("./documentation/notes.md"));

var _dialog = _interopRequireDefault(require("./dialog.component"));

var _form = _interopRequireDefault(require("../../__deprecated__/components/form"));

var _textbox = _interopRequireDefault(require("../../__deprecated__/components/textbox"));

var _button = _interopRequireDefault(require("../button"));

var _modal = _interopRequireDefault(require("../modal"));

var _date = _interopRequireDefault(require("../../__deprecated__/components/date"));

var _checkbox = _interopRequireDefault(require("../../__deprecated__/components/checkbox"));

var _dropdown = _interopRequireDefault(require("../../__deprecated__/components/dropdown"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_dialog.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /dialog(?!spec)/);
var store = new _storybookState.Store({
  open: false
});

var handleCancel = function handleCancel(evt) {
  store.set({
    open: false
  });
  (0, _addonActions.action)('cancel')(evt);
};

var handleOpen = function handleOpen(evt) {
  store.set({
    open: true
  });
  (0, _addonActions.action)('open')(evt);
};

var handleClick = function handleClick(evt) {
  (0, _addonActions.action)('click')(evt);
};

function makeStory(name, themeSelector) {
  var component = function component() {
    var height = (0, _addonKnobs.text)('height', '400');
    var title = (0, _addonKnobs.text)('title', 'Example Dialog');
    var subtitle = (0, _addonKnobs.text)('subtitle', 'Example Subtitle');
    var size = (0, _addonKnobs.select)('size', _optionsHelper.default.sizesFull, _dialog.default.defaultProps.size);
    var showCloseIcon = (0, _addonKnobs.boolean)('showCloseIcon', _dialog.default.defaultProps.showCloseIcon);
    var autoFocus = (0, _addonKnobs.boolean)('autoFocus', _dialog.default.defaultProps.autoFocus);
    var stickyFormFooter = (0, _addonKnobs.boolean)('stickyFormFooter', false);
    var enableBackgroundUI = (0, _addonKnobs.boolean)('enableBackgroundUI', false);
    var disableEscKey = (0, _addonKnobs.boolean)('disableEscKey', false);
    var ariaRole = (0, _addonKnobs.text)('ariaRole', _dialog.default.defaultProps.ariaRole);
    return _react.default.createElement("div", null, _react.default.createElement(_button.default, {
      onClick: handleOpen
    }, "Open Preview"), _react.default.createElement(_storybookState.State, {
      store: store
    }, _react.default.createElement(_dialog.default, {
      open: store.get('open'),
      onCancel: handleCancel,
      height: height,
      title: title,
      subtitle: subtitle,
      size: size,
      showCloseIcon: showCloseIcon,
      autoFocus: autoFocus,
      stickyFormFooter: stickyFormFooter,
      enableBackgroundUI: enableBackgroundUI,
      disableEscKey: disableEscKey,
      ariaRole: ariaRole,
      onClick: handleClick
    }, _react.default.createElement(_form.default, null, _react.default.createElement(_textbox.default, {
      label: "First Name"
    }), _react.default.createElement(_textbox.default, {
      label: "Middle Name"
    }), _react.default.createElement(_textbox.default, {
      label: "Surname"
    }), _react.default.createElement(_textbox.default, {
      label: "Birth Place"
    }), _react.default.createElement(_textbox.default, {
      label: "Favourite Colour"
    }), _react.default.createElement(_textbox.default, {
      label: "Address"
    }), _react.default.createElement(_date.default, {
      name: "date",
      label: "Birthday"
    }), _react.default.createElement(_dropdown.default, {
      name: "foo",
      options: (0, _immutable.fromJS)([{
        id: '1',
        name: 'Orange'
      }, {
        id: '2',
        name: 'Blue'
      }, {
        id: '3',
        name: 'Green'
      }, {
        id: '4',
        name: 'Black'
      }, {
        id: '5',
        name: 'Yellow'
      }, {
        id: '6',
        name: 'White'
      }, {
        id: '7',
        name: 'Magenta'
      }, {
        id: '8',
        name: 'Cyan'
      }, {
        id: '9',
        name: 'Red'
      }, {
        id: '10',
        name: 'Grey'
      }, {
        id: '11',
        name: 'Purple'
      }]),
      value: "1"
    }), _react.default.createElement(_textbox.default, {
      label: "Pet Name"
    }), _react.default.createElement(_date.default, {
      name: "date",
      label: "Pet's birthday"
    }), _react.default.createElement(_checkbox.default, {
      name: "checkbox",
      label: "Do you like my Dog"
    }), _react.default.createElement("div", null, "This is an example of a dialog with a Form as content")))));
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      propTablesExclude: [_button.default, _storybookState.State, _form.default, _textbox.default, _checkbox.default, _date.default, _dropdown.default, _modal.default]
    },
    notes: {
      markdown: _notes.default
    },
    knobs: {
      escapeHTML: false
    }
  };
  return [name, component, metadata];
}

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Dialog', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));