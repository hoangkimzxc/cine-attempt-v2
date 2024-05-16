import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { Movie } from "@store/movieStore";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselItem from "./CarouselItem";

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
    }, Math.random() * 2000 + 1000); // Random interval between 1-3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box display="flex" flexDirection="column" gap="12px">
      <Typography color="white" fontSize={20} fontWeight={500}>
        {listTitle}
      </Typography>
      <Box>
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={4}
          slidesPerView={6}
          navigation
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <CarouselItem
                title={
                  movie.original_title || movie.title || movie.original_name
                }
                imgSrc={movie.backdrop_path}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default CarouselList;
