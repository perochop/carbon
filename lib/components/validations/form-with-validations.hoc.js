"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withValidations = exports.ValidationsContext = void 0;

require("regenerator-runtime/runtime");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _validationTypes = _interopRequireDefault(require("./validation-types.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ValidationsContext = _react.default.createContext();

exports.ValidationsContext = ValidationsContext;

var withValidations = function withValidations(WrappedComponent) {
  var WithValidations =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithValidations, _React$Component);

    function WithValidations() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, WithValidations);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WithValidations)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        formIsValidating: false,
        errorCount: 0,
        warningCount: 0,
        infoCount: 0
      });

      _defineProperty(_assertThisInitialized(_this), "inputs", {});

      _defineProperty(_assertThisInitialized(_this), "addInput", function (name, validate) {
        _this.inputs[name] = validate;
      });

      _defineProperty(_assertThisInitialized(_this), "removeInput", function (name) {
        delete _this.inputs[name];
      });

      _defineProperty(_assertThisInitialized(_this), "adjustCount", function (type, hasFailed) {
        var TYPES = Object.keys(_validationTypes.default);

        if (!TYPES.includes(type)) {
          throw Error("You can only validate for these given types: ".concat(TYPES));
        }

        var stateProp = "".concat(type, "Count");
        var adjustment = hasFailed ? 1 : -1;

        _this.setState(function (prev) {
          return _defineProperty({}, stateProp, prev[stateProp] + adjustment);
        });
      });

      _defineProperty(_assertThisInitialized(_this), "validateRegisteredInputs",
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var promises;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  formIsValidating: true
                });

                promises = [];
                Object.keys(_this.inputs).forEach(function (name) {
                  var validate = _this.inputs[name];
                  promises = promises.concat(validate(['error'], true)); // only validate errors on form submit
                });
                return _context.abrupt("return", Promise.all(promises).then(function (isValid) {
                  _this.setState({
                    formIsValidating: false
                  });

                  return !isValid.includes(false);
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));

      return _this;
    }

    _createClass(WithValidations, [{
      key: "getContext",
      value: function getContext() {
        return {
          addInput: this.addInput,
          removeInput: this.removeInput,
          adjustCount: this.adjustCount
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return _react.default.createElement(ValidationsContext.Provider, {
          value: this.getContext()
        }, _react.default.createElement(WrappedComponent, _extends({
          validate: this.validateRegisteredInputs,
          isValidating: this.state.formIsValidating,
          errorCount: this.state.errorCount,
          warningCount: this.state.warningCount,
          infoCount: this.state.infoCount
        }, this.props, {
          innerRef: function innerRef(form) {
            _this2._form = form;
          }
        }), this.props.children));
      }
    }]);

    return WithValidations;
  }(_react.default.Component);

  WithValidations.propTypes = {
    children: _propTypes.default.node // Children elements

  };
  WithValidations.displayName = 'Form';
  return WithValidations;
};

exports.withValidations = withValidations;