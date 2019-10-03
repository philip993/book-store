import React from "react";
import { Link } from "react-router-dom";

import "./category-items.scss";

class CategoryItems extends React.Component {
  render() {
    return (
      <div className="category">
        <h3 className="category-title">Browse by Category:</h3>
        <div className="category-items">
          <Link to="/category/action" className="c-link">
            Action
          </Link>
          <Link to="/category/romance" className="c-link">
            Romace
          </Link>
          <Link to="/category/thriller" className="c-link">
            Thriller
          </Link>
          <Link to="/category/comedy" className="c-link">
            Comedy
          </Link>
          <Link to="/category/mistery" className="c-link">
            Mistery
          </Link>
          <Link to="category/history" className="c-link">
            History
          </Link>
        </div>
      </div>
    );
  }
}

export default CategoryItems;
