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
          React.cloneElement(
            item,
            {
              id: `${item.props.id}`,
              findItem,
              moveItem,
              onUpdate: getItemsId
            },
            [
              item.props.children,
              <StyledIcon key={ item.props.id } type='drag' />
            ]
          )
        ))}
      </DropTarget>
    </DndProvider>
  );
};

DraggableContainer.propTypes = {
  children: (props, propName, componentName) => {
    let error;

    const prop = props[propName];

    React.Children.forEach(prop, (child) => {
      if (DraggableItem.displayName !== child.type.displayName) {
        error = new Error(`\`${componentName}\` only accepts children of type \`${DraggableContainer.displayName}\`.`);
      }
    });

    return error;
  }
};

export default DraggableContainer;
