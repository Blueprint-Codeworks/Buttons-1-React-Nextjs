// src/components/ToggleButton.tsx
"use client"
import React, { useState } from 'react';

const ToggleButton: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="card">
      <button
        className={`toggle-button ${isActive ? 'active' : ''}`}
        onClick={handleToggle}
      >
        {isActive ? 'On' : 'Off'}
      </button>
    </div>
  );
};

export default ToggleButton;
