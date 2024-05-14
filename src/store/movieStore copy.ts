import axiosOphim from "@/api/OPhim/axiosOphim";
import ophimApi from "@/api/OPhim/ophimApi";
import { create } from "zustand";

// Define interfaces for the state and actions
interface Movie {
  _id: string;
  name: string;
  content: string;
  poster_url?: string; // Assuming poster might be an optional property
  thumb_url?: string; // Assuming poster might be an optional property
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
              origin_name: movie.origin_name,
              poster_url: movie.poster_url,
              thumb_url: movie.thumb_url,
              content: contentResponse.data.movie.content, // Assuming 'content' is the property you need
            };
          } catch (error) {
            console.error("Failed to fetch content for:", movie.name, error);
            return {
              name: movie.origin_name,
              content: "Failed to load content",
            }; // Handle errors individually
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
