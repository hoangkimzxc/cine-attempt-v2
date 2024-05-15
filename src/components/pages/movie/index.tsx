import React from "react";
import MovieBanner from "@components/molecules/movie-banner";
import MovieGenres from "@components/molecules/movie-genres";

export default function Movie() {
  return (
    <>
      <MovieBanner />
      <MovieGenres />
    </>
  );
}
