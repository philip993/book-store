import React from "react";

const CategoryItem = ({ category, info }) => (
  <div className="category-item">
    <h1 className="category-title">{category}</h1>
    <span>{info}</span>
  </div>
);

export default CategoryItem;
