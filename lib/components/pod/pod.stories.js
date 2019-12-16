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

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _pod = _interopRequireDefault(require("./pod"));

var _notes = _interopRequireDefault(require("./notes.md"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _storybookInfo = require("../../../.storybook/style/storybook-info.styles");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_pod.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /pod\.js(?!spec)/);

function makeStory(name, themeSelector) {
  var component = function component() {
    var border = (0, _addonKnobs.boolean)('border', _pod.default.defaultProps.border);
    var children = (0, _addonKnobs.text)('children', 'This is some example content for a Pod');
    var padding = (0, _addonKnobs.select)('padding', _optionsHelper.default.sizesPod, _pod.default.defaultProps.padding);
    var as = (0, _addonKnobs.select)('as', _optionsHelper.default.themesFull, _pod.default.defaultProps.as);
    var title = (0, _addonKnobs.text)('title', '');
    var subtitle = (0, _addonKnobs.text)('subtitle', '');
    var alignTitle = title ? (0, _addonKnobs.select)('alignTitle', _optionsHelper.default.alignFull, _pod.default.defaultProps.alignTitle) : undefined;
    var description = (0, _addonKnobs.text)('description', '');
    var footer = (0, _addonKnobs.text)('footer', '');
    var onEdit = (0, _addonKnobs.boolean)('onEdit', false);
    var editContentFullWidth = onEdit ? (0, _addonKnobs.boolean)('editContentFullWidth', false) : undefined;
    var displayEditButtonOnHover = onEdit ? (0, _addonKnobs.boolean)('displayEditButtonOnHover', false) : undefined;
    var triggerEditOnContent = onEdit ? (0, _addonKnobs.boolean)('triggerEditOnContent', false) : undefined;
    var internalEditButton = onEdit ? (0, _addonKnobs.boolean)('internalEditButton', false) : undefined;
    return _react.default.createElement(_pod.default, {
      border: border,
      padding: padding,
      as: as,
      title: title,
      subtitle: subtitle,
      alignTitle: alignTitle,
      description: description,
      footer: footer,
      onEdit: onEdit ? (0, _addonActions.action)('edit') : undefined,
      editContentFullWidth: editContentFullWidth,
      displayEditButtonOnHover: displayEditButtonOnHover,
      triggerEditOnContent: triggerEditOnContent,
      internalEditButton: internalEditButton
    }, children);
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: _react.default.createElement("div", null, _react.default.createElement("p", null, "A Pod widget."), _react.default.createElement("p", null, "This widget is a provides a wrapper in which to render other widgets."), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "In your file"), _react.default.createElement(_storybookInfo.StoryCode, {
        padded: true
      }, 'import Pod from "carbon-react/lib/components/pod";'), _react.default.createElement("p", null, "To render the Pod:"), _react.default.createElement(_storybookInfo.StoryCode, {
        padded: true
      }, '<Pod />'))
    },
    notes: {
      markdown: _notes.default
    }
  };
  return [name, component, metadata];
}

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Pod', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));