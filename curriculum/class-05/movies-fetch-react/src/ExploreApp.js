import React, { Component } from "react";
import Header from "./Header.js";
import SearchOptions from "./SearchOptions.js";
import Paging from "./Paging.js";
import MovieList from "./MovieList.js";
import { getMovies } from "./services/movie-api.js";
import "./ExploreApp.css";

export default class HomeApp extends Component {
  state = { movies: [] };

  async loadMovies() {
    console.log("hmmm");
    const response = await getMovies();
    const movies = response.Search;
    const totalResults = response.totalResults;
    console.log("||", movies);
    this.setState({ movies, totalResults });
  }

  async componentDidMount() {
    await this.loadMovies();

    window.addEventListener("hashchange", async () => {
      console.log("change");
      await this.loadMovies();
    });
  }

  render() {
    const { movies, totalResults } = this.state;

    console.log(movies);
    return (
      <div>
        <Header headerText="Welcome to Alchemy Movie Database" />
        <main>
          <section class="options-section">
            <SearchOptions />
          </section>

          <section class="list-section">
            <MovieList movies={movies} />
            <Paging totalResults={totalResults} />
          </section>
        </main>
      </div>
    );
  }
}
