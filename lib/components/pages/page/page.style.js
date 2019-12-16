"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledPageContent = exports.StyledPage = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _base = _interopRequireDefault(require("../../../style/themes/base"));

var _link = _interopRequireDefault(require("../../link/link.style"));

var _icon = _interopRequireDefault(require("../../icon/icon.style"));

var _styleHelper = require("../../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: content-box;\n  padding: 30px 40px;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            margin-top: 0px;\n            top: 5px;\n          "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          height: 25px;\n          margin-top: -12px;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n\n  ", " {\n    a {\n        text-decoration: none;\n\n        ", "\n\n        &:hover {\n          text-decoration: none;\n        }\n\n        ", " {\n          margin-top: -9px;\n          margin-right: 0px;\n          top: 5px;\n          color: #4d7080;\n\n          &:hover {\n            color: #335B6D;\n          }\n\n          ", "\n        }\n      }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledPage = _styledComponents.default.article(_templateObject(), _link.default, function (_ref) {
  var theme = _ref.theme;
  return !(0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject2());
}, _icon.default, function (_ref2) {
  var theme = _ref2.theme;
  return !(0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject3());
});

exports.StyledPage = StyledPage;

var StyledPageContent = _styledComponents.default.div(_templateObject4());

exports.StyledPageContent = StyledPageContent;
StyledPage.defaultProps = {
  theme: _base.default
};