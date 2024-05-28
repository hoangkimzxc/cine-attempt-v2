import { Box } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface PosterProps {
  imgSrc: string;
}

function Poster({ imgSrc }: PosterProps) {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow:
          "0 10px 15px -3px rgba(244, 63, 94, 0.5), 0 4px 6px -2px rgba(244, 63, 94, 0.5)",
        height: "550px",
        width: "100%",
      }}
    >
      <LazyLoadImage
        src={`https://image.tmdb.org/t/p/original/${imgSrc}`}
        effect="blur"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundPosition: "center",
          borderRadius: "8px",
        }}
      />
    </Box>
  );
}

export default Poster;
