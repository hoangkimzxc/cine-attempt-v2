import { Box, Typography } from "@mui/material";
import { Movie } from "@store/movieStore";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

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
        <Swiper
          spaceBetween={8}
          slidesPerView={6}
          modules={[Navigation]}
          navigation
        >
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
      <Typography color="white">{name}</Typography>
    </Link>
  );
}
