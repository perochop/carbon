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

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _filter = _interopRequireDefault(require("./filter"));

var _textbox = _interopRequireDefault(require("../../__deprecated__/components/textbox"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$addParamet, _storiesOf$addParamet2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_filter.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /filter(?!spec)/);

function makeStory(name, themeSelector) {
  var component = function component() {
    var align = (0, _addonKnobs.select)('labelAlign', _optionsHelper.default.alignBinary);
    return _react.default.createElement(_filter.default, {
      align: align
    }, _react.default.createElement(_textbox.default, {
      label: "First Name"
    }), _react.default.createElement(_textbox.default, {
      label: "Last Name"
    }));
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (0, _react2.storiesOf)('Filter Component', module).addParameters({
  info: {
    propTablesExclude: [_textbox.default]
  }
})).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));