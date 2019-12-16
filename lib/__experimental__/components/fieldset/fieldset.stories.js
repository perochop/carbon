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

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _documentation = _interopRequireDefault(require("./documentation"));

var _fieldset = _interopRequireDefault(require("./fieldset.component"));

var _textbox = _interopRequireDefault(require("../textbox"));

var _checkbox = require("../checkbox");

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

var _storiesOf$addParamet, _storiesOf$addParamet2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_fieldset.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /fieldset\.component(?!spec)/);

function makeStory(name, themeSelector) {
  var component = function component() {
    var legend = (0, _addonKnobs.text)('legend', '');
    return _react.default.createElement(_fieldset.default, {
      legend: legend
    }, _react.default.createElement(_textbox.default, {
      label: "First Name",
      labelInline: true,
      labelAlign: "right",
      labelWidth: 30
    }), _react.default.createElement(_textbox.default, {
      label: "Last Name",
      labelInline: true,
      labelAlign: "right",
      labelWidth: 30
    }), _react.default.createElement(_textbox.default, {
      label: "Address",
      labelInline: true,
      labelAlign: "right",
      labelWidth: 30
    }), _react.default.createElement(_checkbox.Checkbox, {
      label: "Checkbox",
      labelAlign: "right",
      labelWidth: 30,
      reverse: true
    }), _react.default.createElement(_textbox.default, {
      label: "City",
      labelInline: true,
      labelAlign: "right",
      labelWidth: 30
    }), _react.default.createElement(_textbox.default, {
      label: "Country",
      labelInline: true,
      labelAlign: "right",
      labelWidth: 30
    }), _react.default.createElement(_textbox.default, {
      label: "Telephone",
      labelInline: true,
      labelAlign: "right",
      labelWidth: 30
    }));
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (0, _react2.storiesOf)('Experimental/Fieldset', module).addParameters({
  info: {
    propTablesExclude: [_textbox.default]
  },
  notes: {
    markdown: _documentation.default
  },
  knobs: {
    escapeHTML: false
  }
})).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));