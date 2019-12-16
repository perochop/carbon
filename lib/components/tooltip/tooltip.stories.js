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

var _ = _interopRequireDefault(require("."));

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$addParamet, _storiesOf$addParamet2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /tooltip\.component(?!spec)/);

function validTooltip(_ref) {
  var children = _ref.children,
      isVisible = _ref.isVisible;
  return children && isVisible;
}

var props = function props() {
  return {
    isVisible: (0, _addonKnobs.boolean)('isVisible', true),
    children: (0, _addonKnobs.text)('children', "I'm a helpful tooltip that can display more information to a user."),
    align: (0, _addonKnobs.select)('align', _optionsHelper.default.alignAroundEdges, _.default.defaultProps.align),
    position: (0, _addonKnobs.select)('position', _optionsHelper.default.positions, _.default.defaultProps.position),
    type: (0, _addonKnobs.select)('type', ['error', 'warning', 'info'], 'info')
  };
};

var content = function content() {
  return validTooltip(props()) ? _react.default.createElement(_.default, props()) : null;
};

function makeStory(name, themeSelector) {
  var component = function component() {
    return _react.default.createElement("div", {
      style: {
        position: 'absolute'
      }
    }, content());
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: _documentation.info
    },
    notes: {
      markdown: _documentation.notes
    }
  };
  return [name, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (0, _react2.storiesOf)('Tooltip', module).addParameters({
  knobs: {
    escapeHTML: false
  }
})).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));