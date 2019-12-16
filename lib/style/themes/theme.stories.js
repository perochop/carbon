"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _button = _interopRequireDefault(require("../../components/button"));

var _smallTheme = _interopRequireDefault(require("./small/small-theme.config"));

var _base = require("./base");

var _mergeDeep = require("../utils/merge-deep");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    transition: all 1.0s linear;\n    &:hover {\n      transform: rotateY(180deg);\n    }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      background-color: #eee;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getIconKnobs = function getIconKnobs() {
  var defaultPosition = _button.default.defaultProps.iconPosition;
  var hasIcon = (0, _addonKnobs.boolean)('has icon', false);
  return {
    iconType: hasIcon ? (0, _addonKnobs.select)('iconType', [].concat(_toConsumableArray(_optionsHelper.default.icons), ['']), '') : undefined,
    iconPosition: hasIcon ? (0, _addonKnobs.select)('iconPosition', _toConsumableArray(_optionsHelper.default.buttonIconPositions), defaultPosition) : undefined
  };
};

var getKnobs = function getKnobs(isClassic) {
  var size = (0, _addonKnobs.select)('size', _optionsHelper.default.sizesRestricted, _button.default.defaultProps.size);
  var classicProps = {},
      buttonType;

  if (isClassic) {
    classicProps = {
      theme: (0, _addonKnobs.select)('theme', _optionsHelper.default.buttonColors, _button.default.defaultProps.theme),
      as: (0, _addonKnobs.select)('as', _optionsHelper.default.themesBinary, _button.default.defaultProps.as),
      href: (0, _addonKnobs.text)('href'),
      to: (0, _addonKnobs.text)('to')
    };
  } else {
    buttonType = (0, _addonKnobs.select)('buttonType', _optionsHelper.default.buttonTypes, _button.default.defaultProps.as);
  }

  return _objectSpread({
    buttonType: buttonType,
    children: (0, _addonKnobs.text)('children', 'Example Button'),
    disabled: (0, _addonKnobs.boolean)('disabled', _button.default.defaultProps.disabled),
    onClick: function onClick(ev) {
      return (0, _addonActions.action)('click')(ev);
    },
    size: size,
    subtext: size === _optionsHelper.default.sizesRestricted[2] ? (0, _addonKnobs.text)('subtext', _button.default.defaultProps.subtext) : undefined
  }, classicProps, {}, getIconKnobs());
};

(0, _react2.storiesOf)('Theme', module).add('Overrides', function () {
  var themeGroup = 'Theme Overrides';
  var props = getKnobs();

  var Code = _styledComponents.default.code(_templateObject()); // We're using mergeWithBase and mergeDeep so we can extend the small theme, but still access the palette
  // in our new theme. If you don't need the palette you can call mergeDeep on the exported small theme without
  // needing to use mergeWithBase.


  var customTheme = function customTheme(palette) {
    return (0, _mergeDeep.mergeDeep)((0, _smallTheme.default)(palette), {
      colors: {
        primary: (0, _addonKnobs.color)('Primary color', palette.gold, themeGroup),
        secondary: (0, _addonKnobs.color)('Secondary color', palette.plum, themeGroup)
      }
    });
  };

  var theme = (0, _base.mergeWithBase)(customTheme);
  var CustomButton = (0, _styledComponents.default)(_button.default)(_templateObject2());
  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: theme
  }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h1", null, "Modifying an existing CSS rule"), _react.default.createElement("p", null, "You can modify existing styles by creating your own Theme. It is possible to extend one of the existing themes or to provide a full theme yourself. This only works for providing theme values, you can't add new CSS rules."), _react.default.createElement("p", null, "In this example you can select the ", _react.default.createElement(Code, null, "primary"), " and ", _react.default.createElement(Code, null, "secondary"), " theme values from the Knobs pannel below."), _react.default.createElement(_button.default, props), _react.default.createElement("h1", null, "Adding new CSS rules"), _react.default.createElement("p", null, "If you want to add a new CSS rule you'll need to wrap the component with the ", _react.default.createElement(Code, null, "styled()"), " constuctor. This will return a new tagged template literal where you can add your own CSS."), _react.default.createElement("p", null, "In this example when you hover, the button will rotate. Note that it is still using our custom theme from the previous example because it is wrapped in the same ", _react.default.createElement(Code, null, "ThemeProvider")), _react.default.createElement(CustomButton, props)));
});