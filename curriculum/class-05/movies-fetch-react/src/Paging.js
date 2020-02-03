import React, { Component } from "react";
import "./Paging.css";

export default class Paging extends Component {
  constructor() {
    super();
    this.state = { page: 1 };
  }

  componentDidMount() {
    this.updateControls();

    window.addEventListener("hashchange", () => {
      this.updateControls();
    });
  }

  updatePage(increment) {
    const { page } = this.state;
    const queryString = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(queryString);
    searchParams.set("page", page + increment);

    window.location.hash = searchParams.toString();
  }

  updateControls() {
    const { page } = this.state;
    const queryString = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(queryString);

    // hmm, this code looks like same code in renderHTML...
    let pageToUse = page;

    const parsedPage = parseInt(searchParams.get("page"), 10);
    if (isNaN(parsedPage)) {
      pageToUse = 1;
    } else {
      pageToUse = parsedPage;
    }

    this.setState({ page: pageToUse });
  }

  render() {
    const { page } = this.state;

    const perPage = 10; // this API only does 10 per
    const { totalResults } = this.props;
    const queryString = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(queryString);

    const parsedPage = parseInt(searchParams.get("page"));

    let pageToUse;
    if (isNaN(parsedPage)) {
      pageToUse = 1;
    } else {
      pageToUse = parsedPage;
    }

    if (!totalResults) {
      return <p className="paging">No results, try another search</p>;
    }

    const lastPage = Math.ceil(totalResults / perPage);

    return (
      <p className="paging">
        <button
          className="prev"
          onClick={() => this.updatePage(-1)}
          disabled={pageToUse === 1 ? "true" : ""}
          type="button"
        >
          ◀
        </button>
        <span>
          Page
          {pageToUse} of
          {lastPage}
        </span>
        <button
          className="next"
          disabled={pageToUse === lastPage ? "true" : ""}
          onClick={() => this.updatePage(1)}
          type="button"
        >
          ▶
        </button>
      </p>
    );
  }
}
