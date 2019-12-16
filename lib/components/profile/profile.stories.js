"use strict";

require("core-js/modules/es.object.get-own-property-descriptor");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _styledComponents = require("styled-components");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _profile = _interopRequireWildcard(require("./profile.component"));

var _documentation = require("./documentation");

var _classic = _interopRequireDefault(require("../../style/themes/classic"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfileWrapper = function ProfileWrapper(props) {
  return _react.default.createElement(_profile.default, props);
};

ProfileWrapper.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /profile\.component(?!spec)/);
(0, _react2.storiesOf)('Profile', module).add('default', function () {
  var email = (0, _addonKnobs.text)('email', 'johnsmith@sage.com');
  var initials = (0, _addonKnobs.text)('initials', 'JS');
  var size = (0, _addonKnobs.select)('size', _optionsHelper.default.sizesPortrait, _optionsHelper.default.sizesPortrait[0]);
  var name = (0, _addonKnobs.text)('name', 'John Smith');
  return _react.default.createElement(ProfileWrapper, {
    email: email,
    initials: initials,
    size: size,
    name: name
  });
}, {
  themeSelector: _themeSelectors.dlsThemeSelector,
  info: {
    text: _documentation.info,
    propTablesExclude: [_styledComponents.ThemeProvider]
  },
  notes: {
    markdown: _documentation.notes
  },
  knobs: {
    escapeHTML: false
  }
}).add('classic', function () {
  var email = (0, _addonKnobs.text)('email', 'johnsmith@sage.com');
  var initials = (0, _addonKnobs.text)('initials', 'JS');
  var large = (0, _addonKnobs.boolean)('large', _profile.OriginalProfile.defaultProps.large);
  var name = (0, _addonKnobs.text)('name', 'John Smith');
  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: _classic.default
  }, _react.default.createElement(ProfileWrapper, {
    email: email,
    initials: initials,
    large: large,
    name: name
  }));
}, {
  themeSelector: _themeSelectors.classicThemeSelector,
  info: {
    text: _documentation.info,
    propTablesExclude: [_styledComponents.ThemeProvider]
  },
  notes: {
    markdown: _documentation.notes
  },
  knobs: {
    escapeHTML: false
  }
});