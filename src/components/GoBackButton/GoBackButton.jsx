import { Link } from "react-router-dom";

export default function GoBackButton({ backLink, location }) {
  return (
    <div>
      <Link to={backLink} state={location}>
        <button>Go back</button>
      </Link>
    </div>
  );
}
