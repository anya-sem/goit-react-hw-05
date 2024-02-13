import { useEffect, useState } from "react";
import { getCast } from "../../apiService/api";
import { Loader } from "../Loader/Loader";
import { useParams } from "react-router-dom";

export const MovieCast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const fetchedCast = await getCast(movieId);
        setCast(fetchedCast.cast);
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
      {isLoading && <Loader />}
      {error ? (
        <p>Error fetching data</p>
      ) : (
        <div>
          {cast && cast.length > 0 ? (
            <ul>
              {cast.map(({ id, name, profile_path }) => (
                <li key={id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                  />
                  <p>{name}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No data yet</p>
          )}
        </div>
      )}
    </div>
  );
};

// "id": 550,
// "cast": [
//   {
//     "adult": false,
//     "gender": 2,
//     "id": 819,
//     "known_for_department": "Acting",
//     "name": "Edward Norton",
//     "original_name": "Edward Norton",
//     "popularity": 26.99,
//     "profile_path": "/8nytsqL59SFJTVYVrN72k6qkGgJ.jpg",
//     "cast_id": 4,
//     "character": "The Narrator",
//     "credit_id": "52fe4250c3a36847f80149f3",
//     "order": 0
//   },
