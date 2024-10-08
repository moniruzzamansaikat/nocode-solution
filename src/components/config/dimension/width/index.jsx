import React, { useState, useEffect } from 'react';

export const Width = ({ value }) => {
  const [width, setWidth] = useState(value.replace(/[^\d]/g, '')); 
  const [unit, setUnit] = useState(value.replace(/^\d+/, '')); 

  useEffect(() => {
    setWidth(value.replace(/[^\d]/g, '')); 
    setUnit(value.replace(/^\d+/, '')); 
  }, [value]);

  const handleWidthChange = (e) => {
    const newValue = e.target.value;

    if (/^\d*$/.test(newValue)) {
      setWidth(newValue); 
    }
  };

  const handleUnitChange = (e) => {
    const newUnit = e.target.value;
    setUnit(newUnit);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={width} 
        onChange={handleWidthChange}
        className="border border-gray-300 rounded-md p-2 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out"
        placeholder="Width"
      />
      <select
        value={unit}
        onChange={handleUnitChange}
        className="border border-gray-300 rounded-md p-2 bg-white text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out"
      >
        <option value="px">px</option>
        <option value="%">%</option>
        <option value="em">em</option>
        <option value="rem">rem</option>
      </select>
    </div>
  );
};
