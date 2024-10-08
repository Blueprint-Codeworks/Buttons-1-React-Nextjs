// src/components/RangeSlider.tsx
"use client"
import React, { useState } from 'react';

const RangeSlider: React.FC = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className="card">
      <div className="range-container">
        <input
          type="range"
          className="range-input"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
        />
        <span className="range-value">{value}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
