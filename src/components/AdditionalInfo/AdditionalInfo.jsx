import { Link } from "react-router-dom";

export const AdditionalInfo = () => {
  return (
    <div>
      <h2>Additional Information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
};
