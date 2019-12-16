"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledFormFooter = exports.StyledResponsiveFooterWrapper = exports.StyledAdditionalFormAction = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formField = _interopRequireDefault(require("../../../__experimental__/components/form-field/form-field.style"));

var _button = _interopRequireDefault(require("../../../components/button/button.style"));

var _formSummary = _interopRequireDefault(require("./form-summary/form-summary.style"));

var _styleHelper = require("../../../utils/helpers/style-helper");

var _base = _interopRequireDefault(require("../../../style/themes/base"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    padding-bottom: 80px;\n    ", " {\n      animation: ", " 0.25s ease-out;  \n      background-color: ", ";\n      bottom: 0;\n      box-shadow: 0 -4px 12px 0 rgba(0, 0, 0, 0.05);\n      box-sizing: content-box;\n      left: 0;\n      padding-bottom: 13px;\n      padding-top: 15px;\n      position: fixed;\n      width: 100%;\n      z-index: 1000;\n      \n      ", " {\n        align-items: center;\n        display: flex;\n        margin-top: 0;\n        border-left-style: solid;\n        border-left-color: ", ";\n        border-right-style: solid;\n        border-right-color: ", ";\n        border-width: 0;\n        box-sizing: border-box;\n        min-width: 450px;\n        padding: 0 40px;\n      }\n    }\n  "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    padding-bottom: 80px;\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    && ", " {\n      margin-bottom: 32px;\n    }\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  ", " {\n    align-items: center;\n    display: flex;\n    ", "\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  [data-component='icon'].common-input__icon {\n    height: 19px;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    ", " {\n      justify-content: flex-end;\n    }\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 48px;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  0%   { bottom: -50px; }\n  100% { bottom: 0; }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    && ", " {\n      ", " {\n        ", "\n      } \n    }\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    &&&& {\n      border-width: ", ";\n    }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin: 20px auto 0 auto;\n  max-width: inherit;\n  min-width: inherit;\n  padding: 0;\n  align-items: center;\n  display: flex;\n  ", "\n\n  div:first-of-type {\n    ", " {\n      margin-left: 0;\n    }\n  }\n\n  ", "\n\n  ", ":first-of-type { \n    margin-left: 0;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      display: inline-block;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      flex-grow: 1;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    ", "\n\n    ", "\n\n    ", "\n\n    && ", " {\n      margin-left: 0px;\n      &:first-child {\n        margin-left: 0;\n      }\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var applyButtonLeftMargin = function applyButtonLeftMargin(_ref) {
  var theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) ? 'margin-left: 15px;' : 'margin-left: 16px;';
};

var StyledAdditionalFormAction = _styledComponents.default.div(_templateObject(), function (_ref2) {
  var type = _ref2.type;
  return type && (0, _styledComponents.css)(_templateObject2(), type === 'leftAlignedActions' && (0, _styledComponents.css)(_templateObject3()), type !== 'leftAlignedActions' && (0, _styledComponents.css)(_templateObject4()), applyButtonLeftMargin, _button.default);
});

exports.StyledAdditionalFormAction = StyledAdditionalFormAction;

var StyledResponsiveFooterWrapper = _styledComponents.default.div(_templateObject5(), function (_ref3) {
  var borderWidth = _ref3.borderWidth;
  return borderWidth && (0, _styledComponents.css)(_templateObject6(), borderWidth);
}, _button.default, function (_ref4) {
  var showSummary = _ref4.showSummary,
      buttonAlign = _ref4.buttonAlign,
      hasAdditionalActions = _ref4.hasAdditionalActions;
  return showSummary && (buttonAlign === 'right' || hasAdditionalActions) && (0, _styledComponents.css)(_templateObject7(), _formSummary.default, _button.default, applyButtonLeftMargin);
}, StyledAdditionalFormAction);

exports.StyledResponsiveFooterWrapper = StyledResponsiveFooterWrapper;
var FormButtonAnimation = (0, _styledComponents.keyframes)(_templateObject8());

var StyledFormFooter = _styledComponents.default.div(_templateObject9(), function (_ref5) {
  var theme = _ref5.theme,
      stickyFooter = _ref5.stickyFooter;
  return !(0, _styleHelper.isClassic)(theme) && !stickyFooter && (0, _styledComponents.css)(_templateObject10());
}, function (_ref6) {
  var buttonAlign = _ref6.buttonAlign;
  return buttonAlign === 'right' && (0, _styledComponents.css)(_templateObject11(), StyledResponsiveFooterWrapper);
});

exports.StyledFormFooter = StyledFormFooter;

var StyledForm = _styledComponents.default.form(_templateObject12(), _button.default, applyButtonLeftMargin, function (_ref7) {
  var theme = _ref7.theme;
  return !(0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject13(), _formField.default);
}, function (_ref8) {
  var fixedBottom = _ref8.fixedBottom;
  return fixedBottom && (0, _styledComponents.css)(_templateObject14());
}, function (_ref9) {
  var stickyFooter = _ref9.stickyFooter,
      theme = _ref9.theme;
  return stickyFooter && (0, _styledComponents.css)(_templateObject15(), StyledFormFooter, FormButtonAnimation, theme.colors.white, StyledResponsiveFooterWrapper, theme.colors.white, theme.colors.white);
});

StyledForm.defaultProps = {
  theme: _base.default
};
StyledForm.propTypes = {
  theme: _propTypes.default.object,
  stickyFooter: _propTypes.default.bool,
  fixedBottom: _propTypes.default.bool
};
StyledFormFooter.defaultProps = {
  theme: _base.default
};
StyledFormFooter.propTypes = {
  theme: _propTypes.default.object,
  buttonAlign: _propTypes.default.oneOf(_optionsHelper.default.alignBinary),
  stickyFooter: _propTypes.default.bool
};
StyledAdditionalFormAction.defaultProps = {
  theme: _base.default
};
StyledAdditionalFormAction.propTypes = {
  theme: _propTypes.default.object,
  type: _propTypes.default.oneOf(_optionsHelper.default.additionalActionAlignments)
};
StyledResponsiveFooterWrapper.propTypes = {
  theme: _propTypes.default.object,
  buttonAlign: _propTypes.default.oneOf(_optionsHelper.default.alignBinary),
  showSummary: _propTypes.default.bool,
  borderWidth: _propTypes.default.string,
  hasAdditionalActions: _propTypes.default.bool
};
StyledResponsiveFooterWrapper.defaultProps = {
  theme: _base.default
};
var _default = StyledForm;
exports.default = _default;