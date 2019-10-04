import React from "react";
import { withRouter } from "react-router-dom";
import CategoryItem from "../category-item/category-item";
import CATEGORY_DATA from "../../assets/CATEGORY_DATA";

import "./category.scss";

class Category extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: CATEGORY_DATA
    };
  }

  render() {
    return (
      <div className="category-table">
        {this.state.categories.map(({ id, ...otherProps }) => (
          <CategoryItem key={id} {...otherProps} className="c-t-items" />
        ))}
      </div>
    );
  }
}

export default withRouter(Category);
