"use strict";

require("core-js/modules/es.object.get-own-property-descriptor");

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

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /form\.js(?!spec)/);
(0, _react2.storiesOf)('__deprecated__/Form', module).addParameters({
  info: {
    text: _Info.default,
    propTablesExclude: [_textbox.default]
  }
}).add('classic', function () {
  var unsavedWarning = (0, _addonKnobs.boolean)('unsavedWarning', true);
  var save = (0, _addonKnobs.boolean)('save', true);
  var cancel = (0, _addonKnobs.boolean)('cancel', true);
  var buttonAlign = (0, _addonKnobs.select)('buttonAlign', _optionsHelper.default.alignBinary, _.BaseForm.defaultProps.buttonAlign);
  var saving = (0, _addonKnobs.boolean)('saving', false);
  var cancelText = (0, _addonKnobs.text)('cancelText', '');
  var stickyFooter = (0, _addonKnobs.boolean)('stickyFooter', false);
  var stickyFooterPadding = (0, _addonKnobs.text)('stickyFooterPadding', '');
  var autoDisable = (0, _addonKnobs.boolean)('autoDisable', false);
  var saveText = (0, _addonKnobs.text)('saveText', '');
  var additionalActions = (0, _addonKnobs.text)('additionalActions', '');
  var leftAlignedActions = (0, _addonKnobs.text)('leftAlignedActions', '');
  var rightAlignedActions = (0, _addonKnobs.text)('rightAlignedActions', '');
  var showSummary = (0, _addonKnobs.boolean)('showSummary', _.BaseForm.defaultProps.showSummary);
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
    additionalActions: additionalActions,
    leftAlignedActions: leftAlignedActions,
    rightAlignedActions: rightAlignedActions,
    showSummary: showSummary,
    onSubmit: function onSubmit(ev) {
      return (0, _addonActions.action)('submit')(ev);
    }
  }, _react.default.createElement(_textbox.default, {
    label: "Full Name",
    labelInline: true,
    labelAlign: "right",
    validations: [new _presence.default()]
  }));
}, {
  notes: {
    markdown: _notes.default
  },
  knobs: {
    escapeHTML: false
  },
  themeSelector: _themeSelectors.classicThemeSelector
});