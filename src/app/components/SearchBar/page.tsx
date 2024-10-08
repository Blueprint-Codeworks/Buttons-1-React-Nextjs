// src/components/SearchBar.tsx
"use client"
import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) {
      console.log(`Buscando: ${query}`);
      // Aquí puedes agregar la lógica para realizar la búsqueda
      setQuery(''); // Limpia el input después de buscar
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="card">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="search-button" onClick={handleSearch}>
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 4a7 7 0 107 7 7 7 0 00-7-7zm0 14a7 7 0 10-7-7 7 7 0 007 7zM16.65 16.65l3.35 3.35m-3.35-3.35l-3.35-3.35"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
