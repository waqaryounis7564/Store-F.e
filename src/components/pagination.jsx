import React from "react";
import _ from "lodash";

const Pagination = props => {
  let { movies, pageSize } = props;
  let size = movies / pageSize;
  let pages = _.range(1, size + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(pg => (
          <li className="page-item" key={pg}>
            <a className="page-link" href="#">
              {pg}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
