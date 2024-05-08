import { requests } from "@/utils/requests";
import axiosOphim from "./axiosOphim";

const ophimApi = {
  getMovieList() {
    const url = requests.fetchMovieList;
    return axiosOphim.get(url);
  },
};

export default ophimApi;
