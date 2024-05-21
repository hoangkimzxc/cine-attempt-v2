import Button from "@components/atoms/button";
import { Typography } from "@mui/material";
import useMovieStore from "@store/movieStore";
import { useEffect } from "react";

interface WatchMovieProps {
  movieName: string;
}

function WatchMovie({ movieName }: WatchMovieProps) {
  const { searchMovie, searchedMovie } = useMovieStore();
  useEffect(() => {
    searchMovie(movieName);
  }, [movieName]);

  const handleClick = () => {
    window.open(searchedMovie, "_blank");
  };

  return (
    <Button
      onClick={searchedMovie && handleClick}
      sx={{
        position: "relative",
        bgcolor: "#ee3069",
        borderRadius: "5px",
        height: "60px",
        width: "200px",
        transition: "linear 0.1s",
        "&:hover": { backgroundColor: "#32b674" },
        "&.Mui-disabled": {
          bgcolor: "#1f8653",
        },
      }}
    >
      <Typography fontSize="16px" fontWeight="600" color="white">
        Watch Movie
      </Typography>
    </Button>
  );
}

export default WatchMovie;
