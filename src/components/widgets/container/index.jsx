'use client';
import { ItemTypes } from '@/components/builder/ItemTypes';
import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const style = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  width: '12rem',
  maxWidth: '100%',
  height: '30px',
  maxHeight: '100%',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
};

export const Container = ({ setStyleConfig, greedy = true }) => {
  const [styles, setStyles] = useState(() => ({
    dimension: {
      width: style.width,
      height: style.height,
      maxWidth: style.maxWidth,
      maxHeight: style.maxHeight,
    }
  }));

  const [droppedComponents, setDroppedComponents] = useState([]);

  // Define the drop area
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: [ItemTypes.BOX],
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop && !greedy) {
        return;
      }

      setDroppedComponents((prevComponents) => [...prevComponents, item.component]);
      return { name: 'Container' };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  // Dragging the container itself
  const [{ }, drag] = useDrag(() => ({
    type: ItemTypes.CONTAINER,
    item: { name: 'Container', component: <Container setStyleConfig={setStyleConfig} /> },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = '#808080';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  const handleClick = () => {
    if (setStyleConfig) {
      setStyleConfig(styles);
    }
  };

  return (
    <div 
      ref={(el) => {
        drag(el); 
        drop(el); 
      }} 
      onClick={handleClick} 
      style={{ ...style, backgroundColor }}
    >
      {droppedComponents.map((Component, index) => (
        <div key={index}>
          {Component}
        </div>
      ))}
    </div>
  );
};
