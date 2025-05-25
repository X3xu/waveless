import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Buscar por marca o modelo..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default SearchBar;
