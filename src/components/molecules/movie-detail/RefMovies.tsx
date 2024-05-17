import { Box, Typography } from "@mui/material";
import { Movie } from "@store/movieStore";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { renderImage } from "@/utils/helpers";

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
        <Swiper slidesPerView={5.5} modules={[Navigation]} navigation>
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

export default RefMovies;

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
            height: "350px",
            width: "100%",
            boxShadow:
              "0 10px 15px -3px rgba(6, 182, 212, 0.5), 0 4px 6px -2px rgba(6, 182, 212, 0.5)",
            "&:hover": {
              boxShadow:
                "0 10px 15px -3px rgba(218,6,228, 0.5), 0 4px 6px -2px rgba(218,6,228, 0.5)",
            },
          }}
        >
          <img
            src={renderImage(imgSrc)}
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
