import React from 'react';
import { DndProvider, useDrag } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

const DraggableItem = ({ children }) => {
  const [isDragging, dragRef] = useDrag({
    item: { type: 'DraggableItem', children },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  console.log(isDragging);

  return (
    <div ref={ dragRef }>
      {children}
    </div>
  );
};

const DraggableCheckbox = () => {
  const [cards, setCards] = useState(ITEMS);
  const moveCard = (id, atIndex) => {
    const { card, index } = findCard(id);
    setCards(
      update(cards, {
        $splice: [
          [index, 1],
          [atIndex, 0, card]
        ]
      }),
    );
  };

  return (
    <DndProvider backend={ Backend }>
      <DraggableItem>
    TEST
      </DraggableItem>
    </DndProvider>
  );
};

export default DraggableCheckbox;
