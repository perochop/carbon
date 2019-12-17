const blockTabbing = (ev) => {
  if (ev.keyCode === 9 || ev.keyCode === 16) {
    ev.preventDefault();
  }
};

const tabbing = (ev, firstFocusableElement, lastFocusableElement) => {
  if (ev.key === 'Tab' || ev.keyCode === 9) {
    if (ev.shiftKey) /* shift + tab */ {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        ev.preventDefault();
      }
    } else if (document.activeElement === lastFocusableElement) {
      firstFocusableElement.focus();
      ev.preventDefault();
    }
  }
};

const setFocusTrap = (element) => {
  // eslint-disable-next-line max-len
  const ALL_FOCUSABLE_ELEMENTS = 'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])';
  const focusableElements = element.querySelectorAll(ALL_FOCUSABLE_ELEMENTS);

  if (focusableElements.length <= 0) {
    document.addEventListener('keydown', blockTabbing);
    return;
  }

  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  setTimeout(() => {
    firstFocusableElement.focus();
    document.addEventListener('keydown', ev => tabbing(ev, firstFocusableElement, lastFocusableElement));
  });
};

const removeFocusTrap = () => {
  document.activeElement.blur();
  document.removeEventListener('keydown', blockTabbing);
  document.removeEventListener('keydown', tabbing);
};

export {
  setFocusTrap,
  removeFocusTrap
};
