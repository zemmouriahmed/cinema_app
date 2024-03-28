import React, { useState } from 'react';
import MovieList from './MovieList';
import RajoutFilm from './RajoutFilm';
import './App.css';
import Filtre from './filtre';

function App() {
  const [movies, setMovies] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);  // Pour stocker la liste initiale des films
 
 
  const addMovie = (newMovie) => {
    const updatedMovies = [...initialMovies, newMovie];
    setMovies(updatedMovies);
    setInitialMovies(updatedMovies);
  };



  const handleResetFilter = () => {
    setMovies(initialMovies);
  };


  return (
    <div className="App">
      <RajoutFilm onAdd={addMovie} />
      <button className="filter-button" onClick={() => setShowFilter(!showFilter)}>Filtrer films</button>
      {showFilter && <Filtre          initialMovies={initialMovies} 
          setMovies={setMovies} 
          onClose={() => setShowFilter(false)} />}

      <button className="affiche-tout-button" onClick={handleResetFilter}>Afficher tous les films</button>


      <div className="content">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
