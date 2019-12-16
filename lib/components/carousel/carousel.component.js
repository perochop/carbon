"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Slide", {
  enumerable: true,
  get: function get() {
    return _slide.default;
  }
});
exports.Carousel = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _lodash = require("lodash");

var _styledComponents = require("styled-components");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags/tags"));

var _slide = _interopRequireDefault(require("./slide/slide.component"));

var _carousel = require("./carousel.style");

var _styleHelper = require("../../utils/helpers/style-helper");

var _base = _interopRequireDefault(require("../../style/themes/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NEXT = 'next';
var PREVIOUS = 'previous';
var TRANSITION_TIME = 750;

var BaseCarousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseCarousel, _React$Component);

  function BaseCarousel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseCarousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseCarousel)).call.apply(_getPrototypeOf2, [this].concat(args)));
    /** Direction of animation */

    _defineProperty(_assertThisInitialized(_this), "state", {
      // Currently selected slide
      selectedSlideIndex: Number(_this.props.slideIndex) || Number(_this.props.initialSlideIndex),
      disabled: false // Next/Previous buttons disabled state

    });

    _defineProperty(_assertThisInitialized(_this), "visibleSlide", function () {
      var index = _this.state.selectedSlideIndex;
      var visibleSlide = (0, _lodash.compact)(_react.default.Children.toArray(_this.props.children))[index];
      index = visibleSlide.props.id || index;
      var additionalProps = {
        transitionName: _this.transitionName,
        timeout: TRANSITION_TIME,
        theme: _this.props.theme,
        slideProps: _objectSpread({
          className: visibleSlide.props.className,
          isPadded: _this.props.enablePreviousButton || _this.props.enableNextButton,
          'data-element': 'visible-slide',
          key: "carbon-slide-".concat(index)
        }, visibleSlide.props)
      };
      return _react.default.cloneElement(visibleSlide, (0, _lodash.assign)({}, visibleSlide.props, additionalProps));
    });

    _defineProperty(_assertThisInitialized(_this), "transitionName", function () {
      if (_this.props.transition === 'slide') {
        return "slide-".concat(_this.transitionDirection);
      }

      return "carousel-transition-".concat(_this.props.transition);
    });

    _this.transitionDirection = NEXT;
    _this.onPreviousClick = _this.onPreviousClick.bind(_assertThisInitialized(_this));
    _this.onNextClick = _this.onNextClick.bind(_assertThisInitialized(_this));
    _this.onSlideSelection = _this.onSlideSelection.bind(_assertThisInitialized(_this));
    _this.enableButtonsAfterTimeout = _this.enableButtonsAfterTimeout.bind(_assertThisInitialized(_this));
    _this.previousButtonProps = _this.previousButtonProps.bind(_assertThisInitialized(_this));
    _this.nextButtonProps = _this.nextButtonProps.bind(_assertThisInitialized(_this));
    _this.numOfSlides = _this.numOfSlides.bind(_assertThisInitialized(_this));
    _this.slideSelector = _this.slideSelector.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BaseCarousel, [{
    key: "componentDidUpdate",

    /** A lifecycle method that is called before re-render. */
    value: function componentDidUpdate(prevProps) {
      if (this.props.slideIndex === prevProps.slideIndex) return;
      if (typeof this.props.slideIndex === 'undefined') return;
      var newIndex = this.verifyNewIndex(this.props.slideIndex);
      var currentIndex = this.state.selectedSlideIndex;
      if (newIndex === currentIndex) return;

      if (newIndex > currentIndex) {
        this.transitionDirection = NEXT;
      } else {
        this.transitionDirection = PREVIOUS;
      }

      this.handleSlideChange(newIndex);
    }
    /** Handles clicking on the previous button */

  }, {
    key: "onPreviousClick",
    value: function onPreviousClick() {
      var newIndex = this.state.selectedSlideIndex - 1;

      if (newIndex < 0) {
        newIndex = this.numOfSlides() - 1;
      }

      this.transitionDirection = PREVIOUS;
      this.handleSlideChange(newIndex);
    }
    /** Handles clicking on the next button */

  }, {
    key: "onNextClick",
    value: function onNextClick() {
      var newIndex = (this.state.selectedSlideIndex + 1) % this.numOfSlides();
      this.transitionDirection = NEXT;
      this.handleSlideChange(newIndex);
    }
    /** Handles clicking slide selector */

  }, {
    key: "onSlideSelection",
    value: function onSlideSelection(ev) {
      var newSlideSelection = Number(ev.target.value);
      this.transitionDirection = newSlideSelection > this.state.selectedSlideIndex ? NEXT : PREVIOUS;
      this.handleSlideChange(newSlideSelection);
    }
    /** Verifies the new index and corrects it if necessary */

  }, {
    key: "verifyNewIndex",
    value: function verifyNewIndex(newIndex) {
      if (newIndex < 0) {
        // If the new index is negative, select the last slide
        return this.numOfSlides() - 1;
      }

      if (newIndex > this.numOfSlides() - 1) {
        // If the new index is bigger than the number of slides, select the first slide
        return 0;
      }

      return newIndex;
    }
    /** Handle the slide change to the newIndex */

  }, {
    key: "handleSlideChange",
    value: function handleSlideChange(newIndex) {
      if ((0, _styleHelper.isClassic)(this.props.theme)) {
        this.setState({
          disabled: true,
          selectedSlideIndex: newIndex
        });
      } else {
        this.setState({
          selectedSlideIndex: newIndex
        });
      }

      this.enableButtonsAfterTimeout();

      if (this.props.onSlideChange) {
        this.props.onSlideChange(newIndex, this.transitionDirection);
      }
    }
    /** Re-enables the next and previous buttons after timeout */

  }, {
    key: "enableButtonsAfterTimeout",
    value: function enableButtonsAfterTimeout() {
      var _this2 = this;

      if ((0, _styleHelper.isClassic)(this.props.theme)) {
        setTimeout(function () {
          _this2.setState({
            disabled: false
          });
        }, TRANSITION_TIME);
      }
    }
    /** Gets the props for the previous button */

  }, {
    key: "previousButtonProps",
    value: function previousButtonProps() {
      return !this.state.disabled ? {
        onClick: this.onPreviousClick
      } : {};
    }
    /** Gets the props for the next button */

  }, {
    key: "nextButtonProps",
    value: function nextButtonProps() {
      return !this.state.disabled ? {
        onClick: this.onNextClick
      } : {};
    }
    /** Gets the number of slides */

  }, {
    key: "numOfSlides",
    value: function numOfSlides() {
      return Array.isArray(this.props.children) ? (0, _lodash.compact)(this.props.children).length : 1;
    }
    /** Gets the currently visible slide */

  }, {
    key: "visibleSlides",
    value: function visibleSlides() {
      var _this3 = this;

      var arrayWithKeys = this.props.children.map(function (element, key) {
        return _react.default.cloneElement(element, _objectSpread({
          key: "slide-".concat(key),
          id: key,
          selectedIndex: _this3.state.selectedSlideIndex,
          theme: _this3.props.theme
        }, element.props));
      });
      return arrayWithKeys;
    }
    /** Renders the slideSelector footer */

  }, {
    key: "slideSelector",
    value: function slideSelector() {
      if (!this.props.enableSlideSelector) return null;
      var buttons = [];

      for (var i = 0; i < this.numOfSlides(); i++) {
        buttons.push(_react.default.createElement(_carousel.CarouselSelectorInputWrapperStyle, {
          key: i,
          "data-element": "selector-inputs"
        }, _react.default.createElement(_carousel.CarouselSelectorInputStyle, {
          disabled: this.state.disabled,
          "data-element": "selector-input",
          name: "carousel-slide",
          id: "carousel-slide-".concat(i),
          type: "radio",
          value: i,
          onChange: this.onSlideSelection,
          checked: this.state.selectedSlideIndex === i
        }), _react.default.createElement(_carousel.CarouselSelectorLabelStyle, {
          "data-element": "selector-label",
          htmlFor: "carousel-slide-".concat(i)
        })));
      }

      return _react.default.createElement(_carousel.CarouselSelectorWrapperStyle, {
        "data-element": "slide-selector"
      }, buttons);
    }
    /** Renders the previous button */

  }, {
    key: "previousButton",
    value: function previousButton() {
      if (!this.props.enablePreviousButton) return null;
      var isDisabled = this.state.selectedSlideIndex === 0;
      return _react.default.createElement(_carousel.CarouselPreviousButtonWrapperStyle, null, _react.default.createElement(_carousel.CarouselButtonStyle, _extends({}, this.previousButtonProps(), {
        "data-element": "previous",
        "aria-label": "previous",
        type: "button",
        disabled: (0, _styleHelper.isClassic)(this.props.theme) ? null : isDisabled
      }), _react.default.createElement(_carousel.CarouselStyledIconLeft, {
        type: (0, _styleHelper.isClassic)(this.props.theme) ? 'dropdown' : 'chevron_down'
      })));
    }
    /** Renders the next button */

  }, {
    key: "nextButton",
    value: function nextButton() {
      if (!this.props.enableNextButton) return null;
      var numberOfChildren = this.props.children.length;
      var isDisabled = numberOfChildren === this.state.selectedSlideIndex + 1;
      return _react.default.createElement(_carousel.CarouselNextButtonWrapperStyle, null, _react.default.createElement(_carousel.CarouselButtonStyle, _extends({}, this.nextButtonProps(), {
        "data-element": "next",
        "aria-label": "next",
        type: "button",
        disabled: (0, _styleHelper.isClassic)(this.props.theme) ? null : isDisabled
      }), _react.default.createElement(_carousel.CarouselStyledIconRight, {
        type: (0, _styleHelper.isClassic)(this.props.theme) ? 'dropdown' : 'chevron_down'
      })));
    }
    /** Returns the current transition name */

  }, {
    key: "render",

    /** Renders the Slide Component */
    value: function render() {
      if ((0, _styleHelper.isClassic)(this.props.theme)) {
        return _react.default.createElement(_carousel.CarouselWrapperStyle, _extends({
          className: this.props.className
        }, (0, _tags.default)('carousel', this.props)), _react.default.createElement("div", {
          className: "carbon-carousel__content"
        }, this.previousButton(), _react.default.createElement(_reactTransitionGroup.TransitionGroup, null, this.visibleSlide()), this.nextButton()), this.slideSelector());
      }

      return _react.default.createElement(_carousel.CarouselWrapperStyle, _extends({
        className: this.props.className
      }, (0, _tags.default)('carousel', this.props)), _react.default.createElement("div", {
        className: "carbon-carousel__content"
      }, this.previousButton(), _react.default.createElement(_carousel.CarouselSliderWrapper, {
        elementIndex: this.state.selectedSlideIndex
      }, this.visibleSlides()), this.nextButton()), this.slideSelector());
    }
  }]);

  return BaseCarousel;
}(_react.default.Component);

BaseCarousel.propTypes = {
  /** [legacy] Custom className */
  className: _propTypes.default.string,

  /** The selected tab on page load */
  initialSlideIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** The selected slide */
  slideIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** Individual tabs */
  children: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),

  /** Enables the slide selector */
  enableSlideSelector: _propTypes.default.bool,

  /** Enables the previous button */
  enablePreviousButton: _propTypes.default.bool,

  /** Enables the next button */
  enableNextButton: _propTypes.default.bool,

  /** Action to be called on slide change */
  onSlideChange: _propTypes.default.func,

  /** Controls which transition to use. */
  transition: _propTypes.default.string,

  /** theme is used only to support legacy code */
  theme: _propTypes.default.object
};
BaseCarousel.defaultProps = {
  initialSlideIndex: 0,
  enableSlideSelector: true,
  enablePreviousButton: true,
  enableNextButton: true,
  transition: 'slide',
  theme: _base.default
};
var Carousel = (0, _styledComponents.withTheme)(BaseCarousel);
exports.Carousel = Carousel;
Carousel.displayName = 'Carousel';
var _default = BaseCarousel;
exports.default = _default;