import React, { useEffect, useState, useRef, useCallback } from "react";
import Loader from "@components/organisms/loader";
import useMovieStore from "@store/movieStore";
import { Banner } from "./Banner";

function MovieBanner() {
  const { movies, loading, error, fetchMovies } = useMovieStore();
  const [currentMovie, setCurrentMovie] = useState(null);
  const displayedMoviesRef = useRef([]);
  const intervalRef = useRef(null);

  const fetchMoviesIfNeeded = useCallback(() => {
    fetchMovies();
  }, [fetchMovies]);

  useEffect(() => {
    fetchMoviesIfNeeded();
  }, [fetchMoviesIfNeeded]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (movies.length > 0) {
        let nextMovie;
        do {
          nextMovie = movies[Math.floor(Math.random() * movies.length)];
        } while (
          displayedMoviesRef.current.includes(nextMovie._id) &&
          displayedMoviesRef.current.length < movies.length
        );

        setCurrentMovie(nextMovie);
        displayedMoviesRef.current.push(nextMovie._id);

        if (displayedMoviesRef.current.length >= movies.length) {
          displayedMoviesRef.current = [];
        }
      }
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [movies]);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return currentMovie ? (
    <Banner
      key={currentMovie._id}
      title={currentMovie.origin_name}
      description={currentMovie.content}
      imgSrc={currentMovie.poster_url}
    />
  ) : null;
}

export default MovieBanner;
