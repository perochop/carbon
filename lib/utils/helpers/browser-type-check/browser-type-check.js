"use strict";

require("core-js/modules/es.array.includes");

require("core-js/modules/es.string.includes");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSafari = isSafari;
exports.isEdge = isEdge;
exports.default = void 0;

/**
 * Check for Chrome or Firefox.
 */
function browserTypeCheck(_window) {
  return Boolean(_window.chrome || _window.sidebar);
}

function isSafari(navigator) {
  return navigator.vendor.includes('Apple');
}

function isEdge(navigator) {
  return navigator.userAgent.includes('Edge');
}

var _default = browserTypeCheck;
exports.default = _default;