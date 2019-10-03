import React from "react";
import TrendingItems from "../../components/trending/trending-item";
import CategoryItems from "../../components/category-items/category-items";
import Category from "../../components/category/category";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <TrendingItems />
        <CategoryItems />
        <Category />
      </div>
    );
  }
}

export default Homepage;
