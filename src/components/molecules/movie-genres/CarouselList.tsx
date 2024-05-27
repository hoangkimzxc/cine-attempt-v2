import { Box, Typography } from "@mui/material";
import { Movie } from "@store/movieStore";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselItem from "./CarouselItem";

interface CarouselListProps {
  listTitle: string;
  movies: Movie[];
}

function CarouselList({ movies, listTitle }: CarouselListProps) {
  return (
    <Box display="flex" flexDirection="column" gap="12px">
      <Box display="flex" gap="6px" alignItems="center">
        <Typography color="white" fontSize={20} fontWeight={500}>
          {listTitle}
        </Typography>
        <Typography color="#3ef4d2" fontSize={14} fontWeight={400}>
          See All
        </Typography>
      </Box>
      <Box>
        <Swiper
          modules={[Navigation]}
          spaceBetween={4}
          slidesPerView={6.5}
          navigation
          loop={false}
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Link to={`/movie/${movie?.id}`}>
                <CarouselItem
                  title={
                    movie.original_title || movie.title || movie.original_name
                  }
                  imgSrc={movie.backdrop_path}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default CarouselList;
