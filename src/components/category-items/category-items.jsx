import React from "react";
import { Link } from "react-router-dom";

import "./category-items.scss";

class CategoryItems extends React.Component {
  render() {
    return (
      <div className="category">
        <h3 className="category-title">Browse by Category:</h3>
        <div className="category-items">
          <Link to="/shop/action" className="c-link">
            Action
          </Link>
          <Link to="/shop/romance" className="c-link">
            Romace
          </Link>
          <Link to="/shop/thriller" className="c-link">
            Thriller
          </Link>
          <Link to="/shop/comedy" className="c-link">
            Comedy
          </Link>
          <Link to="/shop/mistery" className="c-link">
            Mistery
          </Link>
          <Link to="shop/history" className="c-link">
            History
          </Link>
        </div>
      </div>
    );
  }
}

export default CategoryItems;
