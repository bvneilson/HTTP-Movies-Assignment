import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MovieCard = props => {
  const { title, director, metascore, stars, id } = props.movie;
  const deleteMovie = id => {
    axios.delete(`http://localhost:5000/api/movies/${id}`).then(res => {
      console.log(res);
      window.location.href="/";
    }).catch(err => {
      console.error(err);
    })
  }
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      <Link to={`/update-movie/${id}`}>
        <button>Update Movie</button>
      </Link>
      <button onClick={() => {deleteMovie(id)}}>Delete Movie</button>
    </div>
  );
};

export default MovieCard;
