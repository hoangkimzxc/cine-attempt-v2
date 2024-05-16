import { Box, Typography } from "@mui/material";
import { Movie } from "@store/movieStore";
import { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselItem from "./CarouselItem";
import { Link } from "react-router-dom";

interface CarouselListProps {
  listTitle: string;
  movies: Movie[];
}

function CarouselList({ movies, listTitle }: CarouselListProps) {
  const swiperRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (swiperRef.current) {
        const randomDirection = Math.random() < 0.5 ? "slideNext" : "slidePrev";
        swiperRef.current.swiper[randomDirection]();
      }
    }, Math.random() * 2000 + 2000); // Random interval between 1-4 seconds

    return () => clearInterval(intervalId);
  }, []);

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
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={4}
          slidesPerView={5}
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
