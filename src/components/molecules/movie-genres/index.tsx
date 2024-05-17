import Loader from "@components/organisms/loader";
import { Box } from "@mui/material";
import useMovieStore from "@store/movieStore";
import { useEffect } from "react";
import CarouselList from "./CarouselList";

function MovieGenres() {
  const {
    actionMovies,
    animationMovies,
    horrorMovies,
    crimeMovies,
    romanceMovies,
    fantasyMovies,
    fetchActionMovies,
    fetchAnimationMovies,
    fetchHorrorMovies,
    fetchCrimeMovies,
    fetchRomanceMovies,
    fetchFantasyMovies,
    loading,
  } = useMovieStore();

  useEffect(() => {
    fetchActionMovies();
    fetchAnimationMovies();
    fetchHorrorMovies();
    fetchCrimeMovies();
    fetchRomanceMovies();
    fetchFantasyMovies();
  }, [
    fetchActionMovies,
    fetchAnimationMovies,
    fetchHorrorMovies,
    fetchCrimeMovies,
    fetchRomanceMovies,
    fetchFantasyMovies,
  ]);

  if (loading) return <Loader />;

  return (
    <Box display="flex" flexDirection="column" gap="30px" padding="32px">
      <CarouselList listTitle="Actions" movies={actionMovies} />
      <CarouselList listTitle="Animations" movies={animationMovies} />
      <CarouselList listTitle="Horrors" movies={horrorMovies} />
      <CarouselList listTitle="Crimes" movies={crimeMovies} />
      <CarouselList listTitle="Romances" movies={romanceMovies} />
      <CarouselList listTitle="Fantasies" movies={fantasyMovies} />
    </Box>
  );
}

export default MovieGenres;
