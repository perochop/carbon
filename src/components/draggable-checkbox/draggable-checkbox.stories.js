import React from 'react';
import { DraggableCheckbox, DraggableCheckboxItem } from './draggable-checkbox.component';

export default {
  component: DraggableCheckbox,
  title: 'DraggableCheckbox'
};

export const draggable = () => (
  <DraggableCheckbox>
    <DraggableCheckboxItem id={ 1 }> content 1</DraggableCheckboxItem>
    <DraggableCheckboxItem id={ 2 }> content 1</DraggableCheckboxItem>
    <DraggableCheckboxItem id={ 3 }> content 1</DraggableCheckboxItem>
    <DraggableCheckboxItem id={ 4 }> content 1</DraggableCheckboxItem>
  </DraggableCheckbox>
);
