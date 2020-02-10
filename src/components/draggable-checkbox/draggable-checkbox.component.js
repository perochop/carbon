/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import styled from 'styled-components';
import { Checkbox } from '../../__experimental__/components/checkbox';
import Icon from '../icon';

const DraggableItemStyle = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid gray;
`;

const DraggableCheckboxItem = ({
  id, title, findCard, moveCard
}) => {
  const oIndex = findCard(id).index;
  const [, drag] = useDrag({
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

  return (
    <DraggableItemStyle ref={ node => drag(drop(node)) }>
      <Checkbox label={ title } />
      <Icon type='drag' />
    </DraggableItemStyle>
  );
};

const DropTarget = ({ children }) => {
  const [, drop] = useDrop({ accept: 'card' });

  return <div ref={ drop }>{children}</div>;
};

const DraggableCheckbox = ({ children }) => {
  const [cards, setCards] = useState(children);

  const findCard = (id) => {
    let card;

    cards.forEach((item) => {
      if (item.props.id === id) {
        card = {
          item,
          index: cards.indexOf(item)
        };
      }
    });

    return card;
  };

  const moveCard = (id, atIndex) => {
    const { item: card, index } = findCard(id);
    const copyCards = [...cards];

    copyCards.splice(index, 1);
    copyCards.splice(atIndex, 0, card);
    setCards(copyCards);
  };

  return (
    <DndProvider backend={ Backend }>
      <DropTarget>
        {cards.map(card => (
          <DraggableCheckboxItem
            key={ card.props.id }
            id={ card.props.id }
            findCard={ findCard }
            moveCard={ moveCard }
            title={ card.props.title }
          />
        ))}
      </DropTarget>
    </DndProvider>
  );
};

export { DraggableCheckbox, DraggableCheckboxItem };
