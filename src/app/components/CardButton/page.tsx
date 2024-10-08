"use client"
import React, { useState } from 'react';


const CardButton: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="card">
      <button 
        className="magicButton" 
        onClick={handleClick} 
        style={{ backgroundColor: isClicked ? '#32cd32' : '#1e90ff' }}
      >
        {isClicked ? 'Clicked!' : 'Click me!'}
      </button>
    </div>
  );
};

export default CardButton;
