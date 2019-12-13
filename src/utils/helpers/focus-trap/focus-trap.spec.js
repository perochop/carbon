import React, { useEffect } from 'react';
import { mount } from 'enzyme';
import { setFocusTrap, removeFocusTrap } from '.';


const TestComponent = ({ children }) => {
  useEffect(() => {
    setFocusTrap(document.getElementById('myComponent'));
    return () => removeFocusTrap();
  }, []);

  return (
    <div id='myComponent'>
      {children}
    </div>
  );
};

describe('focusTrap', () => {
  let wrapper;
  describe('when focusTrap is used to an element', () => {
    beforeEach(() => {
      jest.useFakeTimers();

      wrapper = mount(
        <TestComponent>
          <button type='button'>Test button One</button>
          <button type='button'>Test button Two</button>
        </TestComponent>,
        { attachTo: document.body }
      );

      jest.runAllTimers();
    });

    afterEach(() => {
      jest.clearAllTimers();
    });

    it('should focus the first focusable element', () => {
      expect(document.activeElement).toBe(wrapper.find('button').at(0).instance());
    });
  });
});
