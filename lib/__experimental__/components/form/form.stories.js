"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _presence = _interopRequireDefault(require("../../../utils/validations/presence"));

var _notes = _interopRequireDefault(require("./documentation/notes.md"));

var _Info = _interopRequireDefault(require("./documentation/Info"));

var _ = _interopRequireWildcard(require("."));

var _textbox = _interopRequireDefault(require("../textbox"));

var _button = _interopRequireDefault(require("../../../components/button"));

var _link = _interopRequireDefault(require("../../../components/link"));

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

var _fieldset = _interopRequireDefault(require("../fieldset/fieldset.component"));

var _storiesOf$addParamet, _storiesOf$addParamet2, _storiesOf$addParamet3, _storiesOf$addParamet4;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /form\.component(?!spec)/);

var additionalFormActions = function additionalFormActions(innerText) {
  return {
    Button: _react.default.createElement(_button.default, {
      onClick: function onClick(ev) {
        return (0, _addonActions.action)("".concat(innerText, " Button"))(ev);
      }
    }, innerText),
    Link: _react.default.createElement(_link.default, {
      onClick: function onClick(ev) {
        return (0, _addonActions.action)("".concat(innerText, " Link"))(ev);
      },
      href: "./?path=/story/experimental-form--default"
    }, innerText)
  };
};

function makeStory(name, themeSelector) {
  var component = function component() {
    var formActionOptions = [''].concat(_toConsumableArray(_optionsHelper.default.actionOptions));
    var unsavedWarning = (0, _addonKnobs.boolean)('unsavedWarning', true);
    var save = (0, _addonKnobs.boolean)('save', true);
    var cancel = (0, _addonKnobs.boolean)('cancel', true);
    var buttonAlign = (0, _addonKnobs.select)('buttonAlign', _optionsHelper.default.alignBinary, _.FormWithoutValidations.defaultProps.buttonAlign);
    var saving = (0, _addonKnobs.boolean)('saving', false);
    var cancelText = (0, _addonKnobs.text)('cancelText', '');
    var stickyFooter = (0, _addonKnobs.boolean)('stickyFooter', false);
    var stickyFooterPadding = (0, _addonKnobs.text)('stickyFooterPadding', '');
    var autoDisable = (0, _addonKnobs.boolean)('autoDisable', false);
    var saveText = (0, _addonKnobs.text)('saveText', '');
    var additionalActions = (0, _addonKnobs.select)('additionalActions', formActionOptions, formActionOptions[0]);
    var leftAlignedActions = (0, _addonKnobs.select)('leftAlignedActions', formActionOptions, formActionOptions[0]);
    var rightAlignedActions = (0, _addonKnobs.select)('rightAlignedActions', formActionOptions, formActionOptions[0]);
    var showSummary = (0, _addonKnobs.boolean)('showSummary', _.FormWithoutValidations.defaultProps.showSummary);
    var inLineLabels = (0, _addonKnobs.boolean)('inLineLabels', false);
    var isLabelRightAligned = inLineLabels ? (0, _addonKnobs.boolean)('isLabelRightAligned', false) : undefined;
    return _react.default.createElement(_.default, {
      unsavedWarning: unsavedWarning,
      cancel: cancel,
      buttonAlign: buttonAlign,
      saving: saving,
      stickyFooter: stickyFooter,
      stickyFooterPadding: stickyFooterPadding,
      autoDisable: autoDisable,
      cancelText: cancelText,
      saveText: saveText,
      save: save,
      additionalActions: additionalFormActions('Additional Action')[additionalActions],
      leftAlignedActions: additionalFormActions('Left Action')[leftAlignedActions],
      rightAlignedActions: additionalFormActions('Right Action')[rightAlignedActions],
      showSummary: showSummary,
      onSubmit: function onSubmit(ev) {
        (0, _addonActions.action)('submit')(ev);
        window.location.href = window.location.href;
      },
      isLabelRightAligned: isLabelRightAligned
    }, _react.default.createElement(_textbox.default, {
      key: "0",
      label: "Full Name",
      labelInline: inLineLabels,
      labelAlign: "right",
      validations: [new _presence.default()]
    }), _react.default.createElement(_textbox.default, {
      key: "1",
      label: "Role",
      labelInline: inLineLabels,
      labelAlign: "right",
      isOptional: true
    }));
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

function makeFieldsetTextboxStory(name, themeSelector) {
  var component = function component() {
    var stickyFooter = (0, _addonKnobs.boolean)('stickyFooter', false);
    var legend = (0, _addonKnobs.text)('legend', '');
    return _react.default.createElement(_.default, {
      stickyFooter: stickyFooter,
      onSubmit: function onSubmit() {
        window.location.href = window.location.href;
      }
    }, _react.default.createElement(_fieldset.default, {
      legend: legend
    }, _react.default.createElement(_textbox.default, {
      label: "First Name",
      labelInline: true,
      labelAlign: "right",
      inputWidth: 70
    }), _react.default.createElement(_textbox.default, {
      label: "Last Name",
      labelInline: true,
      labelAlign: "right",
      inputWidth: 70
    }), _react.default.createElement(_textbox.default, {
      label: "Address",
      labelInline: true,
      labelAlign: "right",
      inputWidth: 70
    }), _react.default.createElement(_textbox.default, {
      label: "City",
      labelInline: true,
      labelAlign: "right",
      inputWidth: 70
    }), _react.default.createElement(_textbox.default, {
      label: "Country",
      labelInline: true,
      labelAlign: "right",
      inputWidth: 70
    }), _react.default.createElement(_textbox.default, {
      label: "Telephone",
      labelInline: true,
      labelAlign: "right",
      inputWidth: 70
    })));
  };

  var metadata = {
    themeSelector: themeSelector
  };
  return [name, component, metadata];
}

(_storiesOf$addParamet = (_storiesOf$addParamet2 = (_storiesOf$addParamet3 = (_storiesOf$addParamet4 = (0, _react2.storiesOf)('Experimental/Form', module).addParameters({
  info: {
    text: _Info.default,
    propTablesExclude: [_textbox.default],
    includePropTables: [_.default]
  },
  notes: {
    markdown: _notes.default
  },
  knobs: {
    escapeHTML: false
  }
})).add.apply(_storiesOf$addParamet4, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet3, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)))).add.apply(_storiesOf$addParamet2, _toConsumableArray(makeFieldsetTextboxStory('fieldset > textbox', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$addParamet, _toConsumableArray(makeFieldsetTextboxStory('fieldset > textbox classic', _themeSelectors.classicThemeSelector)));