import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [q, setQ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(q);
  };

  return (
    <form className="d-flex mb-3" onSubmit={handleSubmit} role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Buscar productos..."
        aria-label="Buscar"
        value={q}
        onChange={e => setQ(e.target.value)}
      />
      <button className="btn btn-outline-secondary" type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
