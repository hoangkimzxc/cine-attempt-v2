import Loader from "@components/organisms/loader";
import useMovieStore from "@store/movieStore";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Banner } from "./Banner";

// Utility function to shuffle an array
function shuffleArray(array: any) {
  return array.sort(() => Math.random() - 0.5);
}

function MovieBanner() {
  const { bannerMovies, loading, fetchMoviesBanner } = useMovieStore();
  const [shuffledMovies, setShuffledMovies] = useState([]);

  useEffect(() => {
    fetchMoviesBanner();
  }, [fetchMoviesBanner]);

  useEffect(() => {
    if (bannerMovies && bannerMovies.length > 0) {
      setShuffledMovies(shuffleArray([...bannerMovies]));
    }
  }, [bannerMovies]);

  if (loading) return <Loader />;

  return shuffledMovies.length > 0 ? (
    <Swiper
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      modules={[Autoplay, EffectFade]}
      effect="fade"
      allowTouchMove={false}
    >
      {shuffledMovies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <Banner
            id={movie.id}
            title={movie.original_title || movie.title || movie.original_name}
            description={movie.overview}
            imgSrc={movie.backdrop_path}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : null;
}

export default MovieBanner;
