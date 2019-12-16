"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDnd = require("react-dnd");

var _itemTypes = _interopRequireDefault(require("../../../utils/helpers/dnd/item-types"));

var _text = _interopRequireDefault(require("../../../utils/helpers/text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WithDrop =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WithDrop, _React$Component);

  function WithDrop() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WithDrop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WithDrop)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isDraggedElementOver: false,
      inDeadZone: false
    });

    return _this;
  }

  _createClass(WithDrop, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (!this.props.isOver && nextProps.isOver) {
        // eslint-disable-line react/prop-types
        // Equivalent of `mouseover` / `mouseenter`
        this.setState({
          isDraggedElementOver: true
        });
      }

      if (this.props.isOver && !nextProps.isOver) {
        // Equivalent of `mouseout` / `mouseleave`
        this.setState({
          isDraggedElementOver: false
        });
      }

      if (this.props.didDrop) {
        this.setState({
          inDeadZone: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      // this.props.connectDragSource comes from react-dnd DragSource higher
      // order component, so disable the react/prop-types ESLint rule on the line
      // below
      var _this$props = this.props,
          children = _this$props.children,
          connectDropTarget = _this$props.connectDropTarget,
          droppableNode = _this$props.droppableNode; // eslint-disable-line react/prop-types

      var childrenWithProps = _react.default.cloneElement(children, {
        isDraggedElementOver: this.state.isDraggedElementOver,
        inDeadZone: this.state.inDeadZone
      });

      if (droppableNode) {
        connectDropTarget(droppableNode());
        return childrenWithProps;
      }

      return connectDropTarget(childrenWithProps);
    }
  }]);

  return WithDrop;
}(_react.default.Component);

_defineProperty(WithDrop, "propTypes", {
  /**
   * The component that will have drop enabled
   */
  children: _propTypes.default.node.isRequired,
  // The following prop types are required by react-dnd,
  // and aren't used in this component directly. Therefore
  // disable the ESLint rule react/no-unused-prop-types

  /* eslint-disable react/no-unused-prop-types */
  identifier: _propTypes.default.string,
  // identifies an association between WithDrag and WithDrop
  index: _propTypes.default.number.isRequired,
  // identifies the index for this item
  hover: _propTypes.default.func,
  // an optional callback to trigger when the item is hovered
  onDrag: _propTypes.default.func,
  // an optional callback to trigger when dragging occurs
  canDrop: _propTypes.default.func,
  // an optional callback to determine if this item can be dropped on

  /* eslint-enable react/no-unused-prop-types */
  didDrop: _propTypes.default.func
});

_defineProperty(WithDrop, "contextTypes", {
  dragAndDropOnDrag: _propTypes.default.func,
  dragAndDropHover: _propTypes.default.func
});

var ItemTarget = {
  canDrop: function canDrop(props, monitor) {
    return props.canDrop ? props.canDrop(props, monitor) : true;
  },
  hover: function hover(props, monitor, component) {
    if (!monitor.canDrop()) return false;

    _text.default.clearSelection();

    var hover = props.hover || component.context.dragAndDropHover;
    return hover(props, monitor, component);
  }
};
WithDrop = (0, _reactDnd.DropTarget)( // eslint-disable-line no-class-assign
_itemTypes.default.getItemType, ItemTarget, function (connect, monitor) {
  return {
    isOver: monitor.isOver(),
    connectDropTarget: connect.dropTarget(),
    didDrop: monitor.didDrop()
  };
})(WithDrop);
var _default = WithDrop;
exports.default = _default;