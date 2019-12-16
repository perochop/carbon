"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

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

var _lodash = require("lodash");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _rainbow = require("./rainbow.style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Rainbow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Rainbow, _React$Component);

  function Rainbow() {
    _classCallCheck(this, Rainbow);

    return _possibleConstructorReturn(this, _getPrototypeOf(Rainbow).apply(this, arguments));
  }

  _createClass(Rainbow, [{
    key: "componentDidMount",

    /** Renders the initial chart, and stores it on the ref so it can be updated later */
    value: function componentDidMount() {
      var config = generateConfig(this.props.data, this.props.title);
      (0, _lodash.merge)(config, this.props.config);
      this._chart = global.Highcharts.chart(this._chart, config);
    }
    /**
     * Always returns false, but uses the Highcharts API to update the charts
     * data or title if they have been updated.
     */

  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      // use the highchart api to update its title
      if (this.props.title !== nextProps.title) {
        this._chart.setTitle({
          text: nextProps.title
        });
      } // use the highchart api to update its data


      if (this.props.data !== nextProps.data) {
        this._chart.series[0].setData(nextProps.data.toJS());
      } // never re-render the component


      return false;
    }
    /** Renders the component. */

  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_rainbow.RainbowStyle, _extends({
        className: this.props.className
      }, (0, _tags.default)('rainbow', this.props)), _react.default.createElement("div", {
        ref: function ref(chart) {
          _this._chart = chart;
        }
      }));
    }
  }]);

  return Rainbow;
}(_react.default.Component);
/* istanbul ignore next */

/** Generates the config for the Highchart. */


function generateConfig(immutableData, title) {
  var data = immutableData.toJS();
  return {
    credits: {
      enabled: false
    },
    chart: {
      height: 250,
      margin: 0,
      backgroundColor: null,
      spacing: 0,
      plotShadow: false
    },
    title: {
      style: {
        color: '',
        fontFamily: '',
        fontSize: ''
      },
      text: title,
      useHTML: true,
      verticalAlign: 'top',
      y: 35
    },
    tooltip: {
      borderRadius: 100,
      borderWidth: 0,
      followPointer: true,
      headerFormat: '',
      pointFormatter: function pointFormatter() {
        return "<span style=\"color: ".concat(this.color, "\">").concat(this.tooltip, "</span>");
      },
      positioner: function positioner(tooltipWidth, tooltipHeight, point) {
        return function () {
          var x = point.plotX - tooltipWidth / 2;
          var y = point.plotY - (tooltipHeight - 5);
          return {
            x: x,
            y: y
          };
        };
      },
      shadow: false
    },
    plotOptions: {
      pie: {
        animation: {
          duration: 400
        },
        colors: ['#01A4CF', '#FFAB02', '#EA433F', '#FFDD4F', '#FF448F'],
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '100%'],
        dataLabels: {
          connectorWidth: 0,
          defer: false,
          distance: 18,
          enabled: true,
          formatter: function formatter() {
            var display = 'display: ';
            display += this.point.visible ? 'block' : 'none';
            return "\n              <span style=\"color: ".concat(this.point.color, "; ").concat(display, "\">\n                <strong>").concat(this.point.name, "</strong><br>").concat(this.point.label, "\n              </span>\n            ");
          },
          padding: 0,
          style: {
            fontSize: '',
            fontWeight: '',
            fontFamily: ''
          },
          useHTML: true
        },
        point: {
          events: {
            mouseOver: function mouseOver(ev) {
              ev.target.graphic.zIndexSetter(1);
            },
            mouseOut: function mouseOut(ev) {
              ev.target.graphic.zIndexSetter(0);
            }
          }
        },
        states: {
          hover: {
            halo: false
          }
        }
      }
    },
    series: [{
      data: data,
      innerSize: '65%',
      type: 'pie'
    }]
  };
}

Rainbow.propTypes = {
  /** Supply a custom title for the chart. */
  title: _propTypes.default.string,

  /** Supply data for the chart. */
  data: _propTypes.default.object.isRequired,

  /** Supply a custom config object to the Highcharts. */
  config: _propTypes.default.object,

  /** [legacy] Classes to apply to the component. */
  className: _propTypes.default.string
};
var _default = Rainbow;
exports.default = _default;