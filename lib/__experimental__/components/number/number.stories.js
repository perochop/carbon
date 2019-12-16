"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookState = require("@sambego/storybook-state");

var _addonKnobs = require("@storybook/addon-knobs");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _number = _interopRequireDefault(require("./number.component"));

var _textbox = _interopRequireWildcard(require("../textbox"));

var _textbox2 = _interopRequireDefault(require("../textbox/textbox.stories"));

var _notes = _interopRequireDefault(require("./documentation/notes.md"));

var _info = _interopRequireDefault(require("./documentation/info"));

var _storiesOf$addDecorat, _storiesOf$addDecorat2;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var store = new _storybookState.Store({
  value: ''
});

var setValue = function setValue(ev) {
  (0, _addonActions.action)('onChange')(ev);
  store.set({
    value: ev.target.value
  });
};

function makeStory(name, themeSelector) {
  var component = function component() {
    var onChangeDeferredEnabled = (0, _addonKnobs.boolean)('Enable "onChangeDeferred" Action', false);
    var onKeyDownEnabled = (0, _addonKnobs.boolean)('Enable "onKeyDown" Action', false);
    var deferTimeout = onChangeDeferredEnabled ? (0, _addonKnobs.number)('deferTimeout') : undefined;
    return _react.default.createElement(_number.default, _extends({}, (0, _textbox2.default)(), {
      value: store.get('value'),
      onChange: setValue,
      onKeyDown: onKeyDownEnabled ? (0, _addonActions.action)('onKeyDown') : undefined,
      onChangeDeferred: onChangeDeferredEnabled ? (0, _addonActions.action)('onChangeDeferred') : undefined,
      deferTimeout: deferTimeout
    }));
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: _info.default,
      propTables: [_textbox.OriginalTextbox],
      propTablesExclude: [_number.default, _storybookState.State, _textbox.default],
      excludedPropTypes: ['children', 'leftChildren', 'inputIcon']
    },
    notes: {
      markdown: _notes.default
    }
  };
  return [name, component, metadata];
}

(_storiesOf$addDecorat = (_storiesOf$addDecorat2 = (0, _react2.storiesOf)('Experimental/Number Input', module).addDecorator((0, _storybookState.StateDecorator)(store))).add.apply(_storiesOf$addDecorat2, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addDecorat, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));