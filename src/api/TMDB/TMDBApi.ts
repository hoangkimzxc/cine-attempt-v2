import { TMDB_API_KEY, tmdb_requests } from "@/utils/requests";
import axiosTMDB from "./axiosTMDB";

const tmdbApi = {
  getMovieBanner() {
    const url = tmdb_requests.fetchTrending;
    return axiosTMDB.get(url);
  },
  getActionMovies(page: number = 1) {
    const url = tmdb_requests.fetchActionMovies + `&page=${page}`;
    return axiosTMDB.get(url);
  },
  getAnimationMovies(page: number = 1) {
    const url = tmdb_requests.fetchAnimationMovies + `&page=${page}`;
    return axiosTMDB.get(url);
  },
  getHorrorMovies(page: number = 1) {
    const url = tmdb_requests.fetchHorrorMovies + `&page=${page}`;
    return axiosTMDB.get(url);
  },
  getCrimeMovies(page: number = 1) {
    const url = tmdb_requests.fetchCrimeMovies + `&page=${page}`;
    return axiosTMDB.get(url);
  },
  getRomanceMovies(page: number = 1) {
    const url = tmdb_requests.fetchRomanceMovies + `&page=${page}`;
    return axiosTMDB.get(url);
  },
  getFantasyMovies(page: number = 1) {
    const url = tmdb_requests.fetchFantasyMovies + `&page=${page}`;
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
