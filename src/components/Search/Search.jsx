// import css from "./Search.module.css";
import toast from "react-hot-toast";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Search = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") ?? "";

  const handleChange = (newQuery) => {
    setQuery(newQuery);
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Please, enter your request");
      return;
    }
    onSubmit(query);
    setSearchParams({ query: query });
    setQuery("");
  };

  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            name="query"
            value={query}
            onChange={(evt) => handleChange(evt.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};
