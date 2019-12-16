"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.string.includes");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _pillClassic = _interopRequireDefault(require("./pill-classic.style"));

var _small = _interopRequireDefault(require("../../style/themes/small"));

var _pillStyle = _interopRequireDefault(require("./pill.style.config"));

var _themes = require("../../style/themes");

var _styleHelper = require("../../utils/helpers/style-helper");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _icon = _interopRequireDefault(require("../icon/icon.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n          padding: 0 19px;\n          border-radius: 15px;\n\n          button {\n            width: 32px;\n            padding: 0;\n            border-radius: 0 12px 12px 0;\n          }\n        "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n          padding: 0 15px;\n          border-radius: 13px;\n\n          button {\n            width: 28px;\n            padding: 0;\n            border-radius: 0 10px 10px 0;\n          }\n        "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n          padding: 0 11px;\n          border-radius: 12px;\n\n          button {\n            width: 24px;\n            padding: 0;\n            border-radius: 0 8px 8px 0;\n          }\n        "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n          padding: 0 7px;\n\n          button {\n            padding: 0;\n          }\n        "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n        ", "\n\n        ", "\n\n        ", "\n\n        ", "\n      "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n          padding: 0 41px 0 19px;\n          border-radius: 15px;\n\n          button {\n            width: 32px;\n            padding: 0;\n            border-radius: 0 12px 12px 0;\n            line-height: 18px;\n\n            ", "\n          }\n        "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n          padding: 0 36px 0 15px;\n          border-radius: 13px;\n\n          button {\n            width: 28px;\n            padding: 0;\n            border-radius: 0 11px 11px 0;\n            line-height: 16px;\n\n            ", "\n          }\n        "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n          padding: 0 32px 0 11px;\n          border-radius: 12px;\n\n          button {\n            width: 24px;\n            padding: 0;\n            border-radius: 0 10px 10px 0;\n            line-height: 15px;\n\n            ", "\n          }\n        "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n          padding: 0 24px 0 7px;\n\n          button {\n            padding: 0;\n            border-radius: 0 8px 8px 0;\n            line-height: 14px;\n\n            ", "\n          }\n        "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n            background-color: transparent;\n            color: ", ";\n          "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n            background-color: ", ";\n            color: ", ";\n            ", " {\n              color: ", ";\n            }\n          "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n        button {\n          -webkit-appearance: none;\n          border-radius: 0 6px 6px 0;\n          border: none;\n          bottom: 0;\n          font-size: 100%;\n          position: absolute;\n          right: 0;\n          top: 0;\n          width: 20px;\n          margin: 0;\n          line-height: 16px;\n\n          ", "\n\n          ", "\n\n          &:focus {\n            outline: none;\n            box-shadow: 0 0 0 3px ", ";\n            background-color: ", ";\n            & { color: ", " }\n            ::-moz-focus-inner {\n              border: 0;\n            }\n            ", " {\n              color: ", ";\n            }\n          }\n\n          &:hover {\n            background-color: ", ";\n            color: ", ";\n            cursor: pointer;\n            ", " {\n              color: ", ";\n            }\n          }\n \n          ", " {\n            font-size: 12px;\n            padding: 0 4px;\n\n            &:hover, \n            &:focus {\n              color: ", ";\n            }\n          }\n        }\n\n        ", "\n\n        ", "\n\n        ", "\n\n        ", "\n      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n          min-height: 26px;\n          height: auto;\n          line-height: 26px;\n          font-size: 16px;\n        "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n          min-height: 24px;\n          height: auto;\n          line-height: 24px;\n          font-size: 14px;\n        "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n          min-height: 20px;\n          height: auto;\n          line-height: 20px;\n          font-size: 12px;\n        "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n          min-height: 16px;\n          height: auto;\n          line-height: 16px;\n          font-size: 10px;\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        ", "\n\n        ", "\n\n        ", "\n\n        ", "\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        background-color: ", ";\n        color: ", ";\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      border: 2px solid ", ";\n      border-radius: 12px;\n      font-size: 10px;\n      letter-spacing: 0.7px;\n      font-weight: 600;\n      position: relative;\n      display: inline-block;\n      text-align: center;\n\n      ", "\n\n      ", "\n\n      ", "\n\n      ", "\n\n      ", "\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// all DLS themes currently default to Small, as others are introduced this
// function should be updated to correctly allow them.
// eventually we can remove it altogether.
var setTheme = function setTheme(theme) {
  switch (theme.name) {
    case _themes.THEMES.classic:
    case _themes.THEMES.base:
      return _small.default;

    default:
      return theme;
  }
};

function addStyleToPillIcon(padding, fontSize, margin) {
  return "\n    ".concat(_icon.default, " {\n      padding: ").concat(padding, ";\n      margin-top: ").concat(margin, ";\n\n      &:before {\n        font-size: ").concat(fontSize, ";\n      }\n    }\n  ");
}

var PillStyle = _styledComponents.default.span(_templateObject(), function (_ref) {
  var colorVariant = _ref.colorVariant,
      theme = _ref.theme,
      inFill = _ref.inFill,
      isDeletable = _ref.isDeletable,
      pillRole = _ref.pillRole,
      size = _ref.size;
  var colors = _base.default.colors,
      text = _base.default.text;
  var correctedThemeConfig = (0, _pillStyle.default)(setTheme(theme));
  var styleSet = correctedThemeConfig[pillRole];
  var boxShadow = correctedThemeConfig.boxShadow,
      hoverColor = correctedThemeConfig.hoverColor;
  Object.assign(styleSet, {
    boxShadow: boxShadow,
    hoverColor: hoverColor
  });
  var variety = pillRole === 'status' ? colorVariant : 'primary';
  return (0, _styledComponents.css)(_templateObject2(), styleSet[variety].color, inFill && (0, _styledComponents.css)(_templateObject3(), styleSet[variety].color, variety === 'warning' ? text.color : colors.white), !isClassic(theme, colorVariant) && (0, _styledComponents.css)(_templateObject4(), size === 'S' && (0, _styledComponents.css)(_templateObject5()), size === 'M' && (0, _styledComponents.css)(_templateObject6()), size === 'L' && (0, _styledComponents.css)(_templateObject7()), size === 'XL' && (0, _styledComponents.css)(_templateObject8())), !isClassic(theme, colorVariant) && isDeletable && (0, _styledComponents.css)(_templateObject9(), inFill && (0, _styledComponents.css)(_templateObject10(), styleSet[variety].color, variety === 'warning' ? text.color : colors.white, _icon.default, variety === 'warning' ? text.color : colors.white), !inFill && (0, _styledComponents.css)(_templateObject11(), text.color), styleSet.boxShadow, styleSet[variety].buttonFocus, variety === 'warning' ? text.color : colors.white, _icon.default, variety === 'warning' ? text.color : colors.white, styleSet[variety].buttonFocus, variety === 'warning' ? text.color : colors.white, _icon.default, variety === 'warning' ? text.color : colors.white, _icon.default, variety === 'warning' ? text.color : colors.white, size === 'S' && (0, _styledComponents.css)(_templateObject12(), addStyleToPillIcon('0', '7px')), size === 'M' && (0, _styledComponents.css)(_templateObject13(), addStyleToPillIcon('2px 7px 3px 7px', '10px')), size === 'L' && (0, _styledComponents.css)(_templateObject14(), addStyleToPillIcon('3px 8px 4px 8px', '12px', '1px')), size === 'XL' && (0, _styledComponents.css)(_templateObject15(), addStyleToPillIcon('3px 9px 5px 9px', '13px', '1px'))), !isClassic(theme, colorVariant) && !isDeletable && (0, _styledComponents.css)(_templateObject16(), size === 'S' && (0, _styledComponents.css)(_templateObject17()), size === 'M' && (0, _styledComponents.css)(_templateObject18()), size === 'L' && (0, _styledComponents.css)(_templateObject19()), size === 'XL' && (0, _styledComponents.css)(_templateObject20())), isClassic(theme, colorVariant) && (0, _pillClassic.default)(colorVariant, inFill, isDeletable, size));
});

function isClassic(theme, colorVariant) {
  // handles incorrect default activeTheme in StoryBook AppWrapper
  if (_optionsHelper.default.pillColors.includes(colorVariant)) {
    return false;
  }

  return (0, _styleHelper.isClassic)(theme);
}

PillStyle.defaultProps = {
  inFill: false,
  colorVariant: 'default',
  isDeletable: false,
  theme: _base.default
};
PillStyle.propTypes = {
  inFill: _propTypes.default.bool,
  colorVariant: _propTypes.default.string,
  isDeletable: _propTypes.default.func,

  /** Assigns a size to the pill */
  size: _propTypes.default.oneOf(_optionsHelper.default.pillSizesRestricted)
};
var _default = PillStyle;
exports.default = _default;