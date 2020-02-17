import React from 'react';
import { action } from '@storybook/addon-actions';
import DraggableWrapper from './draggable-container.component';
import DraggableItem from './draggable-item.component';
import { Checkbox } from '../../__experimental__/components/checkbox';

export default {
  component: DraggableWrapper,
  title: 'Draggable Container'
};

export const draggable = () => {
  const handleUpdate = (items) => {
    action('onUpdate')(items);
  };

  return (
    <DraggableWrapper onUpdate={ handleUpdate }>
      <DraggableItem title='title 1' id={ 1 }>
        <Checkbox label='Draggable Label' />
      </DraggableItem>
      <DraggableItem title='title 1' id={ 2 }>
        <Checkbox label='Draggable Label' />
      </DraggableItem>
      <DraggableItem title='title 1' id={ 3 }>
        <Checkbox label='Draggable Label' />
      </DraggableItem>
      <DraggableItem title='title 1' id={ 4 }>
        <Checkbox label='Draggable Label' />
      </DraggableItem>
    </DraggableWrapper>
  );
};
