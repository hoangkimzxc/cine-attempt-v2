import Login from "@components/pages/login";
import Register from "@components/pages/register";
import Movie from "@components/pages/movie";
import { Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/movie" element={<Movie />} />
    </Routes>
  );
}
