import React, { Component } from "react";

import Like from "./like";

class Table extends Component {
  render() {
    const { movies } = this.props;

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
                  <Like></Like>
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
