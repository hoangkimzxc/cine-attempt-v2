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
  return (
    <Box display="flex" flexDirection="column" gap="12px">
      <Typography color="white" fontSize={20} fontWeight={500}>
        {listTitle}
      </Typography>
      <Box>
        <Swiper modules={[Navigation]} slidesPerView={6} navigation>
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
