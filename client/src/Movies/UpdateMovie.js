import React, { useState, useEffect } from "react";
import axios from 'axios';

const UpdateMovie = props => {

  const [movie, setMovie] = useState();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/movies/${props.match.params.id}`).then(res => {
      //console.log(res);
      setMovie(res.data);
    }).catch(err => {
      console.error(err);
    })
  }, [props.match.params.id])

  if (!movie) {
    return <h2>Loading movie information...</h2>
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/movies/${props.match.params.id}`, movie).then(res => {
      //console.log(res);
      props.history.push("/");
    }).catch(err => {
      console.error(err);
    })
  }

  const handleChange = e => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form>
      <label htmlFor="title">Title: </label>
      <input type="text" name="title" value={movie.title} onChange={handleChange} />
      <label htmlFor="director">Director: </label>
      <input type="text" name="director" value={movie.director} onChange={handleChange} />
      <label htmlFor="metascore">Metascore: </label>
      <input type="text" name="metascore" value={movie.metascore} onChange={handleChange} />
      <label htmlFor="stars">Stars: </label>
      <input type="text" name="stars" value={movie.stars} onChange={handleChange} />
      <input type="submit" value="Update Movie" onClick={handleSubmit} />
    </form>
  )
}

export default UpdateMovie;
