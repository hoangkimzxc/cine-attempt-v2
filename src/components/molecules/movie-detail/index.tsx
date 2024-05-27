import Loader from "@components/organisms/loader";
import { Box } from "@mui/material";
import useMovieDetailStore from "@store/movieDetailStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BackgroundVideo from "./BackgroundVideo";
import CastList from "./CastList";
import DetailInfo from "./DetailInfo";
import Poster from "./Poster";
import RefMovies from "./RefMovies";
import TrailerList from "./TrailerList";
import WatchMovie from "./WatchMovie";

function MovieDetail() {
  const { movie_id } = useParams();

  const {
    loading,
    movieDetail,
    movieCredits,
    movieVideos,
    movieRecommendations,
    movieReviews,
    fetchMovieDetail,
    fetchMovieVideos,
    fetchMovieCredits,
    fetchMovieRecommendations,
    fetchMovieReviews,
    clearMovieDetailData,
  } = useMovieDetailStore();
  useEffect(() => {
    fetchMovieDetail(movie_id);
    fetchMovieVideos(movie_id);
    fetchMovieCredits(movie_id);
    fetchMovieRecommendations(movie_id);
    fetchMovieReviews(movie_id);
    return () => {
      clearMovieDetailData();
    };
  }, [
    fetchMovieRecommendations,
    fetchMovieReviews,
    fetchMovieVideos,
    fetchMovieCredits,
    fetchMovieDetail,
    movie_id,
  ]);
  if (
    loading ||
    !movieDetail ||
    !movieCredits ||
    !movieVideos ||
    !movieRecommendations ||
    !movieReviews
  )
    return <Loader />;
  return (
    <Box
      padding="100px"
      bgcolor={!movieVideos[0]?.key && "#111"}
      sx={{ textShadow: "1px 1px #333" }}
    >
      <Box
        display="flex"
        alignItems="center"
        gap="40px"
        justifyContent="center"
      >
        <Box>
          {movieVideos && movieVideos.length > 0 && (
            <BackgroundVideo backgroundVideos={movieVideos} />
          )}
        </Box>
        <Box width="380px" height="580px">
          <Poster imgSrc={movieDetail.poster_path} />
        </Box>
        <Box width="850px">
          <DetailInfo
            title={
              movieDetail.original_name ||
              movieDetail.original_title ||
              movieDetail.title
            }
            genres={movieDetail.genres}
            description={movieDetail.overview}
            imdb={movieDetail.vote_average}
          />
          <Box height="260px">
            <CastList credits={movieCredits} />
          </Box>
        </Box>
      </Box>
      <Box my="60px">
        {movieVideos && movieVideos.length > 0 && (
          <TrailerList trailerVideos={movieVideos} />
        )}
      </Box>
      <Box display="flex" justifyContent="center">
        <WatchMovie
          movieName={movieDetail.original_title || movieDetail.title}
        />
      </Box>
      <Box mt="40px">
        <RefMovies refMovies={movieRecommendations} />
      </Box>

      <Box
        sx={{
          height: "100%",
          backgroundImage:
            "linear-gradient(180deg,transparent,rgba(27, 27, 27, 0.61),#000)",
          position: "fixed",
          width: "100%",
          top: "0",
          left: "0",
          zIndex: "-1",
        }}
      ></Box>
    </Box>
  );
}

export default MovieDetail;
