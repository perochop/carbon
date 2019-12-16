"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogInnerContentStyle = exports.DialogContentStyle = exports.DialogTitleStyle = exports.DialogStyle = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _form = require("../../__deprecated__/components/form/form.style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    min-height: ", "px}\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 20px;\n  position: relative;\n\n  ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {\n      overflow-y: scroll\n    }\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  height: 100%;\n  overflow-y: auto;\n  padding: 0px 35px 30px;\n  width: 100%;\n\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  padding: 23px 35px 0;\n  border-bottom: 1px solid #ccd6db;\n  ", ";\n\n  .carbon-heading--has-divider .carbon-heading__header {\n    border-bottom: none;\n    padding-bottom: 0;\n  }\n\n  .carbon-heading__title {\n    color: ", ";\n    display: block;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        box-sizing: border-box;\n        animation: form-buttons-animate-in 0.25s ease-out;\n        background-color: white;\n        bottom: 0;\n        left: auto;\n        margin-left: -35px;\n        box-shadow: 0 -4px 12px 0 rgba(0, 0, 0, 0.05);\n        padding-bottom: 13px;\n        padding-left: 35px;\n        padding-right: 35px;\n        position: fixed;\n        z-index: 1000;\n        width: ", ";\n      }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      bottom: 0;\n      min-height: 0px !important;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    min-height: ", "px;\n\n    .carbon-form {\n      padding-bottom: 80px;\n    }\n\n    ", " {\n      bottom: 0px;\n      position: absolute;\n      width: 100%;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: ", "\n\n    // IE10+ fix (caters for scrollbar width)\n      @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {\n        width: $size - 16;\n      }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: #F2F5F6;\n  box-shadow: ", ";\n  position: fixed;\n  top: 50%;\n\n  &:focus {\n    outline: none;\n  }\n\n  ", "\n\n  ", ";\n\n  ", "\n\n  ", "\n\n  .carbon-dialog__close {\n    color: #4d7080;\n    cursor: pointer;\n    position: absolute;\n    right: 35px;\n    top: 28px;\n    z-index: 1;\n\n    &:hover {\n      color: #255BC7;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var dialogSizes = {
  'extra-small': '300px',
  small: '380px',
  'medium-small': '540px',
  medium: '750px',
  'medium-large': '850px',
  large: '960px',
  'extra-large': '1080px'
};

var DialogStyle = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.shadows.depth3;
}, function (_ref2) {
  var size = _ref2.size;
  return size && (0, _styledComponents.css)(_templateObject2(), dialogSizes[size]);
}, function (_ref3) {
  var height = _ref3.height;
  return height && (0, _styledComponents.css)(_templateObject3(), height - 40, _form.StyledFormFooter);
}, function (_ref4) {
  var fixedBottom = _ref4.fixedBottom;
  return fixedBottom && (0, _styledComponents.css)(_templateObject4());
}, function (_ref5) {
  var fixedBottom = _ref5.fixedBottom,
      stickyFormFooter = _ref5.stickyFormFooter,
      size = _ref5.size;
  return fixedBottom && stickyFormFooter && (0, _styledComponents.css)(_templateObject5(), _form.StyledFormFooter, dialogSizes[size]);
});

exports.DialogStyle = DialogStyle;

var DialogTitleStyle = _styledComponents.default.div(_templateObject6(), function (_ref6) {
  var showCloseIcon = _ref6.showCloseIcon;
  return showCloseIcon && 'padding-right: 85px';
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.text.color;
});

exports.DialogTitleStyle = DialogTitleStyle;

var DialogContentStyle = _styledComponents.default.div(_templateObject7(), function (_ref8) {
  var fixedBottom = _ref8.fixedBottom;
  return fixedBottom && (0, _styledComponents.css)(_templateObject8());
});

exports.DialogContentStyle = DialogContentStyle;

var DialogInnerContentStyle = _styledComponents.default.div(_templateObject9(), function (_ref9) {
  var height = _ref9.height;
  return height && (0, _styledComponents.css)(_templateObject10(), height - 40);
});

exports.DialogInnerContentStyle = DialogInnerContentStyle;
DialogTitleStyle.defaultProps = {
  theme: _base.default
};
DialogStyle.defaultProps = {
  theme: _base.default
};