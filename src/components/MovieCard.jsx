import React from "react";
import { Link } from "react-router-dom";
import './MovieCard.css'

const MovieCard = ({ movieInfo}) => {
  const posterImg = (
    <img
      className="posterImg"
      src={movieInfo.poster_path}
      alt={movieInfo.title}
    />
  );
  return (
    <div className="individualCard">
        <Link to={`/movieDetails/${movieInfo.id}`}> {posterImg} </Link>
    </div>
  );
};

export default MovieCard;
