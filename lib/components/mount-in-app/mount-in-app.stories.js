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

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _mountInApp = _interopRequireDefault(require("./mount-in-app"));

var _notes = _interopRequireDefault(require("./notes.md"));

var _storybookInfo = require("../../../.storybook/style/storybook-info.styles");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_mountInApp.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /mount-in-app.js(?!spec)/);

function makeStory(name, themeSelector) {
  var component = function component() {
    return _react.default.createElement("div", null, _react.default.createElement("div", {
      id: "carbon-demo"
    }, "Some content to be replaced."), _react.default.createElement(_mountInApp.default, {
      targetId: "carbon-demo"
    }, _react.default.createElement("div", null, "Content to be mounted!")));
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: _react.default.createElement("div", null, _react.default.createElement("p", null, "Mount In App component."), _react.default.createElement("p", null, "Can be used to integrate React components into pre-existing user interfaces."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "Import the component:"), _react.default.createElement(_storybookInfo.StoryCode, {
        padded: true
      }, 'import MountInApp from "carbon-react/lib/components/mount-in-app";'), _react.default.createElement("p", null, "Imagine that your pre-existing user interface has a ", _react.default.createElement(_storybookInfo.StoryCode, null, '<div id="put_carbon_component_here" />'), " inside which you want to put your new React component."), _react.default.createElement("p", null, "To do that create a new React component that renders:"), _react.default.createElement(_storybookInfo.StoryCodeBlock, null, '<MountInApp targetId="put_carbon_component_here">', '  <div>Hello</div>', '  <div>I\'m a react component rendered in an existing UI</div>', '</MountInApp>'))
    },
    notes: {
      markdown: _notes.default
    }
  };
  return [name, component, metadata];
}

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Mount In App', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));