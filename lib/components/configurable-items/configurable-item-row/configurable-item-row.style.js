"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigurableItemRowIconStyle = exports.ConfigurableItemRowContentWrapperStyle = exports.ConfigurableItemRowStyle = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _icon = _interopRequireDefault(require("../../icon"));

var _base = _interopRequireDefault(require("../../../style/themes/base"));

var _label = _interopRequireDefault(require("../../../__experimental__/components/label/label.style"));

var _styleHelper = require("../../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        visibility: hidden;\n      }\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      cursor: grabbing;\n      cursor: -moz-grabbing;\n      cursor: -webkit-grabbing;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 1px solid #CCD6DA;\n    padding: 0.5em 0.5em 0.7em;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  font-weight: bold;\n  padding: 5px 0.5em 5px 0px;\n\n  ", "{\n    padding: 0px 6px 6px 6px;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  justify-content: left;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      padding-right: 0;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  cursor: grab;\n\n  /* Provides backup cursor view for IE11 */\n  @media all and (-ms-high-contrast: none) {\n    cursor: move;\n  }\n\n  padding-right: 12px;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ConfigurableItemRowIconStyle = (0, _styledComponents.default)(_icon.default)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject2());
});
exports.ConfigurableItemRowIconStyle = ConfigurableItemRowIconStyle;

var ConfigurableItemRowContentWrapperStyle = _styledComponents.default.div(_templateObject3());

exports.ConfigurableItemRowContentWrapperStyle = ConfigurableItemRowContentWrapperStyle;

var ConfigurableItemRowStyle = _styledComponents.default.li(_templateObject4(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.disabled.input;
}, _label.default, function (_ref3) {
  var theme = _ref3.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject5());
}, function (_ref4) {
  var isDragging = _ref4.isDragging,
      isDragged = _ref4.isDragged;
  return (isDragging || isDragged) && (0, _styledComponents.css)(_templateObject6());
}, function (_ref5) {
  var isDragged = _ref5.isDragged;
  return isDragged && (0, _styledComponents.css)(_templateObject7(), ConfigurableItemRowContentWrapperStyle);
});

exports.ConfigurableItemRowStyle = ConfigurableItemRowStyle;
ConfigurableItemRowStyle.defaultProps = {
  theme: _base.default
};
ConfigurableItemRowIconStyle.defaultProps = {
  theme: _base.default
};