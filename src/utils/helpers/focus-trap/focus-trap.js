
export default class FocusTrap {
  constructor(element) {
    this.element = element;
    this.focusableElements = undefined;
    this.firstFocusableElement = undefined;
    this.lastFocusableElement = undefined;
    // eslint-disable-next-line max-len
    this.focusableSelectors = 'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])';
  }

  blockTabbing(ev) {
    if (ev.keyCode === 9) {
      ev.preventDefault();
    }
  }

  setFocusableItems() {
    this.focusableElements = this.element.querySelectorAll(this.focusableSelectors);
    this.firstFocusableElement = this.focusableElements[0];
    this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1];
  }

  focusTrap = (ev) => {
    this.setFocusableItems();
    if (ev.key === 'Tab' || ev.keyCode === 9) {
      if (ev.shiftKey) /* shift + tab */ {
        if (document.activeElement === this.firstFocusableElement) {
          this.lastFocusableElement.focus();
          ev.preventDefault();
        }
      } else if (document.activeElement === this.lastFocusableElement) {
        this.firstFocusableElement.focus();
        ev.preventDefault();
      }
    }
  }

  setFocusTrap(focusableSelectors = this.focusableSelectors) {
    this.focusableSelectors = focusableSelectors;

    this.setFocusableItems();

    if (this.focusableElements.length <= 0) {
      return document.addEventListener('keydown', this.blockTabbing);
    }

    return document.addEventListener('keydown', this.focusTrap);
  }

  removeFocusTrap() {
    document.activeElement.blur();
    document.removeEventListener('keydown', this.blockTabbing);
    document.removeEventListener('keydown', this.focusTrap);
  }
}
