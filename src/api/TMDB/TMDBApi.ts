import { tmdb_requests } from "@/utils/requests";
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
  searchMovies(params: unknown) {
    const url = tmdb_requests.searchMovies;
    return axiosTMDB.get(url, { params });
  },
};

export default tmdbApi;
