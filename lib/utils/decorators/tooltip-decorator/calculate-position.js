"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calculatePosition;

var _tooltipPointer = require("../../../components/tooltip/tooltip-pointer.style");

function calculatePosition(tooltip, target) {
  var tooltipWidth = tooltip.offsetWidth,
      tooltipHeight = tooltip.offsetHeight,
      targetWidth = target.offsetWidth,
      targetHeight = target.offsetHeight,
      targetRect = target.getBoundingClientRect(),
      offsetY = window.pageYOffset,
      targetTop = targetRect.top + offsetY,
      targetBottom = targetRect.bottom + offsetY,
      targetLeft = targetRect.left,
      targetRight = targetRect.right,
      targetHalfWidth = targetWidth / 2,
      targetHalfHeight = targetHeight / 2;
  var tooltipDistances = {
    top: targetTop - tooltipHeight - _tooltipPointer.pointerSize,
    bottom: targetBottom + _tooltipPointer.pointerSize,
    left: targetLeft - tooltipWidth - _tooltipPointer.pointerSize,
    right: targetRight + _tooltipPointer.pointerSize
  };
  var vertical = {
    left: targetLeft - _tooltipPointer.pointerSize,
    center: targetLeft + targetHalfWidth - tooltipWidth / 2,
    right: targetLeft - tooltipWidth + targetHalfWidth + _tooltipPointer.pointerSize + _tooltipPointer.pointerSideMargin
  };
  var horizontal = {
    top: targetTop + targetHalfHeight - _tooltipPointer.pointerSize - _tooltipPointer.pointerSideMargin,
    center: targetTop + targetHalfHeight - tooltipHeight / 2,
    bottom: targetTop + targetHalfHeight - tooltipHeight + _tooltipPointer.pointerSize + _tooltipPointer.pointerSideMargin
  };
  return {
    tooltipDistances: tooltipDistances,
    vertical: vertical,
    horizontal: horizontal
  };
}