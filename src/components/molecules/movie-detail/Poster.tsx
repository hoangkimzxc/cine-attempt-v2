import React from "react";

interface PosterProps {
  imgSrc: string;
}

function Poster({ imgSrc }: PosterProps) {
  return (
    <img
      src={`https://image.tmdb.org/t/p/original/${imgSrc}`}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        backgroundPosition: "center",
        borderRadius: "8px",
      }}
    />
  );
}

export default Poster;
