import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import { Navbar } from "./Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}></Route>
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
