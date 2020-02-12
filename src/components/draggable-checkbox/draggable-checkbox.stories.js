import React from 'react';
import { action } from '@storybook/addon-actions';
import DraggableCheckbox from './draggable-checkbox.component';
import DraggableCheckboxItem from './draggable-checkbox-item.component';

export default {
  component: DraggableCheckbox,
  title: 'DraggableCheckbox'
};

export const draggable = () => {
  const handleUpdate = (items) => {
    action('onUpdate')(items);
  };

  return (
    <DraggableCheckbox onUpdate={ handleUpdate }>
      <DraggableCheckboxItem title='title 1' id={ 1 } />
      <DraggableCheckboxItem title='title 2' id={ 2 } />
      <DraggableCheckboxItem title='title 3' id={ 3 } />
      <DraggableCheckboxItem title='title 4' id={ 4 } />
    </DraggableCheckbox>
  );
};
