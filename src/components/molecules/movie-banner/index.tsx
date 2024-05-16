import Loader from "@components/organisms/loader";
import useMovieStore from "@store/movieStore";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Banner } from "./Banner";

function MovieBanner() {
  const { bannerMovies, loading, fetchMoviesBanner } = useMovieStore();

  useEffect(() => {
    fetchMoviesBanner();
  }, [fetchMoviesBanner]);

  if (loading) return <Loader />;

  return bannerMovies ? (
    <Swiper
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      loop={true}
      modules={[Autoplay, EffectFade]}
      effect="fade"
    >
      {bannerMovies?.map((movie) => (
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
