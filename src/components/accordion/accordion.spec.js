import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';
import { assertStyleMatch } from '../../__spec_helper__/test-utils';
import baseTheme from '../../style/themes/base';

import Accordion from '.';
import {
  StyledAccordionContainer,
  StyledAccordionTitleContainer,
  StyledAccordionTitle,
  StyledAccordionIcon,
  StyledAccordionContent,
  StyledAccordionContentContainer
} from './accordion.style';

const contentHeight = 200;

describe('Accordion', () => {
  let wrapper;

  const render = (props) => {
    wrapper = mount(<Accordion title='Title' { ...props } />);
  };

  beforeEach(() => {
    render();
  });

  describe('controlled behaviour', () => {
    it('mounts expanded when expanded prop is passed as true', () => {
      render({ expanded: true });
      expect(wrapper.find(StyledAccordionContentContainer).prop('isExpanded')).toBe(true);
    });

    it('mounts collapsed when expanded prop is passed as false', () => {
      render({ expanded: false });
      expect(wrapper.find(StyledAccordionContentContainer).prop('isExpanded')).toBe(false);
    });

    it('fires provided onChange prop when clicked on the header area', () => {
      const onChange = jest.fn();
      render({ onChange, expanded: false });
      wrapper.find(StyledAccordionTitleContainer).prop('onClick')();
      expect(onChange).toHaveBeenCalled();
    });

    it('fires provided onChange prop when enter key is pressed on the header area', () => {
      const onChange = jest.fn();
      render({ onChange, expanded: false });
      wrapper.find(StyledAccordionTitleContainer).prop('onKeyDown')({ which: 13 });
      expect(onChange).toHaveBeenCalled();
    });

    it('sets content max-height to 0 when is collapsed', () => {
      act(() => render({ expanded: false }));
      expect(wrapper.find(StyledAccordionContentContainer).prop('style')).toHaveProperty('maxHeight', 0);
    });

    it('sets content max-height to its real height when is expanded', () => {
      jest.spyOn(
        wrapper.find(StyledAccordionContent).getDOMNode(), 'scrollHeight', 'get'
      ).mockImplementation(() => contentHeight);

      act(() => {
        wrapper.setProps({ expanded: true });
      });
      wrapper.update();
      expect(wrapper.find(StyledAccordionContentContainer).prop('style')).toHaveProperty('maxHeight', contentHeight);
    });
  });

  describe('uncontrolled behaviour', () => {
    it('mounts expanded when defaultExpanded prop is passed as true', () => {
      render({ defaultExpanded: true });
      expect(wrapper.find(StyledAccordionContentContainer).prop('isExpanded')).toBe(true);
    });

    it('mounts collapsed when defaultExpanded prop is not passed at all', () => {
      expect(wrapper.find(StyledAccordionContentContainer).prop('isExpanded')).toBe(false);
    });

    it('toggles expansion state when clicking on the header area', () => {
      act(() => wrapper.find(StyledAccordionTitleContainer).prop('onClick')());
      wrapper.update();
      expect(wrapper.find(StyledAccordionContentContainer).prop('isExpanded')).toBe(true);
      act(() => wrapper.find(StyledAccordionTitleContainer).prop('onClick')());
      wrapper.update();
      expect(wrapper.find(StyledAccordionContentContainer).prop('isExpanded')).toBe(false);
    });

    it('toggles expansion state when pressing enter key on the header area', () => {
      act(() => wrapper.find(StyledAccordionTitleContainer).prop('onKeyDown')({ which: 13 }));
      wrapper.update();
      expect(wrapper.find(StyledAccordionContentContainer).prop('isExpanded')).toBe(true);
      act(() => wrapper.find(StyledAccordionTitleContainer).prop('onKeyDown')({ which: 13 }));
      wrapper.update();
      expect(wrapper.find(StyledAccordionContentContainer).prop('isExpanded')).toBe(false);
    });

    it('does not toggle expansion state when keys other than enter pressed on the header area', () => {
      act(() => wrapper.find(StyledAccordionTitleContainer).prop('onKeyDown')({ which: 10 }));
      wrapper.update();
      expect(wrapper.find(StyledAccordionContentContainer).prop('isExpanded')).toBe(false);
      act(() => wrapper.find(StyledAccordionTitleContainer).prop('onKeyDown')({ which: 10 }));
      wrapper.update();
      expect(wrapper.find(StyledAccordionContentContainer).prop('isExpanded')).toBe(false);
    });
  });

  describe('layout', () => {
    it('accordion icon is positioned on the right side by default', () => {
      const shallowWrapper = shallow(<Accordion />);
      expect(shallowWrapper.find(StyledAccordionTitleContainer).childAt(0).is(StyledAccordionTitle)).toBe(true);
      expect(shallowWrapper.find(StyledAccordionTitleContainer).childAt(1).is(StyledAccordionIcon)).toBe(true);
    });
    it('accordion icon is positioned on the left side when iconAlign="left" prop is passed', () => {
      const shallowWrapper = shallow(<Accordion iconAlign='left' />);
      expect(shallowWrapper.find(StyledAccordionTitleContainer).childAt(0).is(StyledAccordionIcon)).toBe(true);
      expect(shallowWrapper.find(StyledAccordionTitleContainer).childAt(1).is(StyledAccordionTitle)).toBe(true);
    });

    it('renders accordion with white background and border when type is set to "primary" (default)', () => {
      assertStyleMatch({
        backgroundColor: baseTheme.colors.white,
        border: `1px solid ${baseTheme.accordion.border}`
      }, wrapper.find(StyledAccordionContainer));
    });

    it.each(
      [32, 24, 20, 14]
    )('renders accordion title with same fontSize as provided with headingSize prop',
      (headingSize) => {
        render({ headingSize });
        assertStyleMatch({
          fontSize: `${headingSize}px`
        }, wrapper.find(StyledAccordionTitle));
      });

    it('renders accordion with transparent background and no border when type is set to "secondary" (default)', () => {
      render({ type: 'secondary' });
      assertStyleMatch({
        backgroundColor: 'transparent',
        border: undefined
      }, wrapper.find(StyledAccordionContainer));
    });

    it('renders header area with justify-content: space-between when iconAlign is set to "right"', () => {
      assertStyleMatch({
        justifyContent: 'space-between'
      }, wrapper.find(StyledAccordionTitleContainer));
    });

    it('renders header area with justify-content: start when iconAlign is set to "left"', () => {
      render({ iconAlign: 'left' });
      assertStyleMatch({
        justifyContent: 'start'
      }, wrapper.find(StyledAccordionTitleContainer));
    });

    it('renders header area with proper margin-left value when headerMarginLeft is provided', () => {
      render({ headerMarginLeft: 30, headerPadding: 3 });
      assertStyleMatch({
        marginLeft: 'calc(30% - 24px)'
      }, wrapper.find(StyledAccordionTitleContainer));
    });

    it('renders icon rotated when accordion is expanded', () => {
      render({ expanded: true });
      assertStyleMatch({
        transform: 'rotate(-180deg)'
      }, wrapper.find(StyledAccordionIcon));
    });

    it('renders accordion content container with visibility: hidden when is not expanded', () => {
      assertStyleMatch({
        visibility: 'hidden'
      }, wrapper.find(StyledAccordionContentContainer));
    });

    it.each([[1, 8], [2, 16], [3, 24]])(
      'renders accordion content with properly multiplied padding as provided with contentPadding prop',
      (contentPadding, padding) => {
        render({ contentPadding });
        assertStyleMatch({
          padding: `${padding}px`
        }, wrapper.find(StyledAccordionContent));
      }
    );

    it.each([[1, 8], [2, 16], [3, 24]])(
      'renders accordion content with properly multiplied padding-top as provided with contentPaddingTop prop',
      (contentPaddingTop, padding) => {
        render({ contentPaddingTop });
        assertStyleMatch({
          paddingTop: `${padding}px`
        }, wrapper.find(StyledAccordionContent));
      }
    );

    it.each([[1, 8], [2, 16], [3, 24]])(
      'renders accordion content with properly multiplied padding-bottom as provided with contentPaddingBottom prop',
      (contentPaddingBottom, padding) => {
        render({ contentPaddingBottom });
        assertStyleMatch({
          paddingBottom: `${padding}px`
        }, wrapper.find(StyledAccordionContent));
      }
    );

    it.each([[1, 8], [2, 16], [3, 24]])(
      'renders accordion content with properly multiplied padding-left as provided with contentPaddingLeft prop',
      (contentPaddingLeft, padding) => {
        render({ contentPaddingLeft });
        assertStyleMatch({
          paddingLeft: `${padding}px`
        }, wrapper.find(StyledAccordionContent));
      }
    );

    it.each([[1, 8], [2, 16], [3, 24]])(
      'renders accordion content with properly multiplied padding-right as provided with contentPaddingRight prop',
      (contentPaddingRight, padding) => {
        render({ contentPaddingRight });
        assertStyleMatch({
          paddingRight: `${padding}px`
        }, wrapper.find(StyledAccordionContent));
      }
    );
  });
});
