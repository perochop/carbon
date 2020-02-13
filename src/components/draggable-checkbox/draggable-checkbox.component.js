/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { DndProvider, useDrop } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import DraggableCheckboxItem from './draggable-checkbox-item.component';

const DropTarget = ({ children }) => {
  const [, drop] = useDrop({ accept: 'card' });

  return <div ref={ drop }>{children}</div>;
};

const DraggableCheckbox = ({ children, onUpdate }) => {
  const [cards, setCards] = useState(React.Children.toArray(children));

  const findCard = (id) => {
    const card = cards.filter(c => `${c.props.id}` === id)[0];

    return {
      card,
      index: cards.indexOf(card)
    };
  };

  const moveCard = (id, atIndex) => {
    const { card, index } = findCard(id);
    const copyCards = [...cards];

    copyCards.splice(index, 1);
    copyCards.splice(atIndex, 0, card);
    setCards(copyCards);
  };


  const getCardsId = () => {
    if (!onUpdate) {
      return;
    }
    const tempArray = [];
    cards.forEach((card) => {
      return tempArray.push(card.props.id);
    });

    onUpdate(tempArray);
  };

  return (
    <DndProvider backend={ Backend }>
      <DropTarget>
        {cards.map(card => (
          <DraggableCheckboxItem
            key={ card.props.id }
            id={ `${card.props.id}` }
            title={ card.props.title }
            findCard={ findCard }
            moveCard={ moveCard }
            onUpdate={ getCardsId }
          />
        ))}
      </DropTarget>
    </DndProvider>
  );
};

export default DraggableCheckbox;
