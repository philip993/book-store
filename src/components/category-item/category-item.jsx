import React from "react";
import { withRouter } from "react-router-dom";

import "./category-item.scss";

const CategoryItem = book => (
  <div className="category-item">
    <h2 className="c-title">{book.category.toUpperCase()}</h2>
    <span className="c-info">{book.info.toLowerCase()}</span>
    <button
      className="c-button"
      onClick={() => book.history.push(book.urlPath)}
    >
      <p>Go to {book.category.toUpperCase()} category.</p>
    </button>
  </div>
);

export default withRouter(CategoryItem);
