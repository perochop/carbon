"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookState = require("@sambego/storybook-state");

var _addonKnobs = require("@storybook/addon-knobs");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _date = _interopRequireDefault(require("./date.component"));

var _textbox = require("../textbox");

var _textbox2 = _interopRequireDefault(require("../textbox/textbox.stories"));

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

var _storiesOf$addDecorat, _storiesOf$addDecorat2, _storiesOf$addDecorat3, _storiesOf$addDecorat4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_date.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /date\.component(?!spec)/);
_textbox.OriginalTextbox.__docgenInfo = (0, _docgenInfo.default)(require('../textbox/docgenInfo.json'), /textbox\.component(?!spec)/);
var store = new _storybookState.Store({
  value: '2019-04-04'
});

var setValue = function setValue(ev) {
  (0, _addonActions.action)('onChange')(ev);
  store.set({
    value: ev.target.value.rawValue
  });
};

function makeStory(name, themeSelector) {
  var component = function component() {
    var autoFocus = (0, _addonKnobs.boolean)('autoFocus', true);
    var minDate = (0, _addonKnobs.text)('minDate', '');
    var maxDate = (0, _addonKnobs.text)('maxDate', '');
    var allowEmptyValue = (0, _addonKnobs.boolean)('allowEmptyValue', false);
    return _react.default.createElement(_date.default, _extends({}, (0, _textbox2.default)({
      inputWidthEnabled: false
    }), {
      name: "dateinput",
      autoFocus: autoFocus,
      minDate: minDate,
      maxDate: maxDate,
      value: store.get('value'),
      onChange: setValue,
      onBlur: function onBlur(ev) {
        return (0, _addonActions.action)('onBlur')(ev);
      },
      onKeyDown: function onKeyDown(ev) {
        return (0, _addonActions.action)('onKeyDown')(ev);
      },
      allowEmptyValue: allowEmptyValue
    }));
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: _documentation.info,
      propTables: [_textbox.OriginalTextbox],
      propTablesExclude: [_storybookState.State],
      excludedPropTypes: ['children', 'leftChildren', 'inputIcon', 'placeholder', 'inputWidth']
    },
    notes: {
      markdown: _documentation.notes
    }
  };
  return [name, component, metadata];
}

function makeValidationsStory(name, themeSelector) {
  var component = function component() {
    return _react.default.createElement(_storybookState.State, {
      store: store
    }, _react.default.createElement(_date.default, {
      name: "dateinput",
      placeholder: (0, _addonKnobs.text)('placeholder'),
      validations: [isNotFirstApr],
      warnings: [isNotSecondApr],
      info: [isNotThirdApr],
      onChange: setValue,
      onBlur: function onBlur(ev) {
        return (0, _addonActions.action)('onBlur')(ev);
      },
      allowEmptyValue: (0, _addonKnobs.boolean)('allowEmptyValue', false)
    }));
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      source: false,
      text: _documentation.infoValidations,
      propTables: [_textbox.OriginalTextbox],
      propTablesExclude: [_storybookState.State]
    }
  };
  return [name, component, metadata];
}

(_storiesOf$addDecorat = (_storiesOf$addDecorat2 = (_storiesOf$addDecorat3 = (_storiesOf$addDecorat4 = (0, _react2.storiesOf)('Experimental/Date Input', module).addDecorator((0, _storybookState.StateDecorator)(store))).add.apply(_storiesOf$addDecorat4, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addDecorat3, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)))).add.apply(_storiesOf$addDecorat2, _toConsumableArray(makeValidationsStory('validations', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addDecorat, _toConsumableArray(makeValidationsStory('validations classic', _themeSelectors.classicThemeSelector)));

function isNotFirstApr(value) {
  return new Promise(function (resolve, reject) {
    if (value !== '2019-04-01') {
      resolve();
    } else {
      reject(new Error('April 1st 2019 cannot be selected!'));
    }
  });
}

function isNotSecondApr(value) {
  return new Promise(function (resolve, reject) {
    if (value !== '2019-04-02') {
      resolve();
    } else {
      reject(new Error('Selecting April 2nd 2019 is not recommended'));
    }
  });
}

function isNotThirdApr(value) {
  return new Promise(function (resolve, reject) {
    if (value !== '2019-04-03') {
      resolve();
    } else {
      reject(new Error('You have selected April 3rd 2019'));
    }
  });
}