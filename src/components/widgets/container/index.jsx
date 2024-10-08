'use client'
import { ItemTypes } from '@/components/builder/ItemTypes';
import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const style = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  width: '12rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
};

export const Container = ({ greedy = true }) => {
  const [droppedComponents, setDroppedComponents] = useState([]);

  const [{ }, drag] = useDrag(() => ({
    type: ItemTypes.CONTAINER,
    item: { name: 'Container', component: <Container /> },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: [ItemTypes.BOX],
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop()
      
      if (didDrop && !greedy) {
        return
      }

      setDroppedComponents((prevComponents) => [...prevComponents, item.component]);
      return { name: 'Container' };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = '#808080';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  function attachRef(el) {
    drag(el)
    drop(el)
  }

  return (
    <div ref={attachRef} style={{ ...style, backgroundColor }}>
      {droppedComponents.map((Component, index) => (
        <div key={index}>
          {Component}
        </div>
      ))}
    </div>
  );
};
