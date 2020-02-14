import React, { Component } from "react";
import "./MovieItem.css";

class MovieItem extends Component {
  render() {
    const movie = this.props.movie;
    let poster = movie.Poster;
    if (poster === "N/A") {
      poster = "assets/placeholder.png";
    }

    return (
      <li className="movie-item">
        <h2>
          <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">
            {movie.Title}
          </a>
        </h2>
        <img src={poster} alt={movie.Title} />
        <time>{movie.Year}</time>
      </li>
    );
  }
}

export default MovieItem;
