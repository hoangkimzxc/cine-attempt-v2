import tmdbApi from "@/api/TMDB/TMDBApi";
import { create } from "zustand";

// Define interfaces for the state and actions
export interface Movie {
  id: number;
  original_name: string;
  original_title: string;
  title: string;
  overview: string;
  backdrop_path?: string;
}

interface MovieState {
  bannerMovies: Movie[];
  actionMovies: Movie[];
  animationMovies: Movie[];
  horrorMovies: Movie[];
  crimeMovies: Movie[];
  romanceMovies: Movie[];
  loading: boolean;
  error: string | null;
}

interface MovieActions {
  fetchMoviesBanner: () => Promise<void>;
  fetchActionMovies: () => Promise<void>;
  fetchAnimationMovies: () => Promise<void>;
  fetchHorrorMovies: () => Promise<void>;
  fetchCrimeMovies: () => Promise<void>;
  fetchRomanceMovies: () => Promise<void>;
}

// Combine state and actions into the store type
type MovieStore = MovieState & MovieActions;

const useMovieStore = create<MovieStore>((set) => ({
  bannerMovies: [],
  actionMovies: [],
  animationMovies: [],
  horrorMovies: [],
  crimeMovies: [],
  romanceMovies: [],
  loading: false,
  error: null,
  fetchMoviesBanner: async () => {
    set({ loading: true, error: null });
    try {
      const response = await tmdbApi.getMovieBanner();
      set({ bannerMovies: response.data.results, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  fetchActionMovies: async () => {
    set({ loading: true, error: null });
    try {
      const response = await tmdbApi.getActionMovies();
      set({ actionMovies: response.data.results, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  fetchAnimationMovies: async () => {
    set({ loading: true, error: null });
    try {
      const response = await tmdbApi.getAnimationMovies();
      set({ animationMovies: response.data.results, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  fetchHorrorMovies: async () => {
    set({ loading: true, error: null });
    try {
      const response = await tmdbApi.getHorrorMovies();
      set({ horrorMovies: response.data.results, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  fetchCrimeMovies: async () => {
    set({ loading: true, error: null });
    try {
      const response = await tmdbApi.getCrimeMovies();
      set({ crimeMovies: response.data.results, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  fetchRomanceMovies: async () => {
    set({ loading: true, error: null });
    try {
      const response = await tmdbApi.getRomanceMovies();
      set({ romanceMovies: response.data.results, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
}));

export default useMovieStore;
