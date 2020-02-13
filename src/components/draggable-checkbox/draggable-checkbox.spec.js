import React from 'react';
import { shallow, mount } from 'enzyme';
import { getBackendFromInstance } from 'react-dnd-test-utils';
import DraggableCheckbox from './draggable-checkbox.component';
import DraggableCheckboxItem from './draggable-checkbox-item.component';
import DraggableItemStyle from './draggable-checkbox-item.style';
import { assertStyleMatch } from '../../__spec_helper__/test-utils';

describe('Draggable Checkbox', () => {
  let wrapper;

  const onUpdate = jest.fn();
  beforeEach(() => {
    wrapper = mount(
      <DraggableCheckbox>
        <DraggableCheckboxItem title='title one' id={ 1 } />
        <DraggableCheckboxItem title='title two' id={ 2 } />
      </DraggableCheckbox>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('it shuld return an array with id\'s', () => {
    wrapper.setProps({ onUpdate });
    wrapper.find(DraggableCheckboxItem).at(0).props().onUpdate();
    expect(onUpdate).toHaveBeenCalledWith([1, 2]);
  });

  it('should return an array if onUpdate is not passed to the component', () => {
    wrapper.find(DraggableCheckboxItem).at(0).props().onUpdate();
    expect(onUpdate).not.toHaveBeenCalledWith();
  });

  it('it should render correct', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('asdasd', () => {
    const draggableItem = mount(
      <DraggableCheckbox>
        <DraggableCheckboxItem
          isDragging
          title='title one'
          id={ 1 }
        />
      </DraggableCheckbox>
    );
  });
});
