import React from "react";
import CategoryItem from "../category-item/category-item";
import CATEGORY_DATA from "../../assets/CATEGORY_DATA";

class Category extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: CATEGORY_DATA
    };
  }

  render() {
    return (
      <div>
        {this.state.categories.map(({ id, ...otherProps }) => (
          <CategoryItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Category;
