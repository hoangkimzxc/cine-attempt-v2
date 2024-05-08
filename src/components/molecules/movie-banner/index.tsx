import { removeHTMLArtifacts } from "@/utils/helpers";
import Loader from "@components/organisms/loader";
import useMovieStore from "@store/movieStore"; // Ensure this path is correct
import React, { useEffect } from "react";

function MovieBanner() {
  const { movies, loading, error, fetchMovies } = useMovieStore();

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {movies.map((movie: any) => (
        <div key={movie._id}>
          <h2>{movie.name}</h2>
          {removeHTMLArtifacts(movie.content)}
          <img
            src={`https://img.ophim.live/uploads/movies/${movie.poster}`}
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
}

export default MovieBanner;
