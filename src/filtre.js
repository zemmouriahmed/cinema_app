// filtre.js
import React, { useState } from 'react';
import './filtre.css';

function Filtre({ initialMovies, setMovies, onClose }) {
  const [titre, setTitre] = useState('');
  const [note, setNote] = useState('');

  const handleFilter = () => {
    let filteredMovies = initialMovies;

    if (titre) {
      filteredMovies = filteredMovies.filter(movie =>
        movie.title.toLowerCase().includes(titre.toLowerCase())
      );
    }

    if (note) {
      filteredMovies = filteredMovies.filter(movie =>
        movie.rating.toString() === note
      );
    }

    setMovies(filteredMovies);
    onClose();
  };

  return (
    <div className="filtre-container">
      <input
        className="filtre-input"
        type="text"
        placeholder="Titre du film"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />
      <input
        className="filtre-input"
        type="text"
        placeholder="Note du film"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button className="filtre-button" onClick={handleFilter}>Lancer la recherche</button>
      <button className="filtre-button" onClick={onClose}>Fermer</button>
    </div>
  );
}

export default Filtre;
