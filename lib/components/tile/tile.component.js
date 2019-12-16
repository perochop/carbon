"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _tileStyle = require("./tile.style.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tile = function Tile(props) {
  var as = props.as,
      children = props.children,
      padding = props.padding,
      orientation = props.orientation,
      width = props.width,
      rest = _objectWithoutProperties(props, ["as", "children", "padding", "orientation", "width"]);

  var wrappedChildren = _react.default.Children.map(children, function (child, index) {
    if (!child) {
      return null;
    }

    var _child$props = child.props,
        contentWidth = _child$props.width,
        childProps = _objectWithoutProperties(_child$props, ["width"]);

    var key = child.key || "tile-content-".concat(index + 1);
    return _react.default.createElement(_tileStyle.TileContent, {
      key: key,
      width: contentWidth
    }, _react.default.cloneElement(child, childProps));
  });

  return _react.default.createElement(_tileStyle.StyledTile, _extends({
    padding: padding,
    tileTheme: as,
    orientation: orientation,
    width: width
  }, rest, (0, _tags.default)('tile', props)), wrappedChildren);
};

Tile.defaultProps = {
  as: 'tile',
  orientation: 'horizontal',
  padding: 'M'
};
Tile.propTypes = {
  /** Sets the theme of the tile - either 'tile' or 'transparent' */
  as: _propTypes.default.oneOf(_optionsHelper.default.tileThemes),

  /**
   * The content to render within the tile. Each child will be wrapped with
   * a TileContent wrapper, which allows any individual child component to take a
   * percentage-based width prop, dictating the percentage of the tile width it will take up.
   *
   * Width will have no effect on a child component if the tile orientation is set to 'vertical'.
   */
  children: _propTypes.default.node,

  /** The orientation of the tile - set to either horizontal or vertical */
  orientation: _propTypes.default.oneOf(_optionsHelper.default.orientation),

  /**
   * Sets the Tile padding. Accepted values are:
   * 'XS' = 8px
   * 'S' = 16px
   * 'M' = 24px
   * 'L' = 32px
   * 'XL' = 40px
   */
  padding: _propTypes.default.oneOf(_optionsHelper.default.sizesTile),

  /**
   * Set a pixel with for the Tile component. If both are set to non-zero values, this
   * takes precedence over the percentage-based "width" prop.
   */
  pixelWidth: _propTypes.default.number,

  /**
   * Set a percentage-based width for the whole Tile component, relative to its parent.
   * If unset or zero, this will default to 100%.
   */
  width: _propTypes.default.number
};
var _default = Tile;
exports.default = _default;