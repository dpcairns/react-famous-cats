import React, { Component } from "react";
import MovieItem from "./MovieItem";
import "./MovieList.css";

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    const movieListItems = movies.map(movie => <MovieItem movie={movie} />);

    return <ul className="movies">{movieListItems}</ul>;
  }
}
