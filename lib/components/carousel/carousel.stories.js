"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _styledComponents = require("styled-components");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _documentation = _interopRequireDefault(require("./documentation"));

var _carousel = _interopRequireWildcard(require("./carousel.component"));

var _classic = _interopRequireDefault(require("../../style/themes/classic"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _docgenInfo2 = _interopRequireDefault(require("./docgenInfo.json"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styleElement = {
  height: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto'
};

var ExampleCustomElement = function ExampleCustomElement(props) {
  return _react.default.createElement("div", {
    style: _objectSpread({}, styleElement, {}, props.style)
  }, props.children);
};

_carousel.default.__docgenInfo = (0, _docgenInfo.default)(_docgenInfo2.default, /carousel(?!spec)/);
(0, _react2.storiesOf)('Carousel', module).addParameters({
  info: {
    propTablesExclude: [_carousel.Slide, _carousel.Carousel, ExampleCustomElement, _styledComponents.ThemeProvider],
    propTables: [_carousel.default]
  }
}).add('classic', function () {
  var indexConfig = [0, 1, 2, 3, 4];
  var transitionConfig = ['slide', 'fade'];
  var initialSlideIndex = (0, _addonKnobs.select)('initialSlideIndex', indexConfig, _carousel.default.defaultProps.initialSlideIndex);
  var slideIndex = (0, _addonKnobs.select)('slideIndex', indexConfig, indexConfig[0]);
  var enableSlideSelector = (0, _addonKnobs.boolean)('enableSlideSelector', _carousel.default.defaultProps.enableSlideSelector);
  var enablePreviousButton = (0, _addonKnobs.boolean)('enablePreviousButton', _carousel.default.defaultProps.enablePreviousButton);
  var enableNextButton = (0, _addonKnobs.boolean)('enableNextButton', _carousel.default.defaultProps.enableNextButton);
  var transition = (0, _addonKnobs.select)('transition', transitionConfig, _carousel.default.defaultProps.transition);
  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: _classic.default
  }, _react.default.createElement(_carousel.Carousel, {
    initialSlideIndex: initialSlideIndex,
    slideIndex: slideIndex,
    enableSlideSelector: enableSlideSelector,
    enablePreviousButton: enablePreviousButton,
    enableNextButton: enableNextButton,
    transition: transition
  }, _react.default.createElement(_carousel.Slide, {
    className: "TestClassName"
  }, _react.default.createElement("h1", {
    style: {
      textAlign: 'center'
    }
  }, "Slide One")), _react.default.createElement(_carousel.Slide, null, _react.default.createElement("h1", {
    style: {
      textAlign: 'center'
    }
  }, "Slide Two")), _react.default.createElement(_carousel.Slide, null, _react.default.createElement("h1", {
    style: {
      textAlign: 'center'
    }
  }, "Slide Three")), _react.default.createElement(_carousel.Slide, null, _react.default.createElement("h1", {
    style: {
      textAlign: 'center'
    }
  }, "Slide Four")), _react.default.createElement(_carousel.Slide, null, _react.default.createElement("h1", {
    style: {
      textAlign: 'center'
    }
  }, "Slide Five"))));
}, {
  themeSelector: _themeSelectors.classicThemeSelector
}).add('default', function () {
  var indexConfig = [0, 1, 2, 3, 4];
  var initialSlideIndex = (0, _addonKnobs.select)('initialSlideIndex', indexConfig, _carousel.default.defaultProps.initialSlideIndex);
  var slideIndex = (0, _addonKnobs.select)('slideIndex', indexConfig, indexConfig[2]);

  var handleClick = function handleClick() {
    (0, _addonActions.action)('click')();
  };

  return _react.default.createElement(_carousel.Carousel, {
    initialSlideIndex: initialSlideIndex,
    slideIndex: slideIndex
  }, _react.default.createElement(_carousel.Slide, {
    style: {
      textAlign: 'center'
    }
  }, _react.default.createElement(ExampleCustomElement, {
    style: {
      backgroundColor: '#003349'
    }
  }, _react.default.createElement("h1", {
    style: {
      textAlign: 'center',
      color: '#090'
    }
  }, "Slide 1"))), _react.default.createElement(_carousel.Slide, {
    onClick: handleClick
  }, _react.default.createElement(ExampleCustomElement, null, _react.default.createElement("h1", {
    style: {
      textAlign: 'center'
    }
  }, "Full clickable slide"))), _react.default.createElement(_carousel.Slide, null, _react.default.createElement(ExampleCustomElement, {
    style: {
      backgroundColor: '#69418f'
    }
  }, _react.default.createElement("h1", {
    style: {
      color: '#fff'
    }
  }, "Slide 3"))), _react.default.createElement(_carousel.Slide, null, _react.default.createElement(ExampleCustomElement, {
    style: {
      backgroundColor: 'red'
    }
  }, _react.default.createElement("h1", {
    style: {
      color: '#fff'
    }
  }, "Slide 4"))), _react.default.createElement(_carousel.Slide, null, _react.default.createElement(ExampleCustomElement, {
    style: {
      backgroundColor: 'blue'
    }
  }, _react.default.createElement("h1", {
    style: {
      color: '#fff'
    }
  }, "Slide 5"))));
}, {
  themeSelector: _themeSelectors.dlsThemeSelector,
  notes: {
    markdown: _documentation.default
  }
});