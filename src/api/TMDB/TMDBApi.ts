import { tmdb_requests } from "@/utils/requests";
import axiosTMDB from "./axiosTMDB";

const tmdbApi = {
  getMovieBanner() {
    const url = tmdb_requests.fetchActionMovies;
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
