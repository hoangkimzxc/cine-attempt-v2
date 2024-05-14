import React, { useEffect, useState, useRef, useCallback } from "react";
import Loader from "@components/organisms/loader";
import useMovieStore, { Movie } from "@store/movieStore";
import { Banner } from "./Banner";

function MovieBanner() {
  const { movies, loading, fetchMoviesBanner } = useMovieStore();
  const [currentMovie, setCurrentMovie] = useState<Movie>(null);
  const displayedMoviesRef = useRef([]);
  const intervalRef = useRef(null);

  const fetchMoviesIfNeeded = useCallback(() => {
    fetchMoviesBanner();
  }, [fetchMoviesBanner]);

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
          displayedMoviesRef.current.includes(nextMovie.id) &&
          displayedMoviesRef.current.length < movies.length
        );

        setCurrentMovie(nextMovie);
        displayedMoviesRef.current.push(nextMovie.id);

        if (displayedMoviesRef.current.length >= movies.length) {
          displayedMoviesRef.current = [];
        }
      }
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [movies]);

  if (loading) return <Loader />;

  return currentMovie ? (
    <Banner
      key={currentMovie.id}
      title={currentMovie.original_title || currentMovie.title}
      description={currentMovie.overview}
      imgSrc={currentMovie.backdrop_path}
    />
  ) : null;
}

export default MovieBanner;
