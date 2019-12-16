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

var _base = _interopRequireDefault(require("../../../style/themes/base"));

var _tabTitleClassic = _interopRequireDefault(require("./tab-title-classic.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    border-bottom-color: ", ";\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    border-bottom-color: ", ";\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      border-right-color: ", ";\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      border-right-color: ", ";\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      border-right-color: ", ";\n      background-color: transparent;\n\n      &:hover {\n        border-right-color: ", ";\n        background-color: transparent;\n      }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background-color: transparent;\n    border-bottom: 0px;\n    border-right: 2px solid ", ";\n    display: block;\n    height: auto;\n    margin-left: 0px;\n    margin-top: 2px;\n\n    &:first-child {\n      margin-top: 0;\n    }\n\n    &:hover {\n      background: transparent;\n      border-right-color: ", ";\n    }\n\n    ", "\n\n    ", "\n\n    ", "\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    background-color: transparent;\n    border-bottom-color: ", ";\n\n    &:focus {\n      outline: none;\n      box-shadow: 0 0 6px ", ";        \n    }\n\n    &:hover {\n      background: transparent;\n      border-bottom-color: ", ";\n      color: ", ";\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    &:hover,\n    &:focus {\n      background: transparent;\n      border-bottom-color: ", ";\n      color: ", ";\n      outline: none;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: transparent;\n  border-bottom: 2px solid ", ";\n  color: ", ";\n  display: inline-block;\n  font-weight: bold;\n  height: 100%;\n  margin-left: 2px;\n  padding: 11px 15px 10px;\n\n  &:first-child {\n    margin-left: 0;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTabTitle = _styledComponents.default.li(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.disabled.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.disabled.disabled;
}, function (_ref3) {
  var isTabSelected = _ref3.isTabSelected;
  return !isTabSelected && (0, _styledComponents.css)(_templateObject2(), function (_ref4) {
    var theme = _ref4.theme;
    return theme.colors.hoveredTabKeyline;
  }, function (_ref5) {
    var theme = _ref5.theme;
    return theme.text.color;
  });
}, function (_ref6) {
  var isTabSelected = _ref6.isTabSelected;
  return isTabSelected && (0, _styledComponents.css)(_templateObject3(), function (_ref7) {
    var theme = _ref7.theme;
    return theme.text.color;
  }, function (_ref8) {
    var theme = _ref8.theme;
    return theme.colors.primary;
  }, function (_ref9) {
    var theme = _ref9.theme;
    return theme.colors.focus;
  }, function (_ref10) {
    var theme = _ref10.theme;
    return theme.colors.primary;
  }, function (_ref11) {
    var theme = _ref11.theme;
    return theme.text.color;
  });
}, function (_ref12) {
  var position = _ref12.position;
  return position === 'left' && (0, _styledComponents.css)(_templateObject4(), function (_ref13) {
    var theme = _ref13.theme;
    return theme.disabled.background;
  }, function (_ref14) {
    var theme = _ref14.theme;
    return theme.colors.hoveredTabKeyline;
  }, function (_ref15) {
    var isTabSelected = _ref15.isTabSelected;
    return isTabSelected && (0, _styledComponents.css)(_templateObject5(), function (_ref16) {
      var theme = _ref16.theme;
      return theme.colors.primary;
    }, function (_ref17) {
      var theme = _ref17.theme;
      return theme.colors.primary;
    });
  }, function (_ref18) {
    var tabHasWarning = _ref18.tabHasWarning;
    return tabHasWarning && (0, _styledComponents.css)(_templateObject6(), function (_ref19) {
      var theme = _ref19.theme;
      return theme.colors.warning;
    });
  }, function (_ref20) {
    var tabHasError = _ref20.tabHasError;
    return tabHasError && (0, _styledComponents.css)(_templateObject7(), function (_ref21) {
      var theme = _ref21.theme;
      return theme.colors.error;
    });
  });
}, function (_ref22) {
  var tabHasWarning = _ref22.tabHasWarning;
  return tabHasWarning && (0, _styledComponents.css)(_templateObject8(), function (_ref23) {
    var theme = _ref23.theme;
    return theme.colors.warning;
  });
}, function (_ref24) {
  var tabHasError = _ref24.tabHasError;
  return tabHasError && (0, _styledComponents.css)(_templateObject9(), function (_ref25) {
    var theme = _ref25.theme;
    return theme.colors.error;
  });
}, _tabTitleClassic.default);

StyledTabTitle.propTypes = {
  position: _propTypes.default.oneOf(['top', 'left'])
};
StyledTabTitle.defaultProps = {
  theme: _base.default,
  position: 'top'
};
var _default = StyledTabTitle;
exports.default = _default;