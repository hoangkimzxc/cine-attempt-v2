import useMovieDetailStore from "@store/movieDetailStore";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailInfo from "./DetailInfo";
import CastList from "./CastList";
import Loader from "@components/organisms/loader";
import { Box } from "@mui/material";
import Poster from "./Poster";

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
  console.log("movieDetail", movieDetail);
  console.log("movieCredits", movieCredits);
  console.log("movieVideos", movieVideos);
  console.log("movieRecommendations", movieRecommendations);
  console.log("movieReviews", movieReviews);
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
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="40px"
      padding="100px 40px"
    >
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
  );
}

export default MovieDetail;
