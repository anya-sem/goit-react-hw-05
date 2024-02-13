import { NavLink } from "react-router-dom";

export default function MoviesList({ error, movies, location }) {
  return (
    <div>
      {error ? (
        <p>Error fetching data</p>
      ) : (
        <ul>
          {movies.length > 0 &&
            movies.map(({ id, title, poster_path, vote_average }) => (
              <li key={id}>
                <NavLink to={`/movies/${id}`} state={{ from: location }}>
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
  );
}
