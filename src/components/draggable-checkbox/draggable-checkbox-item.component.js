import React from 'react';
import { useDrop, useDrag } from 'react-dnd';
import PropTypes from 'prop-types';
import { Checkbox } from '../../__experimental__/components/checkbox';
import Icon from '../icon';
import DraggableItemStyle from './draggable-checkbox-item.style';

const DraggableCheckboxItem = ({
  id, title, findCard, moveCard, onUpdate
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
    <DraggableItemStyle
      opacity={ opacity }
      ref={ node => drag(drop(node)) }
    >
      <Checkbox label={ title } />
      <Icon type='drag' />
    </DraggableItemStyle>
  );
};

DraggableCheckboxItem.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  title: PropTypes.string.isRequired,
  onUpdate: PropTypes.func
};

export default DraggableCheckboxItem;
