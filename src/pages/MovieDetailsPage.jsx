import { MovieCard } from "../components/MovieCard/MovieCard";
import { Loader } from "../components/Loader/Loader";
import { useEffect, useState } from "react";
import { getMovieById, getReviews } from "../apiService/api";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { AdditionalInfo } from "../components/AdditionalInfo/AdditionalInfo";
import GoBackButton from "../components/GoBackButton/GoBackButton";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

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
      <GoBackButton location={location} backLinkHref={backLinkHref} />
      <MovieCard error={error} movie={movie} />
      {isLoading && <Loader />}
      <AdditionalInfo />
      <Outlet />
    </div>
  );
}
