import React from 'react';
import { action } from '@storybook/addon-actions';
import DraggableContainer from './draggable-container.component';
import DraggableItem from './draggable-item.component';
import { Checkbox } from '../../__experimental__/components/checkbox';

export default {
  component: DraggableContainer,
  title: 'Drag and Drop'
};

export const draggable = () => {
  const handleUpdate = (items) => {
    action('onUpdate')(items);
  };

  return (
    <DraggableContainer onUpdate={ handleUpdate }>
      <DraggableItem title='title 1' id={ 1 }>
        <Checkbox label='Draggable Label One' />
      </DraggableItem>
      <DraggableItem title='title 1' id={ 2 }>
        <Checkbox label='Draggable Label Two' />
      </DraggableItem>
      <DraggableItem title='title 1' id={ 3 }>
        <Checkbox label='Draggable Label Three' />
      </DraggableItem>
      <DraggableItem title='title 1' id={ 4 }>
        <Checkbox label='Draggable Label Four' />
      </DraggableItem>
    </DraggableContainer>
  );
};
