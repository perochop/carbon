"use strict";

require("core-js/modules/es.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _tableHeader = _interopRequireDefault(require("../table-header"));

var _tableSubheader = _interopRequireDefault(require("./table-subheader.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * A TableSubheader widget.
 * An extension of the TableHeader class which caters for differences in styling.
 */
var TableSubheader = function TableSubheader(props) {
  return _react.default.createElement(_tableHeader.default, _extends({}, componentTags(props), {
    styledComponent: _tableSubheader.default
  }, props));
};

function componentTags(props) {
  return {
    'data-component': 'table-sub-header',
    'data-element': props['data-element'],
    'data-role': props['data-role']
  };
}

var _default = TableSubheader;
exports.default = _default;