import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
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

const isExpanded = (wrapper) => {
  assertStyleMatch({
    transform: 'rotate(-180deg)'
  }, wrapper.find(StyledAccordionIcon));
  assertStyleMatch({
    visibility: undefined,
    maxHeight: `${contentHeight}px`
  }, wrapper.find(StyledAccordionContentContainer));
};

const isCollapsed = (wrapper) => {
  assertStyleMatch({
    transform: undefined
  }, wrapper.find(StyledAccordionIcon));
  assertStyleMatch({
    visibility: 'hidden',
    maxHeight: '0px'
  }, wrapper.find(StyledAccordionContentContainer));
};

describe('Accordion', () => {
  let wrapper;

  const render = (props) => {
    wrapper = mount(<Accordion title='Title' { ...props } />);
    jest.spyOn(
      wrapper.find(StyledAccordionContent).getDOMNode(), 'scrollHeight', 'get'
    ).mockImplementation(() => contentHeight);
  };


  beforeEach(() => {
    render();
  });

  describe('controlled behaviour', () => {
    it('mounts expanded when expanded prop is passed as true', () => {
      act(() => render({ expanded: true }));
      wrapper.update();
      isExpanded(wrapper);
    });

    it('mounts collapsed when expanded prop is passed as false', () => {
      render({ expanded: false });
      isCollapsed(wrapper);
    });

    it('fires provided onChange prop when clicked on the header area', () => {
      const onChange = jest.fn();
      render({ onChange, expanded: false });
      const ev = {};
      wrapper.find(StyledAccordionTitleContainer).prop('onClick')(ev);
      expect(onChange).toHaveBeenCalledWith(ev, true);
    });

    it('fires provided onChange prop when enter key is pressed on the header area', () => {
      const onChange = jest.fn();
      render({ onChange, expanded: false });
      const ev = { which: 13 };
      wrapper.find(StyledAccordionTitleContainer).prop('onKeyDown')(ev);
      expect(onChange).toHaveBeenCalledWith(ev, true);
    });
  });

  describe('uncontrolled behaviour', () => {
    it('mounts expanded when defaultExpanded prop is passed as true', () => {
      act(() => render({ defaultExpanded: true }));
      wrapper.update();
      isExpanded(wrapper);
    });

    it('mounts collapsed when defaultExpanded prop is not passed at all', () => {
      isCollapsed(wrapper);
    });

    it('toggles expansion state when clicking on the header area', () => {
      act(() => wrapper.find(StyledAccordionTitleContainer).prop('onClick')());
      wrapper.update();
      isExpanded(wrapper);
      act(() => wrapper.find(StyledAccordionTitleContainer).prop('onClick')());
      wrapper.update();
      isCollapsed(wrapper);
    });

    it('toggles expansion state when pressing enter key on the header area', () => {
      act(() => wrapper.find(StyledAccordionTitleContainer).prop('onKeyDown')({ which: 13 }));
      wrapper.update();
      isExpanded(wrapper);
      act(() => wrapper.find(StyledAccordionTitleContainer).prop('onKeyDown')({ which: 13 }));
      wrapper.update();
      isCollapsed(wrapper);
    });

    it('does not toggle expansion state when keys other than enter pressed on the header area', () => {
      act(() => wrapper.find(StyledAccordionTitleContainer).prop('onKeyDown')({ which: 10 }));
      wrapper.update();
      isCollapsed(wrapper);
      act(() => wrapper.find(StyledAccordionTitleContainer).prop('onKeyDown')({ which: 10 }));
      wrapper.update();
      isCollapsed(wrapper);
    });
  });

  describe('layout', () => {
    it(`renders header area with justify-content: space-between and flex-direction: "row-reverse"
      when iconAlign is set to "left"`,
    () => {
      render({ iconAlign: 'left' });
      assertStyleMatch({
        justifyContent: 'flex-end',
        flexDirection: 'row-reverse'
      }, wrapper.find(StyledAccordionTitleContainer));
    });

    it('renders header area with justify-content: space-between when iconAlign is set to "right"', () => {
      assertStyleMatch({
        justifyContent: 'space-between'
      }, wrapper.find(StyledAccordionTitleContainer));
    });

    it('renders accordion with white background and border when type is set to "primary" (default)', () => {
      assertStyleMatch({
        backgroundColor: baseTheme.colors.white,
        border: `1px solid ${baseTheme.accordion.border}`
      }, wrapper.find(StyledAccordionContainer));
    });

    it('renders accordion with transparent background and no border when type is set to "secondary" (default)', () => {
      render({ type: 'secondary' });
      assertStyleMatch({
        backgroundColor: 'transparent',
        border: undefined
      }, wrapper.find(StyledAccordionContainer));
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
  });

  describe('style overrides', () => {
    const randomStyleObject = {
      backgroundColor: 'red',
      display: 'flex',
      fontSize: '200px'
    };
    beforeEach(() => {
      render({
        styleOverride: {
          root: randomStyleObject,
          headerArea: randomStyleObject,
          icon: randomStyleObject,
          header: randomStyleObject,
          content: randomStyleObject
        }
      });
    });

    it('renders root element with properly assigned styles', () => {
      assertStyleMatch(randomStyleObject, wrapper.find(StyledAccordionContainer));
    });

    it('renders header area element with properly assigned styles', () => {
      assertStyleMatch(randomStyleObject, wrapper.find(StyledAccordionTitleContainer));
    });

    it('renders icon element with properly assigned styles', () => {
      assertStyleMatch(randomStyleObject, wrapper.find(StyledAccordionIcon));
    });

    it('renders header element with properly assigned styles', () => {
      assertStyleMatch(randomStyleObject, wrapper.find(StyledAccordionTitle));
    });

    it('renders content element with properly assigned styles', () => {
      assertStyleMatch(randomStyleObject, wrapper.find(StyledAccordionContent));
    });
  });
});
