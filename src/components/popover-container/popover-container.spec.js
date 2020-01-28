import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import PopoverContainer from './popover-container.component';
import PopoverContainerContent from './popover-container-content.component';
import PopoverContainerIcon from './popover-container-icon.style';
import CloseIcon from './close-icon.style';
import { assertStyleMatch } from '../../__spec_helper__/test-utils';
import PopoverContainerContentStyle from './popover-container-content.style';

describe('PopoverContainer', () => {
  let wrapper,
      preventDefault;
  beforeEach(() => {
    wrapper = mount(<PopoverContainer
      title='Popover Container Settings'
      iconType='settings'
    />);
  });

  afterEach(() => {
    jest.clearAllMocks();
    wrapper.unmount();
  });

  it('should render correct', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should open the popover container on click', () => {
    act(() => {
      wrapper = mount(<PopoverContainer
        title='Popover Container Settings'
        iconType='settings'
      />);

      wrapper.find(PopoverContainerIcon).props().onClick();
    });

    wrapper.update();
    expect(wrapper.find(PopoverContainerContent).exists()).toBe(true);
  });

  it.each([
    ['enter', 13, true],
    ['space', 32, true]
  ])('should open the popover container if %s clicked', (keyname, keycode, expected) => {
    preventDefault = jest.fn();
    act(() => {
      wrapper = mount(<PopoverContainer
        title='Popover Container Settings'
        iconType='settings'
      />);
      wrapper.find(PopoverContainerIcon).props().onKeyDown({ which: keycode, preventDefault });
    });

    wrapper.update();
    expect(preventDefault).toHaveBeenCalled();
    expect(wrapper.find(PopoverContainerContent).exists()).toBe(expected);
  });

  it('should not open the popover container if different than Enter or Space key clicked', () => {
    preventDefault = jest.fn();
    act(() => {
      wrapper = mount(<PopoverContainer
        title='Popover Container Settings'
        iconType='settings'
      />);

      wrapper.find(PopoverContainerIcon).props().onKeyDown({ which: 27 /** 'escape' key */, preventDefault });
    });

    wrapper.update();
    expect(preventDefault).not.toHaveBeenCalled();
    expect(wrapper.find(PopoverContainerContent).exists()).toBe(false);
  });

  it('should close the popover popover container if close Icon clicked', () => {
    act(() => {
      wrapper = mount(<PopoverContainer
        title='Popover Container Settings'
        iconType='settings'
      />);

      wrapper.find(PopoverContainerIcon).props().onClick();
    });

    wrapper.update();

    act(() => {
      wrapper.find(CloseIcon).props().onClick();
    });

    wrapper.update();
    expect(wrapper.find(PopoverContainerContent).exists()).toBe(false);
  });

  it.each([
    ['enter', 13, true],
    ['space', 32, true]
  ])('should close the popover container if %s clicked', (keyname, keycode, expected) => {
    preventDefault = jest.fn();
    act(() => {
      wrapper = mount(<PopoverContainer
        title='Popover Container Settings'
        iconType='settings'
      />);

      wrapper.find(PopoverContainerIcon).props().onClick();
    });

    wrapper.update();

    act(() => {
      wrapper.find(CloseIcon).props().onKeyDown({ which: keycode, preventDefault });
    });

    wrapper.update();
    expect(preventDefault).toHaveBeenCalled();
    expect(wrapper.find(PopoverContainerContent).exists()).toBe(false);
  });

  it('should not close the popover popover container if close Icon clicked', () => {
    act(() => {
      wrapper = mount(<PopoverContainer
        title='Popover Container Settings'
        iconType='settings'
      />);

      wrapper.find(PopoverContainerIcon).props().onClick();
    });

    wrapper.update();

    act(() => {
      wrapper.find(CloseIcon).props().onKeyDown({ which: 82 /** 'r' key */, preventDefault });
    });

    wrapper.update();
    expect(preventDefault).not.toHaveBeenCalled();
    expect(wrapper.find(PopoverContainerContent).exists()).toBe(true);
  });
});

describe('PopoverContainerContentStyle', () => {
  const wrapper = mount(<PopoverContainerContentStyle position='right' />);
  assertStyleMatch({
    left: '0'
  }, wrapper);
});
