import { useEffect, useState } from "react";
import { getReviews } from "../../apiService/api";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      {isLoading && <Loader />}
      {error ? (
        <p>Error fetching data</p>
      ) : (
        <div>
          {reviews && reviews.length > 0 ? (
            <ul>
              {reviews &&
                reviews.map(({ id, author, content }) => (
                  <li key={id}>
                    <p>{author}</p>
                    <p>{content}</p>
                  </li>
                ))}
            </ul>
          ) : (
            <p>No reviews yet</p>
          )}
        </div>
      )}
    </div>
  );
}

// {
//   "id": 550,
//   "page": 1,
//   "results": [
//     {
//       "author": "Goddard",
//       "author_details": {
//         "name": "",
//         "username": "Goddard",
//         "avatar_path": "/https://secure.gravatar.com/avatar/f248ec34f953bc62cafcbdd81fddd6b6.jpg",
//         "rating": null
//       },
//       "content": "Pretty awesome movie.  It shows what one crazy person can convince other crazy people to do.  Everyone needs something to believe in.  I recommend Jesus Christ, but they want Tyler Durden.",
//       "created_at": "2018-06-09T17:51:53.359Z",
//       "id": "5b1c13b9c3a36848f2026384",
//       "updated_at": "2021-06-23T15:58:09.421Z",
//       "url": "https://www.themoviedb.org/review/5b1c13b9c3a36848f2026384"
//     },
