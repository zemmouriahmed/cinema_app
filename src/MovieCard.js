import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => {
    return (
        <div className="card">  {/* Retirez le style inline width ici */}
            <img src={posterURL} className="card-img-top" alt="Film Poster"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Note: {rating}</p>
            </div>
        </div>
    );
};


export default MovieCard;
