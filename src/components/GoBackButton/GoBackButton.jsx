import { Link } from "react-router-dom";

export default function GoBackButton({ backLinkHref, location }) {
  return (
    <div>
      <Link to={backLinkHref} state={location}>
        <button>Go back</button>
      </Link>
    </div>
  );
}
