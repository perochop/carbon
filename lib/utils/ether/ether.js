"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.match");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acronymize = acronymize;
exports.append = append;
exports.insertAt = insertAt;
exports.styleElement = styleElement;
exports.validProps = validProps;
exports.generateKeysForChildren = generateKeysForChildren;
exports.filterByProps = filterByProps;

var _lodash = require("lodash");

var _guid = _interopRequireDefault(require("../helpers/guid/guid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Ether
 *
 * Ether provides functional-like helper methods for Carbon specific tasks.
 * As we are dealing with stateful values (user input, browser state) Ether
 * does not provide pure functions in all cases.
 */

/**
 * Creates an acronym from a given string.
 *
 * @method acronymize
 * @param {String} str
 * @return {String}
 */
function acronymize(str) {
  if (!str) return '';
  var matches = str.match(/\b\w/g);
  if (!matches) return '';
  return matches.join('');
}
/**
 * Stringifies and appends content to value.
 *
 * @method append
 * @param {String} value
 * @param {String} content
 * @return {String}
 */


function append(value, content) {
  return "".concat(value).concat(content);
}
/**
 * Sets style on element
 *
 * @method styleElement
 * @param {Object} element
 * @param {String} attribute
 * @param {Number} value
 * @return {Object} Styled Element
 */


function styleElement(element, attribute, value) {
  if (element.style[attribute] !== value.toString()) {
    element.style[attribute] = value.toString();
  }

  return element.style[attribute];
}
/**
 * Returns the props of the given instance filtered by
 * the static safeProps or the optional safeProps argument
 *
 * @method validProps
 * @param {Object} instance
 * @param {Array?} _safeProps
 * @return {Object} props
 */


function validProps(input, safeProps) {
  var klass = input.isReactComponent ? input.constructor : input;
  var unsafeProps = (0, _lodash.difference)(Object.keys(klass.propTypes), safeProps || klass.safeProps || []);
  return (0, _lodash.omit)(input.props, unsafeProps);
}
/**
 * Returns string with inserted character at specified indices
 *
 * @method insertAt
 * @param {String} value - value without separators
 * @param {Object} options
 * * @param {String} separator - character to insert
 * * @param {Array} insertionIndices - indices where separator will be inserted
 * @return {String} result - formatted
 */


function insertAt(value, options) {
  var separator = options.separator || '-';
  var result = value;

  for (var i = 0; i < result.length; i++) {
    if ((0, _lodash.includes)(options.insertionIndices, i)) {
      result = result.substr(0, i) + separator + result.substr(i);
    }
  }

  return result;
}
/**
 * Dynamically creates some keys for children,
 * E.g. children rendered using cloneElement etc.
 *
 */


function generateKeysForChildren(array) {
  return array.map(function () {
    return (0, _guid.default)();
  });
}
/**
 * Filter by prop names
 * @param {Object} props
 * @param {Array} filterBy
 * @return {Object}
 */


function filterByProps(props, filterBy) {
  var filtered = (0, _lodash.difference)(Object.keys(props), filterBy);
  return (0, _lodash.omit)(props, filtered);
}