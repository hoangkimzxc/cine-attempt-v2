import { requests } from "@/utils/requests";
import axiosOphim from "./axiosOphim";

const ophimApi = {
  getMovieList() {
    const url = requests.fetchMovieList;
    return axiosOphim.get(url);
  },
  getMovie(slug: string) {
    const url = requests.fetchMovie + `/${slug}`;
    return axiosOphim.get(url);
  },
  searchMovie(params: unknown) {
    const url = requests.searchMovie;
    return axiosOphim.get(url, { params });
  },
};

export default ophimApi;
