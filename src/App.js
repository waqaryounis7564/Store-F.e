import React, { Component } from "react";
import { getMovies } from "./fakeMovieService";
import "./App.css";
import Table from "./components/table";
import Pagination from "./components/pagination";

import Navbar from "./components/navbar";

class App extends Component {
  state = { movies: getMovies(), pageSize: 3 };

  toggleLike(id) {
    this.setState({ active: !this.state.active });
  }

  handleDelete = movie => {
    let { movies } = this.state;
    movies = movies.filter(movi => movi._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          badgeColor={this.badgeColor}
          movies={this.state.movies}
        ></Navbar>

        <Table
          movies={this.state.movies}
          handleDelete={this.handleDelete}
        ></Table>

        <Pagination
          movies={this.state.movies.length}
          pageSize={this.state.pageSize}
        ></Pagination>
      </React.Fragment>
    );
  }
}

export default App;
