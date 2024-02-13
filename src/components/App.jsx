import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import NotFound from "../pages/NotFound";
import { Navbar } from "./Navbar/Navbar";
import { MovieCast } from "./MovieCast/MovieCast";
import { MovieReviews } from "./MovieReviews/MovieReviews";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />}></Route>
          <Route path="reviews" element={<MovieReviews />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
