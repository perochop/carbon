"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.string.includes");

require("jest-styled-components");

var _enzyme = require("enzyme");

var diff = require('jest-diff');

expect.extend({
  toBeFocused: function toBeFocused(received) {
    var _this = this;

    var expected = document.activeElement;
    var DOMNode = received instanceof _enzyme.ReactWrapper ? received.getDOMNode() : received;
    var pass = this.equals(expected, DOMNode);
    var options = {
      isNot: this.isNot
    };
    var hint = this.utils.matcherHint('toBeFocused', 'DOMNode', '', options);

    var positive = function positive() {
      var diffString = diff(expected, DOMNode, {
        expand: _this.expand
      });
      return "".concat(hint, "\n\n").concat( // eslint-disable-next-line multiline-ternary
      diffString && diffString.includes('- Expect') ? "Difference:\n\n".concat(diffString) : "Expected: ".concat(_this.utils.printExpected(expected), "\nReceived: ").concat(_this.utils.printReceived(DOMNode)));
    };

    var negative = function negative() {
      return "".concat(hint, "\n\n") + 'DOMNode should not have focus';
    };

    var message = pass ? negative : positive;
    return {
      pass: pass,
      message: message
    };
  }
});