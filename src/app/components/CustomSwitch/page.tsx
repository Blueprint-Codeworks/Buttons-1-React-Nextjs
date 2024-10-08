// src/components/CustomSwitch.tsx
"use client"
import React, { useState } from 'react';

const CustomSwitch: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="card">
      <label className="switch">
        <input
          type="checkbox"
          className="customSwitch"
          checked={isChecked}
          onChange={handleSwitchChange}
        />
        <span className="slider"></span>
      </label>
      <p className="switchText">{isChecked ? 'On' : 'Off'}</p>
    </div>
  );
};

export default CustomSwitch;
