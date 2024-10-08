// src/components/CardInput.tsx
import React from 'react';

const CardInput: React.FC = () => {
  return (
    <div className="card">
      <input type="text" className="customInput" placeholder="Enter text..." />
    </div>
  );
};

export default CardInput;
