"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideStyle = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styleHelper = require("../../../utils/helpers/style-helper");

var _base = _interopRequireDefault(require("../../../style/themes/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      padding: 0 60px;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        :hover{\n          transition: all 0.2s ease-in;\n          transform: scale(1.02);\n          cursor: pointer;\n        }\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      transform: scale(1);\n      opacity: 1;\n\n      ", "\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    transition: .5s;\n    min-width: 80%;\n    transform: scale(.9);\n    opacity: 0.3;\n    margin: 30px 0;\n    box-shadow: ", ";\n\n    ", "\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: inline-block;\n  width: 100%;\n  z-index: 10;\n\n  ", "\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SlideStyle = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      onClick = _ref.onClick,
      id = _ref.id,
      selectedIndex = _ref.selectedIndex,
      isPadded = _ref.isPadded;
  return (0, _styledComponents.css)(_templateObject2(), !(0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject3(), theme.shadows.depth2, id === selectedIndex && (0, _styledComponents.css)(_templateObject4(), onClick && (0, _styledComponents.css)(_templateObject5()))), isPadded && (0, _styledComponents.css)(_templateObject6()));
});

exports.SlideStyle = SlideStyle;
SlideStyle.defaultProps = {
  theme: _base.default
}; // eslint-disable-next-line import/prefer-default-export