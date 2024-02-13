import { Trending } from "../components/Trending/Trending";
import { Loader } from "../components/Loader/Loader";
import React, { useEffect, useState } from "react";
import { getTrending } from "../apiService/api";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const fetchedTrending = await getTrending();
        setTrending(fetchedTrending.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Trending error={error} trending={trending} location={location} />
      {isLoading && <Loader />}
    </div>
  );
}
