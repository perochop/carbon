import React from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { Checkbox } from '../../__experimental__/components/checkbox';
import Icon from '../icon';
import DraggableItemStyle from './draggable-checkbox-item.style';

const DraggableCheckboxItem = ({
  id, title, findCard, moveCard
}) => {
  const oIndex = findCard(id).index;
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'card', id, oIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
    end: (dropResult, monitor) => {
      const { id: droppedId, originalIndex } = monitor.getItem();
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        moveCard(droppedId, originalIndex);
      }
    }
  });

  const [, drop] = useDrop({
    accept: 'card',
    canDrop: () => false,
    hover({ id: draggedId }) {
      if (draggedId !== id) {
        const { index: overIndex } = findCard(id);
        moveCard(draggedId, overIndex);
      }
    }
  });

  const opacity = isDragging ? 0 : 1;

  return (
    <DraggableItemStyle
      opacity={ opacity }
      ref={ node => drag(drop(node)) }
    >
      <Checkbox label={ title } />
      <Icon type='drag' />
    </DraggableItemStyle>
  );
};

export default DraggableCheckboxItem;
