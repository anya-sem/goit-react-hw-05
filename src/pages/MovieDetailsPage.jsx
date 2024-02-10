import { MovieCard } from "../components/MovieCard/MovieCard";
import { Loader } from "../components/Loader/Loader";
import React, { useEffect, useState } from "react";
import { getMovieById, getReviews } from "../apiService/api";
import { useParams, Outlet } from "react-router-dom";
import { AdditionalInfo } from "../components/AdditionalInfo/AdditionalInfo";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const fetchedMovie = await getMovieById(movieId);
        setMovie(fetchedMovie);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
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
      <Outlet error={error} reviews={reviews} />
    </div>
  );
}
