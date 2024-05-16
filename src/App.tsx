import Login from "@components/pages/login";
import Register from "@components/pages/register";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "@components/template/MainLayout";
import Movie from "@components/molecules/movie";
import MovieDetail from "@components/molecules/movie-detail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<MainLayout />}>
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:movie_id" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}
