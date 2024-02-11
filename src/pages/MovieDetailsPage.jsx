import { MovieCard } from "../components/MovieCard/MovieCard";
import { Loader } from "../components/Loader/Loader";
import { useEffect, useState } from "react";
import { getMovieById, getReviews } from "../apiService/api";
import { useParams, Outlet } from "react-router-dom";
import { AdditionalInfo } from "../components/AdditionalInfo/AdditionalInfo";
// import { Reviews } from "../components/Reviews/Reviews";
// import { Cast } from "../components/Cast/Cast";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const fetchedMovie = await getMovieById(movieId);
        setMovie(fetchedMovie);

        const fetchedReviews = await getReviews(movieId);
        setReviews(fetchedReviews.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      <MovieCard error={error} movie={movie} />
      {isLoading && <Loader />}
      <AdditionalInfo />
      <Outlet />
    </div>
  );
}
