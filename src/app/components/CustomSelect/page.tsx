// src/components/CustomSelect.tsx
"use client"
import React, { useState, useRef } from 'react';

const CustomSelect: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
  
    const options = [
      { value: 'Opción 1' },
      { value: 'Opción 2' },
      { value: 'Opción 3' },
    ];
  
    const handleSelectClick = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (value: string) => {
      setSelectedOption(value);
      inputRef.current!.value = value; // Actualiza el valor del input oculto
      setIsOpen(false);
    };
  
    return (
      <div className="card">
        <div className="selectbox">
          <div className="select" onClick={handleSelectClick}>
            <div className="contenido-select">
              <h1 className={`titulo ${selectedOption ? 'seleccionada' : ''}`}>
                {selectedOption || 'Selecciona una opción'}
              </h1>
            </div>
            <i className="fas fa-angle-down"></i>
          </div>
  
          <div className={`opciones ${isOpen ? 'show' : 'hide'}`}>
            {options.map((option) => (
              <a
                key={option.value}
                href="#"
                className={`opcion ${selectedOption === option.value ? 'seleccionada' : ''}`}
                onClick={() => handleOptionClick(option.value)}
              >
                <div className="contenido-opcion">
                  <div className="textos">
                    <h1 className="titulo">{option.value}</h1>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <input type="hidden" name="opcion" ref={inputRef} value="" />
        </div>
      </div>
    );
  };

export default CustomSelect;
