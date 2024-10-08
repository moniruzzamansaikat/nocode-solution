import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes.js';

const style = {
  display: 'inline-block',
  width: '100%',
  maxWidth: '100%',
  height: '2rem',
  maxHeight: '100%',
  color: 'black',
  padding: '0px',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  border: '1px solid black',
};


export const Box = ({ setStyleConfig, name }) => {
  const [styles, setStyles] = useState(() => ({
    dimension: {
      width: style.width,
      height: style.height,
      maxWidth: style.maxWidth,
      maxHeight: style.maxHeight,
    }
  }));

  
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name, component: <Box name={name}  setStyleConfig={setStyleConfig} /> },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const opacity = isDragging ? 0.4 : 1;

  const handleClick = () => {
    if (setStyleConfig) {
      setStyleConfig(styles);
    }
  };
  return (
    <div ref={drag} style={{ opacity, ...style }} onClick={handleClick}>
      {name}
    </div>
  );
};
