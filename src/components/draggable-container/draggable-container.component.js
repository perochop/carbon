/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { DndProvider, useDrop } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import DraggableItem from './draggable-item.component';
import { StyledIcon } from './draggable-item.style';

const DropTarget = ({ children }) => {
  const [, drop] = useDrop({ accept: 'draggableItem' });

  return <div ref={ drop }>{children}</div>;
};

const DraggableContainer = ({ children, onUpdate }) => {
  const [draggableItems, setDraggableItems] = useState(React.Children.toArray(children));

  const findItem = (id) => {
    const draggableItem = draggableItems.filter((item) => {
      return `${item.props.id}` === id;
    })[0];

    return {
      draggableItem,
      index: draggableItems.indexOf(draggableItem)
    };
  };

  const moveItem = (id, atIndex) => {
    const { draggableItem, index } = findItem(id);
    const copyOfDraggableItems = [...draggableItems];

    copyOfDraggableItems.splice(index, 1);
    copyOfDraggableItems.splice(atIndex, 0, draggableItem);
    setDraggableItems(copyOfDraggableItems);
  };

  const getItemsId = () => {
    if (!onUpdate) {
      return;
    }
    const tempArray = [];
    draggableItems.forEach((draggableItem) => {
      return tempArray.push(draggableItem.props.id);
    });

    onUpdate(tempArray);
  };

  return (
    <DndProvider backend={ Backend }>
      <DropTarget>
        {draggableItems.map(item => (
          <DraggableItem
            key={ item.props.id }
            id={ `${item.props.id}` }
            title={ item.props.title }
            findItem={ findItem }
            moveItem={ moveItem }
            onUpdate={ getItemsId }
          >
            {item.props.children}
            <StyledIcon type='drag' />
          </DraggableItem>
        ))}
      </DropTarget>
    </DndProvider>
  );
};

export default DraggableContainer;
