import React, { Component } from "react";
import paginate from "../util/pagination";
import sorted from "../util/sort";

import Like from "./like";

class Table extends Component {
  render() {
    const { movies: allMovies, pageSize, currentPage, genre } = this.props;
    let sortedMovies = sorted(allMovies, genre);
    let movies = paginate(sortedMovies, pageSize, currentPage);
    console.log(sortedMovies);
    return (
      <div>
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
                  <Like movie={movie._id}></Like>
                </td>
                <td>
                  <button
                    onClick={() => this.props.handleDelete(movie)}
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
