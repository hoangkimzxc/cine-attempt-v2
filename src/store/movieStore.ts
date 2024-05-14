import tmdbApi from "@/api/TMDB/TMDBApi";
import { create } from "zustand";

// Define interfaces for the state and actions
export interface Movie {
  id: string;
  original_title: string;
  title: string;
  overview: string;
  backdrop_path?: string;
}

interface MovieState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

interface MovieActions {
  fetchMoviesBanner: () => Promise<void>;
}

// Combine state and actions into the store type
type MovieStore = MovieState & MovieActions;

const useMovieStore = create<MovieStore>((set) => ({
  movies: [],
  loading: false,
  error: null,
  fetchMoviesBanner: async () => {
    set({ loading: true, error: null });
    try {
      const response = await tmdbApi.getMovieBanner();
      set({ movies: response.data.results, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
}));

export default useMovieStore;
