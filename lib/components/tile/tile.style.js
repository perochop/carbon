"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TileContent = exports.StyledTile = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n          border-top: solid 1px ", ";\n          padding-top: ", ";\n        "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n          border-left: solid 1px ", ";\n          padding-left: ", ";\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border: 1px solid ", ";\n    display: flex;\n    flex-direction: ", ";\n    padding: ", ";\n    position: relative;\n    width: 100%;\n\n    ", "\n    ", "\n\n    ", " {\n      box-sizing: border-box;\n\n      ", "\n\n      ", "\n\n      &:not(:last-of-type) {\n        padding-", ": ", ";\n      }\n\n      & + ", " {\n        margin-top: 0;\n\n        ", "\n\n        ", "\n      }\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    flex-grow: 1;\n\n    ", "\n  "]);

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

var paddingSizes = {
  XS: '8px',
  S: '16px',
  M: '24px',
  L: '32px',
  XL: '40px'
};

var isHorizontal = function isHorizontal(orientation) {
  return orientation === 'horizontal';
};

var isVertical = function isVertical(orientation) {
  return orientation === 'vertical';
};

var TileContent = _styledComponents.default.div(_templateObject(), function (_ref) {
  var width = _ref.width;
  return (0, _styledComponents.css)(_templateObject2(), width && width !== 0 ? "\n      flex-grow: 0;\n      width: ".concat(width, "%;\n    ") : '');
});

exports.TileContent = TileContent;

var StyledTile = _styledComponents.default.div(_templateObject3(), function (_ref2) {
  var orientation = _ref2.orientation,
      padding = _ref2.padding,
      pixelWidth = _ref2.pixelWidth,
      tileTheme = _ref2.tileTheme,
      theme = _ref2.theme,
      width = _ref2.width;
  return (0, _styledComponents.css)(_templateObject4(), tileTheme === 'tile' ? theme.colors.white : 'transparent', theme.tile.border, isHorizontal(orientation) ? 'row' : 'column', paddingSizes[padding], width && width !== 0 ? "width: ".concat(width, "%;") : '', pixelWidth && pixelWidth !== 0 ? "width: ".concat(pixelWidth, "px;") : '', TileContent, isHorizontal(orientation) && 'display: inline;', isVertical(orientation) && 'width: auto;', isHorizontal(orientation) ? 'right' : 'bottom', paddingSizes[padding], TileContent, isHorizontal(orientation) && (0, _styledComponents.css)(_templateObject5(), theme.tile.separator, paddingSizes[padding]), isVertical(orientation) && (0, _styledComponents.css)(_templateObject6(), theme.tile.separator, paddingSizes[padding]));
});

exports.StyledTile = StyledTile;
TileContent.propTypes = {
  width: _propTypes.default.number
};
StyledTile.propTypes = {
  orientation: _propTypes.default.string,
  padding: _propTypes.default.string,
  tileTheme: _propTypes.default.string,
  width: _propTypes.default.number
};
StyledTile.defaultProps = {
  theme: _base.default
};