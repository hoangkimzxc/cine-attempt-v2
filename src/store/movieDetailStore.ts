import tmdbApi from "@/api/TMDB/TMDBApi";
import { Movie } from "./movieStore";
import { create } from "zustand";

export interface MovieDetail extends Movie {
  genres: { id: number; name: string }[];
  release_date: string;
  vote_average: number;
  poster_path: string;
}

export interface MovieCredit {
  cast_id: number;
  character: string;
  name: string;
  original_name: string;
  profile_path?: string;
}

export interface MovieVideo {
  key: string;
  id: string;
  name: string;
  type: string;
}

interface MovieDetailState {
  movieDetail: MovieDetail;
  movieCredits: MovieCredit[];
  movieVideos: MovieVideo[];
  movieRecommendations: Movie[];
  movieReviews: any[];
  playMovie: boolean;
  loading: boolean;
  error: string | null;
}

interface MovieDetailActions {
  fetchMovieDetail: (movie_id: unknown) => Promise<void>;
  fetchMovieCredits: (movie_id: unknown) => Promise<void>;
  fetchMovieVideos: (movie_id: unknown) => Promise<void>;
  fetchMovieRecommendations: (movie_id: unknown) => Promise<void>;
  fetchMovieReviews: (movie_id: unknown) => Promise<void>;
  playMovieImmediately: () => void;
  clearMovieDetailData: () => void;
}

type MovieDetailStore = MovieDetailState & MovieDetailActions;

const useMovieDetailStore = create<MovieDetailStore>((set) => ({
  movieDetail: null,
  movieCredits: [],
  movieVideos: [],
  movieRecommendations: [],
  movieReviews: [],
  playMovie: false,
  loading: false,
  error: null,
  playMovieImmediately: () => {
    set({
      playMovie: true,
    });
  },
  clearMovieDetailData: () => {
    set({
      movieDetail: null,
      movieCredits: [],
      movieVideos: [],
      movieRecommendations: [],
      movieReviews: [],
      playMovie: false,
    });
  },
  fetchMovieDetail: async (movie_id: unknown) => {
    set({ loading: true, error: null });
    try {
      const response = await tmdbApi.getMovieDetail(movie_id);
      set({ movieDetail: response.data, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  fetchMovieCredits: async (movie_id: unknown) => {
    set({ loading: true, error: null });
    try {
      const response = await tmdbApi.getMovieCredit(movie_id);
      set({ movieCredits: response.data.cast, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  fetchMovieVideos: async (movie_id: unknown) => {
    set({ loading: true, error: null });
    try {
      const response = await tmdbApi.getMovieVideos(movie_id);
      set({ movieVideos: response.data.results, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  fetchMovieRecommendations: async (movie_id: unknown) => {
    set({ loading: true, error: null });
    try {
      const response = await tmdbApi.getMovieRecommendations(movie_id);
      set({ movieRecommendations: response.data.results, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  fetchMovieReviews: async (movie_id: unknown) => {
    set({ loading: true, error: null });
    try {
      const response = await tmdbApi.getMovieReviews(movie_id);
      set({ movieReviews: response.data.results, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
}));

export default useMovieDetailStore;
