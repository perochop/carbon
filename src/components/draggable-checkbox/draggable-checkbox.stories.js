import React from 'react';
import { DraggableCheckbox, DraggableCheckboxItem } from './draggable-checkbox.component';

export default {
  component: DraggableCheckbox,
  title: 'DraggableCheckbox'
};

export const draggable = () => (
  <DraggableCheckbox>
    <DraggableCheckboxItem title='title 1' id={ 1 } />
    <DraggableCheckboxItem title='title 2' id={ 2 } />
    <DraggableCheckboxItem title='title 3' id={ 3 } />
    <DraggableCheckboxItem title='title 4' id={ 4 } />
  </DraggableCheckbox>
);
