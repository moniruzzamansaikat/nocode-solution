import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

export const Canvas = () => {
  const [droppedComponents, setDroppedComponents] = useState([]);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: [ItemTypes.BOX, ItemTypes.CONTAINER, ItemTypes.DUSTBIN],
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop()
      
      if (didDrop) {
        return
      }

      setDroppedComponents((prevComponents) => [...prevComponents, item.component]);
      return { name: 'Dustbin' };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div ref={drop} style={{
      padding: '1rem',
      width: '100%',
      height: '100%',
      backgroundColor: 'lightgray',
    }}>
      {droppedComponents.map((Component, index) => (
        <div key={index}>
          {Component}
        </div>
      ))}
    </div>
  );
};
