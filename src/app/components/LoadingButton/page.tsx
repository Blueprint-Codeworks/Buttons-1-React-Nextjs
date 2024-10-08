// src/components/LoadingButton.tsx
"use client";
import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";


const LoadingButton: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [buttonText, setButtonText] = useState('Click Me');
  
    const handleClick = () => {
      setLoading(true);
      setButtonText('Cargando...');
      
      setTimeout(() => {
        setLoading(false);
        setButtonText('Listo');
      }, 2000); // Simular un tiempo de carga de 2 segundos
    };
  
    return (
      <div className="card">
        <button className="loading-button" onClick={handleClick} disabled={loading}>
          <span className={`spinner ${loading ? 'visible' : ''}`} />
          <span className="button-text">{buttonText}</span>
        </button>
      </div>
    );
  };
  
  export default LoadingButton;