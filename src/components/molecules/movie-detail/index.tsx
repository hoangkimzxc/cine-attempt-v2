import useMovieDetailStore from "@store/movieDetailStore";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailInfo from "./DetailInfo";
import CastList from "./CastList";
import Loader from "@components/organisms/loader";
import { Box, Typography } from "@mui/material";
import Poster from "./Poster";
import TrailerList from "./TrailerList";
import Button from "@components/atoms/button";
import RefMovies from "./RefMovies";
import BackgroundVideo from "./BackgroundVideo";

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
  } = useMovieDetailStore();
  useEffect(() => {
    fetchMovieDetail(movie_id);
    fetchMovieVideos(movie_id);
    fetchMovieCredits(movie_id);
    fetchMovieRecommendations(movie_id);
    fetchMovieReviews(movie_id);
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
    <Box padding="100px" bgcolor={!movieVideos[0]?.key && "#111"}>
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
        <Button
          sx={{
            position: "relative",
            bgcolor: "#ee3069",
            borderRadius: "5px",
            height: "60px",
            width: "200px",
            transition: "linear 0.1s",
            "&:hover": { backgroundColor: "#32b674" },
            "&.Mui-disabled": {
              bgcolor: "#1f8653",
            },
          }}
        >
          <Typography fontSize="16px" fontWeight="600" color="white">
            Watch Movie
          </Typography>
        </Button>
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
