import { NavLink } from "react-router-dom";

export default function MoviesList({ error, movies, location }) {
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
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
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : defaultImg
                    }
                    alt={title}
                    width={200}
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
