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

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _storybookState = require("@sambego/storybook-state");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _decimal = _interopRequireDefault(require("./decimal.component"));

var _textbox = _interopRequireWildcard(require("../textbox"));

var _textbox2 = _interopRequireDefault(require("../textbox/textbox.stories"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

var _guid = _interopRequireDefault(require("../../../utils/helpers/guid"));

var _storiesOf$addParamet, _storiesOf$addParamet2;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_textbox.OriginalTextbox.__docgenInfo = (0, _docgenInfo.default)(require('../textbox/docgenInfo.json'), /textbox\.component(?!spec)/);
_decimal.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /decimal\.component(?!spec)/);
var store = new _storybookState.Store({
  value: '0.00'
});

var setValue = function setValue(ev) {
  (0, _addonActions.action)('onChange')(ev);
  store.set({
    value: ev.target.value.rawValue
  });
};

var previous = {
  key: (0, _guid.default)(),
  allowEmptyValue: false
};

function makeStory(name, themeSelector) {
  var component = function component() {
    var precisionRange = {
      range: true,
      min: 0,
      max: 15,
      step: 1
    };
    var align = (0, _addonKnobs.select)('align', _optionsHelper.default.alignBinary, _decimal.default.defaultProps.align);
    var precision = (0, _addonKnobs.number)('precision', _decimal.default.defaultProps.precision, precisionRange);
    var allowEmptyValue = (0, _addonKnobs.boolean)('allowEmptyValue', false); // When the allowEmptyValue knob changes we want to force the component to re-create
    // allowEmptyValue is only used in the constructor and it is not currently supported to change during the lifetime
    // of the component

    if (previous.allowEmptyValue !== allowEmptyValue) {
      previous.key = (0, _guid.default)();
    }

    previous.allowEmptyValue = allowEmptyValue;
    var key = previous.key;
    return _react.default.createElement(_storybookState.State, {
      store: store
    }, _react.default.createElement(_decimal.default, _extends({
      key: key
    }, (0, _textbox2.default)(), {
      align: align,
      precision: precision,
      value: store.get('value'),
      onChange: setValue,
      allowEmptyValue: allowEmptyValue,
      onBlur: (0, _addonActions.action)('onBlur')
    })));
  };

  var metadata = {
    themeSelector: themeSelector,
    notes: {
      markdown: _documentation.notes
    },
    knobs: {
      escapeHTML: false
    }
  };
  return [name, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (0, _react2.storiesOf)('Experimental/Decimal Input', module).addParameters({
  info: {
    text: _documentation.info,
    propTablesExclude: [_storybookState.State, _textbox.default],
    propTables: [_textbox.OriginalTextbox]
  }
})).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));