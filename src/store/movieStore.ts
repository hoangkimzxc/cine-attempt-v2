import axiosOphim from "@/api/axiosOphim";
import ophimApi from "@/api/ophimApi";
import { create } from "zustand";

// Define interfaces for the state and actions
interface Movie {
  _id: string;
  name: string;
  content: string;
  poster?: string; // Assuming poster might be an optional property
}

interface MovieState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

interface MovieActions {
  fetchMovies: () => Promise<void>;
}

// Combine state and actions into the store type
type MovieStore = MovieState & MovieActions;

const useMovieStore = create<MovieStore>((set) => ({
  movies: [],
  loading: false,
  error: null,
  fetchMovies: async () => {
    set({ loading: true, error: null });
    try {
      const response = await ophimApi.getMovieList();
      const moviesWithSlugs = response.data.items;

      // Fetch additional content for each movie
      const moviesWithDetails = await Promise.all(
        moviesWithSlugs.map(async (movie: any) => {
          try {
            const contentResponse = await axiosOphim.get(`/phim/${movie.slug}`);

            return {
              _id: movie._id,
              name: movie.name,
              poster: movie.poster_url,
              content: contentResponse.data.movie.content, // Assuming 'content' is the property you need
            };
          } catch (error) {
            console.error("Failed to fetch content for:", movie.name, error);
            return { name: movie.name, content: "Failed to load content" }; // Handle errors individually
          }
        })
      );
      set({ movies: moviesWithDetails, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
}));

export default useMovieStore;
