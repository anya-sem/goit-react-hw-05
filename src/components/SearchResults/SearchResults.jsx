import { NavLink } from "react-router-dom";

export const SearchResults = ({ results, error, location }) => {
  return (
    <div>
      {error ? (
        <p>Error fetching data</p>
      ) : (
        <div>
          {!results ? (
            <p>No results found</p>
          ) : (
            <ul>
              {results.map(({ id, title, poster_path, vote_average }) => (
                <li key={id}>
                  <NavLink to={`/movies/${id}`} state={location}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      alt={title}
                    />
                    <p>{title}</p>
                    <p>Rate: {vote_average}</p>
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
