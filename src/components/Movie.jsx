import React from "react";
import MovieCard from "./MovieCard";
import "./Movie.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Scrollbar,
  A11y,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Movie = ({ loading, error, errorMessage, movies }) => {
  const moviesData = movies.map((movie) => (
    <MovieCard key={movie.id} movieInfo={movie} loading={loading} />
  ));
  return (
    <div className="movieData">
      {error === true && (
        <h1 className="errorHeader">Error! {errorMessage}. Please Try Again</h1>
      )}

      {moviesData}
    </div>
  );
};

export default Movie;
