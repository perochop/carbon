"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _lodash = require("lodash");

var _tooltip = _interopRequireDefault(require("../../../components/tooltip"));

var _portal = _interopRequireDefault(require("../../../components/portal"));

var _chainFunctions = _interopRequireDefault(require("../../helpers/chain-functions"));

var _ether = require("../../ether");

var _optionsHelper = _interopRequireDefault(require("../../helpers/options-helper"));

var _calculatePosition = _interopRequireDefault(require("./calculate-position"));

var _inputSizes = _interopRequireDefault(require("../../../__experimental__/components/input/input-sizes.style"));

var _tooltipPointer = require("../../../components/tooltip/tooltip-pointer.style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * TooltipDecorator.
 *
 * This decorator attaches a tooltip to a component.
 *
 * == How to use Tooltip decorator in a component:
 *
 * In your file:
 *
 *   import TooltipDecorator from 'carbon-react/lib/utils/decorators/tooltip-decorator';
 *
 * To use the decorator, wrap your component with it:
 *
 *   const MyComponent = TooltipDecorator(
 *   class MyComponent extends React.Component {
 *     ...
 *   });
 *
 * You must also output the tooltip HTML in your component's render method:
 *
 * e.g.
 *
 * render() {
 *   return (
 *     <div>
 *       { this.tooltipHTML }
 *       ...your components JSX
 *     </div>
 *   );
 * }
 *
 * You must also give the surrounding div of the component a position of 'relative'
 *
 * e.g.
 *
 * render() {
 *   return (
 *     <div className='relative-class'>
 *       { this.tooltipHTML }
 *       ...your component's JSX
 *     </div>
 *   );
 * }
 *
 * The targetted JSX must also have a ref of _target and have the correct componentProps
 *
 * e.g.
 *
 * render() {
 *   return (
 *     <div className='relative-class'>
 *       <span
 *         ref={ (comp) => this._target = comp }
 *         { ...this.componentProps }
 *       />
 *       { this.tooltipHTML }
 *     </div>
 *   );
 * }
 *
 * To activate the tooltip, you must pass a prop of 'tooltipMessage' with some text content.
 *
 * render() {
 *   return (
 *     <MyComponent tooltipMessage='Some Helpful Content' />
 *   )
 * }
 *
 *
 * @method TooltipDecorator
 * @param {Class} ComposedComponent class to decorate
 * @return {Object} Decorated Component
 */
var TooltipDecorator = function TooltipDecorator(ComposedComponent) {
  var Component =
  /*#__PURE__*/
  function (_ComposedComponent) {
    _inherits(Component, _ComposedComponent);

    function Component() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Component);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Component)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "_showTooltipTimeout", null);

      _defineProperty(_assertThisInitialized(_this), "_hideTooltipTimeout", null);

      _defineProperty(_assertThisInitialized(_this), "state", {
        isVisible: false,
        tooltipAlign: '',
        tooltipPosition: ''
      });

      _defineProperty(_assertThisInitialized(_this), "isVisible", function () {
        return _this.state.isVisible || _this.props.tooltipVisible;
      });

      _defineProperty(_assertThisInitialized(_this), "onShow", function () {
        clearTimeout(_this._showTooltipTimeout);
        clearTimeout(_this._hideTooltipTimeout);
        if (_this.state.isVisible) return;
        _this._showTooltipTimeout = setTimeout(function () {
          _this.setState({
            isVisible: true
          });

          _this.positionTooltip();
        }, 100);
      });

      _defineProperty(_assertThisInitialized(_this), "onHide", function () {
        clearTimeout(_this._showTooltipTimeout);
        clearTimeout(_this._hideTooltipTimeout);
        if (!_this.state.isVisible) return;
        _this._hideTooltipTimeout = setTimeout(function () {
          _this.setState({
            isVisible: false
          });
        }, 100);
      });

      _defineProperty(_assertThisInitialized(_this), "getTarget", function () {
        return _reactDom.default.findDOMNode(_this._target); // eslint-disable-line react/no-find-dom-node
      });

      _defineProperty(_assertThisInitialized(_this), "getTooltip", function () {
        return _reactDom.default.findDOMNode(_this._tooltip); // eslint-disable-line react/no-find-dom-node
      });

      _defineProperty(_assertThisInitialized(_this), "positionTooltip", function () {
        var topPosition, leftPosition;

        var tooltip = _this.getTooltip();

        var target = _this.getTarget();

        if (!tooltip || !target) {
          if (_this.state.isVisible) _this.setState({
            isVisible: false
          });
          return;
        }

        var alignment = _this.state.tooltipAlign || _this.props.tooltipAlign || 'center';
        var position = _this.state.tooltipPosition || _this.props.tooltipPosition || 'top';
        var shifts = (0, _calculatePosition.default)(tooltip, target);

        var isTooltipOffScreenRight = _this.isTooltipOffScreenRight(position, alignment, tooltip.offsetWidth, shifts);

        var inputDistanceOffset = _this.getInputDistanceOffset(position);

        if (isTooltipOffScreenRight) {
          _this.realignOffscreenTooltip(position, alignment);
        }

        if (position === 'top' || position === 'bottom') {
          topPosition = shifts.tooltipDistances[position] + inputDistanceOffset;
          leftPosition = shifts.vertical[alignment] + _this.getHorizontalOffset();
        } else {
          topPosition = shifts.horizontal[alignment];
          leftPosition = shifts.tooltipDistances[position] + inputDistanceOffset;
        }

        (0, _ether.styleElement)(tooltip, 'top', "".concat(topPosition, "px"));
        (0, _ether.styleElement)(tooltip, 'left', "".concat(leftPosition, "px"));
      });

      _defineProperty(_assertThisInitialized(_this), "isTooltipOffScreenRight", function (position, alignment, tooltipWidth, shifts) {
        var pointerX;

        if (position === 'left') {
          return false;
        }

        if (position === 'right') {
          pointerX = shifts.tooltipDistances.right;
        } else {
          pointerX = shifts.vertical[alignment];
        }

        return window.innerWidth < pointerX + tooltipWidth;
      });

      _defineProperty(_assertThisInitialized(_this), "realignOffscreenTooltip", function (position, alignment) {
        if (alignment === 'right' || position === 'left') return;

        if (position === 'right') {
          _this.setState({
            tooltipPosition: 'top',
            tooltipAlign: 'right'
          });
        } else {
          _this.setState({
            tooltipAlign: 'right'
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "getInputDistanceOffset", function (position) {
        if (!_this.props.isPartOfInput || !_this.props.isThemeModern || !_this.props.size) return 0;
        var inputSizes = _inputSizes.default[_this.props.size];
        var tooltipVerticalOffset = inputSizes.tooltipVerticalOffset,
            tooltipHorizontalOffset = inputSizes.tooltipHorizontalOffset;
        var inputGap = 2;

        switch (position) {
          case 'top':
            return -tooltipVerticalOffset - _tooltipPointer.pointerSideMargin;

          case 'bottom':
            return tooltipVerticalOffset + _tooltipPointer.pointerSideMargin;

          case 'left':
            return -tooltipHorizontalOffset - _tooltipPointer.pointerSideMargin - inputGap;

          case 'right':
          default:
            return tooltipHorizontalOffset + _tooltipPointer.pointerSideMargin + inputGap;
        }
      });

      _defineProperty(_assertThisInitialized(_this), "getHorizontalOffset", function () {
        if (!_this.props.isThemeModern || !_this.props.isPartOfInput || !_this.props.size) return 0;
        return _inputSizes.default[_this.props.size].tooltipHorizontalOffset;
      });

      return _this;
    }

    _createClass(Component, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (_get(_getPrototypeOf(Component.prototype), "componentDidMount", this)) _get(_getPrototypeOf(Component.prototype), "componentDidMount", this).call(this);
        if (this.props.tooltipVisible) this.positionTooltip();
      }
    }, {
      key: "UNSAFE_componentWillUpdate",
      value: function UNSAFE_componentWillUpdate(nextProps, nextState) {
        if (_get(_getPrototypeOf(Component.prototype), "UNSAFE_componentWillUpdate", this)) {
          _get(_getPrototypeOf(Component.prototype), "UNSAFE_componentWillUpdate", this).call(this, nextProps, nextState);
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (_get(_getPrototypeOf(Component.prototype), "componentDidUpdate", this)) {
          _get(_getPrototypeOf(Component.prototype), "componentDidUpdate", this).call(this, prevProps);
        }

        if (this.props.tooltipMessage && this.isVisible()) {
          this.positionTooltip();
        }
      }
    }, {
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        if (_get(_getPrototypeOf(Component.prototype), "UNSAFE_componentWillReceiveProps", this)) {
          _get(_getPrototypeOf(Component.prototype), "UNSAFE_componentWillReceiveProps", this).call(this, nextProps);
        }

        if (nextProps.tooltipPosition !== this.props.tooltipPosition) {
          this.setState({
            tooltipPosition: '',
            tooltipAlign: ''
          });
        }
      }
    }, {
      key: "componentProps",
      get: function get() {
        var props = _get(_getPrototypeOf(Component.prototype), "componentProps", this) || {};

        if (this.props.tooltipMessage) {
          props.onMouseEnter = (0, _chainFunctions.default)(this.onShow, props.onMouseEnter);
          props.onMouseLeave = (0, _chainFunctions.default)(this.onHide, props.onMouseLeave);
          props.onFocus = (0, _chainFunctions.default)(this.onShow, props.onFocus);
          props.onBlur = (0, _chainFunctions.default)(this.onHide, props.onBlur);
          props.onTouchEnd = this.isVisible() ? this.onHide : this.onShow;
        }

        return props;
      }
    }, {
      key: "tooltipHTML",
      get: function get() {
        var _this2 = this;

        return this.props.tooltipMessage && this.isVisible() && _react.default.createElement(_portal.default, {
          key: "tooltip"
        }, _react.default.createElement(_tooltip.default, {
          align: this.state.tooltipAlign || this.props.tooltipAlign,
          "data-element": "tooltip",
          isVisible: this.isVisible(),
          onMouseEnter: this.onShow,
          onMouseLeave: this.onHide,
          position: this.state.tooltipPosition || this.props.tooltipPosition,
          ref: function ref(comp) {
            _this2._tooltip = comp;
          },
          size: this.props.size,
          type: this.props.tooltipType,
          isPartOfInput: this.props.isPartOfInput
        }, this.props.tooltipMessage));
      }
    }]);

    return Component;
  }(ComposedComponent);

  _defineProperty(Component, "propTypes", (0, _lodash.assign)({}, ComposedComponent.propTypes, {
    tooltipMessage: _propTypes.default.node,
    tooltipPosition: _propTypes.default.oneOf(_optionsHelper.default.positions),
    tooltipAlign: _propTypes.default.oneOf(_optionsHelper.default.alignAroundEdges),
    isPartOfInput: _propTypes.default.bool,
    isThemeModern: _propTypes.default.bool
  }));

  Component.displayName = ComposedComponent.displayName || ComposedComponent.name;
  return Component;
};

var _default = TooltipDecorator;
exports.default = _default;