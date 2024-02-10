import { NavLink } from "react-router-dom";

export const Trending = ({ error, trending }) => {
  return (
    <div>
      <h1>Trending today</h1>
      {error ? (
        <p>Error fetching data</p>
      ) : (
        <ul>
          {trending.length > 0 &&
            trending.map(({ id, title, poster_path, vote_average }) => (
              <li key={id}>
                <NavLink to={`/movie/${id}`}>
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
};
