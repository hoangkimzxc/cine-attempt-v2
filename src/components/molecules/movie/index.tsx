import React from "react";
import MovieBanner from "../movie-banner";
import MovieGenres from "../movie-genres";
import { Box } from "@mui/material";

export default function Movie() {
  return (
    <Box bgcolor="#111">
      <MovieBanner />
      <MovieGenres />
    </Box>
  );
}
