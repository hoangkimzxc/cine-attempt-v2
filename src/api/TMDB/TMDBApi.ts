import { TMDB_API_KEY, tmdb_requests } from "@/utils/requests";
import axiosTMDB from "./axiosTMDB";

const tmdbApi = {
  getMovieBanner() {
    const url = tmdb_requests.fetchTrending;
    return axiosTMDB.get(url);
  },
  getActionMovies() {
    const url = tmdb_requests.fetchActionMovies;
    return axiosTMDB.get(url);
  },
  getAnimationMovies() {
    const url = tmdb_requests.fetchAnimationMovies;
    return axiosTMDB.get(url);
  },
  getHorrorMovies() {
    const url = tmdb_requests.fetchHorrorMovies;
    return axiosTMDB.get(url);
  },
  getCrimeMovies() {
    const url = tmdb_requests.fetchCrimeMovies;
    return axiosTMDB.get(url);
  },
  getRomanceMovies() {
    const url = tmdb_requests.fetchRomanceMovies;
    return axiosTMDB.get(url);
  },
  getTVBanner() {
    const url = tmdb_requests.fetchMysteryTV;
    return axiosTMDB.get(url);
  },
  getMovieDetail(movie_id: unknown) {
    return axiosTMDB.get(`/movie/${movie_id}?api_key=${TMDB_API_KEY}`);
  },
  getMovieCredit(movie_id: unknown) {
    return axiosTMDB.get(`/movie/${movie_id}/credits?api_key=${TMDB_API_KEY}`);
  },
  getMovieVideos(movie_id: unknown) {
    return axiosTMDB.get(`/movie/${movie_id}/videos?api_key=${TMDB_API_KEY}`);
  },
  getMovieRecommendations(movie_id: unknown) {
    return axiosTMDB.get(
      `/movie/${movie_id}/recommendations?api_key=${TMDB_API_KEY}`
    );
  },
  getMovieReviews(movie_id: unknown) {
    return axiosTMDB.get(`/movie/${movie_id}/reviews?api_key=${TMDB_API_KEY}`);
  },
  searchMovies(params: unknown) {
    const url = tmdb_requests.searchMovies;
    return axiosTMDB.get(url, { params });
  },
};

export default tmdbApi;
