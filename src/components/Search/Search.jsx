// import css from "./Search.module.css";
import toast from "react-hot-toast";
import { useState } from "react";

export const Search = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Please, enter your request");
      return;
    }
    onSubmit(query);
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
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};
