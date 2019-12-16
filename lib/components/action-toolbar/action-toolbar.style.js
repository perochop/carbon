"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledActionToolbarActions = exports.StyledActionToolbarTotal = exports.StyledActionToolbar = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _link = _interopRequireDefault(require("../link/link.style"));

var _icon = _interopRequireDefault(require("../icon/icon.style"));

var _styleHelper = require("../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        ", " {\n          color: #b3c2c8;\n        }\n        color: #b3c2c8;\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  margin: 0 10px;\n\n  ", " {\n    text-decoration: none;\n  }\n\n  & > * {\n    margin-left: 10px;\n    display: flex;\n    align-items: center;\n  }\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin-right: 10px;\n  min-width: auto;\n  text-align: left;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  padding: 15px 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledActionToolbar = _styledComponents.default.div(_templateObject());

exports.StyledActionToolbar = StyledActionToolbar;

var StyledActionToolbarTotal = _styledComponents.default.div(_templateObject2());

exports.StyledActionToolbarTotal = StyledActionToolbarTotal;

var StyledActionToolbarActions = _styledComponents.default.div(_templateObject3(), _link.default, function (_ref) {
  var theme = _ref.theme,
      disabled = _ref.disabled;
  return (0, _styleHelper.isClassic)(theme) && disabled && (0, _styledComponents.css)(_templateObject4(), _link.default, _icon.default);
});

exports.StyledActionToolbarActions = StyledActionToolbarActions;