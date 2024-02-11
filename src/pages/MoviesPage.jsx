import { useState, useEffect } from "react";
import { Search } from "../components/Search/Search";
import { SearchResults } from "../components/SearchResults/SearchResults";
import { getSearchResults } from "../apiService/api";
import { Toaster } from "react-hot-toast";
import { Loader } from "../components/Loader/Loader";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onHandleSubmit = (value) => {
    setQuery(value);
    setResults([]);
    setError(false);
  };

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);

    const searchMovies = async () => {
      try {
        const fetchedResults = await getSearchResults(query);
        setResults(fetchedResults.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    searchMovies();
  }, [query]);

  return (
    <div>
      {isLoading && <Loader />}
      <Search onSubmit={onHandleSubmit} />
      <Toaster />
      <SearchResults results={results} error={error} />
    </div>
  );
}
