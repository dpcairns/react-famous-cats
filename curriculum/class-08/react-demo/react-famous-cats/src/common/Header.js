import React, { Component } from "react";

class Header extends Component {
  render() {
    const title = this.props.title || "Famous Cats";

    return (
      <header>
        <img
          className="logo"
          src="assets/alchemy-logo.png"
          alt="Alchemy Code Lab Logo"
        />
        <h1>{title}</h1>
        <nav>
          <a href="./">Home</a>
          <a href="./cat-list.html">Cats</a>
          <a href="./cat-form.html">Add a Cat</a>
        </nav>
      </header>
    );
  }
}

export default Header;
