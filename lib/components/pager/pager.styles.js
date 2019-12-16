"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PagerSummaryStyles = exports.PagerNoSelectStyles = exports.PagerButtonWrapperStyles = exports.PagerLinkStyles = exports.PagerNavInnerStyles = exports.PagerNavigationStyles = exports.PagerSizeOptionsInnerStyles = exports.PagerSizeOptionsStyles = exports.PagerContainerStyles = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _pagerClassic = require("./pager-classic.styles");

var _input = _interopRequireDefault(require("../../__experimental__/components/input/input.style"));

var _inputPresentation = _interopRequireDefault(require("../../__experimental__/components/input/input-presentation.style"));

var _small = _interopRequireDefault(require("../../style/themes/small"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1 1 30%;\n  justify-content: flex-end;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  user-select: none;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    cursor: not-allowed;\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n      &:hover {\n        color: ", ";\n      }\n\n      &:focus {\n        outline: none;\n        background-color: ", ";\n        color: ", ";\n      }\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n\n    ", "\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 4px;\n  font-size: 13px;\n  border-width: 0;\n  text-decoration: underline;\n  background-color: transparent;\n  cursor: pointer;\n\n  ", "\n \n  ", "\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    transform: rotate(-90deg) scale(1.4);\n    margin-right: 0;\n    margin-left: 8px;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    opacity: 0.3;\n    cursor: not-allowed;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  transform: rotate(90deg) scale(1.4);\n  cursor: pointer;\n  margin-right: 8px;\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 0 12px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: center;\n  align-items: center;\n\n  && ", " {\n    padding: 0;\n    margin: 0 4px;\n    line-height: 24px;\n    min-height: 24px;\n  }\n\n  && ", " {\n    text-align: center;\n    height: 24px;\n  }\n\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1 1 30%;\n  justify-content: flex-start;\n\n  .carbon-dropdown {\n    width: 55px;\n    margin: 0 4px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      border: 1px solid ", ";\n      background-color: ", ";\n      \n      .common-input__input {\n        &:active, :hover {\n          border-color: ", ";\n        }\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  padding: 9px 24px;\n  align-items: center;\n  border-top-width: 0;\n  font-size: 13px;  \n  ", "\n  border-top: none;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PagerContainerStyles = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.table && theme.colors && (0, _styledComponents.css)(_templateObject2(), theme.table.selected, theme.table.zebra, theme.table.secondary);
}, _pagerClassic.PagerContainerClassicStyles);

exports.PagerContainerStyles = PagerContainerStyles;

var PagerSizeOptionsStyles = _styledComponents.default.div(_templateObject3());

exports.PagerSizeOptionsStyles = PagerSizeOptionsStyles;

var PagerSizeOptionsInnerStyles = _styledComponents.default.div(_templateObject4());

exports.PagerSizeOptionsInnerStyles = PagerSizeOptionsInnerStyles;

var PagerNavigationStyles = _styledComponents.default.div(_templateObject5(), _inputPresentation.default, _input.default, _pagerClassic.PagerNavigationClassicStyles);

exports.PagerNavigationStyles = PagerNavigationStyles;

var PagerNavInnerStyles = _styledComponents.default.div(_templateObject6());

exports.PagerNavInnerStyles = PagerNavInnerStyles;

var PagerButtonWrapperStyles = _styledComponents.default.div(_templateObject7(), function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject8());
}, function (_ref3) {
  var next = _ref3.next;
  return next && (0, _styledComponents.css)(_templateObject9());
});

exports.PagerButtonWrapperStyles = PagerButtonWrapperStyles;

var PagerLinkStyles = _styledComponents.default.button(_templateObject10(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.pager && (0, _styledComponents.css)(_templateObject11(), theme.pager.active, function (_ref5) {
    var disabled = _ref5.disabled;
    return !disabled && (0, _styledComponents.css)(_templateObject12(), theme.pager.hover, theme.colors.focusedLinkBackground, theme.pager.hover);
  });
}, function (_ref6) {
  var disabled = _ref6.disabled,
      theme = _ref6.theme;
  return disabled && (0, _styledComponents.css)(_templateObject13(), theme.pager.disabled);
});

exports.PagerLinkStyles = PagerLinkStyles;

var PagerNoSelectStyles = _styledComponents.default.span(_templateObject14());

exports.PagerNoSelectStyles = PagerNoSelectStyles;

var PagerSummaryStyles = _styledComponents.default.div(_templateObject15());

exports.PagerSummaryStyles = PagerSummaryStyles;
PagerContainerStyles.defaultProps = {
  theme: _small.default
};
PagerSizeOptionsStyles.defaultProps = {
  theme: _small.default
};
PagerSizeOptionsInnerStyles.defaultProps = {
  theme: _small.default
};
PagerNavigationStyles.defaultProps = {
  theme: _small.default
};
PagerNavInnerStyles.defaultProps = {
  theme: _small.default
};
PagerLinkStyles.defaultProps = {
  theme: _small.default
};
PagerButtonWrapperStyles.defaultProps = {
  theme: _small.default
};
PagerSummaryStyles.defaultProps = {
  theme: _small.default
};