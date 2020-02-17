import React from 'react';
import { useDrop, useDrag } from 'react-dnd';
import PropTypes from 'prop-types';
import { StyledDraggableItem } from './draggable-item.style';

const DraggableItem = ({
  id, findCard, moveCard, onUpdate, children
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

      onUpdate();
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
    <StyledDraggableItem
      opacity={ opacity }
      ref={ node => drag(drop(node)) }
    >
      {children}
    </StyledDraggableItem>
  );
};

DraggableItem.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  children: PropTypes.node.isRequired,
  onUpdate: PropTypes.func
};

export default DraggableItem;
