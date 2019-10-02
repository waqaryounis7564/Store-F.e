import React, { Component } from "react";
import { getMovies } from "../fakeMovieService";
import { FaHeart } from "react-icons/fa";

class Table extends Component {
  state = { movies: getMovies() };
  moviesLength() {
    const { length } = this.state.movies;
    return length === 0
      ? "There are no movies in the data-base"
      : "There are " + length + " movies in data-base";
  }
  badgeColor() {
    const { length } = this.state.movies;
    return length === 0 ? "badge badge-warning" : "badge badge-info";
  }
  handleDelete = movie => {
    let { movies } = this.state;
    movies = movies.filter(movi => movi._id !== movie._id);
    this.setState({ movies });
  };
  render() {
    const { movies } = this.state;

    return (
      <div>
        <span className={this.badgeColor()}>{this.moviesLength()}</span>
        <br></br>
        <table className="table">
          <thead>
            <tr>
              <th>title</th>
              <th>genre</th>
              <th>dailyRentalRate</th>
              <th>numberInStocks</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>{movie.numberInStock}</td>
                <td>
                  <FaHeart></FaHeart>
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger button-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
