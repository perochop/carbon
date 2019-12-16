"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselSliderWrapper = exports.CarouselWrapperStyle = exports.CarouselSelectorLabelStyle = exports.CarouselSelectorInputStyle = exports.CarouselSelectorInputWrapperStyle = exports.CarouselSelectorWrapperStyle = exports.CarouselStyledIconRight = exports.CarouselStyledIconLeft = exports.CarouselStyledIcon = exports.CarouselButtonStyle = exports.CarouselPreviousButtonWrapperStyle = exports.CarouselNextButtonWrapperStyle = exports.CarouselNavigationStyle = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _icon = _interopRequireDefault(require("../icon"));

var _slide = require("./slide.config");

var _styleHelper = require("../../utils/helpers/style-helper");

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _carouselClassic = require("./carousel-classic.style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  .carbon-carousel__content {\n    overflow: hidden;\n    position: relative;\n}\n\n  ", ";\n  ", ";\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\ntransition: .4s;\ndisplay: flex;\nposition: relative;\nleft: ", "%;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n    width: 22px;\n  "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  line-height: 20px;\n  vertical-align: middle;\n\n  ", "\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n          background: #255BC7;\n          top: 1px;\n        "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    height: 20px;\n    margin-top: ", ";\n    text-align: center;\n\n    ", ":checked {\n      + ", " {\n        background: ", ";\n        border-color: transparent;\n        height: 10px;\n        position: relative;\n        width: 10px;\n\n        ", "\n      }\n    }\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  background: ", ";\n  margin: 0px 4px;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  ", ";\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n      outline: none;\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n        background-color: ", ";\n        cursor: default;\n\n        ", "{\n          cursor: default;\n        }\n      "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    border: none;\n    width: 40px;\n    height: 64px;\n    background: ", ";\n    color: ", ";\n    opacity: ", ";\n\n    &:hover {\n      background-color: ", ";\n      cursor: ", ";\n\n      ", "\n    }\n\n    &:active {\n      border: none;\n    }\n\n    &:focus {\n    outline: 2px solid ", ";\n      \n    ::-moz-focus-inner{\n      border: 0;\n    }\n\n    ", "\n    }\n\n    ", "\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  transform: rotate(-90deg);\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  transform: rotate(90deg);\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    :hover {\n      color: ", ";\n    }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  ", "\n  &&::before {\n    font-size: ", "\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  right: 0;\n  margin-right: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-left:  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin-top: -22.5px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: -32.5px;\n  position: absolute;\n  top: 50%;\n  z-index: 20;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CarouselNavigationStyle = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject2());
});

exports.CarouselNavigationStyle = CarouselNavigationStyle;
var CarouselPreviousButtonWrapperStyle = (0, _styledComponents.default)(CarouselNavigationStyle)(_templateObject3(), function (_ref2) {
  var theme = _ref2.theme;
  return (0, _styleHelper.isClassic)(theme) ? '0' : '2px';
});
exports.CarouselPreviousButtonWrapperStyle = CarouselPreviousButtonWrapperStyle;
var CarouselNextButtonWrapperStyle = (0, _styledComponents.default)(CarouselNavigationStyle)(_templateObject4(), function (_ref3) {
  var theme = _ref3.theme;
  return (0, _styleHelper.isClassic)(theme) ? '0' : '2px';
});
exports.CarouselNextButtonWrapperStyle = CarouselNextButtonWrapperStyle;
var CarouselStyledIcon = (0, _styledComponents.default)(_icon.default)(_templateObject5(), function (_ref4) {
  var theme = _ref4.theme;
  return !(0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject6(), theme.colors.white, theme.colors.white);
}, function (_ref5) {
  var theme = _ref5.theme;
  return (0, _styleHelper.isClassic)(theme) ? '25px' : '16px';
});
exports.CarouselStyledIcon = CarouselStyledIcon;
var CarouselStyledIconLeft = (0, _styledComponents.default)(CarouselStyledIcon)(_templateObject7());
exports.CarouselStyledIconLeft = CarouselStyledIconLeft;
var CarouselStyledIconRight = (0, _styledComponents.default)(CarouselStyledIcon)(_templateObject8());
exports.CarouselStyledIconRight = CarouselStyledIconRight;

var CarouselButtonStyle = _styledComponents.default.button(_templateObject9(), function (_ref6) {
  var theme = _ref6.theme,
      disabled = _ref6.disabled;
  return (0, _styledComponents.css)(_templateObject10(), theme.colors.primary, theme.colors.white, disabled ? '0.1' : '1', theme.colors.secondary, disabled ? 'default' : 'pointer', disabled && (0, _styledComponents.css)(_templateObject11(), theme.colors.primary, CarouselStyledIcon), theme.colors.focus, disabled && (0, _styledComponents.css)(_templateObject12()), _carouselClassic.CarouselButtonStyleClassic);
});

exports.CarouselButtonStyle = CarouselButtonStyle;

var CarouselSelectorInputStyle = _styledComponents.default.input(_templateObject13());

exports.CarouselSelectorInputStyle = CarouselSelectorInputStyle;

var CarouselSelectorLabelStyle = _styledComponents.default.label(_templateObject14(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.carousel.inactiveSelectorBackground;
}, _carouselClassic.CarouselSelectorLabelStyleClassic);

exports.CarouselSelectorLabelStyle = CarouselSelectorLabelStyle;

var CarouselSelectorWrapperStyle = _styledComponents.default.div(_templateObject15(), function (_ref8) {
  var theme = _ref8.theme;
  return (0, _styledComponents.css)(_templateObject16(), (0, _styleHelper.isClassic)(theme) ? '5px' : '25px', CarouselSelectorInputStyle, CarouselSelectorLabelStyle, theme.carousel.activeSelectorBackground, (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject17()));
});

exports.CarouselSelectorWrapperStyle = CarouselSelectorWrapperStyle;

var CarouselSelectorInputWrapperStyle = _styledComponents.default.span(_templateObject18(), function (_ref9) {
  var theme = _ref9.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject19());
});

exports.CarouselSelectorInputWrapperStyle = CarouselSelectorInputWrapperStyle;

var CarouselSliderWrapper = _styledComponents.default.div(_templateObject20(), function (_ref10) {
  var elementIndex = _ref10.elementIndex;
  return 10 - 80 * elementIndex;
});

exports.CarouselSliderWrapper = CarouselSliderWrapper;

var CarouselWrapperStyle = _styledComponents.default.div(_templateObject21(), _slide.slideAnimation, _slide.fadeAnimation);

exports.CarouselWrapperStyle = CarouselWrapperStyle;
CarouselNavigationStyle.defaultProps = {
  theme: _base.default
};
CarouselButtonStyle.defaultProps = {
  theme: _base.default
};
CarouselStyledIcon.defaultProps = {
  theme: _base.default
};
CarouselSelectorWrapperStyle.defaultProps = {
  theme: _base.default
};
CarouselSelectorLabelStyle.defaultProps = {
  theme: _base.default
};
CarouselStyledIconLeft.defaultProps = {
  theme: _base.default
};
CarouselStyledIconRight.defaultProps = {
  theme: _base.default
};
CarouselPreviousButtonWrapperStyle.defaultProps = {
  theme: _base.default
};
CarouselNextButtonWrapperStyle.defaultProps = {
  theme: _base.default
};