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

var _immutable = _interopRequireDefault(require("immutable"));

var _highcharts = _interopRequireDefault(require("highcharts"));

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _rainbow = _interopRequireDefault(require("./rainbow.component"));

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_rainbow.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /rainbow\.component(?!spec)/);
global.Highcharts = _highcharts.default;

var myImmutableData = _immutable.default.fromJS([{
  y: 33,
  name: 'First Bit',
  label: 'label for first bit',
  tooltip: 'more info about this bit',
  color: '#00A376'
}, {
  y: 33,
  name: 'Second Bit',
  label: 'label for second bit',
  tooltip: 'more info about this bit',
  color: '#0077C8'
}, {
  y: 33,
  name: 'Third Bit',
  label: 'label for third bit',
  tooltip: 'more info about this bit',
  color: '#582C83'
}]);

function makeStory(name, themeSelector) {
  var component = function component() {
    var data = (0, _addonKnobs.object)('data', myImmutableData);
    var title = (0, _addonKnobs.text)('title', 'Rainbow chart');
    return _react.default.createElement(_rainbow.default, {
      title: title,
      data: _immutable.default.fromJS(data)
    });
  };

  var metadata = {
    themeSelector: themeSelector,
    notes: {
      markdown: _documentation.notes
    },
    info: {
      text: _documentation.info
    }
  };
  return [name, component, metadata];
}

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Rainbow ', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));