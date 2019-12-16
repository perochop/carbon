"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _classicSpinnerConfig = require("./classicSpinnerConfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  animation: ", " 0.7s linear forwards infinite;\n  border-radius: 50%;\n  box-sizing: content-box;\n  display: inline-block;\n  border-style: solid;\n  border-top-color: ", ";\n  border-bottom-color: ", ";\n  border-right-color: ", ";\n  border-left-color: ", ";\n  width: ", ";\n  height: ", ";\n  border-width: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var spinnerAnimation = (0, _styledComponents.keyframes)(_templateObject());

var StyledSpinner = _styledComponents.default.div(_templateObject2(), spinnerAnimation, function (_ref) {
  var type = _ref.type;
  return _classicSpinnerConfig.classicSpinnerColors[type].borderTop;
}, function (_ref2) {
  var type = _ref2.type;
  return _classicSpinnerConfig.classicSpinnerColors[type].borderBottom;
}, function (_ref3) {
  var type = _ref3.type;
  return _classicSpinnerConfig.classicSpinnerColors[type].borderRight;
}, function (_ref4) {
  var type = _ref4.type;
  return _classicSpinnerConfig.classicSpinnerColors[type].borderLeft;
}, function (_ref5) {
  var size = _ref5.size;
  return _classicSpinnerConfig.classicSpinnerSizes[size].width;
}, function (_ref6) {
  var size = _ref6.size;
  return _classicSpinnerConfig.classicSpinnerSizes[size].height;
}, function (_ref7) {
  var size = _ref7.size;
  return _classicSpinnerConfig.classicSpinnerSizes[size].borderWidth;
});

StyledSpinner.defaultProps = {
  type: 'info',
  size: 'medium'
};
StyledSpinner.propTypes = {
  type: _propTypes.default.oneOf(_optionsHelper.default.colors),
  size: _propTypes.default.oneOf(_optionsHelper.default.sizesFull)
};
var _default = StyledSpinner;
exports.default = _default;