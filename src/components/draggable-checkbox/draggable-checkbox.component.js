/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

const DraggableCheckboxItem = ({
  id, children, findCard, moveCard
}) => {
  const originalIndex = findCard(id).index;
  const [, drag] = useDrag({
    item: { type: 'card', id, originalIndex },
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

  return (
    <div ref={ node => drag(drop(node)) }>
      {children}
    </div>
  );
};

const DropTarget = ({ children }) => {
  const [, drop] = useDrop({ accept: 'card' });

  return <div ref={ drop }>{children}</div>;
};

const DraggableCheckbox = ({ children }) => {
  const [cards, setCards] = useState(children);

  const findCard = (id) => {
    const card = cards.filter(c => `${c.id}` === id)[0];
    return {
      card,
      index: cards.indexOf(card)
    };
  };

  const moveCard = (id, atIndex) => {
    const { card, index } = findCard(id);
    setCards(...cards, {
      $splice: [
        [index, 1],
        [atIndex, 0, card]
      ]
    });
  };

  return (
    <DndProvider backend={ Backend }>
      <DropTarget>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { findCard, moveCard });
        })}
      </DropTarget>
    </DndProvider>
  );
};

export { DraggableCheckbox, DraggableCheckboxItem };
