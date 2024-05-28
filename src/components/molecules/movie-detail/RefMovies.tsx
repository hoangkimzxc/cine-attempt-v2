import { renderImage } from "@/utils/helpers";
import { Box, Typography } from "@mui/material";
import { Movie } from "@store/movieStore";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface RefMoviesProps {
  refMovies: Movie[];
}

interface RefMovieProps {
  name: string;
  imgSrc: string;
  id: number;
}

function RefMovies({ refMovies }: RefMoviesProps) {
  return (
    <Box display="flex" flexDirection="column" gap="10px">
      <Typography fontWeight={600} fontSize={24} color="white">
        Recommendations:
      </Typography>
      <Box>
        <Swiper modules={[Navigation]} slidesPerView={5.5} navigation>
          {refMovies?.map((video) => (
            <SwiperSlide key={video.id}>
              <RefMovie
                id={video.id}
                name={video.title || video.original_title}
                imgSrc={video.poster_path}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
export default React.memo(RefMovies);

function RefMovie({ name, imgSrc, id }: RefMovieProps) {
  return (
    <Link to={`/movie/${id}`}>
      <Box
        padding="10px"
        display="flex"
        flexDirection="column"
        gap="8px"
        sx={{
          cursor: "pointer",
          transition: "transform 100ms ease 30ms",
          borderRadius: "10px",
          overflow: "hidden",
          "&:hover": {
            transform: "scale(1.05) translateY(-0.5px)",
          },
        }}
      >
        <Box
          sx={{
            borderRadius: "10px",
            overflow: "hidden",
            height: "320px",
            width: "100%",
            boxShadow:
              "0 10px 15px -3px rgba(6, 182, 212, 0.5), 0 4px 6px -2px rgba(6, 182, 212, 0.5)",
            "&:hover": {
              boxShadow:
                "0 10px 15px -3px rgba(218,6,228, 0.5), 0 4px 6px -2px rgba(218,6,228, 0.5)",
            },
          }}
        >
          <LazyLoadImage
            src={renderImage(imgSrc)}
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
        <Typography color="white">{name}</Typography>
      </Box>
    </Link>
  );
}
