import React from "react";

function SearchMovies() {
  const searchMovies = async (event) => {
    event.preventDefault();

    const query = "Jurassic Park";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=4647f68b6d69445a8eba382f0b515d37&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Movie name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e Jurassic Park"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchMovies;
