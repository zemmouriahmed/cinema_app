import React, { useState } from 'react';
import './RajoutFilm.css';

function RajoutFilm({ onAdd }) {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !posterURL || !rating) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
    onAdd({ title, description, posterURL, rating });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <div>
      <button className="add-movie-button" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Masquer le formulaire' : 'Ajout nouveau film'}
      </button>
      {showForm && (
        <div className="movie-form-container">
          <form className="rajout-film-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Titre"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="URL de l'affiche"
              value={posterURL}
              onChange={(e) => setPosterURL(e.target.value)}
            />
            <input
              type="text"
              placeholder="Note"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <div>
              <button type="submit">Ajouter le film</button>
              <button type="button" onClick={() => setShowForm(false)}>Fermer</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default RajoutFilm;
