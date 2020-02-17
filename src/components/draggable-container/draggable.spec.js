/* eslint-disable react/prefer-stateless-function */
import React, { useRef } from 'react';
import { shallow, mount } from 'enzyme';
import { wrapInTestContext } from 'react-dnd-test-utils';
import TestUtils from 'react-dom/test-utils';
import { getBackendFromInstance } from 'react-dnd-test-utils';
import TestBackend from 'react-dnd-test-backend';
import { DragSource } from 'react-dnd';
import DraggableContainer from './draggable-container.component';
import DraggableItem from './draggable-item.component';

describe('Draggable Checkbox', () => {
  let wrapper;

  const onUpdate = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <DraggableContainer>
        <DraggableItem
          title='title one'
          id={ 1 }
        />
        <DraggableItem
          title='title two'
          id={ 2 }
        />
      </DraggableContainer>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


  it('should return an array with id\'s', () => {
    wrapper.setProps({ onUpdate });
    wrapper.find(DraggableItem).at(0).props().onUpdate();
    expect(onUpdate).toHaveBeenCalledWith([1, 2]);
  });

  it('should return an array if onUpdate is not passed to the component', () => {
    wrapper.find(DraggableItem).at(0).props().onUpdate();
    expect(onUpdate).not.toHaveBeenCalledWith();
  });

  it('should render correct', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
