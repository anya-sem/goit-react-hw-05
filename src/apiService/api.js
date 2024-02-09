import axios from "axios";

const url =
  "<https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1>";

const options = {
  headers: {
    Authorization: "Bearer 1774c021c946cdded029eb48e2c57788",
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
